import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "@/context/FavoritesContext";
import AppLayout from "@/components/layout/AppLayout";
import Landing from "./pages/Landing";
import Discover from "./pages/Discover";
import ArtworkDetail from "./pages/ArtworkDetail";
import ArtistProfile from "./pages/ArtistProfile";
import Galleries from "./pages/Galleries";
import GalleryDetail from "./pages/GalleryDetail";
import Trending from "./pages/Trending";
import Favorites from "./pages/Favorites";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Landing />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/artwork/:id" element={<ArtworkDetail />} />
              <Route path="/artist/:id" element={<ArtistProfile />} />
              <Route path="/galleries" element={<Galleries />} />
              <Route path="/gallery/:id" element={<GalleryDetail />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
