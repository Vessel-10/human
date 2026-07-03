"use client";

export default function ContactMap() {
  const mapLocationQuery = encodeURIComponent("Lilongwe, Malawi");
  const mapSrc = `https://maps.google.com/maps?q=${mapLocationQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="w-full bg-paper-raised py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-10">
        {/* <div className="mb-8 text-center md:text-left">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">
            Our Location
          </h2>
          <p className="font-sans text-charcoal/80 max-w-xl">
            Find us in the heart of Lilongwe. Stop by or get in touch using the information above.
          </p>
        </div> */}

        {/* Map Container */}
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-sm border border-charcoal/10 bg-paper">
          <iframe
            title="Google Map Location - Lilongwe, Malawi"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            src={mapSrc}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}