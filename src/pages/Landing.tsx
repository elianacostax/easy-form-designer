import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-museum.jpg";
import { artworks, artists, galleries } from "@/data/artworks";
import ArtworkCard from "@/components/art/ArtworkCard";

const Landing = () => {
  const featured = artworks.slice(0, 4);
  return (
    <div className="min-h-screen">
      {/* Cinematic hero */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden -mt-20 lg:mt-0">
        <img src={hero} alt="Empty contemporary gallery interior" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/70" />
        <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-16">
          <div className="flex justify-between items-start text-ivory">
            <p className="text-[11px] tracking-[0.3em] uppercase opacity-80">Vol. III — Winter 2026</p>
            <p className="text-[11px] tracking-[0.3em] uppercase opacity-80 hidden md:block">A digital museum</p>
          </div>

          <div className="text-ivory max-w-4xl animate-fade-up">
            <p className="text-[11px] tracking-[0.3em] uppercase opacity-80 mb-6">Now exhibiting</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[8.5rem] leading-[0.95] tracking-tight text-balance">
              A quiet revolution<br /><em className="font-light">in how we see art.</em>
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link to="/discover" className="inline-flex items-center gap-3 bg-ivory text-ink px-7 py-4 rounded-full text-sm tracking-wide hover:bg-ivory/90 transition-all group">
                Enter the museum
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
              <Link to="/galleries" className="text-sm tracking-wide text-ivory/90 hover:text-ivory px-3 py-2 inline-flex items-center gap-2">
                Explore virtual galleries <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial intro */}
      <section className="py-24 lg:py-36 px-6 lg:px-16">
        <div className="max-w-5xl">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-8">The Premise</p>
          <p className="font-serif text-3xl md:text-5xl leading-[1.2] text-balance">
            Muséo is a slow museum for a fast world. A curated digital archive where every work is given the silence it deserves — and an intelligent curator that listens to how you see.
          </p>
        </div>
      </section>

      {/* Featured works */}
      <section className="px-6 lg:px-16 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Featured</p>
            <h2 className="font-serif text-4xl md:text-5xl">This week's selection</h2>
          </div>
          <Link to="/discover" className="text-sm tracking-wide story-link relative hidden md:inline-flex items-center gap-2">
            View all <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featured.map((a, i) => <ArtworkCard key={a.id} artwork={a} priority={i === 0} />)}
        </div>
      </section>

      {/* Galleries */}
      <section className="bg-bone/60 py-24 px-6 lg:px-16">
        <div className="mb-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Virtual galleries</p>
          <h2 className="font-serif text-4xl md:text-5xl max-w-2xl">Immersive rooms, curated by the world's eyes.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {galleries.slice(0, 2).map((g) => (
            <Link to={`/gallery/${g.id}`} key={g.id} className="group relative overflow-hidden rounded-md aspect-[16/10] hover-lift">
              <img src={g.cover} alt={g.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-ivory">
                <p className="text-[11px] tracking-[0.3em] uppercase opacity-80">{g.curator}</p>
                <h3 className="font-serif text-3xl md:text-4xl mt-2">{g.title}</h3>
                <p className="text-sm opacity-80 mt-2 max-w-md">{g.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Artists */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mb-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Artists</p>
          <h2 className="font-serif text-4xl md:text-5xl">Voices defining the moment.</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((a) => (
            <Link to={`/artist/${a.id}`} key={a.id} className="group block">
              <div className="aspect-square overflow-hidden rounded-full w-32 h-32 mx-auto mb-5">
                <img src={a.avatar} alt={a.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl">{a.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{a.origin}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/60 py-10 px-6 lg:px-16 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground tracking-widest uppercase">
        <p>Muséo — A digital museum experience</p>
        <p>© 2026 · All works © their respective artists</p>
      </footer>
    </div>
  );
};

export default Landing;
