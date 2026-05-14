export const addToCartApi = async (productId: string, token: string) => {
  const response = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "token": token,
    },
    body: JSON.stringify({ productId }),
  });
  return await response.json();
};



// دي لجلب بيانات السلة الحالية
export const getLoggedUserCart = async (token: string) => {
  const response = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "GET",
    headers: {
      "token": token,
    },
  });
  return await response.json();
};



export const updateCartProductQuantity = async (productId: string, count: number, token: string) => {
  const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`, {
    method: "PUT",
    headers: { "token": token, "Content-Type": "application/json" },
    body: JSON.stringify({ count }),
  });
  return await response.json();
};

// مسح منتج واحد
export const removeItemFromCart = async (productId: string, token: string) => {
  const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`, {
    method: "DELETE",
    headers: { "token": token },
  });
  return await response.json();
};