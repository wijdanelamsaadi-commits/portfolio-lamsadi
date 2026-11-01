import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Cloud, Code2, Database, ShieldCheck, Smartphone, Wrench, X, type LucideIcon } from 'lucide-react';
import aiBrain from '../assets/skills/ai-brain.png';

type SkillGroup = {
  title: string;
  count: string;
  Icon: LucideIcon;
  items: string[];
  position: string;
  compact?: boolean;
};

const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Machine Learning',
    count: '18+ Technologies',
    Icon: Brain,
    position: 'lg:left-[3%] lg:top-[9%] lg:h-[24%] lg:w-[31.5%]',
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
      'Autoencoder',
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
    position: 'lg:right-[3%] lg:top-[9%] lg:h-[24%] lg:w-[33%]',
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
    position: 'lg:left-[3%] lg:top-[36%] lg:h-[18%] lg:w-[31.5%]',
    items: [
      'Android',
      'Kotlin',
      'Flutter',
      'Dart',
      'React Native',
      'Firebase',
      'SQLite',
      'XML',
      'Material Design',
      'Android Studio',
      'Mobile UI/UX',
    ],
  },
  {
    title: 'Databases & Data',
    count: '10+ Technologies',
    Icon: Database,
    position: 'lg:right-[3%] lg:top-[36%] lg:h-[18%] lg:w-[33%]',
    items: [
      'MySQL',
      'PostgreSQL',
      'SQL Server',
      'H2 Database',
      'SQLite',
      'Power BI',
      'Database Design',
      'KPI Dashboards',
      'Data Analytics',
    ],
  },
  {
    title: 'Tools & DevOps',
    count: '15+ Technologies',
    Icon: Wrench,
    position: 'lg:left-[3%] lg:top-[58%] lg:h-[18%] lg:w-[31.5%]',
    items: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'IntelliJ IDEA', 'Android Studio', 'Maven', 'Postman', 'Swagger', 'Docker', 'n8n', 'VMware'],
  },
  {
    title: 'Cloud Architecture',
    count: '8+ Technologies',
    Icon: Cloud,
    position: 'lg:left-[36.5%] lg:top-[65%] lg:h-[15%] lg:w-[27%]',
    compact: true,
    items: ['AWS', 'AWS Cloud Foundations', 'API Architecture', 'Microservices', 'System Design', 'Client-Server Architecture'],
  },
  {
    title: 'Cybersecurity',
    count: '10+ Technologies',
    Icon: ShieldCheck,
    position: 'lg:right-[3%] lg:top-[58%] lg:h-[18%] lg:w-[33%]',
    items: ['Network Security', 'VPN', 'IPSec', 'GRE', 'Firewall', 'ACL', 'SHA-256', 'Authentication', 'Authorization'],
  },
];

const skillStats = ['65+ Technologies', '13 Projects Completed', '4 AWS Certifications'];

const logoSlugMap: Record<string, string> = {
  Android: 'android',
  'Android Studio': 'androidstudio',
  Bootstrap: 'bootstrap',
  Dart: 'dart',
  Docker: 'docker',
  Eclipse: 'eclipseide',
  FastAPI: 'fastapi',
  Firebase: 'firebase',
  Flutter: 'flutter',
  Git: 'git',
  GitHub: 'github',
  HTML5: 'html5',
  'IntelliJ IDEA': 'intellijidea',
  Java: 'openjdk',
  JavaScript: 'javascript',
  Keras: 'keras',
  Kotlin: 'kotlin',
  Maven: 'apachemaven',
  MySQL: 'mysql',
  'Next.js': 'nextdotjs',
  NumPy: 'numpy',
  OpenCV: 'opencv',
  Pandas: 'pandas',
  PHP: 'php',
  PostgreSQL: 'postgresql',
  Python: 'python',
  React: 'react',
  'React Native': 'react',
  'Scikit-Learn': 'scikitlearn',
  SQLite: 'sqlite',
  Swagger: 'swagger',
  'Tailwind CSS': 'tailwindcss',
  TensorFlow: 'tensorflow',
  TypeScript: 'typescript',
};

