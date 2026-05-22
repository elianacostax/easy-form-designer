import { useState } from "react";
import { artworks, categories } from "@/data/artworks";
import ArtworkCard from "@/components/art/ArtworkCard";
import { Search } from "lucide-react";

const Discover = () => {
  const [filter, setFilter] = useState<string>("Todo");
  const [q, setQ] = useState("");
  const filtered = artworks.filter((a) =>
    (filter === "Todo" || a.category === filter) &&
    (q === "" || a.title.toLowerCase().includes(q.toLowerCase()) || a.artistName.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div className="px-6 lg:px-16 py-12 pb-32 lg:pb-12">
      <header className="mb-12 max-w-3xl">
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Descubrir</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight">Un feed con tu mirada.</h1>
        <p className="text-muted-foreground mt-4 max-w-xl">Explora obras seleccionadas de estudiantes de artes de toda Colombia. Cada pieza es una puerta.</p>
      </header>

      <div className="sticky top-0 lg:top-4 z-30 -mx-6 lg:mx-0 px-6 lg:px-0 py-4 bg-background/85 backdrop-blur-xl border-b border-border/40 lg:border-0 mb-8">
        <div className="flex items-center gap-3 bg-secondary rounded-full px-5 py-3 mb-5 max-w-xl">
          <Search className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar obras, artistas, universidades…" className="bg-transparent outline-none text-sm flex-1" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {["Todo", ...categories.map((c) => c.name)].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs tracking-wide border transition-all ${
                filter === c ? "bg-ink text-ivory border-ink" : "border-border/70 hover:bg-secondary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {filtered.map((a) => <ArtworkCard key={a.id} artwork={a} />)}
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-24 text-muted-foreground font-serif text-2xl">No encontramos obras. Prueba con otra búsqueda.</p>
      )}
    </div>
  );
};

export default Discover;
