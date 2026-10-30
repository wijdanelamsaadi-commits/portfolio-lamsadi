import { motion } from "framer-motion";
import CircularProjectsCTA from "../components/CircularProjectsCTA";
import HeroBackground from "../components/HeroBackground";
import SideNavigation from "../components/SideNavigation";
import SiteHeader from "../components/SiteHeader";
import portrait from "../assets/wijdane-portrait.png";
import { useLanguage } from "../i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="home-page" id="home">
      <HeroBackground />
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease }}>
            {t.home.eyebrow}
          </motion.p>
          <h1 className="hero-name" id="hero-title">
            <motion.span className="first" initial={{ opacity: 0, x: -42 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.12, ease }}>
              Wijdane
            </motion.span>
            <motion.span className="last" initial={{ opacity: 0, x: -42 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.25, ease }}>
              Lamsadi
            </motion.span>
          </h1>
          <motion.p className="hero-title" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.62, delay: 0.4, ease }}>
            {t.home.title}
            <br />
            {t.home.titleSecond}
          </motion.p>
          <motion.p className="hero-description" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.62, delay: 0.54, ease }}>
            {t.home.description}
          </motion.p>
          <CircularProjectsCTA />
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 48, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
        >
          <motion.div className="portrait-stage" animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <motion.span className="shape shape-main" animate={{ y: [0, -10, 0], x: [0, 8, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
            <motion.span className="shape shape-secondary" animate={{ y: [0, 8, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
            <motion.span className="shape shape-orbit" animate={{ rotate: [-18, -13, -18] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} />
            <span className="paint-splash" />
            <img className="portrait" src={portrait} alt="Wijdane Lamsadi" />
          </motion.div>
        </motion.div>
      </section>

      <SideNavigation activeSection="home" />
    </main>
  );
}
