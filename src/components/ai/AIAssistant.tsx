import { Sparkles, X, Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const suggestions = [
  "Muéstrame artistas de la UNAL",
  "¿Qué es tendencia esta semana?",
  "Obras del Pacífico bajo $1.500.000",
  "Recomiéndame algo contemplativo",
];

const seedResponses = (q: string) => {
  const lower = q.toLowerCase();
  if (lower.includes("tendencia") || lower.includes("trend")) return "Esta semana los visitantes están explorando las obras de Mariana Restrepo (UdeA) y Valentina Caicedo (Bellas Artes Cali). Ambas están en el feed de Descubrir.";
  if (lower.includes("unal") || lower.includes("nacional") || lower.includes("bogotá")) return "Santiago Quintero, egresado reciente de la Universidad Nacional, trabaja con tinta china sobre los cerros orientales. Te recomiendo 'Bogotá en Tinta VII' y 'Caligrafía del Viento'.";
  if (lower.includes("pacífico") || lower.includes("pacifico") || lower.includes("cali") || lower.includes("chocó")) return "Valentina Caicedo, del Instituto de Bellas Artes de Cali, es la voz a seguir. Mira 'Geometría Ancestral' ($1.800.000 COP) y 'Tejido Heredado' ($1.450.000 COP).";
  if (lower.includes("escult")) return "Camilo Hernández, becario del Mincultura desde Cartagena, hace esculturas en vidrio reciclado. 'Umbral Caribe' ($4.200.000 COP) es una pieza imperdible.";
  if (lower.includes("medellín") || lower.includes("antioquia") || lower.includes("paisa")) return "Mariana Restrepo (UdeA) pinta el páramo antioqueño con pigmentos naturales. Su obra 'Silencio del Páramo' está entre las más vistas.";
  if (lower.includes("contempl") || lower.includes("calma") || lower.includes("silencio")) return "Para algo contemplativo te recomiendo 'Sutra del Trazo' de Santiago Quintero o 'Campo No. 12' de Mariana Restrepo — ambas trabajan el silencio del gesto.";
  return "Puedo ayudarte a descubrir obras por universidad, región, técnica, color o precio. Cuéntame qué buscas — por ejemplo 'algo del Caribe bajo $2.000.000' — y curo para ti.";
};

const AIAssistant = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Bienvenido. Soy tu curador personal. Cuéntame qué buscas — un sentimiento, una región, un artista colombiano que te llame la atención." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = (text?: string) => {
    const q = (text ?? input).trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", content: q }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: seedResponses(q) }]);
    }, 500);
  };

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-ink/40 backdrop-blur-sm z-50 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      <aside
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[440px] glass z-50 flex flex-col transition-transform duration-500 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="px-6 py-5 border-b border-border/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-ink text-ivory flex items-center justify-center">
              <Sparkles className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-serif text-lg leading-none">El Curador</p>
              <p className="text-[11px] text-muted-foreground tracking-widest uppercase mt-1">Guía con IA</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-secondary rounded-full">
            <X className="w-4 h-4" />
          </button>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}>
              <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                m.role === "user" ? "bg-ink text-ivory rounded-tr-sm" : "bg-secondary text-foreground rounded-tl-sm"
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          {messages.length <= 1 && (
            <div className="pt-4 space-y-2">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Prueba preguntando</p>
              {suggestions.map((s) => (
                <button key={s} onClick={() => send(s)} className="block w-full text-left px-4 py-3 text-sm rounded-md border border-border/60 hover:bg-secondary transition-colors">
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <footer className="p-4 border-t border-border/40">
          <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex items-center gap-2 bg-secondary rounded-full pl-4 pr-1 py-1">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregúntale al Curador…"
              className="flex-1 bg-transparent text-sm py-2 outline-none placeholder:text-muted-foreground"
            />
            <button type="submit" className="w-9 h-9 rounded-full bg-ink text-ivory flex items-center justify-center hover:opacity-90">
              <Send className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </form>
        </footer>
      </aside>
    </>
  );
};

export default AIAssistant;
