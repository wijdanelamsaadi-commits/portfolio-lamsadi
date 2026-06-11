'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Folder, Mail, Monitor, PanelsTopLeft, UserRound } from 'lucide-react';

const INTRO_DURATION_MS = 7200;
const DESKTOP_REVEAL_MS = 6100;
const BASE_PATH = '/portfolio-lamsadi';

const dockItems = [
  { label: 'Profile', icon: UserRound },
  { label: 'Work', icon: Folder },
  { label: 'Interface', icon: PanelsTopLeft },
  { label: 'Contact', icon: Mail },
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

export default function CinematicIntro() {
  const progress = useIntroProgress();
  const [enteredDesktop, setEnteredDesktop] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
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
        <motion.div className="absolute inset-0" style={{ x: reverseParallaxX, y: reverseParallaxY }}>
          <Image
            src={`${BASE_PATH}/assets/portfolio-desktop.png`}
            alt="Wijdane Lamsadi portfolio desktop interface"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0)_18%,rgba(70,28,8,0.08)_100%)]" />

        <AnimatePresence>
          {enteredDesktop && (
            <>
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

              <motion.nav
                key={introComplete ? 'dock-complete' : 'dock-enter'}
                aria-label="Desktop dock"
                className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-[1.7rem] border border-white/50 bg-white/40 px-4 py-3 shadow-[0_24px_70px_rgba(74,32,9,0.2)] backdrop-blur-2xl"
                initial={introComplete ? false : { y: 42, opacity: 0, scale: 0.96 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                style={
                  introComplete
                    ? { opacity: 1, transform: 'translateX(-50%) translateY(0px) scale(1)' }
                    : undefined
                }
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {dockItems.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    type="button"
                    className="group grid h-12 w-12 place-items-center rounded-2xl bg-white/75 text-[#1c140f] shadow-[0_10px_24px_rgba(70,32,9,0.13)] outline-none transition duration-300 hover:-translate-y-2 hover:bg-white focus-visible:ring-2 focus-visible:ring-[#ff6b1a]"
                    aria-label={label}
                    title={label}
                  >
                    <Icon size={22} strokeWidth={2.1} />
                  </button>
                ))}
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </motion.section>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-8 mx-auto w-fit rounded-full border border-white/10 bg-black/25 px-5 py-2 text-xs font-medium uppercase tracking-[0.28em] text-white/70 backdrop-blur-xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: [0, 1, 1, 0], y: [12, 0, 0, -8] }}
        transition={{ duration: 5.4, times: [0, 0.18, 0.74, 1], ease: 'easeOut' }}
      >
        Entering portfolio
      </motion.div>
    </main>
  );
}
