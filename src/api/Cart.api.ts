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