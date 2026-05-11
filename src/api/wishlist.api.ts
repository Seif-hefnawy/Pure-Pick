const BASE_URL = "https://ecommerce.routemisr.com/api/v1/wishlist";

// إضافة منتج
export const addToWishlistApi = async (productId: string, token: string) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify({ productId }),
  });
  return res.json();
};

// حذف منتج
export const removeFromWishlistApi = async (productId: string, token: string) => {
  const res = await fetch(`${BASE_URL}/${productId}`, {
    method: "DELETE",
    headers: {
      token: token,
    },
  });
  return res.json();
};

// جلب كل المنتجات
export const getUserWishlistApi = async (token: string) => {
  const res = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      token: token,
    },
    cache: "no-store", // عشان الداتا تيجى فريش دايماً
  });
  return res.json();
};