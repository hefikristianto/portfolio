import AtomParallax from '../effects/AtomParallax';

export default function Hero() {
  return (
    <section id="home" className="grid min-h-screen items-center gap-14 px-6 pt-28 md:px-20 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="relative z-10 reveal-up reveal-delay-1">
        <p className="mb-6 text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
          AI Researcher - Web Developer
        </p>

        <h1 className="text-7xl font-black leading-[0.82] tracking-[-0.08em] md:text-8xl lg:text-[9.8rem]">
          HEFI
          <span className="block text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.65)]">
            KRISTIANTO
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400 md:text-xl">
          Cinematic portfolio untuk web development, AI research, computer vision,
          dan sistem analisis chart yang dibuat seperti pengalaman interaktif.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-full bg-cyan-300 px-7 py-3 font-bold text-black transition hover:-translate-y-1">
            Explore Work
          </a>

          <a href="#contact" className="rounded-full border border-white/15 px-7 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10">
            Contact
          </a>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end reveal-up reveal-delay-2">
        <AtomParallax />
      </div>
    </section>
  );
}
