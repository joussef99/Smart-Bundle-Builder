import type { Product } from "../types/IProduct";

export const calculateTotalPrice = (
  selectedItems: Record<string, Product>,
): number => {
  return Object.values(selectedItems).reduce(
    (total, product) => total + product.price,
    0,
  );
};
