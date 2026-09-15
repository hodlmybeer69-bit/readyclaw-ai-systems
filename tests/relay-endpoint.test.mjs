import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// De storing van 18-8 t/m 15-9-2026: islasdigital.xyz staat op domeinniveau 308
// naar islas-digital.com, en een CORS-preflight volgt geen redirect. Alles wat
// vanuit de browser nog naar die host postte, faalde met een network error —
// zonder één regel in de serverlogs. Deze test weert de host terug.

const bronnen = ['src/lib/form-relay.ts'];

for (const bron of bronnen) {
  test(`${bron} post niet naar een host die 308-redirect`, () => {
    const code = readFileSync(new URL(`../${bron}`, import.meta.url), 'utf8');
    assert.ok(
      !code.includes('islasdigital.xyz/api/form'),
      'islasdigital.xyz redirect — de preflight sneuvelt daar altijd op'
    );
    assert.match(code, /https:\/\/islas-digital\.com\/api\/form/);
  });
}
