import { Check, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHead } from "./shared";

const IMGS = {
  bike: "https://images.pexels.com/photos/12000096/pexels-photo-12000096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  helmet: "https://images.pexels.com/photos/33323855/pexels-photo-33323855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  mobile: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?crop=entropy&cs=srgb&fm=jpg&q=85&w=940",
  family: "https://images.pexels.com/photos/15625085/pexels-photo-15625085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

const KITS = [
  {
    id: "bike",
    name: "Bike QR Kit",
    price: "$19.99",
    img: IMGS.bike,
    items: ["2x Metallic tank decals", "1x License plate QR tag", "Weatherproof & UV-proof"],
  },
  {
    id: "helmet",
    name: "Helmet Pro Pack",
    price: "$24.99",
    img: IMGS.helmet,
    items: ["2x Reflective visor decals", "2x Rear helmet tags", "Night-visible laminate"],
  },
  {
    id: "mobile",
    name: "Mobile & Key Kit",
    price: "$14.99",
    img: IMGS.mobile,
    items: ["1x Slim phone-back QR", "1x Stainless keychain tag", "Scratchproof coating"],
  },
  {
    id: "family",
    name: "Rider Family Bundle",
    price: "$49.99",
    img: IMGS.family,
    badge: "BEST VALUE",
    items: ["Covers 3 vehicles + 4 helmets", "Shared family ICE network", "Priority profile support"],
  },
];

const Kits = () => {
  const buy = (name) =>
    toast.success(`${name} added — checkout opens when pre-orders go live. You're on the list.`);

  return (
    <section id="kits" className="relative py-24 sm:py-32 grid-bg" data-testid="kits-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          chapter="04"
          tag="The Kits"
          title="Pick your protection."
          sub="Every kit carries the same permanent identity. Choose where yours lives."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {KITS.map((k, i) => (
            <Reveal key={k.id} delay={i * 0.1}>
              <div
                className={`relative h-full bg-panel rounded-2xl overflow-hidden border transition-all duration-500 group flex flex-col ${
                  k.badge
                    ? "border-ember/60 shadow-[0_0_50px_-12px_rgba(255,59,48,0.45)]"
                    : "border-white/10 hover:border-ember/50 hover:shadow-[0_0_40px_-10px_rgba(255,59,48,0.25)]"
                }`}
                data-testid={`kit-card-${k.id}`}
              >
                {k.badge && (
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-ember text-white font-mono text-[10px] font-bold tracking-[0.2em]" data-testid="kit-badge-best-value">
                    {k.badge}
                  </span>
                )}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={k.img}
                    alt={k.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-xl font-bold tracking-tight">{k.name}</h3>
                    <span className="font-display text-lg font-extrabold text-ember" data-testid={`kit-price-${k.id}`}>{k.price}</span>
                  </div>
                  <ul className="mt-4 space-y-2.5 flex-1">
                    {k.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <Check className="w-4 h-4 text-signal mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => buy(k.name)}
                    data-testid={`kit-buy-button-${k.id}`}
                    className={`mt-6 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-colors duration-300 ${
                      k.badge
                        ? "bg-ember text-white hover:bg-flame"
                        : "border border-white/15 text-slate-200 hover:border-ember/60 hover:text-white"
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" /> Buy Now
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-slate-500" data-testid="kits-shipping-note">
            FREE 2-DAY SHIPPING &nbsp;•&nbsp; 30-DAY MONEY-BACK GUARANTEE &nbsp;•&nbsp; NO SUBSCRIPTION
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Kits;
