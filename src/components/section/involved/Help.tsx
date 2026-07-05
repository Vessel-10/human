import { Heart, Users, Handshake, Share2, type LucideIcon } from "lucide-react";
import { getInvolved } from "@/data/involved";

const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  users: Users,
  handshake: Handshake,
  share: Share2,
};

// Literal class names — Tailwind needs to see these written out to detect them.
const accentBg = ["bg-clay", "bg-leaf", "bg-lake", "bg-clay"];

export default function Help() {
  const { waysToHelp } = getInvolved;

  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-wider uppercase text-clay mb-3">
            Get involved
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
            {waysToHelp.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {waysToHelp.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Heart;
            return (
              <div
                key={item.title}
                className="bg-paper-raised border border-ink/10 rounded-sm p-7"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${accentBg[i % accentBg.length]}`}
                >
                  <Icon className="text-paper" size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}