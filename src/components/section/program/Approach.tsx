import { Stethoscope, Users, ShieldCheck, Baby, type LucideIcon } from "lucide-react";
import type { Program } from "@/data/programs";

const iconMap: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  users: Users,
  "shield-heart": ShieldCheck,
  baby: Baby,
};

// Literal class names — Tailwind needs to see these written out to detect them.
const accentBg = ["bg-clay", "bg-leaf", "bg-lake", "bg-clay"];

export default function Approach({ program }: { program: Program }) {
  const { approach } = program;

  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs tracking-wider uppercase text-leaf mb-3">
            How we help
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
            {approach.title}
          </h2>
          <p className="text-charcoal/70 leading-relaxed">{approach.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approach.benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] ?? Stethoscope;
            return (
              <div
                key={benefit.title}
                className="bg-paper-raised border border-ink/10 rounded-sm p-7"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${accentBg[i % accentBg.length]}`}
                >
                  <Icon className="text-paper" size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}