import { useFavorites } from "@/context/FavoritesContext";
import { artworks } from "@/data/artworks";
import ArtworkCard from "@/components/art/ArtworkCard";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Favorites = () => {
  const { favorites } = useFavorites();
  const saved = artworks.filter((a) => favorites.includes(a.id));
  return (
    <div className="px-6 lg:px-16 py-12 pb-32 lg:pb-16">
      <header className="mb-12">
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Your collection</p>
        <h1 className="font-serif text-5xl md:text-6xl">Saved for later.</h1>
      </header>
      {saved.length === 0 ? (
        <div className="text-center py-32 max-w-md mx-auto">
          <Heart className="w-10 h-10 mx-auto text-muted-foreground mb-6" strokeWidth={1} />
          <p className="font-serif text-3xl mb-4">Nothing saved yet.</p>
          <p className="text-muted-foreground mb-8">Tap the heart on any work to keep it here.</p>
          <Link to="/discover" className="inline-flex items-center bg-ink text-ivory px-6 py-3 rounded-full text-sm">Start discovering</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {saved.map((a) => <ArtworkCard key={a.id} artwork={a} />)}
        </div>
      )}
    </div>
  );
};

export default Favorites;
