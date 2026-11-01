import { Award, BriefcaseBusiness, Code2, House, LayoutGrid, Mail, User } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const navItems = [
  { label: "Home", href: "#home", icon: House, id: "home" },
  { label: "About Me", href: "#about", icon: User, id: "about" },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness, id: "experience" },
  { label: "Projects", href: "#projects", icon: LayoutGrid, id: "projects" },
  { label: "Skills", href: "#skills", icon: Code2, id: "skills" },
  { label: "Certifications", href: "#certifications", icon: Award, id: "certifications" },
  { label: "Contact", href: "#contact", icon: Mail, id: "contact" },
];

export default function SideNavigation({ activeSection = "home" }) {
  const { t } = useLanguage();

  return (
    <motion.nav
      className="side-navigation"
      aria-label="Primary navigation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
    >
      {navItems.map(({ label, href, icon: Icon, id }) => {
        const active = id === activeSection;
        const translatedLabel = t.nav[id] ?? label;

        return (
        <a className={`nav-item${active ? " active" : ""}`} href={href} key={label} aria-label={translatedLabel} aria-current={active ? "page" : undefined}>
          <Icon size={23} strokeWidth={2.7} aria-hidden="true" />
          <span className="nav-tooltip" role="tooltip">
            {translatedLabel}
          </span>
        </a>
        );
      })}
    </motion.nav>
  );
}
