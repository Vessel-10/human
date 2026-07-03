import Link from "next/link";

export default function CTA() {
  return (
        <section className="bg-paper-raised text-ink py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
                <div className="bg-paper rounded-2xl px-10 py-16 md:px-12">
                <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-xl mx-auto leading-tight">
                    None of this happens without people who show up.
                </h2>
                <p className="mt-5 text-ink/70 max-w-md mx-auto">
                    Fund a project directly, or give your time where it&apos;s needed most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-9">
                    <Link
                        href="/donate"
                        className="inline-flex items-center justify-center rounded-sm bg-clay px-7 py-3.5 text-sm font-medium text-ink hover:-translate-y-0.5 transition-transform"
                    >
                        Donate now
                    </Link>
                    <Link
                        href="/get-involved"
                        className="inline-flex items-center justify-center rounded-sm border border-ink/30 px-7 py-3.5 text-sm font-medium text-ink hover:border-clay transition-colors"
                    >
                        Volunteer with us
                    </Link>
                </div>
                </div>
            </div>
        </section>
        
    );
}

