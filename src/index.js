import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  // Ce face StrictMode?
  <StrictMode>
    <App />
  </StrictMode>
);