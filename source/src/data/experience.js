import ocpLogo from "../assets/experience/ocp-logo.png";
import talentsAssociateLogo from "../assets/experience/talents-associate-logo.png";
import yanecodeLogo from "../assets/experience/yanecode-logo.png";

const logoMap = {
  "Agile/Scrum": null,
  ChromaDB: null,
  FastAPI: ["fastapi", "009688"],
  Firebase: ["firebase", "FFCA28"],
  Git: ["git", "F05032"],
  JWT: null,
  LLM: null,
  "Machine Learning": null,
  MVC: null,
  OOP: null,
  POO: null,
  PostgreSQL: ["postgresql", "4169E1"],
  "Power BI": ["powerbi", "F2C811"],
  Python: ["python", "3776AB"],
  RAG: null,
  React: ["react", "61DAFB"],
  "Relational databases": null,
  SQL: null,
  TypeScript: ["typescript", "3178C6"],
  Vite: ["vite", "646CFF"],
  "Bases de données relationnelles": null,
};

function tech(name) {
  const logo = logoMap[name];
  return logo ? { name, logo: logo[0], color: logo[1] } : { name };
}

const experiences = [
  {
    id: "talents-associate",
    company: "Talents Associate Group",
    location: { fr: "Maroc", en: "Morocco" },
    logo: talentsAssociateLogo,
    period: { fr: "Juil. – Sept. 2026", en: "Jul – Sept 2026" },
    duration: { fr: "(3 mois)", en: "(3 months)" },
    role: { fr: "Stage Full-Stack & IA", en: "Full-Stack & AI Internship" },
    description: {
      fr: "Plateforme de gestion des talents intégrant parsing de CV, import LinkedIn, dédoublonnage et matching candidats/offres.",
      en: "Talent management platform integrating CV parsing, LinkedIn import, deduplication and candidate/job matching.",
    },
    missions: {
      fr: [
        "Développement et intégration avec FastAPI et React-TypeScript.",
        "Parsing de CV PDF/Word par LLM et import LinkedIn via CSV.",
        "Moteur de matching candidats/offres et sécurisation JWT/hashing.",
        "Déploiement production avec cPanel/Passenger, SMTP et Git.",
      ],
      en: [
        "Development and integration with FastAPI and React-TypeScript.",
        "PDF/Word CV parsing with LLM and LinkedIn CSV import.",
        "Candidate/job matching engine and JWT/hashing access security.",
        "Production deployment with cPanel/Passenger, SMTP and Git.",
      ],
    },
    technologies: ["Python", "FastAPI", "React", "TypeScript", "LLM", "JWT", "Git"].map(tech),
  },
  {
    id: "yanecode",
    company: "YaneCode Digital",
    location: { fr: "Safi, Maroc", en: "Safi, Morocco" },
    logo: yanecodeLogo,
    period: { fr: "Juil. – Sept. 2026", en: "Jul – Sept 2026" },
    duration: { fr: "(3 mois)", en: "(3 months)" },
    role: { fr: "Stage Full-Stack & IA", en: "Full-Stack & AI Internship" },
    description: {
      fr: "EduMentor AI, plateforme éducative adaptative multi-rôles avec IA, RAG et backend fiabilisé.",
      en: "EduMentor AI, a multi-role adaptive education platform with AI, RAG and a robust backend.",
    },
    missions: {
      fr: [
        "Plateforme avec React/Vite, FastAPI, PostgreSQL et Firebase.",
        "Conception et intégration de 3 modèles Machine Learning.",
        "Système de correction hybride atteignant 97 % de précision.",
        "Chatbot RAG avec ChromaDB et 332 tests backend.",
      ],
      en: [
        "Platform built with React/Vite, FastAPI, PostgreSQL and Firebase.",
        "Design and integration of 3 Machine Learning models.",
        "Hybrid grading system reaching 97% accuracy.",
        "RAG chatbot with ChromaDB and 332 backend tests.",
      ],
    },
    technologies: ["React", "Vite", "FastAPI", "Python", "PostgreSQL", "Firebase", "Machine Learning", "RAG", "ChromaDB"].map(tech),
  },
  {
    id: "ocp",
    company: "Groupe OCP – Jorf Lasfar",
    location: { fr: "Jorf Lasfar, Maroc", en: "Jorf Lasfar, Morocco" },
    logo: ocpLogo,
    period: { fr: "Juil. – Août 2025", en: "Jul – Aug 2025" },
    duration: { fr: "(2 mois)", en: "(2 months)" },
    role: { fr: "Stage Développement Logiciel & Data Engineering", en: "Software Development & Data Engineering Internship" },
    description: {
      fr: "Application GMAO et dashboards Power BI pour le suivi industriel, les KPIs et l’optimisation du reporting.",
      en: "CMMS application and Power BI dashboards for industrial monitoring, KPIs and reporting optimization.",
    },
    missions: {
      fr: [
        "Application GMAO utilisée par plus de 200 techniciens.",
        "Principes MVC/POO et 3 bases de données relationnelles.",
        "5 dashboards Power BI avec plus de 15 KPIs.",
        "Reporting réduit de 40 % et requêtes SQL optimisées de 30 %.",
      ],
      en: [
        "CMMS application used by more than 200 technicians.",
        "MVC/OOP principles and 3 relational databases.",
        "5 Power BI dashboards with more than 15 KPIs.",
        "40% reporting time reduction and SQL queries optimized by 30%.",
      ],
    },
    technologies: {
      fr: ["Power BI", "SQL", "Bases de données relationnelles", "MVC", "POO", "Agile/Scrum"].map(tech),
      en: ["Power BI", "SQL", "Relational databases", "MVC", "OOP", "Agile/Scrum"].map(tech),
    },
  },
];

export function getExperiences(language) {
  return experiences.map((experience) => ({
    ...experience,
    period: experience.period[language],
    duration: experience.duration[language],
    role: experience.role[language],
    location: experience.location[language],
    description: experience.description[language],
    missions: experience.missions[language],
    technologies: Array.isArray(experience.technologies) ? experience.technologies : experience.technologies[language],
  }));
}
