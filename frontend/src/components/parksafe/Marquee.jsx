import { ShieldCheck } from "lucide-react";

const ITEMS = [
  "INSTANT EMERGENCY ACCESS",
  "NO APP REQUIRED",
  "PERMANENT UNIQUE QR",
  "BLOOD GROUP ON SCAN",
  "FAMILY ALERTED IN SECONDS",
  "PRIVACY-FIRST PROFILE",
  "WEATHERPROOF DECALS",
  "ONE KIT — ₹149",
];

const Marquee = () => (
  <div className="relative overflow-hidden border-y border-ink/10 bg-white/70 py-5" data-testid="editorial-marquee">
    <div className="flex w-max animate-marquee gap-0">
      {[0, 1].map((dup) => (
        <div key={dup} className="flex items-center shrink-0" aria-hidden={dup === 1}>
          {ITEMS.map((item) => (
            <span key={`${dup}-${item}`} className="flex items-center gap-6 pr-6">
              <span className="font-display text-lg sm:text-xl font-bold tracking-wide text-slate-400 whitespace-nowrap">
                {item}
              </span>
              <ShieldCheck className="w-4 h-4 text-ember shrink-0" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
