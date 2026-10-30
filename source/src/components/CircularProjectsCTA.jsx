import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export default function CircularProjectsCTA() {
  const { t } = useLanguage();

  return (
    <motion.a
      className="projects-cta"
      href="#projects"
      aria-label={t.home.projectsAria}
      initial={{ opacity: 0, scale: 0.86 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.82, ease: "easeOut" }}
    >
      <svg viewBox="0 0 160 160" aria-hidden="true">
        <defs>
          <path id="projects-text-path" d="M80,80 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0" />
        </defs>
        <circle className="cta-ring" cx="80" cy="80" r="69" />
        <text>
          <textPath href="#projects-text-path" startOffset="10%">
            {t.home.projectsCta}
          </textPath>
        </text>
        <circle className="cta-dots" cx="36" cy="78" r="3.2" />
        <circle className="cta-dots" cx="48" cy="105" r="2.3" />
        <circle className="cta-dots" cx="65" cy="123" r="1.9" />
      </svg>
      <ArrowRight className="cta-arrow" strokeWidth={1.5} aria-hidden="true" />
    </motion.a>
  );
}
