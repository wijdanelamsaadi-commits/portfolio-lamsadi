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
  BarChart3,
  Bot,
  Brain,
  Car,
  ClipboardCheck,
  Database,
  ExternalLink,
  Film,
  Github,
  Landmark,
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

type Project = {
  title: string;
  category: string;
  tech: string[];
  description: string;
  features: string[];
  Icon: LucideIcon;
  accent: string;
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
        title: 'Power BI Dashboard',
        category: 'Data Analytics',
        tech: ['Power BI', 'DAX', 'Excel', 'KPI'],
        description:
          'An analytics dashboard focused on turning raw data into readable KPIs, charts, and business insights.',
        features: ['KPI cards', 'Interactive charts', 'Data cleaning', 'Executive reporting'],
        Icon: BarChart3,
        accent: '#9a5a14',
      },
    ],
  },
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
        src={`${BASE_PATH}/about-normal.png`}
        alt="Wijdane Lamsadi portrait"
        fill
        sizes="(max-width: 768px) 88vw, 34rem"
        className="scale-[1.08] object-cover object-center"
        priority
      />

      <motion.div className="absolute inset-0" style={{ clipPath, WebkitClipPath: clipPath }}>
        <Image
          src={`${BASE_PATH}/about-cyber.png`}
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

function SkillsWindow({ onBack }: { onBack: () => void }) {
  return (
    <motion.section
      aria-label="Skills app window"
      className="absolute inset-0 z-40 overflow-hidden bg-[#f5e2d4]"
      initial={{ opacity: 0, scale: 0.965 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={`${BASE_PATH}/assets/skills-map.png`}
        alt="Skills architecture map"
        fill
        sizes="100vw"
        className="object-contain object-center"
        priority
      />

      <button
        type="button"
        aria-label="Back to desktop"
        title="Back"
        onClick={onBack}
        className="absolute left-5 top-5 z-30 grid h-11 w-11 place-items-center rounded-full border border-[#ffb07e]/45 bg-white/10 text-[#fff0e5] shadow-[0_18px_40px_rgba(0,0,0,0.26)] backdrop-blur-2xl transition hover:-translate-x-1 hover:bg-[#ff6b1a]/24 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8a3d]"
      >
        <ArrowLeft size={21} strokeWidth={2.4} />
      </button>
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

function ProjectFrame({ project, index, onSelect }: { project: Project; index: number; onSelect: () => void }) {
  return (
    <motion.article
      className="group relative min-w-0"
      initial={{ opacity: 0, y: 28, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.64, delay: 0.24 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute left-1/2 top-[-1.85rem] h-10 w-20 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,239,206,0.95),rgba(255,160,78,0.24)_48%,transparent_72%)] blur-sm" />
      <motion.div
        className="relative rounded-[0.85rem] border-[5px] border-[#9b5a20] bg-[#f5dcc8] p-2 shadow-[0_20px_36px_rgba(77,39,13,0.28),inset_0_0_0_1px_rgba(255,245,223,0.72)]"
        whileHover={{
          y: -7,
          boxShadow: '0 0 34px rgba(234,105,22,0.38), 0 24px 46px rgba(77,39,13,0.34)',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <div className="overflow-hidden rounded-[0.52rem]">
          <motion.div className="origin-center" whileHover={{ scale: 1.045 }} transition={{ duration: 0.42 }}>
            <ProjectArtwork project={project} />
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-2 text-center text-[#1d1008]">
        <h3 className="text-[0.76rem] font-black leading-tight">{project.title}</h3>
        <p className="mt-0.5 text-[0.58rem] font-semibold text-[#8b4b19]">{project.category}</p>
        <p className="mx-auto mt-0.5 max-w-[11rem] truncate text-[0.55rem] font-semibold text-[#3e2a1a]/76">
          {project.tech.slice(0, 3).join(' · ')}
        </p>
        <button
          type="button"
          onClick={onSelect}
          className="mt-2 rounded-md bg-[#8b4b19] px-3 py-1.5 text-[0.58rem] font-black text-white shadow-[0_8px_18px_rgba(96,47,12,0.22)] transition hover:-translate-y-0.5 hover:bg-[#c65a05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f06b18]"
        >
          View Details
        </button>
      </div>
    </motion.article>
  );
}

function GalleryRoom({
  gallery,
  galleryIndex,
  onSelect,
}: {
  gallery: ProjectGallery;
  galleryIndex: number;
  onSelect: (project: Project) => void;
}) {
  const Icon = gallery.Icon;

  return (
    <motion.section
      className="relative flex min-h-0 flex-col justify-between overflow-hidden rounded-[1.3rem] border border-[#bd7941]/45 bg-[linear-gradient(180deg,rgba(255,238,221,0.86),rgba(222,158,101,0.36))] px-5 pb-5 pt-12 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.52),0_26px_70px_rgba(108,57,20,0.22)]"
      initial={{ opacity: 0, y: 36, rotateY: galleryIndex === 1 ? 0 : galleryIndex === 0 ? 4 : -4 }}
      animate={{ opacity: 1, y: 0, rotateY: galleryIndex === 1 ? 0 : galleryIndex === 0 ? 2 : -2 }}
      transition={{ duration: 0.74, delay: 0.12 + galleryIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[radial-gradient(ellipse_at_top,rgba(255,244,221,0.95),rgba(244,149,59,0.2)_54%,transparent_80%)]" />
      <div className="pointer-events-none absolute inset-x-4 bottom-4 h-px bg-[#e47722]/45 shadow-[0_0_18px_rgba(234,105,22,0.65)]" />

      <div className="relative text-center">
        <Icon className="mx-auto mb-1 text-[#1f130b]" size={23} strokeWidth={1.8} />
        <h2 className="font-serif text-xl font-black uppercase leading-none tracking-wide text-[#201109]">{gallery.title}</h2>
        <p className="mt-1 text-[0.62rem] font-semibold text-[#5d351d]">{gallery.subtitle}</p>
      </div>

      <div className="relative mt-6 grid grid-cols-3 gap-3">
        {gallery.projects.map((project, projectIndex) => (
          <ProjectFrame
            key={project.title}
            project={project}
            index={galleryIndex * 3 + projectIndex}
            onSelect={() => onSelect(project)}
          />
        ))}
      </div>
    </motion.section>
  );
}

function ProjectDetailsModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = project.Icon;

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
        className="relative grid w-full max-w-4xl gap-6 rounded-[1.2rem] bg-[#fff4eb] p-5 text-[#1d1008] shadow-[0_34px_100px_rgba(26,12,4,0.48)] md:grid-cols-[0.9fr_1.1fr]"
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

        <div className="rounded-[0.9rem] bg-[#0b151d] p-3 shadow-[0_18px_45px_rgba(12,22,31,0.22)]">
          <ProjectArtwork project={project} />
        </div>

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

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1d1008] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#2e1a0f]"
            >
              View Live Demo <ExternalLink size={15} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-[#c65a05] px-5 py-3 text-sm font-black text-white shadow-[0_14px_26px_rgba(198,90,5,0.25)] transition hover:-translate-y-0.5 hover:bg-[#a94d05]"
            >
              View on GitHub <Github size={15} />
            </a>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

function ProjectsMuseumWindow({ onBack }: { onBack: () => void }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <motion.section
      aria-label="Projects museum window"
      className="absolute inset-0 z-40 overflow-hidden bg-[#e7bea0] text-[#1d1008]"
      initial={{ opacity: 0, scale: 0.965 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,237,213,0.95),transparent_20rem),radial-gradient(circle_at_18%_25%,rgba(255,232,199,0.72),transparent_21rem),radial-gradient(circle_at_82%_25%,rgba(255,232,199,0.72),transparent_21rem),linear-gradient(180deg,#d4a27d_0%,#edc4a5_46%,#d8a37c_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(180deg,rgba(141,76,32,0),rgba(123,69,33,0.26)),repeating-linear-gradient(90deg,rgba(255,255,255,0.16)_0_1px,transparent_1px_120px)] opacity-80" />
      <div className="pointer-events-none absolute inset-x-[8%] bottom-[9%] h-28 rounded-[50%] bg-[#fff2e5]/24 blur-xl" />

      <button
        type="button"
        aria-label="Back to desktop"
        title="Back"
        onClick={onBack}
        className="absolute left-5 top-5 z-30 grid h-11 w-11 place-items-center rounded-full border border-[#edc0a0]/80 bg-white/55 text-[#8a4317] shadow-[0_16px_34px_rgba(86,42,16,0.2)] backdrop-blur-2xl transition hover:-translate-x-1 hover:bg-white/78 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f06b18]"
      >
        <ArrowLeft size={21} strokeWidth={2.4} />
      </button>

      <div className="relative z-10 flex h-screen flex-col px-5 pb-5 pt-8 sm:px-8">
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1] }}
        >
          <Landmark className="mx-auto text-[#a64f16]" size={28} strokeWidth={1.8} />
          <h1 className="mt-1 font-serif text-4xl font-black uppercase leading-none tracking-wide text-[#1f120b] sm:text-5xl">
            Projects <span className="text-[#b65311]">Museum</span>
          </h1>
          <p className="mt-2 text-sm font-semibold text-[#5c321b]">Explore my work like a digital gallery</p>
        </motion.header>

        <div className="relative mt-6 grid min-h-0 flex-1 grid-cols-3 gap-5 [perspective:1600px]">
          <div className="pointer-events-none absolute left-[31.8%] top-8 h-[76%] w-14 rounded-full bg-[linear-gradient(90deg,rgba(103,58,28,0.18),rgba(255,232,201,0.58),rgba(103,58,28,0.12))] shadow-[inset_0_0_22px_rgba(93,49,21,0.2)]" />
          <div className="pointer-events-none absolute right-[31.8%] top-8 h-[76%] w-14 rounded-full bg-[linear-gradient(90deg,rgba(103,58,28,0.18),rgba(255,232,201,0.58),rgba(103,58,28,0.12))] shadow-[inset_0_0_22px_rgba(93,49,21,0.2)]" />
          {projectGalleries.map((gallery, galleryIndex) => (
            <GalleryRoom
              key={gallery.title}
              gallery={gallery}
              galleryIndex={galleryIndex}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

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

function getInitialHashState() {
  if (typeof window === 'undefined') return false;
  const hash = window.location.hash;
  return (
    hash === '#experience' ||
    hash === '#about' ||
    hash === '#skills' ||
    hash === '#projects' ||
    hash === '#contact'
  );
}
export default function CinematicIntro() {
  const progress = useIntroProgress();
  const [enteredDesktop, setEnteredDesktop] = useState(getInitialHashState);
  const [introComplete, setIntroComplete] = useState(getInitialHashState);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
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
    </main>
  );
}
