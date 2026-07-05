import { UserCircle2 } from "lucide-react";
import { about } from "@/data/about";

export default function Team() {
  const { team } = about;

  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs tracking-wider uppercase text-clay mb-3">
            Our team
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
            {team.title}
          </h2>
          <p className="text-charcoal/70 leading-relaxed">{team.description}</p>
        </div>

        {/* team.members[].image points to assets that don't exist yet —
            placeholder avatar used until real photos are wired up. */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.members.map((member) => (
            <div
              key={member.role}
              className="bg-paper-raised border border-ink/10 rounded-sm p-7 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-ink/10 flex items-center justify-center mx-auto mb-5">
                <UserCircle2 className="text-charcoal/40" size={40} strokeWidth={1.25} />
              </div>
              <h3 className="font-display text-base font-semibold text-charcoal mb-1">
                {member.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-charcoal/50">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}