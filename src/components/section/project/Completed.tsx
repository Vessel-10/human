import Link from "next/link";
import { getCompletedProjects, categoryStyles, accentBg } from "@/data/projects";
import PlaceholderImage from "./PlaceholderImage";

export default function CompletedProjects() {
    const completed = getCompletedProjects();

    return (
        <section className="bg-paper-raised py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="mb-10">
                    <p className="font-mono text-xs tracking-wider uppercase text-leaf mb-3">
                        Already delivered
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
                        Completed projects
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {completed.map((project) => {
                        const accent = categoryStyles[project.category].accent;
                        return (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="group bg-paper border border-ink/10 rounded-sm overflow-hidden hover:-translate-y-1 transition-transform"
                            >
                                <PlaceholderImage category={project.category} className="h-40 w-full" />
                                <div className="p-5">
                                    <span
                                        className={`inline-block font-mono text-[10px] uppercase tracking-wider text-paper px-2.5 py-1 rounded-full mb-3 ${accentBg[accent]}`}
                                    >
                                        {project.category}
                                    </span>
                                    <h3 className="font-display text-base font-semibold text-charcoal mb-2 leading-snug">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-charcoal/65 leading-relaxed mb-3">
                                        {project.summary}
                                    </p>
                                    {project.impact && (
                                        <p className="font-mono text-xs text-leaf font-medium">
                                            {project.impact}
                                        </p>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>
        </div>
    </section>
  );
}