import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const getStoredTheme = () => {
  if (typeof window === "undefined") return "light";
  try {
    return window.localStorage.getItem("theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
};

export default function ThemeToggle() {
  const { t } = useLanguage();
  const [theme, setTheme] = useState(getStoredTheme);
  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // Keep the selected theme for this session even if persistence is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <motion.button
      className="theme-toggle"
      type="button"
      aria-label={isDark ? t.header.themeLight : t.header.themeDark}
      onClick={toggleTheme}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.62, ease: "easeOut" }}
    >
      <Icon size={23} strokeWidth={2.5} aria-hidden="true" />
    </motion.button>
  );
}
