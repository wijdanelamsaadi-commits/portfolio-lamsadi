import { Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  const nextLanguage = language === "fr" ? "en" : "fr";

  return (
    <motion.button
      className="language-toggle"
      type="button"
      aria-label={t.header.language}
      onClick={() => setLanguage(nextLanguage)}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.66, ease: "easeOut" }}
    >
      <Globe2 size={21} strokeWidth={2.5} aria-hidden="true" />
      <span>{language.toUpperCase()}</span>
    </motion.button>
  );
}
