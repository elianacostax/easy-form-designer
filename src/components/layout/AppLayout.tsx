import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Compass, Sparkles, Image as ImageIcon, User, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import AIAssistant from "@/components/ai/AIAssistant";

const nav = [
  { to: "/discover", label: "Descubrir", icon: Compass },
  { to: "/galleries", label: "Galerías", icon: ImageIcon },
  { to: "/trending", label: "Tendencias", icon: Sparkles },
  { to: "/dashboard", label: "Mi espacio", icon: User },
];

const AppLayout = () => {
  const [aiOpen, setAiOpen] = useState(false);
  const { pathname } = useLocation();
  const isLanding = pathname === "/";

  return (
    <div className="min-h-screen flex w-full bg-background">
      <aside className="hidden lg:flex w-60 flex-col fixed inset-y-0 border-r border-border/60 px-6 py-8 z-40 bg-background/80 backdrop-blur-xl">
        <NavLink to="/" className="font-serif text-2xl tracking-tight mb-2">
          MUSÉO<span className="text-terracotta">.</span>
        </NavLink>
        <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-10">Arte joven · Colombia</p>
        <nav className="flex flex-col gap-1 flex-1">
          {nav.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all ${
                  isActive
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`
              }
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
              <span className="tracking-wide">{label}</span>
            </NavLink>
          ))}
          <NavLink to="/favorites" className={({ isActive }) =>
            `group flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all ${
              isActive ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
            }`
          }>
            <Heart className="w-4 h-4" strokeWidth={1.5} />
            <span className="tracking-wide">Favoritos</span>
          </NavLink>
        </nav>

        <button
          onClick={() => setAiOpen(true)}
          className="mt-6 flex items-center gap-3 px-3 py-3 rounded-md text-sm bg-ink text-ivory hover:opacity-90 transition-all"
        >
          <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
          <span>Pregunta al Curador</span>
        </button>

        <div className="mt-6 text-[11px] text-muted-foreground tracking-widest uppercase">
          © Muséo 2026
        </div>
      </aside>

      <header className="lg:hidden fixed top-0 inset-x-0 z-40 glass border-b border-border/40 px-5 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-serif text-xl">MUSÉO<span className="text-terracotta">.</span></NavLink>
        <button onClick={() => setAiOpen(true)} className="p-2 rounded-full bg-ink text-ivory">
          <MessageCircle className="w-4 h-4" />
        </button>
      </header>

      <main className={`flex-1 lg:ml-60 ${isLanding ? "" : "pt-20 lg:pt-0"}`}>
        <Outlet />
        <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 glass border-t border-border/40 flex justify-around py-3">
          {nav.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-[10px] tracking-wider ${isActive ? "text-foreground" : "text-muted-foreground"}`
            }>
              <Icon className="w-5 h-5" strokeWidth={1.5} />
              {label}
            </NavLink>
          ))}
        </nav>
      </main>

      <AIAssistant open={aiOpen} onClose={() => setAiOpen(false)} />
    </div>
  );
};

export default AppLayout;
