import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SideNavigation from "../components/SideNavigation";
import SiteHeader from "../components/SiteHeader";
import { getProjectCategories, getProjects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

function ProjectsBackground() {
  return (
    <div className="projects-background" aria-hidden="true">
      <span className="projects-watercolor-left" />
      <span className="projects-watercolor-bottom" />
      <span className="projects-circle" />
      <span className="projects-brush" />
      <svg className="projects-network" viewBox="0 0 1600 900" preserveAspectRatio="none">
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

export default function Projects() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cardsPerSlide, setCardsPerSlide] = useState(() => (window.innerWidth <= 680 ? 1 : 2));
  const projects = useMemo(() => getProjects(language), [language]);
  const projectCategories = useMemo(() => getProjectCategories(t), [t]);
  const visibleProjects = useMemo(
    () => (activeCategory === "all" ? projects : projects.filter((project) => project.filter === activeCategory)),
    [activeCategory, projects],
  );
  const totalSlides = Math.max(1, Math.ceil(visibleProjects.length / cardsPerSlide));
  const normalizedSlide = Math.min(slide, totalSlides - 1);
  const currentProjects = visibleProjects.slice(normalizedSlide * cardsPerSlide, normalizedSlide * cardsPerSlide + cardsPerSlide);

  const setFilter = (category) => {
    setActiveCategory(category);
    setSlide(0);
    setPaused(true);
  };

  const previousSlide = () => {
    setSlide((current) => (current - 1 + totalSlides) % totalSlides);
    setPaused(true);
  };
  const nextSlide = () => {
    setSlide((current) => (current + 1) % totalSlides);
    setPaused(true);
  };

  useEffect(() => {
    const updateCardsPerSlide = () => {
      setCardsPerSlide(window.innerWidth <= 680 ? 1 : 2);
      setSlide(0);
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduceMotion || totalSlides <= 1) return undefined;

    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % totalSlides);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused, totalSlides]);

  useEffect(() => {
    if (!paused) return undefined;
    const timer = window.setTimeout(() => setPaused(false), 6500);
    return () => window.clearTimeout(timer);
  }, [paused]);

  return (
    <main className="projects-page" id="projects">
      <ProjectsBackground />
      <SiteHeader />

      <section className="projects-shell" aria-labelledby="projects-title">
        <aside className="projects-intro">
          <motion.p className="projects-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, ease }}>
            {t.projects.eyebrow}
          </motion.p>
          <motion.h1 id="projects-title" className="projects-title" initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.08, ease }}>
            <span>{t.projects.titleFirst}</span>
            {t.projects.titleSecond}
          </motion.h1>
          <motion.span className="projects-underline" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.45, delay: 0.24, ease }} />
          <motion.p className="projects-description" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2, ease }}>
            {t.projects.description}
          </motion.p>
          <motion.div className="project-filters" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } } }}>
            {projectCategories.map((category) => (
              <motion.button
                type="button"
                key={category.id}
                className={`project-filter${activeCategory === category.id ? " active" : ""}`}
                onClick={() => setFilter(category.id)}
                aria-pressed={activeCategory === category.id}
                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </aside>

        <div className="projects-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <AnimatePresence mode="wait">
            <motion.div
              className="project-cards"
              key={`${activeCategory}-${normalizedSlide}`}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              {currentProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="project-carousel-controls" aria-label={t.projects.controls}>
            <button type="button" className="carousel-arrow" onClick={previousSlide} aria-label={t.projects.previous}>
              <ArrowLeft size={23} aria-hidden="true" />
            </button>
            <div className="carousel-dots">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  type="button"
                  className={`carousel-dot${index === normalizedSlide ? " active" : ""}`}
                  key={index}
                  onClick={() => {
                    setSlide(index);
                    setPaused(true);
                  }}
                  aria-label={`${t.projects.showSlide} ${index + 1}`}
                  aria-current={index === normalizedSlide ? "true" : undefined}
                />
              ))}
            </div>
            <button type="button" className="carousel-arrow" onClick={nextSlide} aria-label={t.projects.next}>
              <ArrowRight size={23} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <SideNavigation activeSection="projects" />
    </main>
  );
}
