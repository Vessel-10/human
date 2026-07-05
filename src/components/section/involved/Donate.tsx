import Link from "next/link";
import { getInvolved } from "@/data/involved";

export default function Donate() {
  const { donate } = getInvolved;

  return (
    <section className="bg-paper-raised py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs tracking-wider uppercase text-clay mb-3">
            Donate
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
            {donate.title}
          </h2>
          <p className="text-charcoal/70 leading-relaxed">{donate.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {donate.tiers.map((tier) => (
            <div
              key={tier.amount}
              className="bg-paper border border-ink/10 rounded-sm p-6 flex flex-col"
            >
              <span className="font-mono text-2xl font-semibold text-clay mb-3">
                {tier.amount}
              </span>
              <p className="text-sm text-charcoal/65 leading-relaxed">
                {tier.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          href={donate.button.href}
          className="inline-flex items-center rounded-sm bg-clay px-7 py-3.5 text-sm font-medium text-ink hover:-translate-y-0.5 transition-transform"
        >
          {donate.button.text}
        </Link>
      </div>
    </section>
  );
}