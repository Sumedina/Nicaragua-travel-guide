import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;

if (redirect && redirect !== location.href) {
  window.history.replaceState(null, null, redirect);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);