import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowRight, QrCode } from "lucide-react";
import QRMark from "./QRMark";
import { scrollToId } from "@/lib/scroll";

const HERO_IMG =
  "https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwzfHxtb3RvcmN5Y2xlJTIwcmlkZXIlMjBoZWxtZXQlMjByb2FkfGVufDB8fHx8MTc4OTU1MTk5NHww&ixlib=rb-4.1.0&q=85";

const MaskLine = ({ children, delay }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className="block"
      initial={{ y: "112%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const Hero = ({ onActivate }) => {
  const [scans, setScans] = useState(38412);
  const cardRef = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-9, 9]), { stiffness: 120, damping: 18 });

  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    const t = setInterval(() => setScans((s) => s + Math.floor(Math.random() * 3) + 1), 2400);
    return () => clearInterval(t);
  }, []);

  const onMove = (e) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden grid-bg grain pt-28 pb-16" data-testid="hero-section">
      <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-ember/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-flame/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-ember font-semibold"
            data-testid="hero-eyebrow"
          >
            01 / Rider Safety Protocol
          </motion.p>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mt-6 text-ink" data-testid="hero-headline">
            <MaskLine delay={0.3}>ONE SCAN.</MaskLine>
            <MaskLine delay={0.45}>CAN SAVE A</MaskLine>
            <MaskLine delay={0.6}>
              <span style={{ backgroundImage: "linear-gradient(90deg,#E63B2E,#FF6B35)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>RIDER'S LIFE.</span>
            </MaskLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed mt-7 max-w-xl"
            data-testid="hero-subheadline"
          >
            ParkSafe puts your blood group, emergency contacts and medical alerts behind one permanent QR
            on your bike, helmet or phone — scannable by anyone in seconds. No app. No login. Just help, faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="flex flex-wrap items-center gap-4 mt-9"
          >
            <button
              onClick={() => scrollToId("#kits")}
              data-testid="hero-buy-kit-button"
              className="group flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold bg-ember text-white hover:bg-flame transition-colors duration-300 shadow-[0_16px_40px_-12px_rgba(230,59,46,0.6)]"
            >
              Buy Your QR Kit — ₹149
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={onActivate}
              data-testid="hero-activate-qr-button"
              className="flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold border border-ink/15 text-ink hover:border-ember/60 hover:text-ember transition-colors duration-300 bg-white/60"
            >
              <QrCode className="w-4 h-4" /> Activate QR
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="inline-flex items-center gap-3 mt-9 px-4 py-2 rounded-full bg-white border border-ink/10 shadow-sm"
            data-testid="hero-scan-counter"
          >
            <span className="w-2 h-2 rounded-full bg-signal animate-pulse-dot" />
            <span className="font-mono text-xs tracking-wider text-slate-500">
              LIVE — <span className="text-ink font-semibold">{scans.toLocaleString()}</span> EMERGENCY SCANS RESOLVED
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative [perspective:1200px]"
        >
          <motion.div style={{ y: parallaxY }}>
            <motion.div
              ref={cardRef}
              onMouseMove={onMove}
              onMouseLeave={() => { mx.set(0.5); my.set(0.5); }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-3xl overflow-hidden border border-ink/10 shadow-[0_40px_80px_-24px_rgba(19,31,56,0.45)]"
              data-testid="hero-product-mockup"
            >
              <img
                src={HERO_IMG}
                alt="Rider wearing helmet with ParkSafe QR badge on motorcycle"
                className="w-full aspect-[4/5] sm:aspect-[5/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

              <div className="absolute top-5 left-5 px-3.5 py-2 rounded-lg backdrop-blur-md bg-white/85 border border-ink/10 shadow-sm" style={{ transform: "translateZ(40px)" }}>
                <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500">PERMANENT ID</p>
                <p className="font-mono text-sm font-bold text-ink tracking-widest">PS-8F3K21</p>
              </div>

              <div className="absolute bottom-6 right-6" style={{ transform: "translateZ(60px)" }}>
                <div className="relative p-3 rounded-2xl bg-white shadow-[0_16px_50px_-10px_rgba(230,59,46,0.5)]">
                  <QRMark size={104} />
                  <div className="absolute left-2 right-2 h-0.5 bg-ember animate-scanline rounded-full" />
                  <span className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-ember rounded-tl-sm" />
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-ember rounded-tr-sm" />
                  <span className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-ember rounded-bl-sm" />
                  <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-ember rounded-br-sm" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
