import { create } from "zustand";
import { persist } from "zustand/middleware";


interface WishlistState {
  wishlistIds: string[]; 
  setWishlist: (ids: string[]) => void;
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
}


export const useWishlistStore = create<WishlistState>()(
  persist(
    (set) => ({
      wishlistIds: [],
      

      setWishlist: (ids) => set({ wishlistIds: ids }),


      addToWishlist: (id) =>
        set((state) => ({ wishlistIds: [...state.wishlistIds, id] })),


      removeFromWishlist: (id) =>
        set((state) => ({
          wishlistIds: state.wishlistIds.filter((wishId) => wishId !== id),
        })),
    }),
    {
      name: "wishlist-storage",
    }
  )
);