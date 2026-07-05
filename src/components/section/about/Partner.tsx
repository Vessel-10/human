import { Building2 } from "lucide-react";
import { about } from "@/data/about";

export default function Partners() {
  const { partners } = about;

  return (
    <section className="bg-paper-raised py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <p className="font-mono text-xs tracking-wider uppercase text-lake mb-3">
          Our partners
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-5">
          {partners.title}
        </h2>
        <p className="text-charcoal/70 leading-relaxed max-w-2xl mx-auto mb-12">
          {partners.description}
        </p>

        {/* Placeholder slots — there's no partner logo list in about.ts yet.
            Swap this grid for real logos once you have a partners collection. */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[3/2] rounded-sm border border-dashed border-ink/20 flex items-center justify-center"
            >
              <Building2 className="text-charcoal/25" size={28} strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}