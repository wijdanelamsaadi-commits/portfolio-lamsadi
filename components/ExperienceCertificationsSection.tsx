'use client';

import { motion } from 'framer-motion';
import { Sparkles, Trophy } from 'lucide-react';
import AchievementCards from './AchievementCards';
import CertificationsCard from './CertificationsCard';
import ExperienceCard from './ExperienceCard';

export default function ExperienceCertificationsSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-certifications-title"
      className="relative isolate overflow-hidden bg-[#fffdfb] px-4 py-10 text-[#111827] transition-colors duration-500 sm:px-6 sm:py-12 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-orange-100/55 blur-3xl" />
        <div className="absolute right-0 top-8 h-64 w-64 rounded-full bg-orange-50/80 blur-3xl" />
        <div className="absolute left-0 top-0 h-52 w-80 opacity-[0.07] [background-image:linear-gradient(135deg,#ff6b00_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute right-10 top-8 hidden h-24 w-28 opacity-25 [background-image:radial-gradient(#ff6b00_1.4px,transparent_1.4px)] [background-size:16px_16px] lg:block" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-200/80 bg-white/90 px-6 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-[#ff6b00] shadow-[0_12px_34px_rgba(255,107,0,0.10)] backdrop-blur">
            <Trophy size={18} strokeWidth={2.4} />
            My Journey
          </div>

          <h2
            id="experience-certifications-title"
            className="mx-auto mt-4 max-w-[22rem] text-3xl font-black uppercase leading-tight tracking-normal text-[#111827] sm:max-w-none sm:text-5xl"
          >
            <span className="text-[#ff6b00]">Experience</span> & Certifications
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-base font-medium leading-7 text-slate-600">
            Mon parcours professionnel et mes certifications qui valident mes competences.
          </p>

          <div className="mx-auto mt-3 flex max-w-xs items-center justify-center gap-4 text-[#ff6b00]">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#ff6b00]" />
            <Sparkles size={19} fill="currentColor" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#ff6b00]" />
          </div>
        </motion.div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
          <ExperienceCard />
          <CertificationsCard />
        </div>

        <AchievementCards />

        <motion.div
          className="mx-auto mt-5 flex max-w-lg items-center justify-center gap-5 text-center text-[0.68rem] font-black uppercase tracking-[0.32em] text-slate-500"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.52 }}
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#ff6b00]" />
          <span>Toujours en quete de nouveaux defis</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#ff6b00]" />
        </motion.div>
      </div>
    </section>
  );
}
