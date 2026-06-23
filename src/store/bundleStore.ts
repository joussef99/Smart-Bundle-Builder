import { create } from "zustand";
import type { BuildState } from "../types/IBuildState";
import type { Product } from "../types/IProduct";
import { calculateTotalPrice } from "../utils/budgetUtils";
import { MAX_BUDGET } from "../components/constants/budget";
import { isProductIncompatible } from "../utils/incompatibilityUtils";

export interface BundleStore {
  selectedItems: Record<string, Product>;

  history: BuildState[];
  historyIndex: number;

  error: string | null;

  selectItem: (product: Product) => void;

  undo: () => void;
  redo: () => void;

  clearBuild: () => void;
  clearError: () => void;
}

const initialState: BuildState = {
  selectedItems: {},
};

export const useBundleStore = create<BundleStore>((set, get) => ({
  selectedItems: {},

  history: [initialState],

  historyIndex: 0,
  error: null,

  selectItem: (product) => {
    const { history, historyIndex, selectedItems } = get();
    const currentProduct = selectedItems[product.category];
    if (currentProduct?.id === product.id) {
      return;
    }
    if (isProductIncompatible(product, selectedItems)) {
      set({
        error: "Selected products are incompatible.",
      });
      return;
    }

    const updatedSelections = { ...selectedItems, [product.category]: product };
    const newTotal = calculateTotalPrice(updatedSelections);
    if (newTotal > MAX_BUDGET) {
      set({
        error: `Budget exceeded. Maximum budget is $${MAX_BUDGET}.`,
      });

      return;
    }
    const newState: BuildState = { selectedItems: updatedSelections };
    const newHistory = [...history.slice(0, historyIndex + 1), newState];

    set({
      selectedItems: updatedSelections,
      history: newHistory,
      historyIndex: newHistory.length - 1,
      error: null,
    });
  },

  undo: () => {
    const { history, historyIndex } = get();
    if (historyIndex === 0) {
      return;
    }
    const previousIndex = historyIndex - 1;
    const previousState = history[previousIndex];

    set({
      selectedItems: previousState.selectedItems,
      historyIndex: previousIndex,
      error: null,
    });
  },

  redo: () => {
    const { history, historyIndex } = get();
    if (historyIndex >= history.length - 1) {
      return;
    }
    const nextIndex = historyIndex + 1;
    const nextState = history[nextIndex];
    set({
      selectedItems: nextState.selectedItems,
      historyIndex: nextIndex,
      error: null,
    });
  },

  clearBuild: () => {
    const { history, historyIndex } = get();
    const newState: BuildState = { selectedItems: {} };
    const newHistory = [...history.slice(0, historyIndex + 1), newState];
    set({
      selectedItems: newState.selectedItems,
      history: newHistory,
      historyIndex: newHistory.length - 1,
      error: null,
    });
  },

  clearError: () => {
    set({
      error: null,
    });
  },
}));
