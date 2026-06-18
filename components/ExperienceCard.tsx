'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BarChart3, BriefcaseBusiness, Code2, Database, MapPin, UsersRound } from 'lucide-react';

const BASE_PATH = '/portfolio-lamsadi';

const achievements = [
  {
    icon: Code2,
    title: 'Application GMAO',
    text: 'Concu et developpe une application GMAO utilisee par plus de 200 techniciens.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards Power BI',
    text: 'Cree 5 dashboards Power BI interactifs avec plus de 15 KPIs.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    text: 'Modelise plusieurs bases de donnees relationnelles et optimise les requetes SQL.',
  },
  {
    icon: UsersRound,
    title: 'Agile / Scrum',
    text: 'Collabore avec une equipe d ingenieurs en methodologie Agile/Scrum.',
  },
];

export default function ExperienceCard() {
  return (
    <motion.article
      className="h-full rounded-[1.65rem] border border-orange-100/80 bg-white/95 p-4 shadow-[0_20px_60px_rgba(27,32,50,0.075)] transition duration-300 hover:shadow-[0_24px_76px_rgba(255,107,0,0.13)] dark:border-white/10 dark:bg-[rgba(20,22,27,0.85)] dark:text-[#F5F5F5] dark:shadow-[0_22px_70px_rgba(0,0,0,0.46)] dark:hover:shadow-[0_0_48px_rgba(255,122,26,0.18)]"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-orange-200/80 bg-white text-[#ff6b00] shadow-[0_12px_30px_rgba(255,107,0,0.13)] dark:border-[#FF7A1A]/35 dark:bg-[#0B0B0F] dark:text-[#FF7A1A] dark:shadow-[0_0_26px_rgba(255,122,26,0.18)]">
          <BriefcaseBusiness size={25} strokeWidth={2.2} />
        </div>
        <div>
          <h3 className="text-xl font-black uppercase tracking-tight text-[#111827] dark:text-[#F5F5F5] sm:text-2xl">Experience</h3>
          <p className="mt-0.5 text-sm font-semibold text-[#ff6b00]">Experience Professionnelle</p>
        </div>
      </div>

      <div className="mt-3 rounded-[1.35rem] border border-slate-200/80 bg-white/90 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] dark:border-white/10 dark:bg-[#0B0B0F]/72 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="grid gap-3 sm:grid-cols-[4.4rem_1fr]">
          <div className="relative hidden justify-center sm:flex">
            <motion.div
              className="absolute bottom-1 top-0 w-px bg-gradient-to-b from-[#FF7A1A] via-[#FF7A1A] to-orange-200 dark:to-[#FF7A1A]/15"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
            />
            <div className="relative z-10 h-fit rounded-lg border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm font-black text-[#ff6b00] shadow-sm dark:border-[#FF7A1A]/35 dark:bg-[#14161B] dark:text-[#FF7A1A]">
              2025
            </div>
            <motion.span
              className="absolute top-[38%] z-10 h-4 w-4 rounded-full border-4 border-orange-100 bg-[#ff6b00] shadow-[0_0_0_7px_rgba(255,107,0,0.12),0_0_24px_rgba(255,107,0,0.34)]"
              animate={{ boxShadow: ['0 0 0 7px rgba(255,107,0,0.10)', '0 0 0 13px rgba(255,107,0,0.03)', '0 0 0 7px rgba(255,107,0,0.10)'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex rounded-lg border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm font-black text-[#ff6b00] dark:border-[#FF7A1A]/35 dark:bg-[#14161B] dark:text-[#FF7A1A] sm:hidden">
                  2025
                </span>
                <h4 className="mt-3 text-base font-black uppercase leading-tight text-[#111827] dark:text-[#F5F5F5] sm:mt-0">
                  Stage Developpement Logiciel & Data Engineering
                </h4>
                <p className="mt-0.5 text-lg font-black uppercase text-[#ff6b00]">Groupe OCP</p>
                <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-[#B5B5B5]">
                  <MapPin size={16} className="text-[#ff6b00]" />
                  Jorf Lasfar, El Jadida
                </p>
              </div>
              <div className="hidden sm:block">
                <Image
                  src={`${BASE_PATH}/assets/ocp-logo.png`}
                  alt="OCP Logo"
                  width={110}
                  height={110}
                  className="h-auto w-[110px] object-contain"
                />
              </div>
            </div>

            <p className="mt-2.5 border-b border-dashed border-orange-200 pb-2.5 text-sm font-medium leading-6 text-slate-700 dark:border-[#FF7A1A]/25 dark:text-[#B5B5B5]">
              Stage au sein du Groupe OCP, centre sur le developpement logiciel, la data engineering,
              l analyse decisionnelle et l optimisation des processus de maintenance.
            </p>

            <div className="mt-2.5 space-y-1.5">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group grid gap-2.5 rounded-xl border border-transparent p-1.5 transition hover:border-orange-100 hover:bg-orange-50/45 dark:hover:border-[#FF7A1A]/35 dark:hover:bg-[#FF7A1A]/8 sm:grid-cols-[3.1rem_1fr]"
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-orange-200 bg-orange-50 text-[#ff6b00] transition group-hover:scale-105 group-hover:bg-white dark:border-[#FF7A1A]/35 dark:bg-[#14161B] dark:text-[#FF7A1A] dark:group-hover:bg-[#0B0B0F]">
                      <Icon size={21} strokeWidth={2.1} />
                    </div>
                    <div>
                      <h5 className="text-sm font-black text-[#111827] dark:text-[#F5F5F5]">{item.title}</h5>
                      <p className="mt-0.5 text-sm font-medium leading-[1.3rem] text-slate-600 dark:text-[#B5B5B5]">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
