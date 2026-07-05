import { Users2 } from "lucide-react";
import { about } from "@/data/about";

export default function Who() {
  const { whoWeAre } = about;

  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Stands in for whoWeAre.image until real photography is wired up */}
        <div className="aspect-[4/3] rounded-sm bg-paper-raised border border-ink/10 flex items-center justify-center">
          <Users2 className="text-leaf" size={56} strokeWidth={1.25} />
        </div>

        <div>
          <p className="font-mono text-xs tracking-wider uppercase text-leaf mb-3">
            Who we are
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-5">
            {whoWeAre.title}
          </h2>
          <p className="text-charcoal/70 leading-relaxed">{whoWeAre.description}</p>
        </div>
      </div>
    </section>
  );
}