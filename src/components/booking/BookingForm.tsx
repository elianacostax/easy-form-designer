import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import StepIndicator from "./StepIndicator";
import StepContent from "./StepContent";
import { toast } from "sonner";

const TOTAL_STEPS = 5;

const stepKeys = ["barberia", "servicio", "barbero", "fecha", "hora"];

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const canNext = !!formData[stepKeys[currentStep]];

  const handleUpdate = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  const handleConfirm = () => {
    toast.success("¡Reserva confirmada!", {
      description: `${formData.servicio} en ${formData.barberia} con ${formData.barbero} — ${formData.fecha} a las ${formData.hora}`,
    });
  };

  const isLastStep = currentStep === TOTAL_STEPS - 1;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium text-primary">Reserva rápida</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Agenda tu cita
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          En solo 5 pasos tendrás tu reserva lista
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-2xl bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/20"
      >
        <StepIndicator currentStep={currentStep} />
        <StepContent step={currentStep} formData={formData} onUpdate={handleUpdate} />

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </Button>

          {isLastStep ? (
            <Button
              onClick={handleConfirm}
              disabled={!canNext}
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-sm font-semibold animate-pulse-glow"
            >
              <CalendarCheck className="w-4 h-4" />
              Confirmar Reserva
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!canNext}
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-sm font-semibold"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </motion.div>

      {/* Summary bar */}
      {Object.keys(formData).filter(k => stepKeys.includes(k) && formData[k]).length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex flex-wrap gap-2 justify-center"
        >
          {stepKeys.map((key) =>
            formData[key] ? (
              <span
                key={key}
                className="text-xs px-3 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground"
              >
                {formData[key]}
              </span>
            ) : null
          )}
        </motion.div>
      )}
    </div>
  );
};

export default BookingForm;
