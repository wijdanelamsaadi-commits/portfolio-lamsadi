'use client';

import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Monitor } from 'lucide-react';

const INTRO_DURATION_MS = 7200;
const DESKTOP_REVEAL_MS = 6100;
const BASE_PATH = '/portfolio-lamsadi';

const folderHotspots = [
  { label: 'About Me', hash: '#about', top: '10.4%', opensAbout: true },
  { label: 'Skills', hash: '#skills', top: '25.2%', opensSkills: true },
  { label: 'Projects', hash: '#projects', top: '39.2%' },
  { label: 'Experience', hash: '#experience', top: '53.6%' },
  { label: 'Contact', hash: '#contact', top: '67.8%' },
];

const skillLayers = [
  {
    name: 'AI Layer',
    accent: '#ff6b1a',
    technologies: [
      { name: 'Python', description: 'AI and automation language', projects: ['AI prototypes', 'Data workflows'], level: 'Advanced' },
      { name: 'TensorFlow', description: 'Deep learning framework', projects: ['AI models', 'Vision experiments'], level: 'Intermediate' },
      { name: 'PyTorch', description: 'Research-focused AI framework', projects: ['Future AI projects', 'Model experiments'], level: 'Intermediate' },
      { name: 'OpenCV', description: 'Computer vision toolkit', projects: ['Vision processing', 'Smart detection'], level: 'Intermediate' },
      { name: 'DeepFace', description: 'Face intelligence library', projects: ['Face analysis', 'Recognition demos'], level: 'Intermediate' },
      { name: 'FastAPI', description: 'Python API framework', projects: ['AI APIs', 'Backend services'], level: 'Advanced' },
    ],
  },
  {
    name: 'Backend Layer',
    accent: '#f05d14',
    technologies: [
      { name: 'Java', description: 'Enterprise backend language', projects: ['Academic systems', 'API services'], level: 'Advanced' },
      { name: 'Spring Boot', description: 'Java service framework', projects: ['REST services', 'Layered backends'], level: 'Intermediate' },
      { name: 'C#', description: 'Typed backend language', projects: ['Management apps', 'Desktop logic'], level: 'Advanced' },
      { name: 'ASP.NET', description: 'Microsoft web framework', projects: ['Web APIs', 'Full-stack apps'], level: 'Advanced' },
      { name: 'Node.js', description: 'JavaScript runtime', projects: ['Future projects', 'API prototypes'], level: 'Intermediate' },
      { name: 'REST APIs', description: 'Service communication pattern', projects: ['Portfolio systems', 'Backend integrations'], level: 'Advanced' },
    ],
  },
  {
    name: 'Database Layer',
    accent: '#ff7d2b',
    technologies: [
      { name: 'SQL Server', description: 'Microsoft relational database', projects: ['ASP.NET apps', 'Reporting systems'], level: 'Advanced' },
      { name: 'MySQL', description: 'Relational database engine', projects: ['Web apps', 'Academic projects'], level: 'Advanced' },
      { name: 'PostgreSQL', description: 'Advanced SQL database', projects: ['Future systems', 'Data modeling'], level: 'Intermediate' },
      { name: 'SQLite', description: 'Lightweight embedded database', projects: ['Mobile prototypes', 'Local storage'], level: 'Intermediate' },
      { name: 'MongoDB', description: 'Document database', projects: ['Flexible data apps', 'API prototypes'], level: 'Intermediate' },
    ],
  },
  {
    name: 'Frontend Layer',
    accent: '#ff8a3d',
    technologies: [
      { name: 'React', description: 'Frontend library', projects: ['Portfolio', 'Future projects'], level: 'Advanced' },
      { name: 'Next.js', description: 'React application framework', projects: ['Portfolio desktop', 'Static web apps'], level: 'Advanced' },
      { name: 'HTML', description: 'Semantic web structure', projects: ['Portfolio', 'Web interfaces'], level: 'Advanced' },
      { name: 'CSS', description: 'Visual styling language', projects: ['Premium UI', 'Responsive layouts'], level: 'Advanced' },
      { name: 'JavaScript', description: 'Browser interaction language', projects: ['Interactive UI', 'App logic'], level: 'Advanced' },
      { name: 'TypeScript', description: 'Typed JavaScript', projects: ['Portfolio app', 'Safer UI systems'], level: 'Advanced' },
    ],
  },
  {
    name: 'Mobile Layer',
    accent: '#ef6a22',
    technologies: [
      { name: 'Android Java', description: 'Native Android development', projects: ['Mobile apps', 'Academic mobile work'], level: 'Intermediate' },
      { name: 'Flutter', description: 'Cross-platform mobile UI', projects: ['Future mobile projects', 'App prototypes'], level: 'Intermediate' },
    ],
  },
  {
    name: 'Analytics Layer',
    accent: '#ff9a55',
    technologies: [
      { name: 'Power BI', description: 'Business intelligence dashboards', projects: ['Dashboards', 'Decision reports'], level: 'Advanced' },
      { name: 'Excel', description: 'Spreadsheet analysis tool', projects: ['Data cleaning', 'Operational reports'], level: 'Advanced' },
      { name: 'KPI', description: 'Performance indicator design', projects: ['Analytics dashboards', 'Reporting systems'], level: 'Advanced' },
      { name: 'Data Analysis', description: 'Insight extraction workflow', projects: ['Reports', 'Business metrics'], level: 'Advanced' },
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
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <motion.section
      aria-label="Skills app window"
      className="absolute inset-0 z-40 overflow-hidden bg-[#050301] text-[#fff2e8]"
      initial={{ opacity: 0, scale: 0.965 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,106,26,0.34),transparent_28rem),radial-gradient(circle_at_18%_76%,rgba(255,126,47,0.18),transparent_26rem),radial-gradient(circle_at_84%_78%,rgba(255,164,92,0.16),transparent_24rem),linear-gradient(180deg,#090502_0%,#160803_48%,#030201_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,122,43,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,122,43,0.12)_1px,transparent_1px)] [background-size:42px_42px]" />
      <motion.div
        className="absolute left-1/2 top-[13%] h-[70rem] w-[70rem] -translate-x-1/2 rounded-full border border-[#ff7a2b]/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
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

      <motion.div
        className="relative z-10 flex h-screen flex-col px-4 pb-5 pt-16 sm:px-8"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="mb-3 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#ff8a3d]">Skills.app</p>
          <h1 className="mt-1 text-3xl font-black tracking-tight text-white sm:text-5xl">3D Technology Stack</h1>
        </header>

        <div className="relative mx-auto min-h-0 w-full max-w-6xl flex-1 overflow-hidden rounded-[1.6rem] border border-[#ffb07e]/18 bg-white/[0.045] shadow-[0_36px_110px_rgba(0,0,0,0.45)] backdrop-blur-2xl [perspective:1400px]">
          <div className="pointer-events-none absolute inset-x-[12%] bottom-8 top-8">
            {skillLayers.slice(0, -1).map((_, index) => (
              <motion.div
                key={`vertical-connection-${index}`}
                className="absolute left-1/2 h-[15%] w-px -translate-x-1/2 overflow-hidden bg-[#ff9a55]/20"
                style={{ top: `${12.5 + index * 15.4}%` }}
              >
                <motion.span
                  className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent via-[#ff8a3d] to-transparent shadow-[0_0_18px_rgba(255,122,43,0.95)]"
                  animate={{ y: ['-80%', '210%'] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.18, ease: 'linear' }}
                />
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 h-full overflow-y-auto px-4 py-7 sm:px-8">
            <div className="mx-auto flex min-h-full max-w-5xl flex-col items-center gap-5">
              {skillLayers.map((layer, index) => (
                <motion.article
                  key={layer.name}
                  className="group relative w-full max-w-[56rem]"
                  initial={{ opacity: 0, y: 54, rotateX: -18, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  transition={{ duration: 0.72, delay: 0.12 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActiveLayer(index)}
                  onFocus={() => setActiveLayer(index)}
                >
                  <motion.div
                    className="relative overflow-visible rounded-[1.25rem] border border-[#ffb07e]/24 bg-[linear-gradient(135deg,rgba(255,247,239,0.16),rgba(255,106,26,0.055))] px-5 py-4 shadow-[0_28px_75px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition group-hover:border-[#ff8a3d]/80"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, delay: index * 0.18, ease: 'easeInOut' }}
                    style={{
                      transform: `rotateX(10deg) rotateZ(${index % 2 === 0 ? '-0.6deg' : '0.6deg'})`,
                      boxShadow:
                        activeLayer === index
                          ? `0 0 54px ${layer.accent}44, 0 32px 90px rgba(0,0,0,0.45)`
                          : undefined,
                    }}
                  >
                    <div
                      className="pointer-events-none absolute inset-x-8 -bottom-3 h-5 rounded-full blur-xl"
                      style={{ background: `${layer.accent}55` }}
                    />
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h2 className="text-xl font-black text-white sm:text-2xl">{layer.name}</h2>
                      <span
                        className="rounded-full border border-white/10 bg-black/22 px-3 py-1 text-xs font-black tracking-[0.18em]"
                        style={{ color: layer.accent }}
                      >
                        LAYER {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                      {layer.technologies.map((tech) => (
                        <div key={tech.name} className="group/tech relative">
                          <button
                            type="button"
                            className="rounded-2xl border border-[#ffb07e]/20 bg-black/28 px-4 py-2 text-sm font-extrabold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_24px_rgba(0,0,0,0.22)] outline-none transition hover:-translate-y-1 hover:border-[#ff8a3d]/85 hover:bg-[#ff6b1a]/20 hover:shadow-[0_0_24px_rgba(255,106,26,0.34)] focus-visible:ring-2 focus-visible:ring-[#ff8a3d]"
                          >
                            {tech.name}
                          </button>

                          <div className="pointer-events-none absolute left-1/2 top-full z-30 mt-3 w-64 -translate-x-1/2 translate-y-2 rounded-2xl border border-[#ffb07e]/35 bg-[#130a06]/92 p-4 text-left opacity-0 shadow-[0_24px_70px_rgba(0,0,0,0.42),0_0_28px_rgba(255,106,26,0.22)] backdrop-blur-2xl transition duration-250 group-hover/tech:translate-y-0 group-hover/tech:opacity-100 group-focus-within/tech:translate-y-0 group-focus-within/tech:opacity-100">
                            <p className="text-base font-black text-white">{tech.name}</p>
                            <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#ff8a3d]">
                              {tech.description}
                            </p>
                            <div className="mt-3 text-xs font-semibold leading-5 text-[#ffe1cc]/86">
                              <p className="text-[#ffb07e]">Used in:</p>
                              {tech.projects.map((project) => (
                                <p key={project}>- {project}</p>
                              ))}
                              <p className="mt-3 text-[#ffb07e]">Level:</p>
                              <p>{tech.level}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
export default function CinematicIntro() {
  const progress = useIntroProgress();
  const [enteredDesktop, setEnteredDesktop] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
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
    </main>
  );
}
