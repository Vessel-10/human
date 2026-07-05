import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  BookOpen,
  Droplet,
  UtensilsCrossed,
  Home as HomeIcon,
  type LucideIcon,
} from "lucide-react";
import { home } from "@/data/home";
import { programs } from "@/data/programs";

const iconMap: Record<string, LucideIcon> = {
  "heart-pulse": HeartPulse,
  "book-open": BookOpen,
  droplet: Droplet,
  utensils: UtensilsCrossed,
  home: HomeIcon,
};

// Literal class names — Tailwind needs to see these written out to detect them.
const accentBg = ["bg-clay", "bg-leaf", "bg-lake", "bg-clay", "bg-leaf"];

export default function Programs() {
  const { programs: copy } = home;

  return (
    <section className="bg-paper-raised py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="font-mono text-xs tracking-wider uppercase text-clay mb-3">
              Our programs
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              {copy.title}
            </h2>
            <p className="text-charcoal/70 leading-relaxed">{copy.description}</p>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-charcoal hover:text-clay transition-colors shrink-0"
          >
            View all programs <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon] ?? HeartPulse;
            return (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group bg-paper border border-ink/10 rounded-sm p-7 hover:-translate-y-1 transition-transform"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${accentBg[i % accentBg.length]}`}
                >
                  <Icon className="text-paper" size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                  {program.hero.title}
                </h3>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  {program.hero.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}