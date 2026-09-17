import { ShieldAlert, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const EXPLORE = [
  ["How It Works", "#how"],
  ["Features", "#features"],
  ["QR Kit", "#kits"],
  ["Scenario", "#scenario"],
  ["FAQ", "#faq"],
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
];

const Footer = () => (
  <footer className="relative border-t border-white/10 bg-panel overflow-hidden" data-testid="site-footer">
    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-display font-extrabold text-[22vw] leading-none text-stroke-light select-none pointer-events-none whitespace-nowrap" aria-hidden="true">
      PARKSAFE
    </span>

    <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-32">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-ember/15 border border-ember/40">
              <ShieldAlert className="w-5 h-5 text-ember" />
            </span>
            <span className="font-display font-extrabold text-lg tracking-tight text-white">
              PARK<span className="text-ember">SAFE</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mt-5 max-w-xs">
            A permanent QR identity that speaks for you when you can't. Built for riders, by riders. One kit, ₹149, forever.
          </p>
          <div className="flex gap-3 mt-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#top"
                onClick={(e) => e.preventDefault()}
                aria-label={s.label}
                data-testid={`social-${s.label.toLowerCase()}`}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-ember hover:border-ember/50 transition-colors duration-300"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">Explore</p>
          <ul className="mt-5 space-y-3">
            {EXPLORE.map(([label, id]) => (
              <li key={id}>
                <a
                  href={id}
                  onClick={(e) => { e.preventDefault(); scrollToId(id); }}
                  data-testid={`footer-link-${label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">Legal</p>
          <ul className="mt-5 space-y-3">
            {["Privacy Policy", "Terms of Service", "Data Protection", "Refund Policy"].map((l) => (
              <li key={l}>
                <a
                  href="#top"
                  onClick={(e) => e.preventDefault()}
                  data-testid={`footer-legal-${l.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">Contact</p>
          <ul className="mt-5 space-y-4 text-sm text-slate-400">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-ember shrink-0" />
              <span data-testid="footer-helpline">24/7 Helpline: 1800-PARKSAFE</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-ember shrink-0" /> help@parksafe.io
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-ember shrink-0 mt-0.5" /> Bengaluru, Karnataka, India
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs tracking-wider text-slate-500" data-testid="footer-copyright">
          © 2026 PARKSAFE INC. ALL RIGHTS RESERVED.
        </p>
        <p className="font-mono text-xs tracking-wider text-slate-500">
          ONE SCAN. EVERYTHING THAT MATTERS.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
