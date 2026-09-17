import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ScanLine, PhoneCall, Stethoscope, X, Play, HeartPulse, Droplet, ShieldCheck } from "lucide-react";
import { Reveal, SectionHead } from "./shared";

const STEPS = [
  { time: "00:00", icon: AlertTriangle, title: "Incident occurs", text: "A rider goes down on a dark highway. He is unconscious. His phone is locked." },
  { time: "00:15", icon: ScanLine, title: "A stranger scans the QR", text: "A passerby points any phone camera at the helmet decal. No app needed." },
  { time: "00:30", icon: PhoneCall, title: "Family is notified", text: "His wife gets an automatic SMS and WhatsApp alert with the live GPS location." },
  { time: "00:45", icon: Stethoscope, title: "Medics act faster", text: "Paramedics see blood group, allergies and conditions before they even reach him." },
];

const Scenario = () => {
  const [simOpen, setSimOpen] = useState(false);

  return (
    <section id="scenario" className="relative py-24 sm:py-32 bg-panel grid-bg-dark" data-testid="scenario-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          chapter="05"
          tag="Real-Life Scenario"
          title="45 seconds that change everything."
          sub="This is the timeline ParkSafe is built for — from impact to informed care in under a minute."
          align="center"
          dark
        />

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="hidden lg:block absolute top-9 left-[12%] right-[12%] border-t border-dashed border-white/20" />
          {STEPS.map((s, i) => (
            <Reveal key={s.time} delay={i * 0.15}>
              <div className="relative text-center" data-testid={`scenario-step-${i}`}>
                <div className="relative z-10 w-[72px] h-[72px] mx-auto rounded-2xl bg-white/5 border border-ember/50 flex items-center justify-center shadow-[0_0_30px_-8px_rgba(230,59,46,0.5)]">
                  <s.icon className="w-7 h-7 text-ember" />
                </div>
                <p className="font-mono text-xs font-bold tracking-[0.3em] text-ember mt-5">{s.time}</p>
                <h3 className="font-display text-lg font-bold mt-2 text-white">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-2 max-w-[260px] mx-auto">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="text-center mt-14">
          <button
            onClick={() => setSimOpen(true)}
            data-testid="simulate-scan-button"
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold border border-ember/60 text-ember hover:bg-ember hover:text-white transition-colors duration-300"
          >
            <Play className="w-4 h-4" /> Simulate an Emergency Scan
          </button>
        </Reveal>
      </div>

      <AnimatePresence>
        {simOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center px-5 bg-ink/70 backdrop-blur-md"
            onClick={() => setSimOpen(false)}
            data-testid="simulation-backdrop"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]"
              onClick={(e) => e.stopPropagation()}
              data-testid="simulation-profile-card"
            >
              <div className="bg-ember px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-white" />
                  <span className="font-display font-bold text-white tracking-wide">EMERGENCY PROFILE</span>
                </div>
                <button onClick={() => setSimOpen(false)} data-testid="simulation-close" className="text-white/80 hover:text-white" aria-label="Close">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-slate-400">RIDER ID PS-8F3K21</p>
                  <p className="font-display text-2xl font-bold mt-1 text-ink">Arjun Mehta</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-bone rounded-xl p-4 border border-ink/10">
                    <div className="flex items-center gap-1.5 text-ember">
                      <Droplet className="w-4 h-4" />
                      <span className="font-mono text-[10px] tracking-widest text-slate-400">BLOOD</span>
                    </div>
                    <p className="font-display text-2xl font-extrabold mt-1 text-ink">O+</p>
                  </div>
                  <div className="bg-bone rounded-xl p-4 border border-ink/10">
                    <span className="font-mono text-[10px] tracking-widest text-slate-400">ALLERGIES</span>
                    <p className="font-display text-lg font-bold mt-1 text-ember">Penicillin</p>
                  </div>
                  <div className="bg-bone rounded-xl p-4 border border-ink/10 col-span-2">
                    <span className="font-mono text-[10px] tracking-widest text-slate-400">CONDITIONS</span>
                    <p className="text-sm font-semibold mt-1 text-ink">Asthma (inhaler in tank bag)</p>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-signal text-white font-bold hover:brightness-105 transition" data-testid="simulation-call-contact">
                  <PhoneCall className="w-4 h-4" /> Call Priya (Wife) — +91 98XXX XX210
                </button>
                <div className="flex items-center gap-2 justify-center text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-signal" />
                  <span className="font-mono text-[10px] tracking-widest">FAMILY NOTIFIED 32s AGO • GPS SHARED</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Scenario;
