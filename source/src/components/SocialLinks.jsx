import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const links = [
  { id: "linkedin", href: "https://www.linkedin.com/in/lamsadi-wijdane-a236bb257", icon: FaLinkedinIn },
  { id: "github", href: "https://github.com/wijdanelamsaadi-commits", icon: FaGithub },
  { id: "email", href: "mailto:wijdanelamsaadi@gmail.com", icon: Mail },
];

export default function SocialLinks() {
  const { t } = useLanguage();

  return (
    <motion.nav
      className="social-links"
      aria-label="Social links"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
      }}
    >
      {links.map(({ id, href, icon: Icon }) => (
        <motion.a
          className="social-link"
          href={href}
          key={id}
          aria-label={t.header[id]}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          variants={{
            hidden: { opacity: 0, y: -8 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Icon size={22} aria-hidden="true" />
        </motion.a>
      ))}
    </motion.nav>
  );
}
