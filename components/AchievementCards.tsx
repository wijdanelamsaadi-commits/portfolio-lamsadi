'use client';

import { motion } from 'framer-motion';
import { BookOpen, Handshake, LineChart, Rocket, type LucideIcon } from 'lucide-react';

type Achievement = {
  title: string;
  text: string;
  Icon: LucideIcon;
};

const achievements: Achievement[] = [
  {
    title: 'Learn',
    text: 'Continuous learning through certifications and hands-on projects.',
    Icon: BookOpen,
  },
  {
    title: 'Build',
    text: 'Transforming ideas into real-world applications.',
    Icon: Rocket,
  },
  {
    title: 'Analyze',
    text: 'Using data and AI to solve complex problems.',
    Icon: LineChart,
  },
  {
    title: 'Collaborate',
    text: 'Working effectively in Agile teams.',
    Icon: Handshake,
  },
];

export default function AchievementCards() {
  return (
    <motion.div
      className="mt-4 grid gap-3 rounded-[1.45rem] border border-orange-100/80 bg-white/95 p-2.5 shadow-[0_18px_52px_rgba(27,32,50,0.07)] dark:border-white/10 dark:bg-[rgba(20,22,27,0.85)] dark:shadow-[0_22px_60px_rgba(0,0,0,0.42)] sm:grid-cols-2 lg:grid-cols-4"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {achievements.map((achievement, index) => {
        const Icon = achievement.Icon;
        return (
          <motion.article
            key={achievement.title}
            className="group rounded-[1.15rem] border border-transparent p-2.5 transition duration-300 hover:-translate-y-1 hover:border-orange-100 hover:bg-orange-50/45 dark:hover:border-[#FF7A1A]/35 dark:hover:bg-[#FF7A1A]/8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
          >
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-orange-200 bg-orange-50 text-[#ff6b00] shadow-[0_10px_26px_rgba(255,107,0,0.10)] transition group-hover:scale-105 group-hover:bg-white dark:border-[#FF7A1A]/35 dark:bg-[#14161B] dark:text-[#FF7A1A] dark:shadow-[0_0_24px_rgba(255,122,26,0.12)] dark:group-hover:bg-[#0B0B0F]">
              <Icon size={23} strokeWidth={2.1} />
            </div>
            <h3 className="mt-2.5 text-sm font-black uppercase tracking-wide text-[#111827] dark:text-[#F5F5F5]">{achievement.title}</h3>
            <p className="mt-1.5 text-sm font-medium leading-5 text-slate-600 dark:text-[#B5B5B5]">{achievement.text}</p>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
