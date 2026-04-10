export async function getRelatedProducts(categoryId: string) {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`);
  const data = await res.json();
  return data.data; 
}