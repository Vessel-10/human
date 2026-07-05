import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { home } from "@/data/home";

export default function About() {
  const { about } = home;

  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Stands in for about.image until real photography is wired up */}
        <div className="order-2 md:order-1 aspect-[4/3] rounded-sm bg-paper-raised border border-ink/10 flex items-center justify-center">
          <HeartHandshake className="text-leaf" size={56} strokeWidth={1.25} />
        </div>

        <div className="order-1 md:order-2">
          <p className="font-mono text-xs tracking-wider uppercase text-leaf mb-3">
            About us
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-5">
            {about.title}
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-8">{about.description}</p>
          <Link
            href={about.button.href}
            className="inline-flex items-center rounded-sm border border-charcoal px-7 py-3.5 text-sm font-medium text-charcoal hover:bg-charcoal hover:text-paper transition-colors"
          >
            {about.button.text}
          </Link>
        </div>
      </div>
    </section>
  );
}