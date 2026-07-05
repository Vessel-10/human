import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { home } from "@/data/home";
import { getOngoingProjects, categoryStyles, accentBg } from "@/data/projects";

export default function Projects() {
  const { projects: copy } = home;
  // No "featured" flag exists in projects.ts yet — defaulting to the first
  // 3 ongoing projects. Add a `featured: boolean` field there if you'd
  // rather curate this manually.
  const featured = getOngoingProjects().slice(0, 3);

  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="font-mono text-xs tracking-wider uppercase text-clay mb-3">
              Featured projects
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              {copy.title}
            </h2>
            <p className="text-charcoal/70 leading-relaxed">{copy.description}</p>
          </div>
          <Link
            href={copy.button.href}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-charcoal hover:text-clay transition-colors shrink-0"
          >
            {copy.button.text} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => {
            const { icon: Icon, accent } = categoryStyles[project.category];
            const pct = project.goal
              ? Math.min(100, Math.round(((project.raised ?? 0) / project.goal) * 100))
              : null;
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group bg-paper-raised border border-ink/10 rounded-sm overflow-hidden hover:-translate-y-1 transition-transform"
              >
                <div className={`h-32 flex items-center justify-center ${accentBg[accent]}`}>
                  <Icon className="text-paper/90" size={30} strokeWidth={1.5} />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-semibold text-charcoal mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <div className="w-full h-1.5 bg-ink/10 rounded-full overflow-hidden mb-2">
                    <div
                      className={`h-full rounded-full ${accentBg[accent]}`}
                      style={{ width: `${pct ?? 15}%` }}
                    />
                  </div>
                  <p className="font-mono text-xs text-charcoal/55">
                    K{project.raised?.toLocaleString()} raised
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}