const fallbackBadgeColors: Record<string, string> = {
  DeepFace: '#22c55e',
  EasyOCR: '#0ea5e9',
  XGBoost: '#16a34a',
  Autoencoder: '#6366f1',
  'Siamese Networks': '#8b5cf6',
  Streamlit: '#ff4b4b',
  'Machine Learning': '#2563eb',
  'Deep Learning': '#4f46e5',
  'Computer Vision': '#0891b2',
  NLP: '#7c3aed',
  JWT: '#111827',
  Hibernate: '#59666c',
  'Spring Boot': '#6db33f',
  'Spring MVC': '#6db33f',
  'Spring Data JPA': '#6db33f',
  'REST API': '#14b8a6',
  XML: '#f97316',
  'Material Design': '#22c55e',
  'Mobile UI/UX': '#2563eb',
  'KPI Dashboards': '#f59e0b',
  'Data Analytics': '#84cc16',
  'Database Design': '#64748b',
  Postman: '#ff6c37',
  n8n: '#ea4b71',
  VMware: '#607078',
  'AWS Cloud Foundations': '#ff9900',
  'API Architecture': '#0ea5e9',
  Microservices: '#3b82f6',
  'System Design': '#64748b',
  'Client-Server Architecture': '#0f766e',
  'Network Security': '#2563eb',
  VPN: '#0ea5e9',
  IPSec: '#2563eb',
  GRE: '#64748b',
  Firewall: '#ef4444',
  ACL: '#64748b',
  'SHA-256': '#0f766e',
  Authentication: '#0ea5e9',
  Authorization: '#2563eb',
};

function getLogoUrl(label: string) {
  const slug = logoSlugMap[label];
  return slug ? `https://cdn.simpleicons.org/${slug}` : undefined;
}

function getFallbackInitial(label: string) {
  return label
    .split(/[\s/-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function SkillBadge({ label, index }: { label: string; index: number }) {
  const logoUrl = getLogoUrl(label);
  const fallbackColor = fallbackBadgeColors[label] || '#ff7a00';

  return (
    <motion.span
      className="relative z-20 inline-flex min-h-[1.08rem] items-center gap-1 rounded-md border border-[#f2dfd1] bg-white/92 px-1.5 py-[0.12rem] text-[7px] font-extrabold leading-none text-[#3c2a1f] shadow-[0_4px_12px_rgba(92,50,25,0.07)] backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#14161B]/90 dark:text-[#F5F5F5] dark:shadow-[0_4px_16px_rgba(0,0,0,0.32)] dark:hover:border-[#FF7A1A]/70 sm:text-[7.7px] xl:px-1.5 xl:text-[8.1px]"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: 0.16 + index * 0.012, ease: 'easeOut' }}
      whileHover={{
        y: -2,
        scale: 1.055,
        backgroundColor: 'rgba(255, 247, 237, 0.98)',
        boxShadow: '0 8px 22px rgba(255, 107, 0, 0.18)',
      }}
    >
      {logoUrl ? (
        <img src={logoUrl} alt="" className="h-2.5 w-2.5 shrink-0 object-contain" loading="lazy" />
      ) : (
        <span
          className="grid h-2.5 w-2.5 shrink-0 place-items-center rounded-[0.22rem] text-[5.2px] font-black leading-none text-white"
          style={{ backgroundColor: fallbackColor }}
        >
          {getFallbackInitial(label)}
        </span>
      )}
      {label}
    </motion.span>
  );
}

function SkillPanel({ group, index }: { group: SkillGroup; index: number }) {
  const Icon = group.Icon;

  return (
    <motion.article
      className={`isolate relative z-20 overflow-hidden rounded-[1.25rem] border border-white/70 bg-white/70 p-2 text-[#16110d] shadow-[0_18px_46px_rgba(80,47,28,0.12)] backdrop-blur-2xl transition-colors dark:border-white/10 dark:bg-[rgba(20,22,27,0.85)] dark:text-[#F5F5F5] dark:shadow-[0_18px_54px_rgba(0,0,0,0.45)] lg:absolute ${group.position}`}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.48, delay: 0.14 + index * 0.055, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: '0 24px 62px rgba(255, 107, 26, 0.18)' }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_12%_10%,rgba(255,107,26,0.1),transparent_10rem),linear-gradient(135deg,rgba(255,255,255,0.8),rgba(255,255,255,0.24))] dark:bg-[radial-gradient(circle_at_12%_10%,rgba(255,122,26,0.18),transparent_10rem),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))]" />
      <div className="relative z-20 flex items-center gap-2">
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-[#ffd3b6] bg-white text-[#ff6b00] shadow-[0_0_20px_rgba(255,107,26,0.22)] dark:border-[#FF7A1A]/35 dark:bg-[#0B0B0F] dark:text-[#FF7A1A] dark:shadow-[0_0_26px_rgba(255,122,26,0.22)] lg:h-9 lg:w-9">
          <Icon size={20} strokeWidth={2.35} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
            <h2 className="text-[9.5px] font-black uppercase leading-tight tracking-normal text-[#16110d] dark:text-[#F5F5F5] lg:text-[10px] xl:text-[11px]">{group.title}</h2>
            <p className="text-[7.5px] font-black leading-tight text-[#ff6b00] lg:text-[8px] xl:text-[8.5px]">{group.count}</p>
          </div>
        </div>
      </div>
      <div className={`relative z-20 flex flex-wrap content-start gap-1 ${group.compact ? 'mt-1.5' : 'mt-2'}`}>
        {group.items.map((item, itemIndex) => (
          <SkillBadge key={`${group.title}-${item}`} label={item} index={itemIndex} />
        ))}
      </div>
    </motion.article>
  );
}

