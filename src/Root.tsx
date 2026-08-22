import { App } from "./App";
import { UsApp } from "./us/UsApp";
import { isUsSite } from "./us/route";

/**
 * Top-level switch between the main ReadyClaw site and the US AI-receptionist
 * landing. The choice is made once at boot from host/path (see isUsSite), and
 * is identical in the prerender and the browser so hydration always matches.
 */
export function Root() {
  return isUsSite() ? <UsApp /> : <App />;
}
