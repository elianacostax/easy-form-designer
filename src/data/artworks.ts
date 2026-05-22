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
  school: string;
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
  { id: "a1", name: "Mariana Restrepo", origin: "Medellín, Antioquia", school: "Universidad de Antioquia · Artes Plásticas", born: 2001, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", cover: img(0), bio: "Estudiante de último semestre de Artes Plásticas. Trabaja la memoria de la montaña paisa a través del óleo y pigmentos naturales recolectados en el campo antioqueño.", works: 14, followers: "1.2K" },
  { id: "a2", name: "Santiago Quintero", origin: "Bogotá, Cundinamarca", school: "Universidad Nacional de Colombia · Bellas Artes", born: 1999, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", cover: img(3), bio: "Investiga el silencio urbano de Bogotá con tinta china sobre papel de algodón. Egresado reciente del taller de dibujo experimental de la UNAL.", works: 22, followers: "2.4K" },
  { id: "a3", name: "Valentina Caicedo", origin: "Cali, Valle del Cauca", school: "Instituto Departamental de Bellas Artes", born: 2002, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", cover: img(5), bio: "Artista afrocolombiana del Pacífico. Mezcla técnicas ancestrales del Chocó con abstracción contemporánea y pan de oro.", works: 11, followers: "890" },
  { id: "a4", name: "Camilo Hernández", origin: "Cartagena, Bolívar", school: "Universidad de Bellas Artes y Ciencias de Bolívar", born: 2000, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", cover: img(7), bio: "Esculturas en resina y vidrio reciclado que capturan la luz del Caribe. Beca de creación joven del Ministerio de Cultura 2025.", works: 9, followers: "1.8K" },
];

export const artworks: Artwork[] = [
  { id: "w1", title: "Silencio del Páramo", artistId: "a1", artistName: "Mariana Restrepo", year: 2024, medium: "Óleo sobre lino", category: "Pintura", dimensions: "120 × 90 cm", price: "$2.400.000 COP", image: img(0), description: "Una meditación sobre el páramo antioqueño al amanecer — pigmentos cálidos en capas sobre el silencio del frailejón.", trending: true },
  { id: "w2", title: "Bogotá en Tinta VII", artistId: "a2", artistName: "Santiago Quintero", year: 2025, medium: "Tinta china sobre papel de algodón", category: "Dibujo", dimensions: "80 × 60 cm", price: "$850.000 COP", image: img(1), description: "Parte de una serie que documenta los cerros orientales en gestos mínimos de tinta." },
  { id: "w3", title: "Geometría Ancestral", artistId: "a3", artistName: "Valentina Caicedo", year: 2025, medium: "Técnica mixta sobre lienzo", category: "Pintura", dimensions: "150 × 120 cm", price: "$1.800.000 COP", image: img(2), description: "Patrones del Pacífico colombiano traducidos a pigmento, pan de oro y gesto contemporáneo.", trending: true },
  { id: "w4", title: "Umbral Caribe", artistId: "a4", artistName: "Camilo Hernández", year: 2024, medium: "Resina y vidrio reciclado", category: "Escultura", dimensions: "200 × 80 × 60 cm", price: "$4.200.000 COP", image: img(3), description: "Forma escultórica translúcida que refracta la luz del Caribe colombiano." },
  { id: "w5", title: "Campo No. 12", artistId: "a1", artistName: "Mariana Restrepo", year: 2024, medium: "Óleo y cera sobre madera", category: "Pintura", dimensions: "60 × 60 cm", price: "$640.000 COP", image: img(4), description: "Pequeño formato sobre la memoria del paisaje antioqueño." },
  { id: "w6", title: "Sutra del Trazo", artistId: "a2", artistName: "Santiago Quintero", year: 2024, medium: "Tinta sobre seda", category: "Dibujo", dimensions: "100 × 70 cm", price: "$1.100.000 COP", image: img(5), trending: true, description: "Composición de un solo gesto sobre la impermanencia del trazo." },
  { id: "w7", title: "Sueño de Buenaventura", artistId: "a3", artistName: "Valentina Caicedo", year: 2025, medium: "Acrílico y pan de oro", category: "Pintura", dimensions: "180 × 140 cm", price: "$2.200.000 COP", image: img(6), description: "Memoria urbana del puerto traducida a abstracción gestual." },
  { id: "w8", title: "Horizonte de Vidrio", artistId: "a4", artistName: "Camilo Hernández", year: 2025, medium: "Vidrio soplado", category: "Escultura", dimensions: "60 × 200 × 40 cm", price: "$3.100.000 COP", image: img(7), description: "Meditación escultórica horizontal sobre la transparencia del mar." },
  { id: "w9", title: "Arquitecturas Silenciosas", artistId: "a1", artistName: "Mariana Restrepo", year: 2025, medium: "Óleo sobre lino", category: "Pintura", dimensions: "140 × 100 cm", price: "$2.800.000 COP", image: img(8), trending: true, description: "Fragmentos arquitectónicos de pueblos paisas suspendidos en color atmosférico." },
  { id: "w10", title: "Caligrafía del Viento", artistId: "a2", artistName: "Santiago Quintero", year: 2025, medium: "Tinta sobre papel", category: "Dibujo", dimensions: "90 × 60 cm", price: "$980.000 COP", image: img(9), description: "Trazo caligráfico que responde al ritmo del viento andino." },
  { id: "w11", title: "Tejido Heredado", artistId: "a3", artistName: "Valentina Caicedo", year: 2024, medium: "Técnica mixta", category: "Textil", dimensions: "120 × 90 cm", price: "$1.450.000 COP", image: img(10), description: "Tejido y pigmento que exploran el patrón heredado del Pacífico." },
  { id: "w12", title: "Vasija de Luz", artistId: "a4", artistName: "Camilo Hernández", year: 2025, medium: "Vidrio y acero", category: "Escultura", dimensions: "180 × 60 × 60 cm", price: "$3.800.000 COP", image: img(11), description: "Forma escultórica vertical que captura la luz del trópico a lo largo del día." },
];

export const galleries: Gallery[] = [
  { id: "g1", title: "Nuevas Voces del Pacífico", curator: "Curaduría: Sofía Lin", cover: img(0), works: 24, description: "Una muestra de estudiantes del Valle, Cauca y Chocó explorando memoria, raíz y abstracción." },
  { id: "g2", title: "Después de la Luz", curator: "Curaduría: Marcos Reyes", cover: img(7), works: 18, description: "Escultura y fotografía joven en diálogo con la luz del Caribe colombiano." },
  { id: "g3", title: "Cartografías Andinas", curator: "Curaduría: Amina Diallo", cover: img(2), works: 31, description: "Voces emergentes de la cordillera mapeando identidad, territorio y migración interna." },
  { id: "g4", title: "El Gesto Universitario", curator: "Curaduría: Hideo Tanaka", cover: img(5), works: 22, description: "Una mirada íntima al dibujo y la pintura en las facultades de artes del país." },
];

export const categories = [
  { name: "Pintura", count: 248 },
  { name: "Escultura", count: 96 },
  { name: "Dibujo", count: 142 },
  { name: "Fotografía", count: 187 },
  { name: "Digital", count: 73 },
  { name: "Textil", count: 41 },
];
