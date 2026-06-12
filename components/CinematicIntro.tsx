'use client';

import Image from 'next/image';
import ExperienceCertificationsSection from '@/components/ExperienceCertificationsSection';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  ArrowLeft,
  Bot,
  Brain,
  Car,
  ClipboardCheck,
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Film,
  Gem,
  Github,
  Landmark,
  Linkedin,
  Mail,
  MessageCircle,
  type LucideIcon,
  Monitor,
  School,
  ShieldCheck,
  Smartphone,
  Wrench,
  X,
} from 'lucide-react';

const INTRO_DURATION_MS = 7200;
const DESKTOP_REVEAL_MS = 6100;
const BASE_PATH = '/portfolio-lamsadi';

const folderHotspots = [
  { label: 'About Me', hash: '#about', top: '10.4%', opensAbout: true },
  { label: 'Skills', hash: '#skills', top: '25.2%', opensSkills: true },
  { label: 'Projects', hash: '#projects', top: '39.2%', opensProjects: true },
  { label: 'Experience', hash: '#experience', top: '53.6%' },
  { label: 'Contact', hash: '#contact', top: '67.8%' },
];

const contactCards = [
  {
    label: 'Email',
    text: 'wijdanelamsaadi@gmail.com',
    href: 'mailto:wijdanelamsaadi@gmail.com',
    Icon: Mail,
  },
  {
    label: 'WhatsApp',
    text: '+212 630 853 382',
    href: 'https://wa.me/212630853382',
    Icon: MessageCircle,
  },
  {
    label: 'LinkedIn',
    text: 'lamsadi-wijdane-a236bb257',
    href: 'https://www.linkedin.com/in/lamsadi-wijdane-a236bb257',
    Icon: Linkedin,
  },
  {
    label: 'GitHub',
    text: 'wijdanelamsaadi-commits',
    href: 'https://github.com/wijdanelamsaadi-commits',
    Icon: Github,
  },
];

type Project = {
  title: string;
  category: string;
  tech: string[];
  description: string;
  features: string[];
  Icon: LucideIcon;
  accent: string;
  githubUrl?: string;
  demoUrl?: string;
};

type ProjectGallery = {
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  projects: Project[];
};

