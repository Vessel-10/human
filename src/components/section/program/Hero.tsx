import Link from "next/link";
import { HeartPulse, type LucideIcon } from "lucide-react";
import type { Program } from "@/data/programs";

const iconMap: Record<string, LucideIcon> = {
  "heart-pulse": HeartPulse,
};

export default function Hero({ program }: { program: Program }) {
  const Icon = iconMap[program.icon] ?? HeartPulse;
  const { hero } = program;

  return (
    <section className="bg-ink text-paper pt-28 pb-20 md:pt-36 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div>
          <p className="font-mono text-xs tracking-wider uppercase text-clay mb-5">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold max-w-2xl leading-tight">
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
        </div>

        {/* Icon badge stands in for hero.image until real program photography is wired up */}
        <div className="hidden md:flex w-40 h-40 rounded-full bg-clay/15 border border-clay/30 items-center justify-center shrink-0">
          <Icon className="text-clay" size={64} strokeWidth={1.25} />
        </div>
      </div>
    </section>
  );
}