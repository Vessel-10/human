import { ImageIcon } from "lucide-react";
import type { Program } from "@/data/programs";

// Literal class names — Tailwind needs to see these written out to detect them.
const accentBg = ["bg-clay", "bg-leaf", "bg-lake"];

export default function ProgramGallery({ program }: { program: Program }) {
  const { gallery } = program;

  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-10">
          <p className="font-mono text-xs tracking-wider uppercase text-lake mb-3">
            On the ground
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
            {gallery.title}
          </h2>
          <p className="text-charcoal/70 leading-relaxed">{gallery.description}</p>
        </div>

        {/* gallery.images currently point to assets that don't exist yet.
            Swap these placeholder tiles for <Image src={src} .../> once
            real program photography is available. */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.images.map((src, i) => (
            <div
              key={src}
              className={`aspect-[4/3] rounded-sm flex items-center justify-center ${accentBg[i % accentBg.length]}`}
            >
              <ImageIcon className="text-paper/80" size={28} strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}