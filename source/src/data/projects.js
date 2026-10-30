import aureliaCover from "../assets/projects/aurelia-cover.png";
import chatbotIaCover from "../assets/projects/chatbot-ia-cover.png";
import cineaiCover from "../assets/projects/cineai-cover.png";
import darAtlasCover from "../assets/projects/dar-atlas-cover.png";
import gestionBesoinsCover from "../assets/projects/gestion-besoins-cover.png";
import gestionEcoleCover from "../assets/projects/gestion-ecole-cover.png";
import gmaoOcpCover from "../assets/projects/gmao-ocp-cover.png";
import permiappCover from "../assets/projects/permiapp-cover.png";
import pneumoniaDetectionCover from "../assets/projects/pneumonia-detection-cover.png";
import smartAttendanceCover from "../assets/projects/smart-attendance-cover.png";
import talentsAssociateCover from "../assets/projects/talents-associate-cover.png";
import trustguardCover from "../assets/projects/trustguard-cover.png";
import vaccinationReminderCover from "../assets/projects/vaccination-reminder-cover.png";
import waqtAlKhayrCover from "../assets/projects/waqt-al-khayr-cover.png";

export const projectCategoryIds = ["all", "ai-data", "web", "mobile"];

const logoMap = {
  "ASP.NET": ["dotnet", "512BD4"],
  AI: ["openai", "412991"],
  API: null,
  Auth: null,
  Bootstrap: ["bootstrap", "7952B3"],
  "C#": ["dotnet", "512BD4"],
  CNN: null,
  Dart: ["dart", "0175C2"],
  Dashboard: null,
  FastAPI: ["fastapi", "009688"],
  Firebase: ["firebase", "FFCA28"],
  Flutter: ["flutter", "02569B"],
  JWT: null,
  LangChain: ["langchain", "1C3C3C"],
  Laravel: ["laravel", "FF2D20"],
  LLM: null,
  "Local DB": null,
  "Mobile UI": null,
  MySQL: ["mysql", "4479A1"],
  "Next.js": ["nextdotjs", "000000"],
  NLP: null,
  Notifications: null,
  OpenCV: ["opencv", "5C3EE8"],
  Pandas: ["pandas", "150458"],
  PHP: ["php", "777BB4"],
  Python: ["python", "3776AB"],
  QR: null,
  React: ["react", "61DAFB"],
  "REST API": null,
  "Responsive UI": null,
  "Scikit-learn": ["scikitlearn", "F7931E"],
  "Spring Boot": ["springboot", "6DB33F"],
  "SQL Server": null,
  TensorFlow: ["tensorflow", "FF6F00"],
  TypeScript: ["typescript", "3178C6"],
  Workflow: null,
};

function tech(name) {
  const logo = logoMap[name];
  return logo ? { name, logo: logo[0], color: logo[1] } : { name };
}

