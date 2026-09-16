import { Zap, QrCode, HeartPulse, PhoneCall, Bike, Lock } from "lucide-react";
import { Reveal, SectionHead } from "./shared";

const IMG =
  "https://images.pexels.com/photos/12000096/pexels-photo-12000096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const FEATURES = [
  { icon: Zap, title: "Instant Emergency Access", text: "No app download for Good Samaritans or first responders — the camera is the key.", wide: true },
  { icon: QrCode, title: "Permanent Unique QR", text: "Laser-etched, UV & chemical resistant decals that outlive your paint job." },
  { icon: HeartPulse, title: "Crucial Medical Data", text: "Blood group, allergies, conditions and doctor details front and center." },
  { icon: PhoneCall, title: "One-Tap Family Alert", text: "Auto SMS & WhatsApp ping with live location the moment your QR is scanned." },
  { icon: Bike, title: "Multi-Surface Fit", text: "Tanks, visors, windshields, phone cases and key fobs — one identity everywhere." },
  { icon: Lock, title: "Privacy-First Profile", text: "Only emergency fields are public. Everything personal stays PIN-locked.", wide: true },
];

const Features = () => (
  <section id="features" className="relative py-24 sm:py-32 bg-panel/30" data-testid="features-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <SectionHead
        chapter="03"
        tag="Why ParkSafe"
        title="Built for the worst five minutes of your life."
        sub="Every detail of ParkSafe is engineered around one moment: a stranger holding your QR, trying to help."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08} className={f.wide ? "sm:col-span-2" : ""}>
            <div
              className="relative h-full min-h-[220px] bg-panel border border-white/10 rounded-2xl p-7 overflow-hidden hover:border-ember/50 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(255,59,48,0.25)] group flex flex-col justify-end"
              data-testid={`feature-card-${i}`}
            >
              {f.wide && (
                <>
                  <img src={IMG} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/70 to-transparent" />
                </>
              )}
              <div className="relative">
                <div className="w-11 h-11 rounded-lg bg-ember/15 border border-ember/40 flex items-center justify-center mb-5 transition-transform duration-500 group-hover:-translate-y-1">
                  <f.icon className="w-5 h-5 text-ember" />
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-2">{f.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
