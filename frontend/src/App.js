import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Nav from "@/components/parksafe/Nav";
import Hero from "@/components/parksafe/Hero";
import Trust from "@/components/parksafe/Trust";
import HowItWorks from "@/components/parksafe/HowItWorks";
import Features from "@/components/parksafe/Features";
import Kits from "@/components/parksafe/Kits";
import Scenario from "@/components/parksafe/Scenario";
import Testimonials from "@/components/parksafe/Testimonials";
import FAQ from "@/components/parksafe/FAQ";
import FinalCTA from "@/components/parksafe/FinalCTA";
import Footer from "@/components/parksafe/Footer";
import ActivateModal from "@/components/parksafe/ActivateModal";

function App() {
  const [activateOpen, setActivateOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="bg-bone text-ink font-body min-h-screen" data-testid="parksafe-app">
      <Nav onActivate={() => setActivateOpen(true)} />
      <main>
        <Hero onActivate={() => setActivateOpen(true)} />
        <Trust />
        <HowItWorks />
        <Features />
        <Kits />
        <Scenario />
        <Testimonials />
        <FAQ />
        <FinalCTA onActivate={() => setActivateOpen(true)} />
      </main>
      <Footer />
      <ActivateModal open={activateOpen} onClose={() => setActivateOpen(false)} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#FFFFFF",
            border: "1px solid rgba(19,31,56,0.12)",
            color: "#131F38",
            boxShadow: "0 12px 40px -12px rgba(19,31,56,0.25)",
          },
        }}
      />
    </div>
  );
}

export default App;
