// Post-build prerender: snapshots the single-page app into static HTML so
// crawlers and social scrapers receive real body text instead of an empty SPA
// shell. The shipped JS still boots and hydrates on load, so interactivity is
// unaffected.
//
// Multi-locale: the app derives its language from the URL path (EN at "/",
// plus /es/, /nl/, /de/). We drive a headless browser to each locale path and
// write a separate prerendered file:
//   /          → dist/index.html      (English, default)
//   /es/       → dist/es/index.html
//   /nl/       → dist/nl/index.html
//   /de/       → dist/de/index.html
//
// Every locale is rendered from the SAME clean build shell (held in memory),
// so an already-written snapshot can never bleed into the next locale and
// cause a hydration mismatch.
//
// Best-effort: any failure (e.g. Chromium cannot launch) is logged and the
// process exits 0, so a prerender hiccup never breaks the production deploy —
// the site simply ships as the SPA shell.
//
// Browser: puppeteer-core + @sparticuz/chromium so a launchable Chromium (with
// bundled shared libraries) is available inside Vercel's minimal build
// container. Locally, set PUPPETEER_EXECUTABLE_PATH to a system Chromium.
import { createServer } from "http";
import { readFileSync, existsSync, writeFileSync, statSync, mkdirSync } from "fs";
import { resolve, join, dirname, extname } from "path";

const DIST = resolve("dist");
const PORT = 4179;

// Locales to prerender. `path` is the URL path; `out` is the file to write.
const TARGETS = [
  { locale: "en", path: "/", out: "index.html" },
  { locale: "es", path: "/es/", out: "es/index.html" },
  { locale: "nl", path: "/nl/", out: "nl/index.html" },
  { locale: "de", path: "/de/", out: "de/index.html" },
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
};

if (!existsSync(join(DIST, "index.html"))) {
  console.warn("[prerender] dist/index.html not found — skipping prerender.");
  process.exit(0);
}

// Hold the clean build shell in memory; every locale is rendered from this so
// previously-written snapshots never feed back into the next render.
const SHELL = readFileSync(join(DIST, "index.html"));

// Static server for dist/ with SPA fallback to the in-memory shell.
const server = createServer((req, res) => {
  try {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    const filePath = join(DIST, urlPath);
    if (filePath.startsWith(DIST) && existsSync(filePath) && statSync(filePath).isFile()) {
      res.writeHead(200, { "Content-Type": MIME[extname(filePath)] || "application/octet-stream" });
      res.end(readFileSync(filePath));
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(SHELL);
  } catch {
    res.writeHead(500);
    res.end("error");
  }
});

async function launchBrowser() {
  const puppeteer = (await import("puppeteer-core")).default;
  const localExec = process.env.PUPPETEER_EXECUTABLE_PATH;
  if (localExec) {
    return puppeteer.launch({
      executablePath: localExec,
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  }
  const chromium = (await import("@sparticuz/chromium")).default;
  return puppeteer.launch({
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
    args: chromium.args,
  });
}

async function renderTarget(browser, target) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`http://localhost:${PORT}${target.path}`, {
      waitUntil: "networkidle0",
      timeout: 45000,
    });
    await page.waitForFunction(
      () => {
        const root = document.getElementById("root");
        return root && root.innerText && root.innerText.trim().length > 200;
      },
      { timeout: 20000 },
    );

    const html = await page.evaluate(() => "<!doctype html>\n" + document.documentElement.outerHTML);
    const outPath = join(DIST, target.out);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html);

    const chars = (await page.evaluate(() => document.getElementById("root").innerText.length)) || 0;
    const lang = await page.evaluate(() => document.documentElement.lang);
    const bytes = Buffer.byteLength(html, "utf8");
    console.log(
      `[prerender] ✓ ${target.path}  →  dist/${target.out}  (lang=${lang}, ${chars} text chars, ${bytes} bytes)`,
    );
  } finally {
    await page.close();
  }
}

async function main() {
  await new Promise((r) => server.listen(PORT, r));

  const browser = await launchBrowser();
  try {
    for (const target of TARGETS) {
      await renderTarget(browser, target);
    }
  } finally {
    await browser.close();
  }
}

main()
  .catch((err) => {
    console.warn("[prerender] WARNING: prerender failed, shipping SPA shell instead.");
    console.warn("[prerender]", err?.message || err);
  })
  .finally(() => {
    server.close();
    process.exit(0);
  });
