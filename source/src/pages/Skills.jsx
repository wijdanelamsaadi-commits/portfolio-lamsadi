import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import SkillCard from "../components/SkillCard";
import SkillsFilter from "../components/SkillsFilter";
import SideNavigation from "../components/SideNavigation";
import SiteHeader from "../components/SiteHeader";
import { skills } from "../data/skills";

const ease = [0.22, 1, 0.36, 1];

function SkillsBackground() {
  return (
    <div className="skills-background" aria-hidden="true">
      <span className="skills-watercolor skills-watercolor-left" />
      <span className="skills-circle" />
      <span className="skills-brush" />
      <svg className="skills-network" viewBox="0 0 1600 900" preserveAspectRatio="none">
        <path d="M720 68 L868 128 L1016 84 L1148 165 L1315 112 L1540 205" />
        <path d="M36 735 L185 650 L322 705 L500 620 L666 692" />
        <path d="M890 284 L1030 395 L1196 306 L1370 415 L1512 342" />
        <line x1="868" y1="128" x2="890" y2="284" />
        <line x1="1030" y1="395" x2="1016" y2="84" />
        {[720, 868, 1016, 1148, 1315, 1540, 36, 185, 322, 500, 666, 890, 1030, 1196, 1370, 1512].map((x, index) => (
          <circle
            key={`${x}-${index}`}
            cx={x}
            cy={[68, 128, 84, 165, 112, 205, 735, 650, 705, 620, 692, 284, 395, 306, 415, 342][index]}
            r={index % 3 === 0 ? 9 : 5}
          />
        ))}
      </svg>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const visibleSkills = useMemo(
    () => (activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)),
    [activeCategory],
  );

  return (
    <main className="skills-page" id="skills">
      <SkillsBackground />
      <SiteHeader />

      <section className="skills-shell" aria-labelledby="skills-title">
        <div className="skills-intro">
          <motion.p className="skills-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, ease }}>
            SKILLS
          </motion.p>
          <motion.h1 id="skills-title" className="skills-title" initial={{ opacity: 0, x: -26, y: 12 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.65, delay: 0.08, ease }}>
            <span>My</span> Skills
          </motion.h1>
          <motion.p className="skills-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.18, ease }}>
            A combination of technical skills and tools that I continuously develop through academic projects, professional experiences and self-learning.
          </motion.p>
          <motion.span className="skills-underline" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.45, delay: 0.3, ease }} />
        </div>

        <SkillsFilter activeCategory={activeCategory} onChange={setActiveCategory} />

        <motion.div className="skills-grid" layout>
          <AnimatePresence mode="popLayout">
            {visibleSkills.map((skill) => (
              <SkillCard skill={skill} key={`${skill.category}-${skill.name}`} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <SideNavigation activeSection="skills" />
    </main>
  );
}
