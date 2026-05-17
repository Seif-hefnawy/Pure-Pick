import { Minus, Plus, CreditCard, Wallet, Star, ChevronRight } from "lucide-react";
import { getLoggedUserCart } from "@/api/Cart.api";
import { getServerSession } from "next-auth"; 
import CartItemsList from "./CartItemsList"; 
import { authOptions } from "@/app/lib/auth";

export default async function CheckOut() {
  const session = await getServerSession(authOptions);
  const token = session?.user?.token || "";

  let products = [];
  let totalPrice = 0;

  if (token) {
    const cartData = await getLoggedUserCart(token);
    products = cartData?.data?.products || [];
    totalPrice = cartData?.data?.totalCartPrice || 0;
  }

  return (
    <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl text-primary font-black tracking-tight mb-2">Checkout</h1>
        <p className="text-on-surface-variant font-medium uppercase tracking-widest text-xs">The Curated Sanctuary  •  Step 1 of 3</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 space-y-16">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Review Selection</h2>
            <CartItemsList initialProducts={products} />
            
          </div>
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Shipping Information</h2>
              <button className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">Switch to Arabic (العربية)</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-2">Full Name</label>
                <input className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant transition-all" placeholder="Julian Vane" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-2">Phone Number</label>
                <input className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant transition-all" placeholder="+2015111888777" type="tel" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-2">Street Address</label>
                <input className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant transition-all" placeholder="Design District, Building 4, Apt 201" type="text" />
              </div>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-5 space-y-8 sticky top-32">
          <section className="bg-surface-container rounded-2xl p-8 shadow-2xl shadow-black/20">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Payment Method</h3>
            <div className="space-y-4 mb-8">
              <label className="relative flex items-center p-4 rounded-xl cursor-pointer border-2 border-primary bg-primary/10 transition-all">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-bold">Credit Card</p>
                      <p className="text-xs text-on-surface-variant">Ending in 4242</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full border-4 border-primary bg-white"></div>
                </div>
              </label>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Order Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span className="text-on-surface font-medium">{totalPrice} EGP</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Shipping</span>
                  <span className="text-emerald-500 font-bold uppercase text-[10px] tracking-widest">Complimentary</span>
                </div>
                <div className="h-px bg-outline-variant my-4"></div>
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-3xl font-black text-emerald-100">{totalPrice} EGP</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-10 bg-primary hover:bg-primary-container text-white font-bold py-5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20 uppercase tracking-widest text-sm">
              Complete Purchase
            </button>
          </section>
        </aside>
      </div>
    </section>
  );
}