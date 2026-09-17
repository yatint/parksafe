import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", y = 44 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHead = ({ chapter, tag, title, sub, align = "left", dark = false }) => (
  <Reveal className={align === "center" ? "text-center" : ""}>
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember font-semibold" data-testid={`chapter-tag-${chapter}`}>
      {chapter} / {tag}
    </p>
    <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mt-4 ${dark ? "text-white" : "text-ink"}`}>
      {title}
    </h2>
    {sub && (
      <p className={`text-base sm:text-lg leading-relaxed mt-5 max-w-2xl ${dark ? "text-slate-400" : "text-slate-600"} ${align === "center" ? "mx-auto" : ""}`}>
        {sub}
      </p>
    )}
  </Reveal>
);
