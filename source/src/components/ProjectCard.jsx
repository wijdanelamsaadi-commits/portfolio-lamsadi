import { Code2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";

function TechLogo({ tech }) {
  const [failed, setFailed] = useState(false);

  if (!tech.logo || failed) {
    return <Code2 size={14} strokeWidth={2.4} aria-hidden="true" />;
  }

  return <img src={`https://cdn.simpleicons.org/${tech.logo}/${tech.color}`} alt="" loading="lazy" onError={() => setFailed(true)} />;
}

function cropStyle(crop) {
  const x = crop.left / (100 - crop.width) * 100;
  const y = crop.top / (100 - crop.height) * 100;

  return {
    backgroundImage: `url("${crop.image}")`,
    backgroundSize: `${100 / crop.width * 100}% ${100 / crop.height * 100}%`,
    backgroundPosition: `${x}% ${y}%`,
  };
}

function imageStyle(project) {
  if (project.crop) {
    return cropStyle({ ...project.crop, image: project.image });
  }

  return {
    backgroundImage: `url("${project.image}")`,
    backgroundSize: project.imageFit ?? "contain",
    backgroundPosition: "center",
  };
}

export default function ProjectCard({ project }) {
  const { t } = useLanguage();

  return (
    <motion.article className="project-card" layout whileHover={{ y: -4 }} transition={{ duration: 0.2, ease: "easeOut" }}>
      <div className="project-image" style={imageStyle(project)} role="img" aria-label={`${project.title} ${t.projects.screenshot}`} />
      <div className="project-body">
        <div className="project-title-row">
          <h2>{project.title}</h2>
          <span>{project.category}</span>
        </div>
        <p>{project.description}</p>
        <div className="project-tech-list" aria-label={`${project.title} ${t.projects.technologies}`}>
          {project.technologies.map((tech) => (
            <span className="project-tech" key={`${project.id}-${tech.name}`}>
              <TechLogo tech={tech} />
              {tech.name}
            </span>
          ))}
        </div>
        <div className="project-actions">
          {project.github && (
            <a className="project-button primary" href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={18} aria-hidden="true" />
              {t.projects.github}
            </a>
          )}
          {project.demo && (
            <a className="project-button secondary" href={project.demo} target="_blank" rel="noopener noreferrer">
              {project.demoKind === "linkedin" ? <FaLinkedinIn size={17} aria-hidden="true" /> : null}
              {project.demoKind === "linkedin" ? t.projects.linkedInProject : t.projects.liveDemo}
              {project.demoKind !== "linkedin" ? <ExternalLink size={16} aria-hidden="true" /> : null}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
