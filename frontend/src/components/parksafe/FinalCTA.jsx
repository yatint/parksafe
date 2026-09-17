import { ArrowRight, QrCode, Truck, ShieldCheck } from "lucide-react";
import { Reveal } from "./shared";
import { scrollToId } from "@/lib/scroll";

const FinalCTA = ({ onActivate }) => (
  <section className="relative py-28 sm:py-36 overflow-hidden bg-panel grid-bg-dark grain" data-testid="final-cta-section">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ember/15 blur-[160px] pointer-events-none" />

    <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember font-semibold" data-testid="final-cta-eyebrow">
          08 / The Choice
        </p>
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mt-6 text-white" data-testid="final-cta-headline">
          DON'T RIDE<br />
          <span style={{ backgroundImage: "linear-gradient(90deg,#E63B2E,#FF6B35)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>UNPROTECTED</span><br />
          ANOTHER DAY.
        </h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed mt-7 max-w-xl mx-auto">
          One kit. ₹149, once. A lifetime of someone being able to help you when it matters most.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <button
            onClick={() => scrollToId("#kits")}
            data-testid="final-cta-buy-button"
            className="group flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold bg-ember text-white hover:bg-flame transition-colors duration-300 shadow-[0_16px_40px_-10px_rgba(230,59,46,0.7)]"
          >
            Get the Kit — ₹149
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={onActivate}
            data-testid="final-cta-activate-button"
            className="flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold border border-white/20 text-slate-200 hover:border-ember/60 hover:text-white transition-colors duration-300"
          >
            <QrCode className="w-4 h-4" /> Activate Existing QR
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-9">
          <span className="flex items-center gap-2 font-mono text-xs tracking-wider text-slate-400">
            <Truck className="w-4 h-4 text-signal" /> FREE SHIPPING ACROSS INDIA
          </span>
          <span className="flex items-center gap-2 font-mono text-xs tracking-wider text-slate-400">
            <ShieldCheck className="w-4 h-4 text-signal" /> 30-DAY MONEY-BACK GUARANTEE
          </span>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCTA;
