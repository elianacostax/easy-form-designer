import { useFavorites } from "@/context/FavoritesContext";
import { artworks, artists, categories } from "@/data/artworks";
import ArtworkCard from "@/components/art/ArtworkCard";
import { Link } from "react-router-dom";
import { Sparkles, Eye, Heart, Layers } from "lucide-react";

const Dashboard = () => {
  const { favorites } = useFavorites();
  const saved = artworks.filter((a) => favorites.includes(a.id));
  const recs = artworks.filter((a) => !favorites.includes(a.id)).slice(0, 4);

  const stats = [
    { label: "Saved", value: saved.length, icon: Heart },
    { label: "Viewed this week", value: 42, icon: Eye },
    { label: "Following", value: 7, icon: Layers },
  ];

  return (
    <div className="px-6 lg:px-16 py-12 pb-32 lg:pb-16">
      <header className="mb-16 flex items-end justify-between flex-wrap gap-6">
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Welcome back</p>
          <h1 className="font-serif text-5xl md:text-6xl">Your private wing.</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-serif text-xl">M</div>
          <div>
            <p className="text-sm font-medium">Maya Collector</p>
            <p className="text-xs text-muted-foreground">Member since 2025</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-3 md:gap-6 mb-16">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="p-5 md:p-8 rounded-md border border-border/60 bg-card hover-lift">
            <Icon className="w-5 h-5 text-muted-foreground mb-4" strokeWidth={1.5} />
            <p className="font-serif text-4xl md:text-5xl">{value}</p>
            <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">{label}</p>
          </div>
        ))}
      </div>

      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Recommended for you
            </p>
            <h2 className="font-serif text-4xl">Curated by your taste.</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recs.map((a) => <ArtworkCard key={a.id} artwork={a} />)}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="font-serif text-4xl mb-8">Artists you follow</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {artists.map((a) => (
            <Link key={a.id} to={`/artist/${a.id}`} className="flex items-center gap-4 p-4 rounded-md border border-border/60 hover:bg-secondary/60 transition-colors">
              <img src={a.avatar} alt={a.name} className="w-14 h-14 rounded-full object-cover" />
              <div className="min-w-0">
                <p className="font-serif text-lg truncate">{a.name}</p>
                <p className="text-xs text-muted-foreground truncate">{a.followers} followers</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-4xl mb-8">Explore by category</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <Link key={c.name} to="/discover" className="px-5 py-3 rounded-full border border-border/60 hover:bg-ink hover:text-ivory hover:border-ink transition-all text-sm">
              {c.name} <span className="text-muted-foreground ml-2">{c.count}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
