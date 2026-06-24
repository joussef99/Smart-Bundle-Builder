import type { Product } from "../types/IProduct";
import { Card, Tag } from "antd";

type ProductCardProps = {
  product: Product;
  incompatible: boolean;
  isSelected: boolean;
  onSelect: (product: Product) => void;
};

function ProductCard({
  product,
  incompatible,
  isSelected,
  onSelect,
}: ProductCardProps) {
  return (
    <Card
      role="button"
      style={{
        display: "flex",
        justifyContent: "space-between",
        minWidth: 295,
        minHeight: 140,
        marginBottom: 16,
        opacity: incompatible ? 0.5 : 1,
        cursor: incompatible ? "not-allowed" : "pointer",
        border: isSelected
          ? "2px solid #27C4A5"
          : incompatible
            ? "2px solid orange"
            : "1px solid #d9d9d9",
        backgroundColor: isSelected
          ? "#f0fffb"
          : incompatible
            ? "#fff2e8"
            : "#fff",
        borderRadius: 24,
      }}
      hoverable
      onClick={() => {
        if (!incompatible) {
          onSelect(product);
        }
      }}
      aria-label={`Select ${product.name}`}
      aria-disabled={incompatible || isSelected}
      tabIndex={incompatible || isSelected ? -1 : 0}
    >
        <div style={{ fontSize: "bold", fontWeight: 700, margin: 4}}>
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>

        <Tag
          style={{
            borderRadius: 999,
            padding: "6px 16px",
            fontWeight: 600,
            border: "none",
            backgroundColor: isSelected
              ? "#e6fffb"
              : incompatible
                ? "#fff7e6"
                : "#f5f5f5",
            color: isSelected
              ? "#13c2c2"
              : incompatible
                ? "#fa8c16"
                : "#595959",
          }}
        >
          {isSelected
            ? "Selected"
            : incompatible
              ? "Incompatible"
              : "Available"}
        </Tag>
    </Card>
  );
}

export default ProductCard;
