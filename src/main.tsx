import * as React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.css";

const rootElement = document.getElementById("root")!;

if (!rootElement.hasChildNodes()) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  hydrateRoot(rootElement, <App />);
}
