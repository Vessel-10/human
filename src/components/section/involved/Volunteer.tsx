import Link from "next/link";
import { Users } from "lucide-react";
import { getInvolved } from "@/data/involved";

export default function Volunteer() {
  const { volunteer } = getInvolved;

  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs tracking-wider uppercase text-leaf mb-3">
            Volunteer
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
            {volunteer.title}
          </h2>
          <p className="text-charcoal/70 leading-relaxed">{volunteer.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-10 mb-10">
          {volunteer.roles.map((role) => (
            <div key={role.title} className="flex gap-4 py-5 border-b border-ink/10">
              <Users className="text-leaf shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-base font-semibold text-charcoal mb-1">
                  {role.title}
                </h3>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href={volunteer.button.href}
          className="inline-flex items-center rounded-sm border border-charcoal px-7 py-3.5 text-sm font-medium text-charcoal hover:bg-charcoal hover:text-paper transition-colors"
        >
          {volunteer.button.text}
        </Link>
      </div>
    </section>
  );
}