import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Ctx = {
  favorites: string[];
  toggle: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<Ctx | null>(null);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem("museo-favs") || "[]"); } catch { return []; }
  });
  useEffect(() => { localStorage.setItem("museo-favs", JSON.stringify(favorites)); }, [favorites]);
  const toggle = (id: string) =>
    setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  const isFavorite = (id: string) => favorites.includes(id);
  return <FavoritesContext.Provider value={{ favorites, toggle, isFavorite }}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
};
