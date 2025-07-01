import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App11 from "./App11.jsx";
// alt+ctrl+O : 불필요한 임포트제거
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App11 />
  </StrictMode>,
);
