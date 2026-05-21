import { Link, useParams } from "react-router-dom";
import { galleries, artworks } from "@/data/artworks";
import ArtworkCard from "@/components/art/ArtworkCard";
import { ArrowLeft } from "lucide-react";

const GalleryDetail = () => {
  const { id } = useParams();
  const gallery = galleries.find((g) => g.id === id);
  if (!gallery) return <div className="p-16 font-serif text-3xl">Gallery not found.</div>;
  const works = artworks.slice(0, gallery.works > 8 ? 8 : gallery.works);

  return (
    <div className="pb-32 lg:pb-16 animate-fade-in">
      <div className="relative h-[70vh] min-h-[500px] -mt-20 lg:mt-0 overflow-hidden">
        <img src={gallery.cover} alt={gallery.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/80" />
        <Link to="/galleries" className="absolute top-6 left-6 lg:top-10 lg:left-10 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ivory glass-dark text-ivory rounded-full px-4 py-2">
          <ArrowLeft className="w-3.5 h-3.5" /> Galleries
        </Link>
        <div className="absolute bottom-0 inset-x-0 p-8 lg:p-16 text-ivory">
          <p className="text-[11px] tracking-[0.3em] uppercase opacity-80">{gallery.curator}</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4 max-w-4xl leading-[0.95]">{gallery.title}</h1>
          <p className="text-base md:text-lg opacity-85 mt-6 max-w-2xl">{gallery.description}</p>
        </div>
      </div>

      <section className="px-6 lg:px-16 mt-20">
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">The rooms</p>
        <h2 className="font-serif text-4xl mb-10">{gallery.works} works on view</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {works.map((w) => <ArtworkCard key={w.id} artwork={w} />)}
        </div>
      </section>
    </div>
  );
};

export default GalleryDetail;
