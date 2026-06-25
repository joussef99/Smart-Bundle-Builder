import type { Product } from "../types/IProduct";
import { Card, Tag, Flex, Typography  } from "antd";


const { Title, Text } = Typography;

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
  const status = isSelected
    ? "Selected"
    : incompatible
      ? "Incompatible"
      : "Available";

  const tagColor = isSelected
    ? "#27C4A5"
    : incompatible
      ? "orange"
      : "#1f1f1f";

  return (
    <Card
      role="button"
      hoverable={!incompatible}
      onClick={() => {
        if (!incompatible) {
          onSelect(product);
        }
      }}
      onKeyDown={(e) => {
        if (
          !incompatible &&
          (e.key === "Enter" || e.key === " ")
        ) {
          onSelect(product);
        }
      }}
      aria-label={`Select ${product.name}`}
      aria-disabled={incompatible || isSelected}
      tabIndex={incompatible || isSelected ? -1 : 0}
      style={{
        minWidth: 295,
        minHeight: 140,
        marginBottom: 16,
        cursor: incompatible ? "not-allowed" : "pointer",
        opacity: incompatible ? 0.6 : 1,
        borderRadius: 20,
        border: isSelected
          ? "2px solid #27C4A5"
          : incompatible
            ? "2px solid #fa8c16"
            : undefined,
        boxShadow: isSelected
          ? "0 0 0 4px rgba(39,196,165,0.12)"
          : undefined,
        transition: "all 0.2s ease",
      }}
    >
      <Flex
        justify="space-between"
        align="flex-start"
        style={{ height: "100%" }}
      >
        <Flex vertical gap={6}>
          <Title
            level={5}
            style={{
              margin: 0,
            }}
          >
            {product.name}
          </Title>

          <Text
            strong
            style={{
              fontSize: 20,
            }}
          >
            ${product.price}
          </Text>
        </Flex>

        <Tag
          color={tagColor}
          style={{
            borderRadius: 999,
            padding: "4px 12px",
            fontWeight: 600,
          }}
        >
          {status}
        </Tag>
      </Flex>
    </Card>
  );
}

export default ProductCard;