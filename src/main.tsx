import * as React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Root } from "./Root";
import "./styles.css";

const rootElement = document.getElementById("root")!;

if (!rootElement.hasChildNodes()) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
  );
} else {
  hydrateRoot(rootElement, <Root />);
}
