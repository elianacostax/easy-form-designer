import { motion, AnimatePresence } from "framer-motion";
import { Heart, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface StepContentProps {
  step: number;
  formData: Record<string, string>;
  onUpdate: (key: string, value: string) => void;
}

const barberias = ["BarberKing Centro", "BarberKing Norte", "Classic Cuts", "The Gentlemen's"];
const servicios = ["Corte clásico", "Corte + Barba", "Barba completa", "Diseño de cejas", "Tratamiento capilar"];
const barberos = ["Carlos M.", "Andrés R.", "Miguel P.", "David L."];
const horas = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"];

const slideVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

const StepContent = ({ step, formData, onUpdate }: StepContentProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="min-h-[200px]"
      >
        {step === 0 && (
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold">¿Dónde quieres tu cita?</h3>
            <p className="text-muted-foreground text-sm">Elige tu barbería favorita o busca una cerca de ti.</p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar barbería..."
                className="pl-10 bg-secondary border-border h-12"
                value={formData.searchBarberia || ""}
                onChange={(e) => onUpdate("searchBarberia", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {barberias.map((b) => (
                <motion.button
                  key={b}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onUpdate("barberia", b)}
                  className={`relative p-4 rounded-lg border text-left transition-all duration-200 ${
                    formData.barberia === b
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                      : "border-border bg-secondary hover:border-muted-foreground/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{b}</span>
                    <Heart className={`w-4 h-4 ${formData.barberia === b ? "text-primary fill-primary" : "text-muted-foreground"}`} />
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 block">⭐ 4.8 · Abierto hasta 8PM</span>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold">¿Qué servicio necesitas?</h3>
            <p className="text-muted-foreground text-sm">Selecciona el servicio que deseas para tu visita.</p>
            <div className="grid grid-cols-1 gap-3">
              {servicios.map((s) => (
                <motion.button
                  key={s}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => onUpdate("servicio", s)}
                  className={`p-4 rounded-lg border text-left transition-all duration-200 flex items-center justify-between ${
                    formData.servicio === s
                      ? "border-primary bg-primary/10"
                      : "border-border bg-secondary hover:border-muted-foreground/30"
                  }`}
                >
                  <span className="font-medium text-sm">{s}</span>
                  <span className="text-xs text-muted-foreground">~30 min · $15</span>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold">Elige tu barbero</h3>
            <p className="text-muted-foreground text-sm">Selecciona al profesional de tu preferencia.</p>
            <div className="grid grid-cols-2 gap-3">
              {barberos.map((b) => (
                <motion.button
                  key={b}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onUpdate("barbero", b)}
                  className={`p-5 rounded-lg border text-center transition-all duration-200 ${
                    formData.barbero === b
                      ? "border-primary bg-primary/10"
                      : "border-border bg-secondary hover:border-muted-foreground/30"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-muted mx-auto mb-2 flex items-center justify-center text-lg font-display font-bold text-muted-foreground">
                    {b.charAt(0)}
                  </div>
                  <span className="font-medium text-sm">{b}</span>
                  <span className="text-xs text-muted-foreground block mt-1">⭐ 4.9</span>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold">¿Cuándo te gustaría ir?</h3>
            <p className="text-muted-foreground text-sm">Selecciona la fecha para tu cita.</p>
            <Input
              type="date"
              className="bg-secondary border-border h-12 w-full"
              value={formData.fecha || ""}
              onChange={(e) => onUpdate("fecha", e.target.value)}
            />
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold">Hora disponible</h3>
            <p className="text-muted-foreground text-sm">Escoge el horario que más te convenga.</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {horas.map((h) => (
                <motion.button
                  key={h}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onUpdate("hora", h)}
                  className={`py-3 px-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                    formData.hora === h
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-secondary hover:border-muted-foreground/30 text-foreground"
                  }`}
                >
                  {h}
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default StepContent;
