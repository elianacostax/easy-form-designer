import { Link, useParams } from "react-router-dom";
import { artworks } from "@/data/artworks";
import { ArrowLeft, Heart, Share2, ShoppingBag } from "lucide-react";
import { useFavorites } from "@/context/FavoritesContext";
import ArtworkCard from "@/components/art/ArtworkCard";

const ArtworkDetail = () => {
  const { id } = useParams();
  const work = artworks.find((w) => w.id === id);
  const { isFavorite, toggle } = useFavorites();
  if (!work) return <div className="p-16 font-serif text-3xl">Work not found.</div>;

  const related = artworks.filter((a) => a.artistId === work.artistId && a.id !== work.id).slice(0, 3);
  const fav = isFavorite(work.id);

  return (
    <div className="pb-32 lg:pb-16 animate-fade-in">
      <div className="px-6 lg:px-16 pt-8">
        <Link to="/discover" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to discover
        </Link>
      </div>

      <section className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-20 px-6 lg:px-16 pt-10">
        <div className="bg-bone rounded-md overflow-hidden">
          <img src={work.image} alt={work.title} className="w-full h-auto object-cover" />
        </div>

        <div className="lg:sticky lg:top-12 lg:self-start">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{work.category}</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mt-3">{work.title}</h1>
          <Link to={`/artist/${work.artistId}`} className="block mt-4 text-lg story-link relative w-fit">
            {work.artistName}
          </Link>

          <dl className="mt-10 space-y-4 text-sm border-t border-border/60 pt-8">
            {[
              ["Year", work.year],
              ["Medium", work.medium],
              ["Dimensions", work.dimensions],
              ["Category", work.category],
            ].map(([k, v]) => (
              <div key={k as string} className="grid grid-cols-[120px_1fr] gap-4">
                <dt className="text-muted-foreground uppercase text-[11px] tracking-widest pt-0.5">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 font-serif text-xl leading-relaxed text-foreground/90">{work.description}</p>

          {work.price && (
            <div className="mt-10 p-6 rounded-md glass">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Price on request</p>
              <p className="font-serif text-3xl mt-2">{work.price}</p>
              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-ink text-ivory rounded-full py-3.5 text-sm tracking-wide hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4" strokeWidth={1.5} /> Inquire
                </button>
                <button onClick={() => toggle(work.id)} className="w-12 h-12 rounded-full border border-border hover:bg-secondary flex items-center justify-center">
                  <Heart className={`w-4 h-4 ${fav ? "fill-terracotta text-terracotta" : ""}`} strokeWidth={1.5} />
                </button>
                <button className="w-12 h-12 rounded-full border border-border hover:bg-secondary flex items-center justify-center">
                  <Share2 className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-32 px-6 lg:px-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">More by {work.artistName}</p>
          <h2 className="font-serif text-4xl mb-10">From the same hand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {related.map((a) => <ArtworkCard key={a.id} artwork={a} />)}
          </div>
        </section>
      )}
    </div>
  );
};

export default ArtworkDetail;
