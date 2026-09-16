import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Menu, X } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const LINKS = [
  ["How It Works", "#how"],
  ["Features", "#features"],
  ["QR Kits", "#kits"],
  ["Scenario", "#scenario"],
  ["FAQ", "#faq"],
];

const Nav = ({ onActivate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-ink/80 border-b border-white/10 shadow-2xl" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          data-testid="nav-logo"
          className="flex items-center gap-2.5 group"
        >
          <span className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-ember/15 border border-ember/40">
            <ShieldAlert className="w-5 h-5 text-ember" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-signal animate-pulse-dot" />
          </span>
          <span className="font-display font-extrabold text-lg tracking-tight">
            PARK<span className="text-ember">SAFE</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map(([label, id]) => (
            <a
              key={id}
              href={id}
              onClick={(e) => go(e, id)}
              data-testid={`nav-link-${label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-slate-400 hover:text-slate-50 transition-colors duration-300 font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onActivate}
            data-testid="nav-activate-qr-button"
            className="px-5 py-2.5 rounded-full text-sm font-semibold border border-white/15 text-slate-200 hover:border-ember/60 hover:text-white transition-colors duration-300"
          >
            Activate QR
          </button>
          <button
            onClick={(e) => go(e, "#kits")}
            data-testid="nav-buy-kit-button"
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-ember text-white hover:bg-flame transition-colors duration-300 shadow-[0_0_24px_-6px_rgba(255,59,48,0.6)]"
          >
            Buy QR Kit
          </button>
        </div>

        <button
          className="lg:hidden text-slate-200"
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-menu-button"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden backdrop-blur-xl bg-ink/95 border-b border-white/10"
            data-testid="nav-mobile-drawer"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map(([label, id]) => (
                <a
                  key={id}
                  href={id}
                  onClick={(e) => go(e, id)}
                  data-testid={`nav-mobile-link-${label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-base text-slate-300 font-medium"
                >
                  {label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => { setOpen(false); onActivate(); }}
                  data-testid="nav-mobile-activate-button"
                  className="flex-1 px-5 py-3 rounded-full text-sm font-semibold border border-white/15"
                >
                  Activate QR
                </button>
                <button
                  onClick={(e) => go(e, "#kits")}
                  data-testid="nav-mobile-buy-button"
                  className="flex-1 px-5 py-3 rounded-full text-sm font-semibold bg-ember"
                >
                  Buy QR Kit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
