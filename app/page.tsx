import CinematicIntro from '@/components/CinematicIntro';

export default function Home() {
  return (
    <>
      <CinematicIntro />
      <section id="experience" className="min-h-screen bg-[#fff7f0] px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">
            My Journey
          </p>
          <h2 className="mt-4 text-4xl font-black text-[#1a100b] md:text-6xl">
            Experience & Certifications
          </h2>
          <p className="mt-4 text-[#5b4638]">
            My professional experience, academic journey and certifications.
          </p>
        </div>
      </section>
    </>
  );
}