import { Star, Quote } from "lucide-react";
import { Reveal, SectionHead } from "./shared";

const REVIEWS = [
  {
    name: "Marcus T.",
    role: "Track Day & Highway Commuter",
    initials: "MT",
    text: "I ride solo at night more than I should admit. Knowing my blood type and my brother's number are one scan away — that peace of mind is unmatched.",
  },
  {
    name: "Dr. Aris V.",
    role: "EMR Trauma Surgeon",
    initials: "AV",
    text: "Seconds matter in trauma care. Instant access to blood type and emergency contacts genuinely changes survival outcomes. Every rider should carry this.",
  },
  {
    name: "Elena R.",
    role: "Touring Club Captain",
    initials: "ER",
    text: "Outfitted our entire 50-rider club with ParkSafe kits before the Himalayan run. It's as essential as a helmet now.",
  },
];

const Testimonials = () => (
  <section id="stories" className="relative py-24 sm:py-32" data-testid="testimonials-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <SectionHead
        chapter="06"
        tag="Rider Stories"
        title="Trusted by the people who need it most."
      />
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.12}>
            <figure
              className="relative h-full bg-white border border-ink/10 rounded-2xl p-8 hover:border-ember/50 transition-all duration-500 hover:shadow-[0_24px_50px_-20px_rgba(230,59,46,0.25)]"
              data-testid={`testimonial-card-${i}`}
            >
              <Quote className="w-8 h-8 text-ember/30" />
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-ember text-ember" />
                ))}
              </div>
              <blockquote className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4">
                "{r.text}"
              </blockquote>
              <figcaption className="flex items-center gap-4 mt-7 pt-6 border-t border-ink/10">
                <span className="w-12 h-12 rounded-full bg-gradient-to-br from-ember to-flame flex items-center justify-center font-display font-bold text-white">
                  {r.initials}
                </span>
                <div>
                  <p className="font-display font-bold text-ink">{r.name}</p>
                  <p className="font-mono text-[11px] tracking-wider text-slate-500 mt-0.5">{r.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