export default function SkillsWindow({ onBack }: { onBack: () => void }) {
  return (
    <motion.section
      aria-label="Skills app window"
      className="absolute inset-0 z-40 overflow-hidden bg-[#fff7f0] text-[#15100d] transition-colors duration-500 dark:bg-[#0B0B0F] dark:text-[#F5F5F5]"
      initial={{ opacity: 0, scale: 0.965 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(255,107,26,0.17),transparent_18rem),radial-gradient(circle_at_14%_12%,rgba(255,176,117,0.2),transparent_22rem),radial-gradient(circle_at_88%_82%,rgba(255,209,176,0.3),transparent_20rem),linear-gradient(135deg,#fffaf6,#f8ece2)] dark:bg-[radial-gradient(circle_at_50%_43%,rgba(255,122,26,0.22),transparent_18rem),radial-gradient(circle_at_14%_12%,rgba(255,122,26,0.12),transparent_22rem),radial-gradient(circle_at_88%_82%,rgba(255,122,26,0.10),transparent_20rem),linear-gradient(135deg,#0B0B0F,#14161B)]" />
      <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(255,107,26,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,26,0.08)_1px,transparent_1px)] [background-size:42px_42px] dark:opacity-25" />
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,107,26,0.34)_1px,transparent_1px)] [background-size:24px_24px] dark:opacity-20" />

      <button
        type="button"
        aria-label="Back to desktop"
        title="Back"
        onClick={onBack}
        className="absolute left-5 top-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-orange-200/80 bg-white/78 text-[#8a4317] shadow-[0_16px_34px_rgba(86,42,16,0.16)] backdrop-blur-2xl transition hover:-translate-x-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f06b18] dark:border-white/10 dark:bg-[rgba(20,22,27,0.85)] dark:text-[#F5F5F5] dark:shadow-[0_0_34px_rgba(255,122,26,0.18)] dark:hover:bg-[#1d2028]"
      >
        <ArrowLeft size={21} strokeWidth={2.4} />
      </button>

      <div className="absolute right-4 top-4 z-40 flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/80 bg-white/70 text-[#ff6b00] shadow-[0_10px_24px_rgba(73,38,18,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[#14161B]/85 dark:text-[#FF7A1A]">
          <span className="h-0.5 w-3.5 rounded-full bg-current" />
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/80 bg-white/70 text-[#ff6b00] shadow-[0_10px_24px_rgba(73,38,18,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[#14161B]/85 dark:text-[#FF7A1A]">
          <span className="h-3 w-3 rounded-[3px] border-2 border-current" />
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/80 bg-white/70 text-[#ff6b00] shadow-[0_10px_24px_rgba(73,38,18,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[#14161B]/85 dark:text-[#FF7A1A]">
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
          <h1 className="text-3xl font-black leading-none tracking-normal text-[#120f0d] dark:text-[#F5F5F5] sm:text-4xl lg:text-[2.45rem]">
            SKILLS <span className="text-[#ff6b00]">CONTROL CENTER</span>
          </h1>
          <p className="mt-2 text-sm font-semibold text-[#6d5445] dark:text-[#B5B5B5]">Explore my technical universe</p>
          <div className="mx-auto mt-2 flex w-24 items-center justify-center">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#ff6b00]" />
            <span className="mx-2 h-2 w-2 rounded-full bg-[#ff6b00] shadow-[0_0_12px_rgba(255,107,0,0.65)]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#ff6b00]" />
          </div>
        </motion.header>

        <svg className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="skill-line-glow">
              <feGaussianBlur stdDeviation="0.62" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {[
            'M34.5 21 C40 22 43 29 48 38',
            'M65.5 21 C60 22 57 29 52 38',
            'M34.5 45 C40 45 43 45 48 45',
            'M65.5 45 C60 45 57 45 52 45',
            'M34.5 68 C42 65 45 56 49 51',
            'M50 72 C50 63 50 57 50 51',
            'M65.5 68 C58 65 55 56 51 51',
          ].map((path) => (
            <g key={path} filter="url(#skill-line-glow)">
              <path d={path} fill="none" stroke="rgba(255,107,0,0.24)" strokeWidth="0.7" strokeLinecap="round" />
              <path d={path} fill="none" stroke="rgba(255,107,0,0.45)" strokeWidth="0.2" strokeLinecap="round" />
            </g>
          ))}
          {[35, 65].map((x) =>
            [21, 45, 68].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="0.38" fill="#fff7ed" stroke="#ffb35f" strokeWidth="0.18" />
            )),
          )}
          <circle cx="50" cy="72" r="0.38" fill="#fff7ed" stroke="#ffb35f" strokeWidth="0.18" />
        </svg>

        <div className="relative mx-auto mt-7 grid max-w-6xl gap-3 lg:absolute lg:inset-x-0 lg:top-0 lg:mx-0 lg:mt-0 lg:h-full lg:max-w-none lg:px-6">
          <motion.div
            className="relative z-20 order-first mx-auto grid min-h-72 w-full max-w-[26rem] place-items-center rounded-[2rem] lg:absolute lg:left-[35%] lg:top-[15%] lg:min-h-0 lg:w-[30%]"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute h-72 w-72 rounded-full border border-[#ffb45f]/35 shadow-[0_0_58px_rgba(255,122,0,0.22)] lg:h-[27rem] lg:w-[27rem]"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute h-60 w-60 rounded-full border border-dashed border-[#ffb45f]/60 shadow-[inset_0_0_36px_rgba(255,122,0,0.16)] lg:h-[24rem] lg:w-[24rem]"
              animate={{ rotate: -360 }}
              transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute h-52 w-52 rounded-full border border-[#ffd3a4]/55 shadow-[0_0_44px_rgba(255,140,50,0.2),inset_0_0_34px_rgba(255,122,0,0.08)] lg:h-[21rem] lg:w-[21rem]"
              animate={{ scale: [1, 1.04, 1], opacity: [0.58, 0.86, 0.58] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(255,122,0,0.22),rgba(255,122,0,0.06)_48%,transparent_72%)] blur-sm lg:h-[24rem] lg:w-[24rem]"
              animate={{ scale: [1, 1.08, 1], opacity: [0.72, 1, 0.72] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative grid h-[18.75rem] w-[18.75rem] place-items-center lg:h-[25.5rem] lg:w-[25.5rem]">
              <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(255,122,0,0.24),rgba(255,122,0,0.09)_50%,transparent_74%)] blur-2xl lg:inset-10" />
              <img
                src={aiBrain}
                alt="AI Brain"
                width={410}
                height={410}
                fetchPriority="high"
                className="relative z-10 h-auto w-[18.75rem] max-w-none object-contain select-none pointer-events-none lg:w-[25.5rem]"
              />
            </div>
            <div className="mt-[17rem] text-center lg:absolute lg:top-[19.3rem] lg:mt-0">
              <h2 className="text-xl font-black text-[#17100b] dark:text-[#F5F5F5]">AI CORE</h2>
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
          className="relative z-30 mt-5 grid gap-2 rounded-[1.25rem] border border-white/70 bg-white/62 p-3 text-center text-[11px] font-black text-[#513727] shadow-[0_16px_40px_rgba(73,38,18,0.11)] backdrop-blur-2xl dark:border-white/10 dark:bg-[rgba(20,22,27,0.85)] dark:text-[#F5F5F5] dark:shadow-[0_18px_48px_rgba(0,0,0,0.42)] sm:grid-cols-3 lg:absolute lg:bottom-3 lg:left-[21%] lg:mt-0 lg:w-[58%]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {skillStats.map((stat) => (
            <div key={stat} className="rounded-xl border border-[#ffe2cf] bg-white/62 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.88)] dark:border-white/10 dark:bg-[#0B0B0F]/70 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              {stat}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
