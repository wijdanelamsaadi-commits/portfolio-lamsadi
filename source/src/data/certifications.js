import cloudArchitectingBadge from "../assets/certifications/cloud-architecting-badge.png";
import cloudDevelopingBadge from "../assets/certifications/cloud-developing-badge.png";
import cloudFoundationsBadge from "../assets/certifications/cloud-foundations-badge.png";
import engineeringOperationsBadge from "../assets/certifications/engineering-operations-badge.png";
import generativeAiFoundationsBadge from "../assets/certifications/generative-ai-foundations-badge.png";
import machineLearningFoundationsBadge from "../assets/certifications/machine-learning-foundations-badge.png";
import nlpBadge from "../assets/certifications/nlp-badge.png";

export const certifications = [
  {
    id: "cloud-foundations",
    title: "AWS Academy Cloud Foundations",
    provider: "AWS Academy",
    hours: "20 hours",
    issued: "07/14/2026",
    badge: cloudFoundationsBadge,
    description: {
      fr: "Connaissances fondamentales des concepts cloud, services AWS, sécurité et économie du cloud.",
      en: "Foundational knowledge of cloud concepts, AWS services, security, and cloud economics.",
    },
    credential: "https://www.credly.com/go/hAzJcf9N",
  },
  {
    id: "cloud-architecting",
    title: "AWS Academy Cloud Architecting",
    provider: "AWS Academy",
    hours: "60 hours",
    issued: "09/29/2026",
    badge: cloudArchitectingBadge,
    description: {
      fr: "Conception d’architectures cloud sécurisées, scalables et économiques avec les services AWS.",
      en: "Design and build secure, scalable, and cost-effective cloud architectures using AWS services.",
    },
    credential: "https://www.credly.com/go/uHz97y79",
  },
  {
    id: "cloud-developing",
    title: "AWS Academy Cloud Developing",
    provider: "AWS Academy",
    hours: "40 hours",
    issued: "09/30/2026",
    badge: cloudDevelopingBadge,
    description: {
      fr: "Développement et déploiement d’applications cloud avec les services AWS.",
      en: "Develop and deploy cloud-based applications using AWS services.",
    },
    credential: "https://www.credly.com/go/t8zLJJ8K",
  },
  {
    id: "machine-learning-foundations",
    title: "AWS Academy Machine Learning Foundations",
    provider: "AWS Academy",
    hours: "20 hours",
    issued: "07/29/2026",
    badge: machineLearningFoundationsBadge,
    description: {
      fr: "Fondamentaux du machine learning, concepts clés et applications concrètes.",
      en: "Fundamentals of machine learning, key concepts and real-world applications.",
    },
  },
  {
    id: "generative-ai-foundations",
    title: "AWS Academy Generative AI Foundations",
    provider: "AWS Academy",
    hours: "12 hours",
    issued: "Apr 12, 2026",
    badge: generativeAiFoundationsBadge,
    description: {
      fr: "Introduction à l’IA générative, aux modèles de fondation et à leurs applications sur AWS.",
      en: "Introduction to generative AI, foundation models and their applications on AWS.",
    },
    credential: "https://www.credly.com/badges/b3c8ef29-6a68-4df7-afbd-dc01e185669d",
  },
  {
    id: "machine-learning-nlp",
    title: "AWS Academy Machine Learning for Natural Language Processing",
    provider: "AWS Academy",
    hours: "20 hours",
    issued: "07/30/2026",
    badge: nlpBadge,
    description: {
      fr: "Concepts, techniques et implémentation NLP avec les outils AWS.",
      en: "NLP concepts, techniques and implementation using AWS tools.",
    },
  },
  {
    id: "engineering-operations-technicians",
    title: "AWS Academy Engineering Operations Technicians",
    provider: "AWS Academy",
    hours: "20 hours",
    issued: "12/04/2025",
    badge: engineeringOperationsBadge,
    description: {
      fr: "Gestion d’infrastructure cloud, monitoring, automatisation et réponse aux incidents sur AWS.",
      en: "Operate and manage cloud infrastructure, monitoring, automation and incident response on AWS.",
    },
    credential: "https://www.credly.com/go/1OPMwUL6",
  },
];

export function getCertifications(language) {
  return certifications.map((certification) => ({
    ...certification,
    description: certification.description[language],
  }));
}
