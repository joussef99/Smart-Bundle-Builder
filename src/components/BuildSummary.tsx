import type { Product } from "../types/IProduct";
import { Card, Divider, Empty } from "antd";

interface BuildSummaryProps {
  selectedItems: Record<string, Product>;
  totalPrice: number;
}

const BuildSummary = ({ selectedItems, totalPrice }: BuildSummaryProps) => {
  const items = Object.values(selectedItems);

  return (
    <Card
      title="Build Summary"
      role="region"
      aria-label="Build Summary"
      style={{
        marginBottom: 16,
        borderRadius: 16,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        
      }}
    >
      {items.length === 0 ? (
        <Empty description="No components selected" />
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <span>
                <strong>{item.category}</strong>
                <br />
                {item.name}
              </span>

              <strong>${item.price}</strong>
            </div>
          ))}

          <Divider />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </>
      )}
    </Card>
  );
};

export default BuildSummary;
