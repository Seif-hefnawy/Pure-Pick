"use client";

import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProductAction({ price }: { price: number }) {
  const [count, setCount] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    // هنا قدام هنحط الـ API (Add / Remove)
  };
  useEffect(() => {
  if (count === 0) {
    setIsWishlisted(false);
  }
}, [count]); // كل ما الـ count يتغير، الكود ده هيتنفذ
  return (
    <>
      <div className="bg-primary-content border border-outline-variant rounded-lg p-4 mb-1">
        <div className="flex justify-between items-center">
          <span className="text-on-surface">Total Price:</span>
          <span className="text-1xl font-bold text-primary-600">
            {price * count}
          </span>
        </div>
      </div>
      {/* Product Selectors */}
      <div className="space-y-8 mb-5 mt-3">
        <div className="flex gap-3 mb-4">
          <div className="flex items-center bg-surface-container rounded-lg px-4 border border-outline-variant ">
            <button
              disabled={count === 0}
              onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 0))}
              className={`p-2 text-white hover:text-primary cursor-pointer ${count === 0 ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <span className=" text-lg">
                <Minus />
              </span>
            </button>
            <span className="px-4 font-bold text-white">{count}</span>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="p-2 text-white hover:text-primary cursor-pointer"
            >
              <span className=" text-lg">
                <Plus />
              </span>
            </button>
          </div>
          <button
            disabled={count === 0}
            className="flex-1 bg-primary text-primary-content cursor-pointer font-bold rounded-lg py-4 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20"
          >
            ADD TO CART
          </button>
        </div>
        <button 
  disabled={count === 0} 
  onClick={toggleWishlist}
  className={`w-full rounded-full py-3 font-bold px-2 transition-all shadow-lg cursor-pointer 
    ${count === 0 ? "opacity-50 cursor-not-allowed " : ""} 
    ${isWishlisted ? "bg-red-500 text-white" : "bg-primary text-white"}`}
>
  {isWishlisted ? "IN WISHLIST" : "ADD TO WISHLIST"}
</button>
      </div>
    </>
  );
}
