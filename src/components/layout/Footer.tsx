import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const navigate = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];

const getInvolved = [
  { href: "/volunteer", label: "Volunteer" },
  { href: "/partner", label: "Partner with us" },
  { href: "/news", label: "Latest news" },
];

const programs = [
  { href: "/programs/community-health", label: "Community Health" },
  { href: "/programs/education", label: "Education" },
  { href: "/programs/water", label: "Water & Sanitation" },
  { href: "/programs/nutrition", label: "Nutrition" },
  { href: "/programs/shelter", label: "Shelter" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Column 1 — Logo, description, socials */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="font-display text-xl font-semibold text-paper">
              Naglind
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-paper/65 max-w-xs">
              Helping people find comfort in other people — connection,
              care, and community support for those who need it.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Link href="#" aria-label="Facebook" className="text-paper/60 hover:text-clay transition-colors">
                <FaFacebookF size={16} />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-paper/60 hover:text-clay transition-colors">
                <FaInstagram size={18} />
              </Link>
              <Link href="#" aria-label="Twitter / X" className="text-paper/60 hover:text-clay transition-colors">
                <FaXTwitter size={16} />
              </Link>
            </div>
          </div>

          {/* Column 2 — Navigate */}
          <div>
            <h5 className="font-mono text-xs tracking-wider uppercase text-paper/45 mb-4">
              Navigate
            </h5>
            <ul className="space-y-3">
              {navigate.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-paper/75 hover:text-clay transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Get involved */}
          <div>
            <h5 className="font-mono text-xs tracking-wider uppercase text-paper/45 mb-4">
              Get Involved
            </h5>
            <ul className="space-y-3">
              {getInvolved.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-paper/75 hover:text-clay transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Programs */}
          <div>
            <h5 className="font-mono text-xs tracking-wider uppercase text-paper/45 mb-4">
              Programs
            </h5>
            <ul className="space-y-3">
              {programs.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-paper/75 hover:text-clay transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Contact */}
          <div>
            <h5 className="font-mono text-xs tracking-wider uppercase text-paper/45 mb-4">
              Contact
            </h5>
            <ul className="space-y-3 text-sm text-paper/75">
              <li>[Address / location]</li>
              <li>[Phone number]</li>
              <li>[Email address]</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-14 pt-8 border-t border-paper/10">
          <p className="text-xs text-paper/45">
            © {year} Naglind. All rights reserved.
          </p>
          <p className="text-xs text-paper/45">Help is one step away</p>
        </div>
      </div>
    </footer>
  );
}