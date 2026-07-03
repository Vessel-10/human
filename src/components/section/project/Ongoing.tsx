import Link from "next/link";
import { getOngoingProjects, categoryStyles, accentBg } from "@/data/projects";
import PlaceholderImage from "./PlaceholderImage";

export default function OngoingProjects() {
  const ongoing = getOngoingProjects();

  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-wider uppercase text-clay mb-3">
            Open right now
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
            Ongoing projects
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
          {ongoing.map((project) => {
            const pct = project.goal
              ? Math.min(100, Math.round(((project.raised ?? 0) / project.goal) * 100))
              : null;
            const accent = categoryStyles[project.category].accent;

            return (
              <div
                key={project.slug}
                className="grid md:grid-cols-[112px_1fr_auto] gap-6 items-center py-7"
              >
                <PlaceholderImage
                  category={project.category}
                  className="w-full h-20 md:h-24 rounded-sm"
                />

                <div>
                  <span
                    className={`inline-block font-mono text-[10px] uppercase tracking-wider text-paper px-2.5 py-1 rounded-full mb-3 ${accentBg[accent]}`}
                  >
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-3">
                    {project.title}
                  </h3>
                    <p className="text-sm text-charcoal/65 leading-relaxed mb-3">
                        {project.summary}
                    </p>
                  <div className="w-full max-w-sm h-1.5 bg-ink/10 rounded-full overflow-hidden mb-2">
                    <div
                      className={`h-full rounded-full ${accentBg[accent]}`}
                      style={{ width: `${pct ?? 15}%` }}
                    />
                  </div>
                  <p className="font-mono text-xs text-charcoal/60">
                    <span className="text-charcoal font-medium">
                      K{project.raised?.toLocaleString()}
                    </span>{" "}
                    raised{project.goal ? ` of K${project.goal.toLocaleString()} goal` : " so far"}
                  </p>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="justify-self-start md:justify-self-end inline-flex items-center rounded-sm border border-charcoal px-5 py-2.5 text-sm font-medium text-charcoal hover:bg-charcoal hover:text-paper transition-colors whitespace-nowrap"
                >
                  Donate for this
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}