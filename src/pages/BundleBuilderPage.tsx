import { useState, useEffect } from "react";
import type { Product } from "../types/IProduct";
import { getProducts } from "../services/productServices";
import { useBundleStore } from "../store/bundleStore";
import { calculateTotalPrice } from "../utils/budgetUtils";
import { isProductIncompatible } from "../utils/incompatibilityUtils";
import { Alert, Row, Col, Spin, Card } from "antd";
import BuildSummary from "../components/BuildSummary";
import ProductCard from "../components/ProductCard";
import Actions from "../components/Actions";
import ProgressBar from "../components/ProgressBar";

const BundleBuilderPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { selectItem } = useBundleStore();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleClick = (product: Product) => {
    selectItem(product);
  };
  const { selectedItems, error } = useBundleStore();
  const totalPrice = calculateTotalPrice(selectedItems);

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={24}>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "100px 0",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <Col xs={24} lg={16}>
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
          </Col>
        )}
        <Col xs={24} lg={8}>
          <Card
            style={{
              position: "sticky",
              top: 20,
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              borderRadius: 16,
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              minHeight: "70vh",
            }}
          >
            <ProgressBar totalPrice={totalPrice} />
            <BuildSummary
              selectedItems={selectedItems}
              totalPrice={totalPrice}
            />
            <Actions />
            {error && (
              <Alert
                message="Error"
                description={error}
                type="warning"
                showIcon
                style={{ marginBottom: "16px" }}
                closable
                banner
                role="alert"
              />
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BundleBuilderPage;
