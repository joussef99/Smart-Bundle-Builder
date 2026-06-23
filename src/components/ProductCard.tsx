import type { Product } from "../types/IProduct";
import { Card , Button } from "antd";

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
      role ="button"
      style={{
        minWidth: 295,
        marginBottom: 16,
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
        if (!incompatible && !isSelected) {
          onSelect(product);
        }
      }}
      aria-label={`Select ${product.name}`}
      aria-disabled={incompatible || isSelected}
      tabIndex={incompatible || isSelected ? -1 : 0}
    >
      <div>
        <p
          style={{
            fontSize: "bold",
            fontWeight: 700,
            margin: 4,
          }}
        >
          {product.name}
        </p>
        <p
          style={{
            fontSize: "bold",
            fontWeight: 700,
            margin: 4,
          }}
        >
          ${product.price}
        </p>
      </div>
      <Button
        style={{
          border: "1px solid #d9d9d9",
          fontSize: "14px",
          borderColor: isSelected ? "#27C4A5" : incompatible ? "orange" : "#d9d9d9",
          backgroundColor: isSelected ? "#f0fffb" : incompatible ? "#fff2e8" : "#fff",
          color: isSelected ? "#27C4A5" : "black",
        }}
      >
        {isSelected ? "Selected" : incompatible ? "Incompatible" : "Select"}
      </Button>
    </Card>
  );
}

export default ProductCard;
