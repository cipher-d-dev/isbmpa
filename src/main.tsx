import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./css/globals.css"; // ← Import the new global design system FIRST
import "./index.css"; // keep any existing resets
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