const projects = [
  {
    id: "talents-associate-platform",
    title: "Plateforme de gestion des talents – Talents Associate Group",
    category: { fr: "Full-Stack & Intelligence Artificielle", en: "Full-Stack & Artificial Intelligence" },
    filter: "web",
    description: {
      fr: "Plateforme intelligente de gestion des talents intégrant le parsing automatisé de CV par LLM, l’import LinkedIn via CSV, le dédoublonnage des profils et le matching candidats/offres.",
      en: "Intelligent talent management platform integrating automated CV parsing with LLM, LinkedIn CSV import, profile deduplication and candidate/job matching.",
    },
    technologies: ["Python", "FastAPI", "React", "TypeScript", "LLM", "JWT"].map(tech),
    image: talentsAssociateCover,
    imageFit: "cover",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7512259260253126657/",
    demoKind: "linkedin",
  },
  {
    id: "trustguard",
    title: "TrustGuard",
    category: { fr: "Détection de fraude IA", en: "AI Fraud Detection" },
    filter: "ai-data",
    description: {
      fr: "Système intelligent de détection de fraude qui analyse les patterns de transaction et signale les comportements suspects en temps réel.",
      en: "An intelligent fraud detection system that analyzes transaction patterns and flags suspicious behavior in real time.",
    },
    technologies: ["Python", "FastAPI", "Scikit-learn", "Pandas"].map(tech),
    image: trustguardCover,
    github: "https://github.com/wijdanelamsaadi-commits/FraudShield",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7463923857033265152/",
  },
  {
    id: "pneumonia-detection",
    title: "Pneumonia Detection",
    category: { fr: "Deep Learning", en: "Deep Learning" },
    filter: "ai-data",
    description: {
      fr: "Projet de classification d’images médicales pour détecter la pneumonie à partir de radiographies pulmonaires avec le deep learning.",
      en: "A medical image classification project that helps detect pneumonia from chest X-ray scans using deep learning.",
    },
    technologies: ["Python", "CNN", "OpenCV", "TensorFlow"].map(tech),
    image: pneumoniaDetectionCover,
    github: "https://github.com/ouma-bg/pneumonia-detection-fastapi",
    demo: "https://www.linkedin.com/posts/lamsadi-wijdane-a236bb257_deeplearning-computervision-healthcareai-activity-7435422925106802688-gfHU",
  },
  {
    id: "chatbot-ia",
    title: "Chatbot IA",
    category: { fr: "Assistant NLP", en: "NLP Assistant" },
    filter: "ai-data",
    description: {
      fr: "Prototype d’assistant conversationnel conçu pour répondre aux questions et guider les utilisateurs dans des workflows structurés.",
      en: "A conversational assistant prototype designed to answer questions and guide users through structured workflows.",
    },
    technologies: ["Python", "LangChain", "NLP", "API"].map(tech),
    image: chatbotIaCover,
    github: "https://github.com/ouma-bg/ensaj-chatbot-assistant-",
    demo: "https://www.linkedin.com/posts/lamsadi-wijdane-a236bb257_rag-llm-generativeai-activity-7435426124777672705--99L",
  },
  {
    id: "cineai",
    title: "CineAI",
    category: { fr: "Application cinéma", en: "Movie App" },
    filter: "mobile",
    description: {
      fr: "Expérience mobile de cinéma avec recommandations intelligentes, découverte de films et interactions soignées.",
      en: "A mobile cinema experience with intelligent recommendations, film discovery, and polished app interactions.",
    },
    technologies: ["Flutter", "Dart", "AI", "Firebase"].map(tech),
    image: cineaiCover,
    github: "https://github.com/wijdanelamsaadi-commits/MovieApp_CineAI",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7461118740823441408/",
  },
  {
    id: "smart-attendance",
    title: "Smart Attendance",
    category: { fr: "Gestion de présence", en: "Attendance App" },
    filter: "mobile",
    description: {
      fr: "Application mobile de gestion de présence conçue pour simplifier le suivi des étudiants et les rapports.",
      en: "A mobile attendance management system built to simplify student presence tracking and reporting.",
    },
    technologies: ["Flutter", "Firebase", "QR", "Auth"].map(tech),
    image: smartAttendanceCover,
    imageFit: "cover",
    github: "https://github.com/wijdanelamsaadi-commits/Smart-Attendance-ENSA-El-Jadida",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7521619534345248768/",
    demoKind: "linkedin",
  },
  {
    id: "permiapp",
    title: "PermiApp",
    category: { fr: "Permis de conduire", en: "Driving License App" },
    filter: "mobile",
    description: {
      fr: "Application d’apprentissage du permis avec cours, suivi de progression et interface mobile-first.",
      en: "A driving-license learning app with lesson screens, progress tracking, and a clean mobile-first interface.",
    },
    technologies: ["Flutter", "REST API", "Dart", "Mobile UI"].map(tech),
    image: permiappCover,
    imageFit: "cover",
    github: "https://github.com/wijdanelamsaadi-commits/permis",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7521614695217266688/",
    demoKind: "linkedin",
  },
  {
    id: "vaccination-reminder",
    title: "Vaccination Reminder",
    category: { fr: "Rappels santé", en: "Health Reminder" },
    filter: "mobile",
    description: {
      fr: "Application mobile de rappel santé pour suivre les dates de vaccination, doses à venir et alertes.",
      en: "A health reminder mobile app that helps users track vaccination dates, upcoming doses, and reminder alerts.",
    },
    technologies: ["Flutter", "Local DB", "Notifications", "Dart"].map(tech),
    image: vaccinationReminderCover,
    github: "https://github.com/ouma-bg/vaccination_reminder_app_version_modifi-",
    demo: "https://www.linkedin.com/posts/lamsadi-wijdane-a236bb257_flutter-dart-mobiledevelopment-activity-7435432606860644353-A5Js",
  },
  {
    id: "waqt-al-khayr",
    title: "Waqt Al Khayr",
    category: { fr: "Charité & dons", en: "Charity & Donation App" },
    filter: "mobile",
    description: {
      fr: "Concept d’application mobile solidaire pour connecter les utilisateurs à des opportunités de don utiles.",
      en: "A charity and donation mobile app concept focused on connecting users with helpful giving opportunities.",
    },
    technologies: ["Flutter", "Firebase", "Mobile UI", "Auth"].map(tech),
    image: waqtAlKhayrCover,
    github: "https://github.com/ouma-bg/WA9T_LKHIR",
    demo: "https://www.linkedin.com/posts/lamsadi-wijdane-a236bb257_reactnative-mobiledevelopment-techforgood-activity-7435453224075247616-xiaX",
  },
  {
    id: "gmao-ocp",
    title: "GMAO OCP",
    category: { fr: "Gestion de maintenance", en: "Maintenance Management" },
    filter: "web",
    description: {
      fr: "Plateforme de maintenance pour organiser équipements, interventions, planification et suivi opérationnel.",
      en: "A maintenance management platform for organizing equipment, interventions, planning, and operational follow-up.",
    },
    technologies: ["ASP.NET", "SQL Server", "C#", "Dashboard"].map(tech),
    image: gmaoOcpCover,
    demo: "https://www.linkedin.com/posts/lamsadi-wijdane-a236bb257_ocp-gmao-powerbi-activity-7435831272226107392-2BZP",
  },
  {
    id: "gestion-ecole",
    title: "Gestion d’école",
    category: { fr: "Gestion scolaire", en: "School Management" },
    filter: "web",
    description: {
      fr: "Application web de gestion scolaire pour étudiants, classes, administration et dossiers structurés.",
      en: "A school management web app for handling students, classes, administration tasks, and structured records.",
    },
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"].map(tech),
    image: gestionEcoleCover,
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7437607888350621697/",
  },
  {
    id: "gestion-besoins",
    title: "Gestion des Besoins",
    category: { fr: "Gestion des demandes", en: "Needs Management" },
    filter: "web",
    description: {
      fr: "Plateforme web pour organiser les besoins internes, demandes, validations et suivi entre utilisateurs.",
      en: "A web platform for organizing internal needs, requests, validation states, and follow-up between users.",
    },
    technologies: ["PHP", "Laravel", "MySQL", "Workflow"].map(tech),
    image: gestionBesoinsCover,
    imageFit: "cover",
    github: "https://github.com/wijdanelamsaadi-commits/gestion-besoins",
    demo: "https://www.linkedin.com/posts/lamsadi-wijdane-a236bb257_php-mysql-bootstrap-activity-7444039318286921728-QDFS",
  },
  {
    id: "dar-atlas",
    title: "Dar Atlas",
    category: { fr: "Plateforme immobilière", en: "Real Estate Platform" },
    filter: "web",
    description: {
      fr: "Plateforme web immobilière pour explorer des propriétés, consulter les détails et gérer les annonces.",
      en: "A real estate web platform for browsing properties, showcasing details, and managing listings cleanly.",
    },
    technologies: ["Laravel", "MySQL", "PHP", "Responsive UI"].map(tech),
    image: darAtlasCover,
    imageFit: "cover",
    github: "https://github.com/wijdanelamsaadi-commits/dar-atlas",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7521921410554843136/",
  },
  {
    id: "aurelia",
    title: "AURÉLIA",
    category: { fr: "E-commerce bijoux", en: "E-commerce Jewelry" },
    filter: "web",
    description: {
      fr: "Site e-commerce de bijoux de luxe avec UI élégante, vitrine produit, panier et système de commande.",
      en: "Luxury jewelry e-commerce website with elegant UI, product showcase, cart and order system.",
    },
    technologies: ["Next.js", "React", "Spring Boot", "MySQL"].map(tech),
    image: aureliaCover,
    github: "https://github.com/ouma-bg/aurelia-jewelry",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7460420227537993728/",
  },
];

export function getProjectCategories(t) {
  return projectCategoryIds.map((id) => ({ id, label: t.projects.categories[id] }));
}

export function getProjects(language) {
  return projects.map((project) => ({
    ...project,
    demoKind: project.demo ? "linkedin" : project.demoKind,
    category: project.category[language],
    description: project.description[language],
  }));
}
