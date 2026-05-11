import { create } from "zustand";
import { persist } from "zustand/middleware";

// 1. تحديد شكل البيانات اللي هتتخزن
interface WishlistState {
  wishlistIds: string[]; // بنخزن الـ IDs بتاعة المنتجات اللي عملنا لها لايك
  setWishlist: (ids: string[]) => void;
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
}

// 2. إنشاء الـ Store مع خاصية الـ Persist عشان الداتا متمسحش مع الريفريش
export const useWishlistStore = create<WishlistState>()(
  persist(
    (set) => ({
      wishlistIds: [],
      
      // بنستخدم دي لما نجيب الداتا من الـ API أول ما الموقع يفتح
      setWishlist: (ids) => set({ wishlistIds: ids }),

      // بنضيف ID جديد للوفوريت
      addToWishlist: (id) =>
        set((state) => ({ wishlistIds: [...state.wishlistIds, id] })),

      // بنشيل ID من الوفوريت
      removeFromWishlist: (id) =>
        set((state) => ({
          wishlistIds: state.wishlistIds.filter((wishId) => wishId !== id),
        })),
    }),
    {
      name: "wishlist-storage", // ده الاسم اللي هيتحفظ بيه في الـ LocalStorage
    }
  )
);