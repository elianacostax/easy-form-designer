export type Artwork = {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  year: number;
  medium: string;
  category: string;
  dimensions: string;
  price?: string;
  image: string;
  description: string;
  trending?: boolean;
};

export type Artist = {
  id: string;
  name: string;
  origin: string;
  born: number;
  avatar: string;
  cover: string;
  bio: string;
  works: number;
  followers: string;
};

export type Gallery = {
  id: string;
  title: string;
  curator: string;
  cover: string;
  works: number;
  description: string;
};

// Wikimedia / open art image URLs (public domain masterpieces)
const img = (n: number) => {
  const set = [
    "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=1200&q=80",
    "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=1200&q=80",
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80",
    "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=1200&q=80",
    "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=1200&q=80",
    "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=1200&q=80",
    "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=1200&q=80",
    "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1200&q=80",
    "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=1200&q=80",
    "https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=1200&q=80",
    "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=1200&q=80",
    "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=1200&q=80",
  ];
  return set[n % set.length];
};

export const artists: Artist[] = [
  { id: "a1", name: "Elena Marchetti", origin: "Milan, Italy", born: 1982, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", cover: img(0), bio: "Italian visual artist exploring memory, light and architectural silence through layered oils and pigment.", works: 47, followers: "12.4K" },
  { id: "a2", name: "Kenji Aoyama", origin: "Kyoto, Japan", born: 1975, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", cover: img(3), bio: "Contemporary minimalist working with sumi ink, paper and the gesture of absence.", works: 89, followers: "34.1K" },
  { id: "a3", name: "Amara Okafor", origin: "Lagos, Nigeria", born: 1990, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", cover: img(5), bio: "Mixed-media painter weaving ancestral motifs with contemporary digital abstraction.", works: 33, followers: "8.9K" },
  { id: "a4", name: "Luc Vermeer", origin: "Amsterdam, NL", born: 1968, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", cover: img(7), bio: "Sculptor of light and translucent forms, exhibited at the Stedelijk and Tate Modern.", works: 56, followers: "21.7K" },
];

export const artworks: Artwork[] = [
  { id: "w1", title: "Silence in Amber", artistId: "a1", artistName: "Elena Marchetti", year: 2023, medium: "Oil on linen", category: "Painting", dimensions: "120 × 90 cm", price: "$24,000", image: img(0), description: "A meditation on the spaces between memory and architecture — warm pigment layered against negative space.", trending: true },
  { id: "w2", title: "Ink Garden VII", artistId: "a2", artistName: "Kenji Aoyama", year: 2024, medium: "Sumi ink on rice paper", category: "Drawing", dimensions: "80 × 60 cm", price: "$8,500", image: img(1), description: "Part of an ongoing series exploring the gesture of restraint through traditional sumi technique." },
  { id: "w3", title: "Ancestral Geometry", artistId: "a3", artistName: "Amara Okafor", year: 2024, medium: "Mixed media on canvas", category: "Painting", dimensions: "150 × 120 cm", price: "$18,200", image: img(2), description: "Layered textile patterns translated into pigment, gold leaf and gesture.", trending: true },
  { id: "w4", title: "Threshold", artistId: "a4", artistName: "Luc Vermeer", year: 2022, medium: "Cast resin & light", category: "Sculpture", dimensions: "200 × 80 × 60 cm", price: "$42,000", image: img(3), description: "Translucent sculptural form refracting ambient gallery light." },
  { id: "w5", title: "Field Study No. 12", artistId: "a1", artistName: "Elena Marchetti", year: 2023, medium: "Oil & wax on panel", category: "Painting", dimensions: "60 × 60 cm", price: "$6,400", image: img(4), description: "Small-format meditation on landscape memory." },
  { id: "w6", title: "Brushstroke Sutra", artistId: "a2", artistName: "Kenji Aoyama", year: 2023, medium: "Ink on silk", category: "Drawing", dimensions: "100 × 70 cm", price: "$11,000", image: img(5), trending: true, description: "Single-gesture composition exploring the impermanence of mark-making." },
  { id: "w7", title: "Lagos Dreaming", artistId: "a3", artistName: "Amara Okafor", year: 2024, medium: "Acrylic & gold leaf", category: "Painting", dimensions: "180 × 140 cm", price: "$22,800", image: img(6), description: "Urban memory translated into gestural abstraction." },
  { id: "w8", title: "Glass Horizon", artistId: "a4", artistName: "Luc Vermeer", year: 2024, medium: "Blown glass", category: "Sculpture", dimensions: "60 × 200 × 40 cm", price: "$31,500", image: img(7), description: "Horizontal sculptural meditation on transparency." },
  { id: "w9", title: "Quiet Architectures", artistId: "a1", artistName: "Elena Marchetti", year: 2024, medium: "Oil on linen", category: "Painting", dimensions: "140 × 100 cm", price: "$28,600", image: img(8), trending: true, description: "Architectural fragments suspended in atmospheric color." },
  { id: "w10", title: "Wind Calligraphy", artistId: "a2", artistName: "Kenji Aoyama", year: 2024, medium: "Ink on paper", category: "Drawing", dimensions: "90 × 60 cm", price: "$9,800", image: img(9), description: "Calligraphic mark responding to the rhythm of wind through bamboo." },
  { id: "w11", title: "Heritage Weave", artistId: "a3", artistName: "Amara Okafor", year: 2023, medium: "Mixed media", category: "Textile", dimensions: "120 × 90 cm", price: "$14,500", image: img(10), description: "Woven textile and pigment exploring inherited pattern." },
  { id: "w12", title: "Light Vessel", artistId: "a4", artistName: "Luc Vermeer", year: 2024, medium: "Glass & steel", category: "Sculpture", dimensions: "180 × 60 × 60 cm", price: "$38,000", image: img(11), description: "Vertical sculptural form catching daylight throughout the gallery hours." },
];

export const galleries: Gallery[] = [
  { id: "g1", title: "Quiet Materials", curator: "Curated by Sofia Lin", cover: img(0), works: 24, description: "A survey of contemporary works exploring restraint, texture and silence." },
  { id: "g2", title: "After the Light", curator: "Curated by Marcus Reed", cover: img(7), works: 18, description: "Sculpture and photography in conversation with the architecture of daylight." },
  { id: "g3", title: "New Cartographies", curator: "Curated by Amina Diallo", cover: img(2), works: 31, description: "Emerging voices mapping identity, place and migration through paint." },
  { id: "g4", title: "The Gesture", curator: "Curated by Hideo Tanaka", cover: img(5), works: 22, description: "An intimate look at mark-making across cultures and generations." },
];

export const categories = [
  { name: "Painting", count: 248 },
  { name: "Sculpture", count: 96 },
  { name: "Drawing", count: 142 },
  { name: "Photography", count: 187 },
  { name: "Digital", count: 73 },
  { name: "Textile", count: 41 },
];
