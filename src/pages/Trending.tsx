import { artworks } from "@/data/artworks";
import ArtworkCard from "@/components/art/ArtworkCard";
import { TrendingUp } from "lucide-react";

const Trending = () => {
  const trending = artworks.filter((a) => a.trending);
  const rest = artworks.filter((a) => !a.trending);
  return (
    <div className="px-6 lg:px-16 py-12 pb-32 lg:pb-16">
      <header className="mb-12 flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3 inline-flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5" /> Trending now
          </p>
          <h1 className="font-serif text-5xl md:text-6xl">What the world is watching.</h1>
        </div>
        <p className="text-sm text-muted-foreground">Updated hourly · Based on global engagement</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {[...trending, ...rest].map((a) => <ArtworkCard key={a.id} artwork={a} />)}
      </div>
    </div>
  );
};

export default Trending;