const projectGalleries: ProjectGallery[] = [
  {
    title: 'AI Gallery',
    subtitle: 'Artificial Intelligence & Machine Learning',
    Icon: Brain,
    projects: [
      {
        title: 'TrustGuard',
        category: 'AI Fraud Detection',
        tech: ['Python', 'FastAPI', 'Scikit-learn', 'Pandas'],
        description:
          'An intelligent fraud detection system that analyzes transaction patterns and flags suspicious behavior in real time.',
        features: ['Real-time fraud scoring', 'Behavior pattern analysis', 'Risk dashboard', 'REST API integration'],
        Icon: ShieldCheck,
        accent: '#0d5b83',
        githubUrl: 'https://github.com/wijdanelamsaadi-commits/FraudShield',
        demoUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7463923857033265152/',
      },
      {
        title: 'Pneumonia Detection',
        category: 'Deep Learning',
        tech: ['Python', 'CNN', 'OpenCV', 'TensorFlow'],
        description:
          'A medical image classification project that helps detect pneumonia from chest X-ray scans using deep learning.',
        features: ['X-ray preprocessing', 'CNN classification', 'Model evaluation', 'Prediction report view'],
        Icon: Activity,
        accent: '#466783',
        githubUrl: 'https://github.com/ouma-bg/pneumonia-detection-fastapi',
        demoUrl:
          'https://www.linkedin.com/posts/lamsadi-wijdane-a236bb257_deeplearning-computervision-healthcareai-activity-7435422925106802688-gfHU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9JQvsB3fV2yTFgprcxZk7zgEiifXPsKoQ',
      },
      {
        title: 'Chatbot IA',
        category: 'NLP Assistant',
        tech: ['Python', 'LangChain', 'NLP', 'API'],
        description:
          'A conversational assistant prototype designed to answer questions and guide users through structured workflows.',
        features: ['Intent handling', 'Context-aware replies', 'Prompt pipeline', 'Service integration'],
        Icon: Bot,
        accent: '#183952',
        githubUrl: 'https://github.com/ouma-bg/ensaj-chatbot-assistant-',
        demoUrl:
          'https://www.linkedin.com/posts/lamsadi-wijdane-a236bb257_rag-llm-generativeai-activity-7435426124777672705--99L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9JQvsB3fV2yTFgprcxZk7zgEiifXPsKoQ',
      },
    ],
  },
  {
    title: 'Mobile Gallery',
    subtitle: 'Mobile Applications',
    Icon: Smartphone,
    projects: [
      {
        title: 'CineAI',
        category: 'Movie App',
        tech: ['Flutter', 'Dart', 'AI', 'Firebase'],
        description:
          'A mobile cinema experience with intelligent recommendations, film discovery, and polished app interactions.',
        features: ['Movie discovery', 'AI recommendations', 'Favorites flow', 'Responsive mobile UI'],
        Icon: Film,
        accent: '#075d7a',
        githubUrl: 'https://github.com/wijdanelamsaadi-commits/MovieApp_CineAI',
        demoUrl:
          'https://www.linkedin.com/feed/update/urn:li:activity:7461118740823441408/',
      },
      {
        title: 'Smart Attendance',
        category: 'Attendance App',
        tech: ['Flutter', 'Firebase', 'QR', 'Auth'],
        description:
          'A mobile attendance management system built to simplify student presence tracking and reporting.',
        features: ['QR attendance', 'Student records', 'Realtime database', 'Admin overview'],
        Icon: ClipboardCheck,
        accent: '#164b6f',
        githubUrl: 'https://github.com/wijdanelamsaadi-commits/Smart-Attendance-ENSA-El-Jadida',
      },
      {
        title: 'PermiApp',
        category: 'Driving License App',
        tech: ['Flutter', 'REST API', 'Dart', 'Mobile UI'],
        description:
          'A driving-license learning app with lesson screens, progress tracking, and a clean mobile-first interface.',
        features: ['Lesson modules', 'Practice tracking', 'Mobile navigation', 'API-backed content'],
        Icon: Car,
        accent: '#1f5a75',
        githubUrl: 'https://github.com/wijdanelamsaadi-commits/permis',
      },
      {
        title: 'Vaccination Reminder',
        category: 'Health Reminder',
        tech: ['Flutter', 'Local DB', 'Notifications', 'Dart'],
        description:
          'A health reminder mobile app that helps users track vaccination dates, upcoming doses, and reminder alerts.',
        features: ['Vaccination schedule', 'Reminder alerts', 'Dose tracking', 'Simple mobile dashboard'],
        Icon: ClipboardCheck,
        accent: '#5b4a8f',
        githubUrl: 'https://github.com/ouma-bg/vaccination_reminder_app_version_modifi-',
        demoUrl:
          'https://www.linkedin.com/posts/lamsadi-wijdane-a236bb257_flutter-dart-mobiledevelopment-activity-7435432606860644353-A5Js?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9JQvsB3fV2yTFgprcxZk7zgEiifXPsKoQ',
      },
      {
        title: 'Waqt Al Khayr',
        category: 'Charity & Donation App',
        tech: ['Flutter', 'Firebase', 'Mobile UI', 'Auth'],
        description:
          'A charity and donation mobile app concept focused on connecting users with helpful giving opportunities.',
        features: ['Donation flows', 'Campaign listings', 'User authentication', 'Mobile-first experience'],
        Icon: Activity,
        accent: '#2a8c5d',
        githubUrl: 'https://github.com/ouma-bg/WA9T_LKHIR',
        demoUrl:
          'https://www.linkedin.com/posts/lamsadi-wijdane-a236bb257_reactnative-mobiledevelopment-techforgood-activity-7435453224075247616-xiaX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9JQvsB3fV2yTFgprcxZk7zgEiifXPsKoQ',
      },
    ],
  },
  {
    title: 'Web & Data Gallery',
    subtitle: 'Web & Data Projects',
    Icon: Database,
    projects: [
      {
        title: 'GMAO OCP',
        category: 'Maintenance Management',
        tech: ['ASP.NET', 'SQL Server', 'C#', 'Dashboard'],
        description:
          'A maintenance management platform for organizing equipment, interventions, planning, and operational follow-up.',
        features: ['Equipment records', 'Intervention planning', 'Maintenance history', 'Role-based workflows'],
        Icon: Wrench,
        accent: '#273e4e',
        demoUrl:
          'https://www.linkedin.com/posts/lamsadi-wijdane-a236bb257_ocp-gmao-powerbi-activity-7435831272226107392-2BZP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9JQvsB3fV2yTFgprcxZk7zgEiifXPsKoQ',
      },
      {
        title: 'Gestion d’école',
        category: 'School Management',
        tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
        description:
          'A school management web app for handling students, classes, administration tasks, and structured records.',
        features: ['Student management', 'Class organization', 'Admin dashboard', 'Relational database'],
        Icon: School,
        accent: '#7b4b1f',
      },
      {
        title: 'Gestion des Besoins',
        category: 'Needs Management',
        tech: ['PHP', 'Laravel', 'MySQL', 'Workflow'],
        description:
          'A web platform for organizing internal needs, requests, validation states, and follow-up between users.',
        features: ['Request tracking', 'Validation workflow', 'Needs dashboard', 'Relational database'],
        Icon: Database,
        accent: '#9a5a14',
        githubUrl: 'https://github.com/wijdanelamsaadi-commits/gestion-besoins',
        demoUrl:
          'https://www.linkedin.com/posts/lamsadi-wijdane-a236bb257_php-mysql-bootstrap-activity-7444039318286921728-QDFS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9JQvsB3fV2yTFgprcxZk7zgEiifXPsKoQ',
      },
      {
        title: 'Dar Atlas',
        category: 'Real Estate Platform',
        tech: ['Laravel', 'MySQL', 'PHP', 'Responsive UI'],
        description:
          'A real estate web platform for browsing properties, showcasing details, and managing listings cleanly.',
        features: ['Property listings', 'Search-ready structure', 'Listing detail pages', 'Admin content flow'],
        Icon: Landmark,
        accent: '#1d6f91',
        githubUrl: 'https://github.com/wijdanelamsaadi-commits/dar-atlas',
      },
      {
        title: 'AURÉLIA',
        category: 'E-commerce Jewelry',
        tech: ['Next.js', 'React', 'Spring Boot', 'MySQL'],
        description:
          'Luxury jewelry e-commerce website with elegant UI, product showcase, cart and order system.',
        features: ['Elegant luxury UI', 'Product showcase', 'Shopping cart', 'Order system'],
        Icon: Gem,
        accent: '#b7791f',
        githubUrl: 'https://github.com/ouma-bg/aurelia-jewelry',
        demoUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7460420227537993728/',
      },
    ],
  },
];

const museumProjects = projectGalleries.flatMap((gallery) => gallery.projects);

