import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, QrCode, Link2 } from "lucide-react";
import { toast } from "sonner";

const ActivateModal = ({ open, onClose }) => {
  const [code, setCode] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (code.trim().length < 6) {
      toast.error("Enter the 6-character code printed on your QR kit.");
      return;
    }
    toast.success(`QR ${code.toUpperCase()} verified — profile activation opens when your kit ships.`);
    setCode("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center px-5 bg-ink/80 backdrop-blur-md"
          onClick={onClose}
          data-testid="activate-modal-backdrop"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md bg-panel border border-white/10 rounded-2xl p-8 shadow-[0_0_60px_-12px_rgba(255,59,48,0.35)]"
            onClick={(e) => e.stopPropagation()}
            data-testid="activate-modal"
          >
            <button
              onClick={onClose}
              data-testid="activate-modal-close"
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-xl bg-ember/15 border border-ember/40 flex items-center justify-center">
              <QrCode className="w-6 h-6 text-ember" />
            </div>
            <h3 className="font-display text-2xl font-bold mt-5">Activate your QR</h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              Enter the 6-character code printed inside your ParkSafe kit to link it to your emergency profile.
            </p>
            <form onSubmit={submit} className="mt-6">
              <input
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase().slice(0, 6))}
                placeholder="e.g. 8F3K21"
                data-testid="activate-code-input"
                className="w-full bg-ink border border-white/10 rounded-xl px-4 py-3.5 font-mono text-lg tracking-[0.4em] text-center text-slate-50 placeholder:text-slate-600 focus:outline-none focus:border-ember/70 transition-colors"
              />
              <button
                type="submit"
                data-testid="activate-submit-button"
                className="w-full mt-4 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold bg-ember text-white hover:bg-flame transition-colors duration-300"
              >
                <Link2 className="w-4 h-4" /> Link Emergency Profile
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-4 text-center font-mono tracking-wide">
              NO ACCOUNT NEEDED TO SCAN — EVER
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ActivateModal;
