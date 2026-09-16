import { Package, ClipboardList, ScanLine } from "lucide-react";
import { Reveal, SectionHead } from "./shared";

const STEPS = [
  {
    n: "01",
    icon: Package,
    title: "Get Your QR Kit",
    text: "Order a weatherproof, laser-etched QR kit for your bike, helmet or phone. Every code is permanently unique to you.",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Register Your Profile",
    text: "Add blood group, allergies, medical conditions, ICE contacts and insurance in under three minutes.",
  },
  {
    n: "03",
    icon: ScanLine,
    title: "Anyone Can Scan It",
    text: "In an emergency, any smartphone camera opens your life-saving profile instantly. Zero app install, zero login.",
  },
];

const HowItWorks = () => (
  <section id="how" className="relative py-24 sm:py-32" data-testid="how-it-works-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <SectionHead
        chapter="02"
        tag="The Protocol"
        title="Three steps between a crash and a call home."
        sub="ParkSafe removes every barrier between a bystander and your life-saving information."
      />
      <div className="relative grid md:grid-cols-3 gap-6 mt-16">
        <div className="hidden md:block absolute top-16 left-[16%] right-[16%] border-t border-dashed border-white/15" />
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.15}>
            <div
              className="relative h-full bg-panel border border-white/10 rounded-2xl p-8 hover:border-ember/50 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(255,59,48,0.25)] group"
              data-testid={`how-step-${i + 1}`}
            >
              <span className="absolute top-6 right-7 font-display text-6xl font-extrabold text-stroke select-none">
                {s.n}
              </span>
              <div className="w-14 h-14 rounded-xl bg-ember/15 border border-ember/40 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <s.icon className="w-7 h-7 text-ember" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight mt-7">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mt-3">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
