import { Link } from "react-router-dom";
import { galleries } from "@/data/artworks";

const Galleries = () => (
  <div className="px-6 lg:px-16 py-12 pb-32 lg:pb-16">
    <header className="mb-16 max-w-3xl">
      <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Virtual galleries</p>
      <h1 className="font-serif text-5xl md:text-6xl leading-tight">Step inside curated rooms.</h1>
    </header>
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {galleries.map((g, i) => (
        <Link key={g.id} to={`/gallery/${g.id}`} className={`group relative overflow-hidden rounded-md hover-lift ${i % 3 === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"}`}>
          <img src={g.cover} alt={g.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-ivory">
            <p className="text-[11px] tracking-[0.3em] uppercase opacity-80">{g.curator} · {g.works} works</p>
            <h3 className="font-serif text-3xl md:text-5xl mt-3">{g.title}</h3>
            <p className="text-sm opacity-85 mt-3 max-w-lg">{g.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Galleries;
