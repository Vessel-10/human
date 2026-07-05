import Link from "next/link";
import { home } from "@/data/home";

export default function News() {
  const { news } = home;

  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="font-mono text-xs tracking-wider uppercase text-clay mb-3">
          News
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-5">
          {news.title}
        </h2>
        <p className="text-charcoal/70 leading-relaxed mb-9">{news.description}</p>
        <Link
          href={news.button.href}
          className="inline-flex items-center rounded-sm border border-charcoal px-7 py-3.5 text-sm font-medium text-charcoal hover:bg-charcoal hover:text-paper transition-colors"
        >
          {news.button.text}
        </Link>
      </div>
    </section>
  );
}