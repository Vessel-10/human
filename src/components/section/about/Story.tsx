import { about } from "@/data/about";

export default function Story() {
  const { ourStory } = about;

  return (
    <section className="bg-paper-raised py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="font-mono text-xs tracking-wider uppercase text-clay mb-3">
          Our story
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-5">
          {ourStory.title}
        </h2>
        <p className="text-charcoal/70 leading-relaxed text-base md:text-lg">
          {ourStory.description}
        </p>
      </div>
    </section>
  );
}