const projectHotspots = [
  { title: 'TrustGuard', frame: { left: 1.5, top: 31.5, width: 8.7, height: 31.7 }, button: { left: 3.5, top: 58.5, width: 4.8, height: 3.6 } },
  { title: 'Pneumonia Detection', frame: { left: 10.4, top: 32.7, width: 8.6, height: 29.6 }, button: { left: 12.4, top: 58.6, width: 4.9, height: 3.6 } },
  { title: 'Chatbot IA', frame: { left: 19.1, top: 33.8, width: 7.6, height: 27.8 }, button: { left: 20.4, top: 58.4, width: 4.8, height: 3.5 } },
  { title: 'CineAI', frame: { left: 32.4, top: 35.7, width: 6.3, height: 25.3 }, button: { left: 33.5, top: 57.4, width: 4.3, height: 3.4 } },
  { title: 'Smart Attendance', frame: { left: 39.3, top: 35.7, width: 6.4, height: 25.3 }, button: { left: 40.3, top: 57.4, width: 4.4, height: 3.4 } },
  { title: 'PermiApp', frame: { left: 46.1, top: 35.7, width: 6.4, height: 25.3 }, button: { left: 47.1, top: 57.4, width: 4.4, height: 3.4 } },
  { title: 'Vaccination Reminder', frame: { left: 53.0, top: 35.7, width: 6.3, height: 25.3 }, button: { left: 54.0, top: 57.4, width: 4.4, height: 3.4 } },
  { title: 'Waqt Al Khayr', frame: { left: 59.8, top: 35.7, width: 6.5, height: 25.3 }, button: { left: 60.9, top: 57.4, width: 4.4, height: 3.4 } },
  { title: 'GMAO OCP', frame: { left: 72.7, top: 36.2, width: 5.1, height: 25.2 }, button: { left: 73.2, top: 58.1, width: 4.1, height: 3.6 } },
  { title: 'Gestion d’école', frame: { left: 77.6, top: 36.2, width: 5.4, height: 25.2 }, button: { left: 78.1, top: 58.1, width: 4.3, height: 3.6 } },
  { title: 'Gestion des Besoins', frame: { left: 83.0, top: 36.2, width: 5.1, height: 25.2 }, button: { left: 83.5, top: 58.1, width: 4.2, height: 3.6 } },
  { title: 'Dar Atlas', frame: { left: 88.1, top: 35.0, width: 5.2, height: 28.0 }, button: { left: 88.8, top: 58.3, width: 3.8, height: 3.6 } },
  { title: 'AURÉLIA', frame: { left: 93.1, top: 34.0, width: 5.6, height: 29.3 }, button: { left: 93.8, top: 58.3, width: 4.2, height: 3.6 } },
];

function useIntroProgress() {
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, {
    stiffness: 42,
    damping: 18,
    mass: 0.9,
  });

  useEffect(() => {
    const startedAt = performance.now();
    let frame = 0;
    const complete = window.setTimeout(() => progress.set(1), INTRO_DURATION_MS + 240);

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      const nextProgress = Math.min(elapsed / INTRO_DURATION_MS, 1);
      progress.set(nextProgress);

      if (nextProgress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(complete);
    };
  }, [progress]);

  return smoothProgress;
}

function PortraitReveal() {
  const mouseX = useMotionValue(384);
  const mouseY = useMotionValue(512);
  const radius = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 190, damping: 24, mass: 0.35 });
  const smoothY = useSpring(mouseY, { stiffness: 190, damping: 24, mass: 0.35 });
  const smoothRadius = useSpring(radius, { stiffness: 170, damping: 21, mass: 0.35 });
  const clipPath = useMotionTemplate`circle(${smoothRadius}px at ${smoothX}px ${smoothY}px)`;
  const revealOpacity = useTransform(smoothRadius, [0, 120], [0, 1]);

  return (
    <motion.div
      className="relative aspect-[3/4] w-full max-w-[34rem] overflow-hidden rounded-[1.6rem] border border-[#f2b891]/60 bg-[#f7ddca] shadow-[0_32px_90px_rgba(67,28,8,0.24)]"
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.78, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - bounds.left);
        mouseY.set(event.clientY - bounds.top);
        radius.set(120);
      }}
      onPointerEnter={() => radius.set(120)}
      onPointerLeave={() => radius.set(0)}
    >
      <Image
        src={`${BASE_PATH}/assets/about-normal.png`}
        alt="Wijdane Lamsadi portrait"
        fill
        sizes="(max-width: 768px) 88vw, 34rem"
        className="scale-[1.08] object-cover object-center"
        priority
      />

      <motion.div className="absolute inset-0" style={{ clipPath, WebkitClipPath: clipPath }}>
        <Image
          src={`${BASE_PATH}/assets/about-cyber.png`}
          alt="Cybernetic Wijdane Lamsadi portrait reveal"
          fill
          sizes="(max-width: 768px) 88vw, 34rem"
          className="scale-[1.08] object-cover object-center"
          priority
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute h-60 w-60 rounded-full border border-[#ff6b1a]/80 shadow-[0_0_26px_rgba(255,106,26,0.55),inset_0_0_24px_rgba(255,255,255,0.2)]"
        style={{
          left: smoothX,
          top: smoothY,
          opacity: revealOpacity,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </motion.div>
  );
}

function AboutMeWindow({ onBack }: { onBack: () => void }) {
  return (
    <motion.section
      aria-label="About Me window"
      className="absolute inset-0 z-40 overflow-hidden bg-[#f6dfcf] text-[#1a100b]"
      initial={{ opacity: 0, scale: 0.965 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,106,26,0.22),transparent_24rem),radial-gradient(circle_at_20%_80%,rgba(31,18,11,0.13),transparent_28rem)]" />
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,106,26,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,106,26,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

      <button
        type="button"
        aria-label="Back to desktop"
        title="Back"
        onClick={onBack}
        className="absolute left-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-[#e9ad87]/80 bg-white/45 text-[#1a100b] shadow-[0_14px_34px_rgba(67,28,8,0.16)] backdrop-blur-2xl transition hover:-translate-x-1 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a]"
      >
        <ArrowLeft size={21} strokeWidth={2.4} />
      </button>

      <div className="relative z-10 grid min-h-screen items-center gap-8 px-7 py-20 md:grid-cols-[0.82fr_1.18fr] md:px-16 lg:px-20 xl:px-24">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: -34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#f06418]">About Me</p>
          <h1 className="text-5xl font-black leading-none text-[#1a100b] sm:text-6xl lg:text-7xl">Wijdane Lamsadi</h1>
          <p className="mt-6 max-w-lg text-xl font-semibold leading-relaxed text-[#2d221b]">
            Engineering Student in Information Systems
          </p>

          <div className="mt-7 inline-flex rounded-full border border-[#efb087]/80 bg-white/42 px-5 py-2 text-sm font-bold text-[#2a1710] shadow-[0_12px_28px_rgba(67,28,8,0.08)] backdrop-blur-xl">
            AI • Full Stack • Data
          </div>

          <p className="mt-8 max-w-xl text-base font-medium leading-8 text-[#4c382e] sm:text-lg">
            Wijdane Lamsadi, engineering student in Information Systems, passionate about AI, Full Stack
            Development and Data Analysis. I build smart digital solutions that combine clean design, useful
            features and intelligent systems.
          </p>
        </motion.div>

        <div className="flex justify-center md:justify-end">
          <PortraitReveal />
        </div>
      </div>
    </motion.section>
  );
}

