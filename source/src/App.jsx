import { useEffect, useState } from "react";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/certifications.css";
import "./styles/experience.css";
import "./styles/home.css";
import "./styles/projects.css";
import "./styles/skills.css";
import "./styles/theme.css";

function getCurrentSection() {
  if (window.location.hash === "#contact") return "contact";
  if (window.location.hash === "#about") return "about";
  if (window.location.hash === "#certifications") return "certifications";
  if (window.location.hash === "#experience") return "experience";
  if (window.location.hash === "#skills") return "skills";
  if (window.location.hash === "#projects") return "projects";
  return "home";
}

function App() {
  const [section, setSection] = useState(getCurrentSection);

  useEffect(() => {
    const handleHashChange = () => {
      setSection(getCurrentSection());
      window.scrollTo({ top: 0, left: 0 });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (section === "contact") return <Contact />;
  if (section === "about") return <About />;
  if (section === "certifications") return <Certifications />;
  if (section === "experience") return <Experience />;
  if (section === "skills") return <Skills />;
  if (section === "projects") return <Projects />;
  return <Home />;
}

export default App;
