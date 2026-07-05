import Link from "next/link";
import type { Program } from "@/data/programs";

export default function Cta({ program }: { program: Program }) {
  const { finalCTA } = program;

  return (
    <section className="bg-ink text-paper py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-xl mx-auto leading-tight">
          {finalCTA.title}
        </h2>
        <p className="mt-5 text-paper/70 max-w-md mx-auto">{finalCTA.description}</p>
        <div className="flex justify-center mt-9">
          <Link
            href={finalCTA.button.href}
            className="inline-flex items-center justify-center rounded-sm bg-clay px-7 py-3.5 text-sm font-medium text-ink hover:-translate-y-0.5 transition-transform"
          >
            {finalCTA.button.text}
          </Link>
        </div>
      </div>
    </section>
  );
}