type SkillGroup = {
  title: string;
  count: string;
  Icon: LucideIcon;
  items: string[];
  position: string;
};

const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Machine Learning',
    count: '18+ Technologies',
    Icon: Brain,
    position: 'lg:left-[3%] lg:top-[12%] lg:h-[30%] lg:w-[31.5%]',
    items: [
      'Python',
      'TensorFlow',
      'Keras',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'OpenCV',
      'DeepFace',
      'EasyOCR',
      'XGBoost',
      'Autoencoders',
      'Siamese Networks',
      'Streamlit',
      'FastAPI',
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'NLP',
    ],
  },
  {
    title: 'Full Stack Development',
    count: '16+ Technologies',
    Icon: Code2,
    position: 'lg:right-[3%] lg:top-[12%] lg:h-[30%] lg:w-[33.5%]',
    items: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Hibernate',
      'REST API',
      'JWT',
      'Next.js',
      'React',
      'React Native',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'PHP',
      'FastAPI',
    ],
  },
  {
    title: 'Mobile Development',
    count: '12+ Technologies',
    Icon: Smartphone,
    position: 'lg:left-[3%] lg:top-[45%] lg:h-[22%] lg:w-[31.5%]',
    items: [
      'Java Android',
      'Kotlin',
      'Flutter',
      'Dart',
      'React Native',
      'Firebase',
      'SQLite',
      'XML',
      'RecyclerView',
      'Material Design',
      'Android Studio',
      'Mobile UI/UX',
    ],
  },
  {
    title: 'Databases & Data',
    count: '10+ Technologies',
    Icon: Database,
    position: 'lg:right-[3%] lg:top-[45%] lg:h-[22%] lg:w-[33.5%]',
    items: [
      'MySQL',
      'PostgreSQL',
      'SQL Server',
      'H2 Database',
      'SQLite',
      'Database Design',
      'Data Modeling',
      'Power BI',
      'KPI Dashboards',
      'Data Analytics',
    ],
  },
  {
    title: 'Tools & DevOps',
    count: '15+ Technologies',
    Icon: Wrench,
    position: 'lg:left-[3%] lg:top-[70%] lg:h-[21%] lg:w-[31.5%]',
    items: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'IntelliJ IDEA', 'Android Studio', 'Maven', 'Postman', 'Swagger', 'Docker', 'n8n', 'VMware'],
  },
  {
    title: 'Cloud & Architecture',
    count: '8+ Technologies',
    Icon: Cloud,
    position: 'lg:left-1/2 lg:top-[72%] lg:h-[19%] lg:w-[25%] lg:-translate-x-1/2',
    items: ['AWS', 'Cloud Foundations', 'API Architecture', 'Microservices', 'System Design', 'Client-Server Architecture'],
  },
  {
    title: 'Cybersecurity',
    count: '10+ Technologies',
    Icon: ShieldCheck,
    position: 'lg:right-[3%] lg:top-[70%] lg:h-[21%] lg:w-[33.5%]',
    items: ['Network Security', 'VPN', 'IPSec', 'GRE', 'Firewalls', 'ACL', 'SHA-256', 'Authentication', 'Authorization'],
  },
];

const skillStats = ['65+ Technologies', '13 Projects Completed', '4 AWS Certifications', 'AI • Mobile • Full Stack • Data', 'Always Learning'];

function SkillBadge({ label, index }: { label: string; index: number }) {
  return (
    <motion.span
      className="inline-flex min-h-6 items-center rounded-md border border-white/70 bg-white/76 px-2 py-1 text-[9px] font-bold leading-none text-[#473426] shadow-[0_5px_14px_rgba(92,50,25,0.06)] backdrop-blur-xl sm:text-[10px]"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: 0.16 + index * 0.012, ease: 'easeOut' }}
      whileHover={{ y: -2, scale: 1.035 }}
    >
      {label}
    </motion.span>
  );
}

function SkillPanel({ group, index }: { group: SkillGroup; index: number }) {
  const Icon = group.Icon;

  return (
    <motion.article
      className={`relative z-20 overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/58 p-3 text-[#16110d] shadow-[0_18px_46px_rgba(80,47,28,0.12)] backdrop-blur-2xl ${group.position}`}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.48, delay: 0.14 + index * 0.055, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: '0 24px 62px rgba(255, 107, 26, 0.18)' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(255,107,26,0.1),transparent_10rem),linear-gradient(135deg,rgba(255,255,255,0.76),rgba(255,255,255,0.2))]" />
      <div className="relative flex items-center gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-[#ffd3b6] bg-white text-[#ff6b00] shadow-[0_0_20px_rgba(255,107,26,0.22)] lg:h-12 lg:w-12">
          <Icon size={24} strokeWidth={2.25} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
            <h2 className="text-[11px] font-black uppercase tracking-normal text-[#16110d] lg:text-[12px]">{group.title}</h2>
            <p className="text-[8px] font-black text-[#ff6b00] lg:text-[9px]">{group.count}</p>
          </div>
        </div>
      </div>
      <div className="relative mt-3 flex flex-wrap content-start gap-1.5 lg:gap-1.5">
        {group.items.map((item, itemIndex) => (
          <SkillBadge key={`${group.title}-${item}`} label={item} index={itemIndex} />
        ))}
      </div>
    </motion.article>
  );
}

