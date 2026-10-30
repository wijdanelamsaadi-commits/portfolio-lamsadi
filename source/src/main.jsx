import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import "./styles/globals.css";
import App from "./App.jsx";

let storedTheme = "light";

try {
  storedTheme = window.localStorage.getItem("theme");
} catch {
  storedTheme = "light";
}

if (storedTheme === "dark") {
  document.documentElement.dataset.theme = "dark";
} else {
  document.documentElement.dataset.theme = "light";
}

try {
  document.documentElement.lang = window.localStorage.getItem("language") === "en" ? "en" : "fr";
} catch {
  document.documentElement.lang = "fr";
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
