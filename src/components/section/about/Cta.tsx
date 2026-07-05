import Link from "next/link";
import { about } from "@/data/about";

export default function Cta() {
  const { finalCTA } = about;

  return (
    <section className="bg-ink text-paper py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-xl mx-auto leading-tight">
          {finalCTA.title}
        </h2>
        <p className="mt-5 text-paper/70 max-w-md mx-auto">{finalCTA.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-9">
          <Link
            href={finalCTA.primaryButton.href}
            className="inline-flex items-center justify-center rounded-sm bg-clay px-7 py-3.5 text-sm font-medium text-ink hover:-translate-y-0.5 transition-transform"
          >
            {finalCTA.primaryButton.text}
          </Link>
          <Link
            href={finalCTA.secondaryButton.href}
            className="inline-flex items-center justify-center rounded-sm border border-paper/30 px-7 py-3.5 text-sm font-medium text-paper hover:border-paper transition-colors"
          >
            {finalCTA.secondaryButton.text}
          </Link>
        </div>
      </div>
    </section>
  );
}