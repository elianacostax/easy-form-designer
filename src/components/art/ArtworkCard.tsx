import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Artwork } from "@/data/artworks";
import { useFavorites } from "@/context/FavoritesContext";

const ArtworkCard = ({ artwork, priority = false }: { artwork: Artwork; priority?: boolean }) => {
  const { isFavorite, toggle } = useFavorites();
  const fav = isFavorite(artwork.id);
  return (
    <Link to={`/artwork/${artwork.id}`} className="group block hover-lift">
      <div className="relative overflow-hidden rounded-md bg-bone aspect-[4/5]">
        <img
          src={artwork.image}
          alt={artwork.title}
          loading={priority ? "eager" : "lazy"}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <button
          onClick={(e) => { e.preventDefault(); toggle(artwork.id); }}
          aria-label="Save to favorites"
          className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className={`w-4 h-4 ${fav ? "fill-terracotta text-terracotta" : ""}`} strokeWidth={1.5} />
        </button>
      </div>
      <div className="pt-4 flex justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-serif text-lg leading-tight truncate">{artwork.title}</h3>
          <p className="text-xs text-muted-foreground mt-1 tracking-wide">
            {artwork.artistName} · {artwork.year}
          </p>
        </div>
        {artwork.price && <p className="text-xs text-foreground/80 whitespace-nowrap pt-1">{artwork.price}</p>}
      </div>
    </Link>
  );
};

export default ArtworkCard;
