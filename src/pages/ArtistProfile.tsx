import { Link, useParams } from "react-router-dom";
import { artists, artworks } from "@/data/artworks";
import ArtworkCard from "@/components/art/ArtworkCard";
import { ArrowLeft, Plus } from "lucide-react";

const ArtistProfile = () => {
  const { id } = useParams();
  const artist = artists.find((a) => a.id === id);
  if (!artist) return <div className="p-16 font-serif text-3xl">Artist not found.</div>;
  const works = artworks.filter((w) => w.artistId === artist.id);

  return (
    <div className="pb-32 lg:pb-16 animate-fade-in">
      {/* Cover */}
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden -mt-20 lg:mt-0">
        <img src={artist.cover} alt={`${artist.name} cover`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 to-background" />
        <Link to="/discover" className="absolute top-6 left-6 lg:top-10 lg:left-10 z-10 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ivory glass-dark text-ivory rounded-full px-4 py-2">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
      </div>

      <div className="px-6 lg:px-16 -mt-32 lg:-mt-40 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:items-end">
          <img src={artist.avatar} alt={artist.name} className="w-32 h-32 lg:w-44 lg:h-44 rounded-full object-cover ring-4 ring-background shadow-float" />
          <div className="flex-1">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-2">{artist.origin} · b. {artist.born}</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-none">{artist.name}</h1>
          </div>
          <button className="inline-flex items-center gap-2 bg-ink text-ivory rounded-full px-6 py-3 text-sm">
            <Plus className="w-4 h-4" strokeWidth={1.5} /> Follow
          </button>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-12">
          <p className="lg:col-span-2 font-serif text-2xl md:text-3xl leading-relaxed text-balance">{artist.bio}</p>
          <dl className="space-y-6 border-l border-border/60 pl-8">
            {[["Works", artist.works], ["Followers", artist.followers], ["Origin", artist.origin]].map(([k, v]) => (
              <div key={k as string}>
                <dt className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{k}</dt>
                <dd className="font-serif text-3xl mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <section className="mt-24">
          <h2 className="font-serif text-4xl mb-10">Selected works</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {works.map((w) => <ArtworkCard key={w.id} artwork={w} />)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArtistProfile;
