'use client';

import { motion } from 'framer-motion';
import { Award, BadgeCheck, CalendarDays, ExternalLink, FileBadge2 } from 'lucide-react';

type Certification = {
  name: string;
  year: string;
  url?: string;
};

const certifications: Certification[] = [
  {
    name: 'AWS Academy Graduate - Cloud Foundations',
    year: '2025',
  },
  {
    name: 'AWS Academy Graduate - Machine Learning Foundations',
    year: '2025',
  },
  {
    name: 'AWS Academy Graduate - Generative AI Foundations',
    year: '2025',
    url: 'https://www.linkedin.com/posts/lamsadi-wijdane-a236bb257_aws-generativeai-machinelearning-activity-7451588668139462656-YdSk',
  },
  {
    name: 'AWS Academy Graduate - Machine Learning for Natural Language Processing',
    year: '2025',
  },
  {
    name: 'AWS Academy Graduate - Engineering Operations Technician',
    year: '2025',
    url: 'https://www.linkedin.com/posts/lamsadi-wijdane-a236bb257_aws-awsacademy-cloudcomputing-activity-7449209603218866176-y2ac',
  },
];

function AwsLogo() {
  return (
    <div
      className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-orange-100 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-[#0B0B0F] dark:shadow-[0_0_24px_rgba(255,122,26,0.12)]"
      aria-label="AWS logo"
    >
      <div className="text-center leading-none">
        <span className="block text-base font-black tracking-[-0.05em] text-[#232f3e] dark:text-[#F5F5F5]">aws</span>
        <span className="mx-auto mt-1 block h-1.5 w-8 rounded-[100%] border-b-4 border-[#ff9900]" />
      </div>
    </div>
  );
}

export default function CertificationsCard() {
  return (
    <motion.article
      className="h-full rounded-[1.65rem] border border-orange-100/80 bg-white/95 p-4 shadow-[0_20px_60px_rgba(27,32,50,0.075)] transition duration-300 hover:shadow-[0_24px_76px_rgba(255,107,0,0.13)] dark:border-white/10 dark:bg-[rgba(20,22,27,0.85)] dark:text-[#F5F5F5] dark:shadow-[0_22px_70px_rgba(0,0,0,0.46)] dark:hover:shadow-[0_0_48px_rgba(255,122,26,0.18)]"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-orange-200/80 bg-white text-[#ff6b00] shadow-[0_12px_30px_rgba(255,107,0,0.13)] dark:border-[#FF7A1A]/35 dark:bg-[#0B0B0F] dark:text-[#FF7A1A] dark:shadow-[0_0_26px_rgba(255,122,26,0.18)]">
          <FileBadge2 size={25} strokeWidth={2.2} />
        </div>
        <div>
          <h3 className="text-xl font-black uppercase tracking-tight text-[#111827] dark:text-[#F5F5F5] sm:text-2xl">Certifications</h3>
          <p className="mt-0.5 text-sm font-semibold text-[#ff6b00]">Mes Certifications</p>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {certifications.map((certification, index) => (
          <motion.div
            key={certification.name}
            className="group grid gap-3 rounded-[1.1rem] border border-slate-200/80 bg-white/90 p-2.5 shadow-[0_10px_26px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_16px_36px_rgba(255,107,0,0.11)] dark:border-white/10 dark:bg-[#0B0B0F]/72 dark:shadow-[0_12px_34px_rgba(0,0,0,0.28)] dark:hover:border-[#FF7A1A]/45 dark:hover:shadow-[0_0_34px_rgba(255,122,26,0.16)] sm:grid-cols-[auto_1fr_auto] sm:items-center"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.48, delay: index * 0.06 }}
          >
            <AwsLogo />

            <div className="min-w-0 max-w-full">
              <h4 className="max-w-full break-words text-sm font-black leading-snug text-[#111827] [overflow-wrap:anywhere] dark:text-[#F5F5F5] sm:text-base">
                {certification.name}
              </h4>
              <p className="mt-1 flex items-center gap-2 text-sm font-bold text-[#ff6b00]">
                <BadgeCheck size={15} strokeWidth={2.4} />
                AWS Academy
              </p>
            </div>

            <div className="flex min-w-0 flex-wrap items-center gap-3 sm:justify-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-bold text-slate-600 dark:border-white/10 dark:bg-[#14161B] dark:text-[#B5B5B5]">
                <CalendarDays size={15} />
                {certification.year}
              </span>

              {certification.url ? (
                <a
                  href={certification.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${certification.name} certificate post`}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#ff6b00] bg-white px-3 py-1.5 text-sm font-black text-[#ff6b00] transition hover:bg-[#ff6b00] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00] focus-visible:ring-offset-2 dark:bg-[#14161B] dark:text-[#FF7A1A] dark:hover:bg-[#FF7A1A] dark:hover:text-white dark:focus-visible:ring-offset-[#0B0B0F]"
                >
                  View <ExternalLink size={16} />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-default items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm font-black text-[#ff6b00] dark:border-[#FF7A1A]/35 dark:bg-[#FF7A1A]/10 dark:text-[#FF7A1A]"
                >
                  <Award size={16} />
                  Certificate Available
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.article>
  );
}
