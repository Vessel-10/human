// "use client";

// import React, { useState } from "react";

// export default function Form() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     reason: "General",
//     message: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) {
//       alert("Please fill out all required fields.");
//       return;
//     }
//     setIsSubmitted(true);
//   };

//   if (isSubmitted) {
//     return (
//       <section className="w-full bg-paper py-16">
//         <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
//           <div className="border border-leaf/20 bg-paper-raised p-12 rounded-xl max-w-2xl mx-auto text-center">
//             <h3 className="font-display text-2xl md:text-3xl font-bold text-leaf mb-4">
//               Thank You!
//             </h3>
//             <p className="font-sans text-charcoal mb-6">
//               Your message has been successfully received. We will look through your inquiry regarding <strong>{formData.reason}</strong> and get back to you as soon as possible.
//             </p>
//             <button
//               onClick={() => {
//                 setIsSubmitted(false);
//                 setFormData({ name: "", email: "", reason: "General", message: "" });
//               }}
//               className="font-sans bg-ink text-paper px-6 py-2.5 rounded-lg font-medium hover:bg-ink/90 transition-colors"
//             >
//               Send another message
//             </button>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="w-full bg-paper py-16 border-t border-charcoal/5">
//       <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
//         {/* Left Column: Contact Form */}
//         <div>
//           <h2 className="font-display text-3xl font-bold text-ink mb-6">
//             Get in Touch
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label htmlFor="name" className="block font-sans text-sm font-semibold text-charcoal mb-1.5">
//                 Full Name *
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 required
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="w-full font-sans px-4 py-2.5 border border-charcoal/20 bg-paper-raised rounded-lg text-charcoal focus:outline-none focus:border-ink"
//                 placeholder="Your name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block font-sans text-sm font-semibold text-charcoal mb-1.5">
//                 Email Address *
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 required
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className="w-full font-sans px-4 py-2.5 border border-charcoal/20 bg-paper-raised rounded-lg text-charcoal focus:outline-none focus:border-ink"
//                 placeholder="you@example.com"
//               />
//             </div>

//             <div>
//               <label htmlFor="reason" className="block font-sans text-sm font-semibold text-charcoal mb-1.5">
//                 Reason for Contact
//               </label>
//               <select
//                 id="reason"
//                 value={formData.reason}
//                 onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
//                 className="w-full font-sans px-4 py-2.5 border border-charcoal/20 bg-paper-raised rounded-lg text-charcoal focus:outline-none focus:border-ink appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23241F1A%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2s%3E%3C%2Fsvg%3E')] bg-[length:0.65rem_auto] bg-[right_1rem_center] bg-no-repeat"
//               >
//                 <option value="General">General Inquiry</option>
//                 <option value="Volunteering">Volunteering Opportunities</option>
//                 <option value="Partnership">Partnership Proposals</option>
//                 <option value="Media">Media & Press</option>
//                 <option value="Donation question">Donation Questions</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="message" className="block font-sans text-sm font-semibold text-charcoal mb-1.5">
//                 Your Message *
//               </label>
//               <textarea
//                 id="message"
//                 required
//                 rows={5}
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 className="w-full font-sans px-4 py-2.5 border border-charcoal/20 bg-paper-raised rounded-lg text-charcoal focus:outline-none focus:border-ink resize-none"
//                 placeholder="How can we help you?"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full font-sans bg-ink text-paper font-semibold py-3 px-6 rounded-lg hover:bg-ink/95 transition-colors cursor-pointer"
//             >
//               Submit Message
//             </button>
//           </form>
//         </div>

//         {/* Right Column: Office Details */}
//         <div className="flex flex-col justify-center space-y-8 lg:border-l lg:border-charcoal/10 lg:pl-16">
//           <div>
//             <h3 className="font-display text-2xl font-bold text-ink mb-3">
//               Our Office
//             </h3>
//             <p className="font-sans text-charcoal/80 leading-relaxed max-w-sm">
//               Area 3, Corporate Village<br />
//               Baron Avenue, Building 4B<br />
//               Lilongwe, Malawi
//             </p>
//           </div>

