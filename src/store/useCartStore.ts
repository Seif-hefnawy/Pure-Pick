import { getLoggedUserCart } from "@/api/Cart.api";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
 // تأكد إن الـ API ده موجود عندك

interface CartState {
  cartCount: number;
  cartIds: string[];
  updateCartCount: (token: string) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
  cartCount: 0,
  cartIds: [],
  updateCartCount: async (token) => {
    const res = await getLoggedUserCart(token);
    if (res.status === "success") {
      // بنطلع الـ IDs من جوه الـ items اللي راجعة من الـ API
      const ids = res.data.products.map((item: any) => item.product._id);
      set({ 
        cartCount: res.numOfCartItems, 
        cartIds: ids 
      });
    }
  },
}));