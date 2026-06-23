import type { Product } from "./IProduct";

export interface BuildState {
  selectedItems: Record<string, Product>;
}
