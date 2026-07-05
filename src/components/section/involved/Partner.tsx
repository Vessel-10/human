import Link from "next/link";
import { Building2 } from "lucide-react";
import { getInvolved } from "@/data/involved";

export default function Partner() {
  const { partner } = getInvolved;

  return (
    <section className="bg-paper-raised py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs tracking-wider uppercase text-lake mb-3">
            Partner
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
            {partner.title}
          </h2>
          <p className="text-charcoal/70 leading-relaxed">{partner.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {partner.types.map((type) => (
            <div
              key={type.title}
              className="bg-paper border border-ink/10 rounded-sm p-6 flex gap-4"
            >
              <Building2 className="text-lake shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-base font-semibold text-charcoal mb-1">
                  {type.title}
                </h3>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href={partner.button.href}
          className="inline-flex items-center rounded-sm bg-lake px-7 py-3.5 text-sm font-medium text-paper hover:-translate-y-0.5 transition-transform"
        >
          {partner.button.text}
        </Link>
      </div>
    </section>
  );
}