function SkillsWindow({ onBack }: { onBack: () => void }) {
  return (
    <motion.section
      aria-label="Skills app window"
      className="absolute inset-0 z-40 overflow-hidden bg-[#fff7f0] text-[#15100d]"
      initial={{ opacity: 0, scale: 0.965 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(255,107,26,0.17),transparent_18rem),radial-gradient(circle_at_14%_12%,rgba(255,176,117,0.2),transparent_22rem),radial-gradient(circle_at_88%_82%,rgba(255,209,176,0.3),transparent_20rem),linear-gradient(135deg,#fffaf6,#f8ece2)]" />
      <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(255,107,26,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,26,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,107,26,0.34)_1px,transparent_1px)] [background-size:24px_24px]" />

      <button
        type="button"
        aria-label="Back to desktop"
        title="Back"
        onClick={onBack}
        className="absolute left-4 top-4 z-40 inline-flex h-11 items-center gap-2 rounded-2xl border border-white/80 bg-white/72 px-4 text-xs font-black text-[#ff6b00] shadow-[0_12px_28px_rgba(73,38,18,0.14)] backdrop-blur-2xl transition hover:-translate-x-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00]"
      >
        <ArrowLeft size={21} strokeWidth={2.4} />
        <span>Back</span>
      </button>

      <div className="absolute right-4 top-4 z-40 flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/80 bg-white/70 text-[#ff6b00] shadow-[0_10px_24px_rgba(73,38,18,0.12)] backdrop-blur-xl">
          <span className="h-0.5 w-3.5 rounded-full bg-current" />
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/80 bg-white/70 text-[#ff6b00] shadow-[0_10px_24px_rgba(73,38,18,0.12)] backdrop-blur-xl">
          <span className="h-3 w-3 rounded-[3px] border-2 border-current" />
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/80 bg-white/70 text-[#ff6b00] shadow-[0_10px_24px_rgba(73,38,18,0.12)] backdrop-blur-xl">
          <X size={16} strokeWidth={2.6} />
        </span>
      </div>

      <div className="relative z-10 h-full overflow-y-auto px-4 pb-5 pt-16 lg:overflow-hidden lg:px-6 lg:pb-4 lg:pt-5">
        <motion.header
          className="relative z-30 mx-auto w-fit text-center"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-3xl font-black leading-none tracking-normal text-[#120f0d] sm:text-4xl lg:text-[2.45rem]">
            SKILLS <span className="text-[#ff6b00]">CONTROL CENTER</span>
          </h1>
          <p className="mt-2 text-sm font-semibold text-[#6d5445]">Explore my technical universe</p>
          <div className="mx-auto mt-2 flex w-24 items-center justify-center">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#ff6b00]" />
            <span className="mx-2 h-2 w-2 rounded-full bg-[#ff6b00] shadow-[0_0_12px_rgba(255,107,0,0.65)]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#ff6b00]" />
          </div>
        </motion.header>

        <svg className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="skill-line-glow">
              <feGaussianBlur stdDeviation="0.45" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {[
            'M35 25 C42 25 42 33 49 39',
            'M65 25 C58 25 58 33 51 39',
            'M35 55 C41 54 43 50 49 48',
            'M65 55 C59 54 57 50 51 48',
            'M35 81 C42 78 44 64 49 54',
            'M50 72 C50 65 50 60 50 54',
            'M65 81 C58 78 56 64 51 54',
          ].map((path) => (
            <path key={path} d={path} fill="none" stroke="rgba(255,107,0,0.36)" strokeWidth="0.18" filter="url(#skill-line-glow)" />
          ))}
          {[35, 65].map((x) =>
            [25, 55, 81].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="0.38" fill="#fff7ed" stroke="#ffb35f" strokeWidth="0.18" />
            )),
          )}
        </svg>

        <div className="relative mx-auto mt-7 grid max-w-6xl gap-3 lg:absolute lg:inset-x-0 lg:top-0 lg:mx-0 lg:mt-0 lg:h-full lg:max-w-none lg:px-6">
          <motion.div
            className="relative z-20 order-first mx-auto grid min-h-72 w-full max-w-[21rem] place-items-center rounded-[2rem] lg:absolute lg:left-1/2 lg:top-[26%] lg:min-h-0 lg:w-[24%] lg:-translate-x-1/2"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute h-64 w-64 rounded-full border border-[#ffb45f]/45 shadow-[0_0_45px_rgba(255,107,0,0.2)] lg:h-72 lg:w-72"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute h-52 w-52 rounded-full border border-dashed border-[#ffb45f]/70 shadow-[inset_0_0_32px_rgba(255,107,0,0.14)] lg:h-60 lg:w-60"
              animate={{ rotate: -360 }}
              transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.22),rgba(255,107,0,0.06)_48%,transparent_72%)] blur-sm"
              animate={{ scale: [1, 1.08, 1], opacity: [0.72, 1, 0.72] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative grid h-40 w-40 place-items-center rounded-full border border-white/80 bg-white/66 shadow-[0_0_46px_rgba(255,107,0,0.24),inset_0_0_30px_rgba(255,255,255,0.9)] backdrop-blur-2xl lg:h-48 lg:w-48">
              <Brain className="h-24 w-24 text-[#ffb47c] drop-shadow-[0_0_18px_rgba(255,107,0,0.42)] lg:h-32 lg:w-32" strokeWidth={1.45} />
              <div className="absolute grid h-12 w-12 place-items-center rounded-xl border border-[#ffb366] bg-[#ff6b00] text-sm font-black text-white shadow-[0_0_28px_rgba(255,107,0,0.55)]">
                AI
              </div>
              <Cpu className="absolute -bottom-2 h-10 w-10 rounded-xl border border-[#ffd1ad] bg-white p-2 text-[#ff6b00] shadow-[0_8px_20px_rgba(255,107,0,0.16)]" />
            </div>
            <div className="mt-52 text-center lg:mt-60">
              <h2 className="text-xl font-black text-[#17100b]">AI CORE</h2>
              <p className="mt-1 text-[10px] font-semibold text-[#6d5445]">Intelligence • Learning • Innovation</p>
              <div className="mx-auto mt-2 h-4 w-16 text-[#ff6b00]">
                <svg viewBox="0 0 80 20" className="h-full w-full" aria-hidden="true">
                  <path d="M2 10H22L28 3L34 17L41 5L47 14L54 10H78" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.div>

          {skillGroups.map((group, index) => (
            <SkillPanel key={group.title} group={group} index={index} />
          ))}
        </div>

        <motion.div
          className="relative z-30 mt-5 grid gap-2 rounded-[1.25rem] border border-white/70 bg-white/62 p-3 text-center text-[11px] font-black text-[#513727] shadow-[0_16px_40px_rgba(73,38,18,0.11)] backdrop-blur-2xl sm:grid-cols-5 lg:absolute lg:bottom-3 lg:left-1/2 lg:mt-0 lg:w-[86%] lg:-translate-x-1/2"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {skillStats.map((stat) => (
            <div key={stat} className="rounded-xl border border-[#ffe2cf] bg-white/62 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.88)]">
              {stat}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function ProjectArtwork({ project }: { project: Project }) {
  const Icon = project.Icon;

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-[0.7rem] bg-[#07131c] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
      style={{
        background: `radial-gradient(circle at 50% 28%, ${project.accent}99, transparent 30%), linear-gradient(145deg, #06111a, #0c2030 48%, #05080c)`,
      }}
    >
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="absolute inset-x-5 top-4 flex items-center justify-between text-[0.55rem] font-black uppercase tracking-[0.24em] text-[#b9efff]">
        <span>{project.title}</span>
        <span>01</span>
      </div>
      <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#79d8ff]/30 bg-white/5 shadow-[0_0_38px_rgba(83,198,255,0.34)] backdrop-blur-xl">
        <Icon size={34} strokeWidth={1.8} className="text-[#d8f7ff]" />
      </div>
      <div className="absolute inset-x-5 bottom-4 space-y-2">
        <div className="h-1.5 rounded-full bg-white/12">
          <div className="h-full w-2/3 rounded-full bg-[#ff8a3d]/80" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <span className="h-8 rounded-lg border border-white/10 bg-white/8" />
          <span className="h-8 rounded-lg border border-white/10 bg-white/8" />
          <span className="h-8 rounded-lg border border-white/10 bg-white/8" />
        </div>
      </div>
    </div>
  );
}

function ProjectDetailsModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = project.Icon;
  const hasLinks = Boolean(project.demoUrl || project.githubUrl);

  return (
    <motion.div
      className="absolute inset-0 z-50 grid place-items-center bg-[#160c06]/64 px-5 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.32 }}
      onClick={onClose}
    >
      <motion.article
        className="relative w-full max-w-2xl rounded-[1rem] bg-[#fff4eb] p-6 text-[#1d1008] shadow-[0_30px_90px_rgba(26,12,4,0.44)]"
        initial={{ opacity: 0, y: 28, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.96 }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close project details"
          title="Close"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-[#7b3b11] transition hover:bg-[#f1d5c2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f06b18]"
        >
          <X size={18} />
        </button>

        <div className="pr-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c65a05]">{project.category}</p>
          <h3 className="mt-2 text-3xl font-black leading-tight">{project.title}</h3>
          <p className="mt-4 text-sm font-medium leading-6 text-[#4d3728]">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1 rounded-full border border-[#edc0a0] bg-white/55 px-3 py-1.5 text-xs font-bold text-[#3d2414]"
              >
                <Icon size={13} strokeWidth={2.1} className="text-[#c65a05]" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-5">
            <p className="text-sm font-black">Key Features</p>
            <ul className="mt-2 space-y-2 text-sm font-medium text-[#4d3728]">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#e96b16] shadow-[0_0_10px_rgba(233,107,22,0.8)]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {hasLinks && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#1d1008] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#2e1a0f]"
                >
                  View Demo <ExternalLink size={15} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#c65a05] px-5 py-3 text-sm font-black text-white shadow-[0_14px_26px_rgba(198,90,5,0.25)] transition hover:-translate-y-0.5 hover:bg-[#a94d05]"
                >
                  View on GitHub <Github size={15} />
                </a>
              )}
            </div>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
}

function ProjectsMuseumWindow({ onBack }: { onBack: () => void }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const getProject = (title: string) => museumProjects.find((project) => project.title === title);

  return (
    <motion.section
      aria-label="Projects museum window"
      className="absolute inset-0 z-40 overflow-hidden bg-[#b98862] text-[#1d1008]"
      initial={{ opacity: 0, scale: 0.965 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={`${BASE_PATH}/assets/projects-museum.png`}
        alt="Projects Museum"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      <button
        type="button"
        aria-label="Back to desktop"
        title="Back"
        onClick={onBack}
        className="absolute left-5 top-5 z-30 grid h-11 w-11 place-items-center rounded-full border border-[#edc0a0]/80 bg-white/55 text-[#8a4317] shadow-[0_16px_34px_rgba(86,42,16,0.2)] backdrop-blur-2xl transition hover:-translate-x-1 hover:bg-white/78 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f06b18]"
      >
        <ArrowLeft size={21} strokeWidth={2.4} />
      </button>

      {projectHotspots.map((hotspot) => {
        const project = getProject(hotspot.title);
        if (!project) return null;

        return (
          <div key={hotspot.title}>
            <button
              type="button"
              aria-label={`Open ${project.title} details`}
              title={project.title}
              onClick={() => setSelectedProject(project)}
              className="absolute z-20 rounded-sm bg-[#f06b18]/0 outline-none transition hover:bg-[#f06b18]/10 focus-visible:bg-[#f06b18]/14 focus-visible:ring-2 focus-visible:ring-[#ff9b4a]"
              style={{
                left: `${hotspot.frame.left}%`,
                top: `${hotspot.frame.top}%`,
                width: `${hotspot.frame.width}%`,
                height: `${hotspot.frame.height}%`,
              }}
            />
            <button
              type="button"
              aria-label={`View ${project.title} details`}
              title={`View ${project.title} details`}
              onClick={() => setSelectedProject(project)}
              className="absolute z-20 rounded-lg bg-[#f06b18]/0 outline-none transition hover:bg-[#f06b18]/12 focus-visible:bg-[#f06b18]/18 focus-visible:ring-2 focus-visible:ring-[#ff9b4a]"
              style={{
                left: `${hotspot.button.left}%`,
                top: `${hotspot.button.top}%`,
                width: `${hotspot.button.width}%`,
                height: `${hotspot.button.height}%`,
              }}
            />
          </div>
        );
      })}

      <AnimatePresence>
        {selectedProject && <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </motion.section>
  );
}

function ExperienceWindow({ onBack }: { onBack: () => void }) {
  return (
    <motion.section
      aria-label="Experience and certifications window"
      className="absolute inset-0 z-40 overflow-y-auto bg-[#fffdfb] text-[#111827]"
      initial={{ opacity: 0, scale: 0.965 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        aria-label="Back to desktop"
        title="Back"
        onClick={onBack}
        className="fixed left-5 top-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-orange-200/80 bg-white/78 text-[#8a4317] shadow-[0_16px_34px_rgba(86,42,16,0.16)] backdrop-blur-2xl transition hover:-translate-x-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f06b18]"
      >
        <ArrowLeft size={21} strokeWidth={2.4} />
      </button>

      <ExperienceCertificationsSection />
    </motion.section>
  );
}

function ContactWindow({ onBack }: { onBack: () => void }) {
  return (
    <motion.section
      aria-label="Contact window"
      className="absolute inset-0 z-40 overflow-y-auto bg-[#fffaf5] text-[#0f1720] dark:bg-[#05070d] dark:text-white"
      initial={{ opacity: 0, scale: 0.965 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl dark:bg-orange-500/10" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-50/80 blur-3xl dark:bg-orange-400/10" />
        <div className="absolute left-8 top-8 h-28 w-28 opacity-30 [background-image:radial-gradient(#ff6b00_1.5px,transparent_1.5px)] [background-size:18px_18px] dark:opacity-20" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-tl-full border-l border-t border-orange-200/50 dark:border-orange-400/15" />
      </div>

      <button
        type="button"
        aria-label="Back to desktop"
        title="Back"
        onClick={onBack}
        className="fixed left-5 top-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-orange-200/80 bg-white/78 text-[#8a4317] shadow-[0_16px_34px_rgba(86,42,16,0.16)] backdrop-blur-2xl transition hover:-translate-x-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f06b18] dark:border-orange-400/25 dark:bg-white/10 dark:text-orange-200 dark:shadow-[0_0_32px_rgba(255,107,0,0.18)] dark:hover:bg-white/15"
      >
        <ArrowLeft size={21} strokeWidth={2.4} />
      </button>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 py-20 sm:px-8 lg:px-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto inline-flex items-center gap-4 text-[#ff6b00]">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#ff6b00]" />
            <span className="text-sm font-black uppercase tracking-[0.28em]">Contact</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#ff6b00]" />
          </div>
          <h1 className="mt-7 text-5xl font-black leading-none tracking-normal text-[#101820] dark:text-white sm:text-6xl lg:text-7xl">
            Get In Touch
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            Feel free to reach out through any of the platforms below.
          </p>
          <div className="mx-auto mt-7 h-0.5 w-20 rounded-full bg-[#ff6b00] shadow-[0_0_22px_rgba(255,107,0,0.42)]" />
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {contactCards.map((card, index) => {
            const Icon = card.Icon;

            return (
              <motion.a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[1.65rem] border border-orange-100/90 bg-white/88 p-6 text-left shadow-[0_24px_70px_rgba(27,32,50,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#ff6b00]/55 hover:shadow-[0_28px_86px_rgba(255,107,0,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffaf5] dark:border-orange-400/15 dark:bg-white/[0.055] dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)] dark:hover:border-[#ff6b00]/65 dark:hover:shadow-[0_0_48px_rgba(255,107,0,0.18)] dark:focus-visible:ring-offset-[#05070d] sm:p-8"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute right-6 top-6 text-[#ff6b00] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ExternalLink size={23} strokeWidth={2.2} />
                </div>

                <div className="flex items-center gap-6 pr-10">
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl border border-orange-200/80 bg-orange-50/80 text-[#ff6b00] shadow-[0_14px_34px_rgba(255,107,0,0.12)] transition duration-300 group-hover:scale-105 group-hover:bg-white dark:border-orange-400/20 dark:bg-orange-400/10 dark:shadow-[0_0_28px_rgba(255,107,0,0.12)] dark:group-hover:bg-orange-400/15">
                    <Icon size={38} strokeWidth={2.05} />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-2xl font-black text-[#101820] dark:text-white">{card.label}</h2>
                    <p className="mt-3 break-words text-base font-medium leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                      {card.text}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default function CinematicIntro() {
  const progress = useIntroProgress();
  const [enteredDesktop, setEnteredDesktop] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springX = useSpring(pointerX, { stiffness: 80, damping: 22, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 80, damping: 22, mass: 0.4 });

  const videoScale = useTransform(progress, [0, 0.72, 1], [1.04, 1.65, 4.6]);
  const videoOpacity = useTransform(progress, [0, 0.78, 0.94, 1], [1, 1, 0.44, 0]);
  const tunnelOpacity = useTransform(progress, [0.64, 0.86, 1], [0, 0.38, 1]);
  const screenGlow = useTransform(progress, [0.18, 0.74, 0.96], [0.08, 0.48, 1]);
  const vignetteOpacity = useTransform(progress, [0, 0.72, 1], [0.45, 0.7, 0.96]);
  const desktopScale = useTransform(progress, [0.72, 1], [1.18, 1]);
  const desktopOpacity = useTransform(progress, [0.76, 0.93, 1], [0, 0.5, 1]);
  const desktopBlur = useTransform(progress, [0.76, 0.95, 1], [18, 4, 0]);
  const desktopFilter = useTransform(desktopBlur, (value) => `blur(${value}px)`);
  const parallaxX = useTransform(springX, [-1, 1], [-20, 20]);
  const parallaxY = useTransform(springY, [-1, 1], [-14, 14]);
  const reverseParallaxX = useTransform(springX, [-1, 1], [12, -12]);
  const reverseParallaxY = useTransform(springY, [-1, 1], [8, -8]);

  useEffect(() => {
    const timeout = window.setTimeout(() => setEnteredDesktop(true), DESKTOP_REVEAL_MS);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIntroComplete(true), INTRO_DURATION_MS + 260);
    return () => window.clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const applyHash = (hash: string) => {
      if (!hash) return;
      setIntroComplete(true);
      setEnteredDesktop(true);
      setAboutOpen(false);
      setSkillsOpen(false);
      setProjectsOpen(false);
      setExperienceOpen(false);
      setContactOpen(false);

      if (hash === '#about') {
        setAboutOpen(true);
      } else if (hash === '#skills') {
        setSkillsOpen(true);
      } else if (hash === '#projects') {
        setProjectsOpen(true);
      } else if (hash === '#experience') {
        setExperienceOpen(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact') {
        setContactOpen(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    applyHash(window.location.hash);

    const onHashChange = () => applyHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  const today = useMemo(() => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      hour: 'numeric',
      minute: '2-digit',
    }).format(new Date());
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  };

  return (
    <main
      className="relative h-screen w-screen overflow-hidden bg-[#050505] text-white"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      <motion.section
        aria-label="Cinematic portfolio intro"
        className="absolute inset-0"
        style={{
          opacity: introComplete ? 0 : videoOpacity,
          scale: introComplete ? 4.6 : videoScale,
          x: parallaxX,
          y: parallaxY,
          transformOrigin: '50% 48%',
        }}
      >
        <video
          className="h-full w-full object-cover"
          src={`${BASE_PATH}/assets/intro-video.mp4`}
          autoPlay
          muted
          playsInline
          preload="auto"
        />
      </motion.section>

      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.08)_34%,rgba(0,0,0,0.84)_100%)]"
        style={{ opacity: vignetteOpacity }}
      />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[38vmin] w-[62vmin] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_110px_rgba(255,118,56,0.4)] backdrop-blur-[2px]"
        style={{
          opacity: introComplete ? 1 : screenGlow,
          x: reverseParallaxX,
          y: reverseParallaxY,
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,248,242,0.96)_0%,rgba(255,157,89,0.34)_22%,rgba(6,6,6,0.82)_58%,#050505_100%)]"
        style={{ opacity: introComplete ? 1 : tunnelOpacity }}
      />

      <motion.section
        aria-label="Portfolio desktop interface"
        className="absolute inset-0 overflow-hidden bg-[#f5dfcf]"
        style={{
          opacity: introComplete ? 1 : desktopOpacity,
          scale: introComplete ? 1 : desktopScale,
          filter: introComplete ? 'blur(0px)' : desktopFilter,
        }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ x: reverseParallaxX, y: reverseParallaxY }}
        >
          <div
            className="relative overflow-hidden"
            style={{ width: 'min(96vw, 138vh)', aspectRatio: '3 / 2' }}
          >
            <Image
              src={`${BASE_PATH}/assets/portfolio-desktop.png`}
              alt="Wijdane Lamsadi portfolio desktop interface"
              fill
              sizes="(max-aspect-ratio: 3/2) 96vw, 138vh"
              priority
              className="object-contain"
            />

            {folderHotspots.map((folder) => (
              <button
                key={folder.hash}
                type="button"
                aria-label={`Open ${folder.label}`}
                title={folder.label}
                className="absolute left-[3.1%] z-10 h-[7.4%] w-[5.9%] rounded-2xl outline-none transition focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2 focus-visible:ring-offset-white/40"
                style={{ top: folder.top }}
                onClick={() => {
                  if (folder.opensAbout) {
                    setAboutOpen(true);
                    return;
                  }

                  if (folder.opensSkills) {
                    setSkillsOpen(true);
                    return;
                  }

                  if (folder.opensProjects) {
                    setProjectsOpen(true);
                    return;
                  }

                  if (folder.hash === '#experience') {
                    window.location.hash = '#experience';
                    setAboutOpen(false);
                    setSkillsOpen(false);
                    setProjectsOpen(false);
                    setExperienceOpen(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                  }

                  if (folder.hash === '#contact') {
                    setAboutOpen(false);
                    setSkillsOpen(false);
                    setProjectsOpen(false);
                    setExperienceOpen(false);
                    setContactOpen(true);
                    window.location.hash = '#contact';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                  }

                  window.location.hash = folder.hash;
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0)_18%,rgba(70,28,8,0.08)_100%)]" />

        {enteredDesktop && (
          <motion.div
            key={introComplete ? 'desktop-bar-complete' : 'desktop-bar-enter'}
            className="absolute left-0 right-0 top-0 flex h-9 items-center justify-between bg-white/40 px-4 text-[13px] font-semibold text-black/80 shadow-[0_1px_18px_rgba(94,50,22,0.12)] backdrop-blur-2xl sm:px-8 sm:text-sm"
            initial={introComplete ? false : { y: -36, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={introComplete ? { opacity: 1, transform: 'translateY(0px)' } : undefined}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-5">
              <span className="text-base">W</span>
              <span>Portfolio</span>
              <span className="hidden sm:inline">Intro</span>
            </div>
            <div className="flex items-center gap-4">
              <Monitor size={16} strokeWidth={2.4} />
              <span>{today}</span>
            </div>
          </motion.div>
        )}
      </motion.section>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-8 mx-auto w-fit rounded-full border border-white/10 bg-black/25 px-5 py-2 text-xs font-medium uppercase tracking-[0.28em] text-white/70 backdrop-blur-xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: [0, 1, 1, 0], y: [12, 0, 0, -8] }}
        transition={{ duration: 5.4, times: [0, 0.18, 0.74, 1], ease: 'easeOut' }}
      >
        Entering portfolio
      </motion.div>

      <AnimatePresence>
        {aboutOpen && <AboutMeWindow onBack={() => setAboutOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {skillsOpen && <SkillsWindow onBack={() => setSkillsOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {projectsOpen && <ProjectsMuseumWindow onBack={() => setProjectsOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {experienceOpen && <ExperienceWindow onBack={() => setExperienceOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {contactOpen && <ContactWindow onBack={() => setContactOpen(false)} />}
      </AnimatePresence>
    </main>
  );
}
