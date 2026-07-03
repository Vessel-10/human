import { galleryImages, categoryStyles, accentBg } from "@/data/projects";

export default function ProjectGallery() {
    return (
        <section className="bg-paper py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="mb-10">
                    <p className="font-mono text-xs tracking-wider uppercase text-clay mb-3">
                        On the ground
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
                        Gallery
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {galleryImages.map((img) => {
                        const { icon: Icon, accent } = categoryStyles[img.category];
                        return (
                            <div
                                key={img.id}
                                className={`aspect-square flex flex-col items-center justify-center gap-2 rounded-sm p-4 text-center ${accentBg[accent]}`}
                            >
                                <Icon className="text-paper/90" size={24} strokeWidth={1.5} />
                                <span className="font-mono text-[10px] text-paper/85 leading-snug">
                                    {img.caption}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}