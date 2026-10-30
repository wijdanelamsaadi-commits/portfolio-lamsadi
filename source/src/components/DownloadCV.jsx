import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const cvPath = `${import.meta.env.BASE_URL}cv/wijdane-lamsadi-cv.pdf`;

export default function DownloadCV() {
  const { t } = useLanguage();

  return (
    <motion.a
      className="download-cv"
      href={cvPath}
      aria-label={t.header.cv}
      download
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.72, ease: "easeOut" }}
    >
      <span>{t.header.cv}</span>
      <Download size={18} strokeWidth={2.7} aria-hidden="true" />
    </motion.a>
  );
}
