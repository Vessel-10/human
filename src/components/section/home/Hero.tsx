import Link from "next/link";
import { home } from "@/data/home";

export default function Hero() {
  const { hero } = home;

  return (
    <section className="bg-ink text-paper pt-28 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="font-mono text-xs tracking-wider uppercase text-clay mb-6">
          {hero.eyebrow}
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold max-w-3xl leading-tight">
          {hero.title}
        </h1>
        <p className="mt-6 text-paper/70 max-w-xl text-base md:text-lg leading-relaxed">
          {hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-9">
          <Link
            href={hero.primaryCTA.href}
            className="inline-flex items-center justify-center rounded-sm bg-clay px-7 py-3.5 text-sm font-medium text-ink hover:-translate-y-0.5 transition-transform"
          >
            {hero.primaryCTA.text}
          </Link>
          <Link
            href={hero.secondaryCTA.href}
            className="inline-flex items-center justify-center rounded-sm border border-paper/30 px-7 py-3.5 text-sm font-medium text-paper hover:border-paper transition-colors"
          >
            {hero.secondaryCTA.text}
          </Link>
        </div>

        <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-paper/15">
          {hero.highlights.map((h) => (
            <span
              key={h}
              className="font-mono text-[11px] uppercase tracking-wider text-paper/70 border border-paper/20 rounded-full px-4 py-2"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}