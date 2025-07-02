import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App23 from "./App23.jsx";

// alt+ctrl+O : 불필요한 임포트제거
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App23 />
  </StrictMode>,
);
