import { Sparkles, X, Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const suggestions = [
  "Show me minimalist Japanese ink works",
  "What's trending this week?",
  "Recommend something like Rothko",
  "Sculptures under $20,000",
];

const seedResponses = (q: string) => {
  const lower = q.toLowerCase();
  if (lower.includes("trend")) return "This week, viewers are drawn to Amara Okafor's gestural abstractions and Kenji Aoyama's new sumi works. Both are featured in the Discover feed.";
  if (lower.includes("rothko") || lower.includes("color")) return "If Rothko moves you, explore Elena Marchetti's 'Silence in Amber' — a meditation on color field through layered oils. I've also queued Lagos Dreaming by Amara Okafor for you.";
  if (lower.includes("sculpt")) return "Luc Vermeer's 'Threshold' ($42K) and 'Glass Horizon' ($31.5K) are exceptional translucent sculptures. Would you like me to open the Virtual Gallery: After the Light?";
  if (lower.includes("japan") || lower.includes("ink") || lower.includes("minimal")) return "Kenji Aoyama is the artist to know. His 'Ink Garden VII' and 'Brushstroke Sutra' embody contemporary minimalism through traditional sumi technique.";
  return "I can help you discover artworks by mood, medium, color or price. Try asking for a specific feeling — 'something contemplative under $10K' — and I'll curate for you.";
};

const AIAssistant = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Welcome. I'm your private curator. Tell me what you're searching for — a feeling, a color, an artist you love." },
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
              <p className="font-serif text-lg leading-none">The Curator</p>
              <p className="text-[11px] text-muted-foreground tracking-widest uppercase mt-1">AI-powered guide</p>
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
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Try asking</p>
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
              placeholder="Ask the Curator…"
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
