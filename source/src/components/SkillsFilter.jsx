import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

export default function SkillsFilter({ activeCategory, onChange }) {
  return (
    <motion.div
      className="skills-filters"
      aria-label="Filter skills by category"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
      }}
    >
      {skillCategories.map((category) => (
        <motion.button
          className={`filter-pill${activeCategory === category.id ? " active" : ""}`}
          type="button"
          key={category.id}
          onClick={() => onChange(category.id)}
          aria-pressed={activeCategory === category.id}
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {category.label}
        </motion.button>
      ))}
    </motion.div>
  );
}
