import { AlertCircle } from "lucide-react";
import type { Program } from "@/data/programs";

export default function Challenge({ program }: { program: Program }) {
  const { challenge } = program;

  return (
    <section className="bg-paper-raised py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="font-mono text-xs tracking-wider uppercase text-clay mb-3">
            The challenge
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-5">
            {challenge.title}
          </h2>
          <p className="text-charcoal/70 leading-relaxed">{challenge.description}</p>
        </div>

        <ul className="flex flex-col gap-4">
          {challenge.points.map((point) => (
            <li
              key={point}
              className="flex gap-3 items-start bg-paper border border-ink/10 rounded-sm p-4"
            >
              <AlertCircle className="text-clay shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
              <span className="text-sm text-charcoal/75 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}