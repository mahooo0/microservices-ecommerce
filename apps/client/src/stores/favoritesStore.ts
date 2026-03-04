import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type FavoritesState = {
  favorites: number[];
  hasHydrated: boolean;
};

type FavoritesActions = {
  toggleFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  clearFavorites: () => void;
  isFavorite: (id: number) => boolean;
};

const useFavoritesStore = create<FavoritesState & FavoritesActions>()(
  persist(
    (set, get) => ({
      favorites: [],
      hasHydrated: false,
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((fId) => fId !== id)
            : [...state.favorites, id],
        })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((fId) => fId !== id),
        })),
      clearFavorites: () => set({ favorites: [] }),
      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);

export default useFavoritesStore;
