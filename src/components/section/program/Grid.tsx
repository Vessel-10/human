import Link from "next/link";
import {
  HeartPulse,
  BookOpen,
  Droplet,
  UtensilsCrossed,
  Home,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { programs } from "@/data/programs";

// Covers the current program plus the icon keys the other four programs
// (Education, Water & Sanitation, Nutrition, Shelter) will likely use.
// Falls back to HeartPulse for any icon key not yet mapped.
const iconMap: Record<string, LucideIcon> = {
  "heart-pulse": HeartPulse,
  "book-open": BookOpen,
  droplet: Droplet,
  utensils: UtensilsCrossed,
  home: Home,
};

// Literal class names — Tailwind needs to see these written out to detect them.
const accentBg = ["bg-clay", "bg-leaf", "bg-lake", "bg-clay", "bg-leaf"];

export default function ProgramsGrid() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon] ?? HeartPulse;
            return (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group bg-paper-raised border border-ink/10 rounded-sm p-7 hover:-translate-y-1 transition-transform"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${accentBg[i % accentBg.length]}`}
                >
                  <Icon className="text-paper" size={22} strokeWidth={1.5} />
                </div>
                <h2 className="font-display text-xl font-semibold text-charcoal mb-3">
                  {program.hero.title}
                </h2>
                <p className="text-sm text-charcoal/65 leading-relaxed mb-6">
                  {program.hero.description}
                </p>
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-charcoal group-hover:text-clay transition-colors">
                  Learn more
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}