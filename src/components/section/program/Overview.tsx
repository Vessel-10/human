import type { Program } from "@/data/programs";

export default function Overview({ program }: { program: Program }) {
  const { overview } = program;

  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="font-mono text-xs tracking-wider uppercase text-clay mb-3">
          Overview
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-5">
          {overview.title}
        </h2>
        <p className="text-charcoal/70 leading-relaxed text-base md:text-lg">
          {overview.description}
        </p>
      </div>
    </section>
  );
}