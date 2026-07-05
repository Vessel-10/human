import { home } from "@/data/home";

export default function Impact() {
  const { impact } = home;

  return (
    <section className="bg-ink text-paper py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs tracking-wider uppercase text-clay mb-3">
            Our impact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            {impact.title}
          </h2>
          <p className="text-paper/70 leading-relaxed">{impact.description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-paper/15 pt-10">
          {impact.stats.map((stat) => (
            <div key={stat.label}>
              <span className="font-mono text-3xl md:text-4xl font-semibold block mb-2">
                {stat.value}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-paper/55">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}