//           <div>
//             <h3 className="font-display text-xl font-bold text-ink mb-2">
//               Contact Information
//             </h3>
//             <p className="font-sans text-charcoal/80 space-y-1">
//               <span className="block"><strong>Email:</strong> info@naglind.org</span>
//               <span className="block"><strong>Phone:</strong> +265 (0) 123 4567</span>
//             </p>
//           </div>

//           <div>
//             <h3 className="font-display text-xl font-bold text-ink mb-2">
//               Office Hours
//             </h3>
//             <p className="font-sans text-charcoal/80">
//               Monday – Friday: 8:00 AM – 4:30 PM<br />
//               Saturday & Sunday: Closed
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "General",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="w-full bg-paper py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="border border-leaf/20 bg-paper-raised p-12 rounded-xl max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-leaf mb-4">
              Thank You!
            </h3>
            <p className="font-sans text-charcoal mb-6">
              Your message has been successfully received. We will look through your inquiry regarding <strong>{formData.reason}</strong> and get back to you as soon as possible.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", reason: "General", message: "" });
              }}
              className="font-sans bg-ink text-paper px-6 py-2.5 rounded-lg font-medium hover:bg-ink/90 transition-colors"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-paper py-16 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-10 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-14">

        {/* Left Column: Contact Form — now takes 3/5 of the row */}
        <div className="lg:col-span-3">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-sans text-sm font-semibold text-charcoal mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full font-sans px-4 py-2.5 border border-charcoal/20 bg-paper-raised rounded-lg text-charcoal focus:outline-none focus:border-ink"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-sans text-sm font-semibold text-charcoal mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full font-sans px-4 py-2.5 border border-charcoal/20 bg-paper-raised rounded-lg text-charcoal focus:outline-none focus:border-ink"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="reason" className="block font-sans text-sm font-semibold text-charcoal mb-1.5">
                Reason for Contact
              </label>
              <select
                id="reason"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full font-sans px-4 py-2.5 border border-charcoal/20 bg-paper-raised rounded-lg text-charcoal focus:outline-none focus:border-ink appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23241F1A%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2s%3E%3C%2Fsvg%3E')] bg-[length:0.65rem_auto] bg-[right_1rem_center] bg-no-repeat"
              >
                <option value="General">General Inquiry</option>
                <option value="Volunteering">Volunteering Opportunities</option>
                <option value="Partnership">Partnership Proposals</option>
                <option value="Media">Media & Press</option>
                <option value="Donation question">Donation Questions</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-sans text-sm font-semibold text-charcoal mb-1.5">
                Your Message *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full font-sans px-4 py-2.5 border border-charcoal/20 bg-paper-raised rounded-lg text-charcoal focus:outline-none focus:border-ink resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full font-sans bg-ink text-paper font-semibold py-3 px-6 rounded-lg hover:bg-ink/95 transition-colors cursor-pointer"
            >
              Submit Message
            </button>
          </form>
        </div>

        {/* Right Column: Office Details — now a card, takes 2/5 of the row */}
        <div className="lg:col-span-2">
          <div className="bg-paper-raised border border-charcoal/10 rounded-lg p-8 lg:p-10 space-y-8 h-fit">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink mb-3">
                Our Office
              </h3>
              <p className="font-sans text-charcoal/80 leading-relaxed">
                Area 3, Corporate Village<br />
                Baron Avenue, Building 4B<br />
                Lilongwe, Malawi
              </p>
            </div>

            <div className="pt-6 border-t border-charcoal/10">
              <h3 className="font-display text-xl font-bold text-ink mb-2">
                Contact Information
              </h3>
              <p className="font-sans text-charcoal/80 space-y-1">
                <span className="block"><strong>Email:</strong> info@naglind.org</span>
                <span className="block"><strong>Phone:</strong> +265 (0) 123 4567</span>
              </p>
            </div>

            <div className="pt-6 border-t border-charcoal/10">
              <h3 className="font-display text-xl font-bold text-ink mb-2">
                Office Hours
              </h3>
              <p className="font-sans text-charcoal/80">
                Monday – Friday: 8:00 AM – 4:30 PM<br />
                Saturday & Sunday: Closed
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}