import { BriefcaseBusiness, ChartNoAxesCombined, Code2, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import SideNavigation from "../components/SideNavigation";
import SiteHeader from "../components/SiteHeader";
import { getExperiences } from "../data/experience";
import { useLanguage } from "../i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

const statIcons = [BriefcaseBusiness, GraduationCap, ChartNoAxesCombined];

function ExperienceBackground() {
  return (
    <div className="experience-background" aria-hidden="true">
      <span className="experience-watercolor-left" />
      <span className="experience-watercolor-bottom" />
      <span className="experience-circle" />
      <span className="experience-brush" />
      <svg className="experience-network" viewBox="0 0 1600 900" preserveAspectRatio="none">
        <path d="M760 84 L900 132 L1026 88 L1138 168 L1296 118" />
        <path d="M44 668 L180 596 L330 654 L470 590 L620 698" />
        <path d="M1190 108 L1376 174 L1530 120" />
        <line x1="900" y1="132" x2="902" y2="250" />
        <line x1="1138" y1="168" x2="1296" y2="118" />
        {[760, 900, 1026, 1138, 1296, 44, 180, 330, 470, 620, 1190, 1376, 1530].map((x, index) => (
          <circle key={`${x}-${index}`} cx={x} cy={[84, 132, 88, 168, 118, 668, 596, 654, 590, 698, 108, 174, 120][index]} r={index % 4 === 0 ? 10 : 5} />
        ))}
      </svg>
    </div>
  );
}

function TechLogo({ tech }) {
  const [failed, setFailed] = useState(false);

  if (!tech.logo || failed) {
    return <Code2 size={15} strokeWidth={2.4} aria-hidden="true" />;
  }

  return <img src={`https://cdn.simpleicons.org/${tech.logo}/${tech.color}`} alt="" loading="lazy" onError={() => setFailed(true)} />;
}

function ExperienceCard({ experience, index }) {
  return (
    <motion.article
      className="experience-item"
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: 0.16 + index * 0.08, ease }}
    >
      <div className="experience-date" aria-label={`${experience.period} ${experience.duration}`}>
        <strong>{experience.period}</strong>
        <span>{experience.duration}</span>
      </div>
      <span className="timeline-dot" aria-hidden="true" />
      <div className="experience-card">
        <div className="experience-logo-box">
          <img src={experience.logo} alt={`${experience.company} logo`} />
        </div>
        <div className="experience-content">
          <div className="experience-card-head">
            <div>
              <h2>{experience.company}</h2>
              <p>{experience.role}</p>
            </div>
            <span className="experience-location">
              <MapPin size={15} aria-hidden="true" />
              {experience.location}
            </span>
          </div>
          <p className="experience-summary">{experience.description}</p>
          <ul className="experience-missions">
            {experience.missions.map((mission) => (
              <li key={mission}>{mission}</li>
            ))}
          </ul>
          <div className="experience-tech-list" aria-label={`${experience.company} technologies`}>
            {experience.technologies.map((tech) => (
              <span className="experience-tech" key={`${experience.id}-${tech.name}`}>
                <TechLogo tech={tech} />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  const { language, t } = useLanguage();
  const experiences = getExperiences(language);

  return (
    <main className="experience-page" id="experience">
      <ExperienceBackground />
      <SiteHeader />

      <section className="experience-shell" aria-labelledby="experience-title">
        <aside className="experience-intro">
          <motion.p className="experience-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, ease }}>
            {t.experience.eyebrow}
          </motion.p>
          <motion.h1 id="experience-title" className="experience-title" initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.08, ease }}>
            <span>{t.experience.titleFirst}</span>
            {t.experience.titleSecond}
          </motion.h1>
          <motion.span className="experience-underline" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.45, delay: 0.24, ease }} />
          <motion.p className="experience-description" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2, ease }}>
            {t.experience.description}
          </motion.p>

          <motion.div className="experience-stats" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.28, ease }}>
            {t.experience.stats.map(({ value, label }, index) => {
              const Icon = statIcons[index];
              return (
              <div className="experience-stat" key={label}>
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

        <div className="experience-timeline" aria-label={t.experience.timeline}>
          {experiences.map((experience, index) => (
            <ExperienceCard experience={experience} index={index} key={experience.id} />
          ))}
        </div>
      </section>

      <SideNavigation activeSection="experience" />
    </main>
  );
}
