import type { Product } from "../types/IProduct";

export const isProductIncompatible = (
  product: Product,
  selectedItems: Record<string, Product>
): boolean => {
  return Object.values(selectedItems).some(
    (selectedProduct) =>
      selectedProduct.incompatibleWith.includes(product.id) ||
      product.incompatibleWith.includes(selectedProduct.id)
  );
};