import { CheckCircle2 } from "lucide-react";
import { about } from "@/data/about";

export default function Approach() {
  const { approach } = about;

  return (
    <section className="bg-paper-raised py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="font-mono text-xs tracking-wider uppercase text-leaf mb-3">
            Our approach
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-5">
            {approach.title}
          </h2>
          <p className="text-charcoal/70 leading-relaxed">{approach.description}</p>
        </div>

        <ul className="flex flex-col gap-4">
          {approach.points.map((point) => (
            <li
              key={point}
              className="flex gap-3 items-center bg-paper border border-ink/10 rounded-sm p-4"
            >
              <CheckCircle2 className="text-leaf shrink-0" size={18} strokeWidth={1.5} />
              <span className="text-sm text-charcoal/75 font-medium">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}