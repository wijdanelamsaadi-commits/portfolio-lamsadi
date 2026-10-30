import { Award, CalendarDays, ChartNoAxesCombined, ExternalLink, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import SideNavigation from "../components/SideNavigation";
import SiteHeader from "../components/SiteHeader";
import { getCertifications } from "../data/certifications";
import { useLanguage } from "../i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

const summaryIcons = [Award, Layers3, ChartNoAxesCombined];

function CertificationsBackground() {
  return (
    <div className="certifications-background" aria-hidden="true">
      <span className="certifications-watercolor-left" />
      <span className="certifications-watercolor-bottom" />
      <span className="certifications-circle" />
      <span className="certifications-brush" />
      <svg className="certifications-network" viewBox="0 0 1600 900" preserveAspectRatio="none">
        <path d="M760 92 L896 142 L1015 100 L1120 175 L1265 128" />
        <path d="M28 656 L166 588 L298 650 L412 590 L520 724" />
        <path d="M1208 102 L1398 172 L1542 112" />
        <line x1="896" y1="142" x2="890" y2="270" />
        <line x1="1120" y1="175" x2="1265" y2="128" />
        {[760, 896, 1015, 1120, 1265, 28, 166, 298, 412, 520, 1208, 1398, 1542].map((x, index) => (
          <circle key={`${x}-${index}`} cx={x} cy={[92, 142, 100, 175, 128, 656, 588, 650, 590, 724, 102, 172, 112][index]} r={index % 4 === 0 ? 10 : 5} />
        ))}
      </svg>
    </div>
  );
}

function CertificationCard({ certification, index }) {
  const { t } = useLanguage();

  return (
    <motion.article
      className="certification-card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.48, delay: 0.16 + index * 0.04, ease }}
    >
      <div className="certification-card-main">
        <div className="certification-badge">
          <img src={certification.badge} alt={`${certification.title} badge`} />
        </div>
        <div className="certification-info">
          <h2>{certification.title}</h2>
          <p className="certification-provider">{certification.provider}</p>
          <p className="certification-description">{certification.description}</p>
          <div className="certification-meta">
            <span>
              <CalendarDays size={15} aria-hidden="true" />
              {certification.issued}
            </span>
            <span>{certification.hours}</span>
          </div>
        </div>
      </div>
      {certification.credential ? (
        <a className="certification-button" href={certification.credential} target="_blank" rel="noopener noreferrer">
          {t.certifications.view}
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      ) : (
        <span className="certification-button is-disabled">{t.certifications.unavailable}</span>
      )}
    </motion.article>
  );
}

export default function Certifications() {
  const { language, t } = useLanguage();
  const certifications = getCertifications(language);

  return (
    <main className="certifications-page" id="certifications">
      <CertificationsBackground />
      <SiteHeader />

      <section className="certifications-shell" aria-labelledby="certifications-title">
        <aside className="certifications-intro">
          <motion.p className="certifications-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, ease }}>
            {t.certifications.eyebrow}
          </motion.p>
          <motion.h1
            id="certifications-title"
            className="certifications-title"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
          >
            <span>{t.certifications.titleFirst}</span>
            {t.certifications.titleSecond}
          </motion.h1>
          <motion.span className="certifications-underline" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.45, delay: 0.24, ease }} />
          <motion.p className="certifications-description" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2, ease }}>
            {t.certifications.description}
          </motion.p>

          <motion.div className="certifications-summary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.28, ease }}>
            {t.certifications.summary.map(({ value, label }, index) => {
              const Icon = summaryIcons[index];
              return (
              <div className="certifications-summary-item" key={label}>
                <span>
                  <Icon size={25} strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <strong>{value}</strong>
                  <p>{label}</p>
                </div>
              </div>
              );
            })}
          </motion.div>
        </aside>

        <div className="certifications-grid" aria-label={t.certifications.aria}>
          {certifications.map((certification, index) => (
            <CertificationCard certification={certification} index={index} key={certification.id} />
          ))}
        </div>
      </section>

      <SideNavigation activeSection="certifications" />
    </main>
  );
}
