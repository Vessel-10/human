import {
  Heart,
  ShieldCheck,
  Users,
  Leaf,
  Globe,
  Award,
  type LucideIcon,
} from "lucide-react";
import { about } from "@/data/about";

const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  "shield-check": ShieldCheck,
  users: Users,
  leaf: Leaf,
  globe: Globe,
  award: Award,
};

// Literal class names — Tailwind needs to see these written out to detect them.
const accentBg = ["bg-clay", "bg-leaf", "bg-lake", "bg-clay", "bg-leaf", "bg-lake"];

export default function Vision() {
  const { mission, vision, values } = about;

  return (
    <>
      {/* Mission & Vision */}
      <section className="bg-ink text-paper py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
          <div className="border-l-2 border-clay pl-6">
            <p className="font-mono text-xs tracking-wider uppercase text-paper/55 mb-3">
              {mission.title}
            </p>
            <p className="font-display text-xl md:text-2xl font-medium leading-relaxed">
              {mission.description}
            </p>
          </div>
          <div className="border-l-2 border-leaf pl-6">
            <p className="font-mono text-xs tracking-wider uppercase text-paper/55 mb-3">
              {vision.title}
            </p>
            <p className="font-display text-xl md:text-2xl font-medium leading-relaxed">
              {vision.description}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-12">
            <p className="font-mono text-xs tracking-wider uppercase text-clay mb-3">
              What guides us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
              Our values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = iconMap[value.icon] ?? Heart;
              return (
                <div
                  key={value.title}
                  className="bg-paper-raised border border-ink/10 rounded-sm p-7"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${accentBg[i % accentBg.length]}`}
                  >
                    <Icon className="text-paper" size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-charcoal/65 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}