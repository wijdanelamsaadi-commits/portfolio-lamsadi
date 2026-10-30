import { ArrowRight, Target } from "lucide-react";
import { motion } from "framer-motion";
import SideNavigation from "../components/SideNavigation";
import SiteHeader from "../components/SiteHeader";
import ensaLogo from "../assets/about/ensa-logo.png";
import wijdaneAbout from "../assets/about/wijdane-about.png";
import { useLanguage } from "../i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

function AboutBackground() {
  return (
    <div className="about-background" aria-hidden="true">
      <span className="about-watercolor-left" />
      <span className="about-circle-main" />
      <span className="about-circle-soft" />
      <span className="about-dot about-dot-one" />
      <span className="about-dot about-dot-two" />
      <span className="about-dot-grid about-dot-grid-left" />
      <span className="about-dot-grid about-dot-grid-right" />
      <svg className="about-lines" viewBox="0 0 1600 900" preserveAspectRatio="none">
        <path d="M0 96 C128 34 172 18 226 -52" />
        <path d="M492 160 C548 118 540 232 588 204" />
        <path d="M1040 108 L1160 108" />
      </svg>
    </div>
  );
}

function EducationCard({ item }) {
  return (
    <article className="about-education-card">
      <img src={ensaLogo} alt="ENSA El Jadida logo" />
      <div>
        <p>{item.years}</p>
        <h2>{item.title}</h2>
        <span>{item.detail}</span>
      </div>
    </article>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="about-page" id="about">
      <AboutBackground />
      <SiteHeader />

      <section className="about-shell" aria-labelledby="about-title">
        <motion.aside className="about-portrait-panel" initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, ease }}>
          <div className="about-portrait-stage">
            <span className="about-photo-shape about-photo-shape-one" />
            <span className="about-photo-shape about-photo-shape-two" />
            <img className="about-photo" src={wijdaneAbout} alt="Wijdane Lamsadi" />
          </div>
          <div className="about-name-card">
            <h2>
              Lamsadi <span>Wijdane</span>
            </h2>
            <p>{t.about.tags}</p>
            <i aria-hidden="true" />
          </div>
        </motion.aside>

        <div className="about-content">
          <motion.p className="about-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, delay: 0.08, ease }}>
            {t.about.eyebrow}
          </motion.p>
          <motion.h1 id="about-title" className="about-title" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.12, ease }}>
            {t.about.titleFirst} <span>{t.about.titleSecond}</span>
          </motion.h1>
          <motion.div className="about-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22, ease }}>
            <p>{t.about.copy1}</p>
            <p>
              {t.about.copy2Prefix}
              <strong>{t.about.fullstack}</strong>, <strong>{t.about.ai}</strong> {t.about.and} <strong>{t.about.cloud}</strong>
              {t.about.copy2Suffix}
            </p>
          </motion.div>

          <motion.div className="about-education" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3, ease }}>
            {t.about.education.map((item) => (
              <EducationCard item={item} key={item.years} />
            ))}
          </motion.div>

          <motion.div className="about-challenge" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.38, ease }}>
            <span className="about-challenge-icon">
              <Target size={28} strokeWidth={2.4} aria-hidden="true" />
            </span>
            <div>
              <h2>{t.about.challengeTitle}</h2>
              <p>{t.about.challengeText}</p>
            </div>
            <a href="#contact" className="about-contact-button">
              {t.about.challengeButton}
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      <SideNavigation activeSection="about" />
    </main>
  );
}
