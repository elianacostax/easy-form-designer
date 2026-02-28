import { motion } from "framer-motion";
import { Check, Scissors, Store, User, CalendarDays, Clock } from "lucide-react";

const steps = [
  { label: "Barbería", icon: Store },
  { label: "Servicio", icon: Scissors },
  { label: "Barbero", icon: User },
  { label: "Fecha", icon: CalendarDays },
  { label: "Hora", icon: Clock },
];

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-between w-full max-w-lg mx-auto mb-10">
      {steps.map((step, i) => {
        const isDone = i < currentStep;
        const isActive = i === currentStep;
        const Icon = step.icon;

        return (
          <div key={i} className="flex flex-col items-center gap-2 relative flex-1">
            {i > 0 && (
              <div className="absolute top-5 -left-1/2 w-full h-0.5">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: isDone ? "hsl(var(--step-done))" : "hsl(var(--step-pending))" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: i * 0.1 }}
                />
              </div>
            )}
            <motion.div
              className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                isDone
                  ? "bg-step-done border-step-done"
                  : isActive
                  ? "bg-primary/20 border-primary"
                  : "bg-secondary border-border"
              }`}
              animate={isActive ? { scale: [1, 1.08, 1] } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              {isDone ? (
                <Check className="w-4 h-4 text-primary-foreground" />
              ) : (
                <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
              )}
            </motion.div>
            <span className={`text-xs font-medium ${isActive ? "text-primary" : isDone ? "text-step-done" : "text-muted-foreground"}`}>
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
