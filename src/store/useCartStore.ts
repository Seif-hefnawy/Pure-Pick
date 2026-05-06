import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartState {
  cartCount: number;
  setCartCount: (count: number) => void;
  incrementCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartCount: 0,
      setCartCount: (count) => set({ cartCount: count }),
      incrementCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
    }),
    {
      name: 'cart-storage', // ده الاسم اللي هيظهر في الـ LocalStorage بتاع المتصفح
    }
  )
);