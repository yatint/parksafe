import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Reveal } from "./shared";
import Marquee from "./Marquee";

const CountUp = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v.toLocaleString()}
      {suffix}
    </span>
  );
};

const STATS = [
  { value: 45000, suffix: "+", label: "Active QR Riders" },
  { value: 128000, suffix: "+", label: "Lives Protected" },
  { value: 640, suffix: "+", label: "Emergency-Ready Cities" },
];

const BADGES = ["MOTOWIRE", "RIDERS DIGEST", "SAFER ROADS NGO", "ISO 27001", "CE CERTIFIED"];

const Trust = () => (
  <section className="relative" data-testid="trust-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50" data-testid={`stat-value-${i}`}>
              <CountUp to={s.value} suffix={s.suffix} />
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 mt-2">{s.label}</p>
          </Reveal>
        ))}
        <Reveal delay={0.3}>
          <div className="flex items-center gap-1.5" data-testid="trust-rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-ember text-ember" />
            ))}
          </div>
          <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50 mt-1">4.9<span className="text-slate-500 text-2xl">/5</span></p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 mt-2">9,200+ Rider Reviews</p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-14">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4" data-testid="trust-badges">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600">TRUSTED &amp; FEATURED BY</span>
          {BADGES.map((b) => (
            <span key={b} className="font-display text-sm font-bold tracking-[0.2em] text-slate-500 hover:text-slate-300 transition-colors duration-300">
              {b}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
    <Marquee />
  </section>
);

export default Trust;
