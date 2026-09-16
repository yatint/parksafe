import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, SectionHead } from "./shared";

const FAQS = [
  {
    q: "Does the person scanning need to install an app?",
    a: "No. Any smartphone camera opens your emergency profile instantly in the browser — no app, no account, no login. It works on any phone made in the last decade.",
  },
  {
    q: "What happens if the QR sticker gets dirty or scratched?",
    a: "ParkSafe codes use high error-correction encoding, so they scan reliably even when up to 30% of the surface is damaged. Decals are laser-etched, UV-stable and chemical resistant.",
  },
  {
    q: "How is my private data protected?",
    a: "Only emergency-critical fields (blood group, allergies, ICE contacts) are publicly visible. Everything personal sits behind a PIN you control, and you can wipe or transfer your profile anytime.",
  },
  {
    q: "Can I update my medical information later?",
    a: "Yes. Your profile syncs in real time — update medications, contacts or conditions from any browser and every QR you own reflects the change instantly.",
  },
  {
    q: "Can I transfer my QR if I sell my bike?",
    a: "Each QR is permanently unique to its owner profile. Selling your bike? Detach the decal or transfer the vehicle tag to the new owner with a one-time ownership handover code.",
  },
  {
    q: "Is there a subscription fee?",
    a: "No. Core emergency alerts — scan access, family notifications and medical data — are free forever with your kit. An optional Plus tier adds live ride tracking and crash detection.",
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-panel/30" data-testid="faq-section">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <SectionHead
          chapter="07"
          tag="Questions"
          title="Everything riders ask us."
          align="center"
        />
        <div className="mt-14 space-y-3">
          {FAQS.map((f, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={f.q} delay={i * 0.06}>
                <div
                  className={`bg-panel border rounded-2xl overflow-hidden transition-colors duration-300 ${
                    open ? "border-ember/50" : "border-white/10"
                  }`}
                  data-testid={`faq-item-${i}`}
                >
                  <button
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    data-testid={`faq-toggle-${i}`}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display font-bold text-base sm:text-lg">{f.q}</span>
                    <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}>
                      <Plus className={`w-5 h-5 shrink-0 ${open ? "text-ember" : "text-slate-500"}`} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm text-slate-400 leading-relaxed" data-testid={`faq-answer-${i}`}>
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
