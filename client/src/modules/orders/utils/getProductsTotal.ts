import type { IProduct } from "@/modules/products/types/IProduct";

export const getProductsTotal = (products: IProduct[]) => {
  const totalsMap = products.reduce((acc, product) => {
    product.price.forEach(p => {
      acc[p.symbol] = (acc[p.symbol] || 0) + p.value;
    });
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(totalsMap).map(([symbol, value]) => ({ value, symbol }));
}