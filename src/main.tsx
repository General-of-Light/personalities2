import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import App from "./App";

// Make sure to assert that 'rootElement' won't be null
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
