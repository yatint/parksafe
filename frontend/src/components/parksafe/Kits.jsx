import { Check, ShoppingCart, Bike, HardHat, Smartphone, Truck, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./shared";
import QRMark from "./QRMark";

const IMGS = {
  bike: "https://images.pexels.com/photos/12000096/pexels-photo-12000096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  helmet: "https://images.pexels.com/photos/33323855/pexels-photo-33323855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  mobile: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?crop=entropy&cs=srgb&fm=jpg&q=85&w=940",
};

const INCLUDED = [
  "2x Metallic bike tank decals",
  "2x Reflective helmet tags",
  "1x Slim phone-back QR sticker",
  "1x Stainless steel keychain tag",
  "Lifetime emergency profile — no subscription",
];

const SURFACES = [
  { icon: Bike, label: "Bike" },
  { icon: HardHat, label: "Helmet" },
  { icon: Smartphone, label: "Phone" },
];

const Kits = () => {
  const buy = () =>
    toast.success("ParkSafe QR Kit added — checkout opens when pre-orders go live. You're on the list.");

  return (
    <section id="kits" className="relative py-24 sm:py-32 grid-bg" data-testid="kits-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative" data-testid="kit-image-composition">
              <div className="rounded-3xl overflow-hidden border border-ink/10 shadow-[0_40px_80px_-24px_rgba(19,31,56,0.35)]">
                <img src={IMGS.bike} alt="ParkSafe QR decal on motorcycle tank" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-4 sm:-right-8 flex gap-4">
                <div className="w-28 sm:w-36 rounded-2xl overflow-hidden border-4 border-bone shadow-xl rotate-3">
                  <img src={IMGS.helmet} alt="Helmet QR tag" loading="lazy" className="w-full aspect-square object-cover" />
                </div>
                <div className="w-28 sm:w-36 rounded-2xl overflow-hidden border-4 border-bone shadow-xl -rotate-2 mt-6">
                  <img src={IMGS.mobile} alt="Phone QR sticker" loading="lazy" className="w-full aspect-square object-cover" />
                </div>
              </div>
              <div className="absolute -top-5 -left-3 sm:-left-5 p-2.5 rounded-xl bg-white border border-ink/10 shadow-lg -rotate-6">
                <QRMark size={64} seed={9} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember font-semibold" data-testid="chapter-tag-04">
              04 / The Kit
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mt-4 text-ink" data-testid="kit-title">
              One kit. Every ride.<br />One price.
            </h2>

            <div className="flex items-end gap-3 mt-7">
              <span className="font-display text-6xl sm:text-7xl font-extrabold tracking-tight text-ink" data-testid="kit-price-main">₹149</span>
              <span className="font-mono text-xs tracking-wider text-slate-500 pb-3 leading-relaxed">
                ONE-TIME<br />NO SUBSCRIPTION
              </span>
            </div>

            <div className="flex gap-3 mt-7">
              {SURFACES.map((s) => (
                <span
                  key={s.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ink/10 text-sm font-semibold text-ink"
                  data-testid={`kit-surface-${s.label.toLowerCase()}`}
                >
                  <s.icon className="w-4 h-4 text-ember" /> {s.label}
                </span>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-signal/10 border border-signal/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-signal" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={buy}
              data-testid="kit-buy-button-main"
              className="group mt-9 w-full sm:w-auto flex items-center justify-center gap-2.5 px-9 py-4 rounded-full font-semibold bg-ember text-white hover:bg-flame transition-colors duration-300 shadow-[0_16px_40px_-12px_rgba(230,59,46,0.6)]"
            >
              <ShoppingCart className="w-4 h-4" /> Buy Now — ₹149.00
            </button>

            <div className="flex flex-wrap gap-x-7 gap-y-2.5 mt-7">
              <span className="flex items-center gap-2 font-mono text-[11px] tracking-wider text-slate-500">
                <Truck className="w-4 h-4 text-signal" /> FREE SHIPPING ACROSS INDIA
              </span>
              <span className="flex items-center gap-2 font-mono text-[11px] tracking-wider text-slate-500">
                <ShieldCheck className="w-4 h-4 text-signal" /> 30-DAY MONEY-BACK GUARANTEE
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Kits;
