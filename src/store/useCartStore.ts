import { getLoggedUserCart } from "@/api/Cart.api";
import { create } from 'zustand';



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

      const ids = res.data.products.map((item: any) => item.product._id);
      set({ 
        cartCount: res.numOfCartItems, 
        cartIds: ids 
      });
    }
  },
}));