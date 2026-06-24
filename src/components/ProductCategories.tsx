import { Card } from "antd";
import type { Product } from "../types/IProduct";
import ProductCard from "./ProductCard";
import { isProductIncompatible } from "../utils/incompatibilityUtils";
import { useBundleStore } from "../store/bundleStore";

type Props = {
  products: Product[];
  selectedItems: Record<string, Product>;
};
const ProductCategories = ( { products, selectedItems }: Props) => {
    const { selectItem } = useBundleStore();
    const handleClick = (product: Product) => {
        selectItem(product);
      };
  return (
    <div>
      {Array.from(new Set(products.map((p) => p.category))).map(
              (category) => (
                <Card
                  key={category}
                  style={{
                    gap: "16px",
                    marginBottom: "16px",
                    borderRadius: 16,
                  }}
                >
                  <section aria-labelledby={`category-${category}`}>
                    <div
                      style={{
                        marginBottom: "8px",
                      }}
                    >
                      <h2
                        id={`category-${category}`}
                        style={{
                          fontSize: "24px",
                          textAlign: "center",
                          fontWeight: 700,
                          color: "#1f1f1f",
                        }}
                      >
                        {category}
                      </h2>
                    </div>
                    <div
                      className="horizontal-scroll"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "16px",
                        overflowX: "auto",
                        paddingBottom: "8px",
                      }}
                    >
                      {products
                        .filter((p) => p.category === category)
                        .map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            incompatible={isProductIncompatible(
                              product,
                              selectedItems,
                            )}
                            isSelected={
                              selectedItems[product.category]?.id === product.id
                            }
                            onSelect={handleClick}
                          />
                        ))}
                    </div>
                  </section>
                </Card>
              ),
            )}
    </div>
  )
}

export default ProductCategories
