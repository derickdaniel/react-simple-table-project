import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div style={{ fontFamily: "nunito, system-ui" }}>
      <App />
    </div>
  </StrictMode>
);
