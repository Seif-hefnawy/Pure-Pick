export const getAllProducts = async (categoryId?: string) => {
  // 1. لو الـ ID موجود، هنلزقه في اللينك فوراً
  const url = categoryId 
    ? `https://ecommerce.routemisr.com/api/v1/products?category=${categoryId.trim()}`
    : `https://ecommerce.routemisr.com/api/v1/products`;

 

  const response = await fetch(url, { 
    cache: 'no-store' // الغي الكاش تماماً دلوقتي عشان نتأكد إن الـ API بيسمع كلامنا
  });

  const { data } = await response.json();
  return data;
};