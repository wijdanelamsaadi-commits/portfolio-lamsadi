/* oxlint-disable react/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      certifications: "Certifications",
      contact: "Contact",
    },
    header: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      themeDark: "Activer le mode sombre",
      themeLight: "Activer le mode clair",
      language: "Changer la langue vers l'anglais",
      cv: "Télécharger CV",
    },
    home: {
      eyebrow: "BONJOUR, JE SUIS",
      title: "Future ingénieure en Systèmes d’Information",
      titleSecond: "et de Communication",
      description: "Passionnée par la technologie, je construis des solutions qui combinent développement logiciel, data et intelligence artificielle pour créer un impact réel.",
      projectsCta: "MES PROJETS",
      projectsAria: "Voir mes projets",
    },
    about: {
      eyebrow: "À PROPOS DE MOI",
      titleFirst: "À propos",
      titleSecond: "de moi",
      copy1: "Future ingénieure en Systèmes d’Information et de Communication, je suis en dernière année à l’ENSA El Jadida, avec une spécialisation en ISIC.",
      copy2Prefix: "Passionnée par le ",
      fullstack: "développement full-stack",
      ai: "l’intelligence artificielle",
      cloud: "cloud",
      and: "et",
      copy2Suffix: ", j’aime construire des solutions concrètes, apprendre de nouvelles technologies et relever des défis techniques.",
      tags: "Développement • IA • Cloud",
      challengeTitle: "Mon prochain défi",
      challengeText: "Un stage PFE de 6 mois à partir de janvier 2027, pour contribuer à des projets utiles et approfondir mes compétences.",
      challengeButton: "Échangeons ensemble",
      education: [
        { years: "2024 — 2027", title: "Cycle d’ingénieur ISIC", detail: "ENSA El Jadida" },
        { years: "2022 — 2024", title: "Classes préparatoires intégrées", detail: "Mathématiques, physique et informatique" },
      ],
    },
    experience: {
      eyebrow: "EXPÉRIENCE",
      titleFirst: "Mon",
      titleSecond: "Expérience",
      description: "Un parcours d’apprentissage, de collaboration et de mise en pratique autour du full-stack, de l’IA et de la data.",
      timeline: "Timeline des expériences professionnelles",
      stats: [
        { value: "3", label: "Expériences professionnelles" },
        { value: "IA & Full-Stack", label: "Domaines principaux" },
        { value: "Continu", label: "Apprentissage & impact" },
      ],
    },
    projects: {
      eyebrow: "PROJETS",
      titleFirst: "Mes",
      titleSecond: "Projets",
      description: "Une sélection de projets académiques et personnels qui démontrent mes compétences en IA, développement web, mobile et data.",
      controls: "Contrôles du carousel de projets",
      previous: "Projets précédents",
      next: "Projets suivants",
      showSlide: "Afficher la page de projets",
      technologies: "technologies",
      screenshot: "capture du projet",
      github: "GitHub",
      liveDemo: "Live Demo",
      linkedInProject: "Voir sur LinkedIn",
      categories: {
        all: "Tous les projets",
        "ai-data": "IA & Data",
        web: "Développement Web",
        mobile: "Développement Mobile",
      },
    },
    certifications: {
      eyebrow: "CERTIFICATIONS",
      titleFirst: "Mes",
      titleSecond: "Certifications",
      description: "Des certifications qui démontrent mon engagement envers l’apprentissage continu et le développement de compétences techniques.",
      aria: "Certifications AWS Academy",
      view: "Voir le certificat",
      unavailable: "Lien non disponible",
      summary: [
        { value: "7", label: "Certifications AWS" },
        { value: "Cloud & IA", label: "Technologies clés" },
        { value: "Continu", label: "Compétences orientées impact" },
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      titleFirst: "Échangeons",
      titleSecond: "ensemble",
      description: "Je suis actuellement à la recherche d’un stage PFE de 6 mois à partir de janvier 2027. N’hésitez pas à me contacter pour toute opportunité, question ou simplement pour échanger !",
      infoAria: "Informations de contact",
      email: "Email",
      location: "Localisation",
      linkedin: "LinkedIn",
      github: "GitHub",
      formTitle: "Envoyez-moi un message",
      formSubtitle: "Je serai ravie de vous répondre dans les plus brefs délais.",
      name: "Nom complet",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "votre.email@exemple.com",
      subject: "Sujet",
      subjectPlaceholder: "Sélectionnez un sujet",
      subjects: ["Opportunité PFE", "Collaboration", "Projet", "Question", "Autre"],
      message: "Message",
      messagePlaceholder: "Votre message...",
      submit: "Envoyer le message",
      submitting: "Envoi en cours...",
      errors: {
        name: "Le nom complet est requis.",
        emailRequired: "L’email est requis.",
        emailInvalid: "Veuillez saisir une adresse email valide.",
        subject: "Veuillez choisir un sujet.",
        message: "Le message est requis.",
      },
      statusSuccess: "Votre message a bien été envoyé. Merci !",
      statusError: "L’envoi a échoué. Veuillez réessayer dans quelques instants.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      experience: "Experience",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
    },
    header: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      themeDark: "Enable dark mode",
      themeLight: "Enable light mode",
      language: "Switch language to French",
      cv: "Download CV",
    },
    home: {
      eyebrow: "HELLO, I'M",
      title: "Future Information and Communication",
      titleSecond: "Systems Engineer",
      description: "Passionate about technology, I build solutions that combine software development, data and artificial intelligence to create real impact.",
      projectsCta: "MY PROJECTS",
      projectsAria: "View my projects",
    },
    about: {
      eyebrow: "ABOUT ME",
      titleFirst: "About",
      titleSecond: "me",
      copy1: "Future Information and Communication Systems Engineer in my final year at ENSA El Jadida, specializing in ISIC.",
      copy2Prefix: "Passionate about ",
      fullstack: "full-stack development",
      ai: "artificial intelligence",
      cloud: "cloud",
      and: "and",
      copy2Suffix: ", I enjoy building concrete solutions, learning new technologies and solving technical challenges.",
      tags: "Development • AI • Cloud",
      challengeTitle: "My next challenge",
      challengeText: "A 6-month final-year internship starting in January 2027, to contribute to useful projects and deepen my skills.",
      challengeButton: "Let’s connect",
      education: [
        { years: "2024 — 2027", title: "ISIC Engineering Degree", detail: "ENSA El Jadida" },
        { years: "2022 — 2024", title: "Integrated preparatory classes", detail: "Mathematics, physics and computer science" },
      ],
    },
    experience: {
      eyebrow: "EXPERIENCE",
      titleFirst: "My",
      titleSecond: "Experience",
      description: "A journey of learning, collaboration and real-world delivery across full-stack development, AI and data.",
      timeline: "Professional experience timeline",
      stats: [
        { value: "3", label: "Professional experiences" },
        { value: "AI & Full-Stack", label: "Main domains" },
        { value: "Continuous", label: "Learning & impact" },
      ],
    },
    projects: {
      eyebrow: "PROJECTS",
      titleFirst: "My",
      titleSecond: "Projects",
      description: "A selection of academic and personal projects that demonstrate my skills in AI, web development, mobile and data.",
      controls: "Project carousel controls",
      previous: "Previous projects",
      next: "Next projects",
      showSlide: "Show project slide",
      technologies: "technologies",
      screenshot: "project screenshot",
      github: "GitHub",
      liveDemo: "Live Demo",
      linkedInProject: "View on LinkedIn",
      categories: {
        all: "All Projects",
        "ai-data": "AI & Data",
        web: "Web Development",
        mobile: "Mobile Development",
      },
    },
    certifications: {
      eyebrow: "CERTIFICATIONS",
      titleFirst: "My",
      titleSecond: "Certifications",
      description: "Certifications that demonstrate my commitment to continuous learning and technical skill development.",
      aria: "AWS Academy certifications",
      view: "View Credential",
      unavailable: "Credential unavailable",
      summary: [
        { value: "7", label: "AWS Certifications" },
        { value: "Cloud & AI", label: "Core technologies" },
        { value: "Continuous", label: "Building skills for real-world impact" },
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      titleFirst: "Let’s",
      titleSecond: "connect",
      description: "I am currently looking for a 6-month final-year internship starting in January 2027. Feel free to contact me for opportunities, questions or simply to connect.",
      infoAria: "Contact information",
      email: "Email",
      location: "Location",
      linkedin: "LinkedIn",
      github: "GitHub",
      formTitle: "Send me a message",
      formSubtitle: "I’ll be happy to reply as soon as possible.",
      name: "Full name",
      namePlaceholder: "Your name",
      emailPlaceholder: "your.email@example.com",
      subject: "Subject",
      subjectPlaceholder: "Select a subject",
      subjects: ["Final-year internship", "Collaboration", "Project", "Question", "Other"],
      message: "Message",
      messagePlaceholder: "Your message...",
      submit: "Send Message",
      submitting: "Sending...",
      errors: {
        name: "Full name is required.",
        emailRequired: "Email is required.",
        emailInvalid: "Please enter a valid email address.",
        subject: "Please choose a subject.",
        message: "Message is required.",
      },
      statusSuccess: "Your message was sent successfully. Thank you!",
      statusError: "The message could not be sent. Please try again in a moment.",
    },
  },
};

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === "undefined") return "fr";

  try {
    return window.localStorage.getItem("language") === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem("language", language);
    } catch {
      // The UI still updates even if persistence is unavailable.
    }
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t: translations[language] }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
