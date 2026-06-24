import { useState, useEffect } from "react";
import type { Product } from "../types/IProduct";
import { getProducts } from "../services/productServices";
import { useBundleStore } from "../store/bundleStore";
import { calculateTotalPrice } from "../utils/budgetUtils";
import { Alert, Row, Col, Spin, Card } from "antd";
import BuildSummary from "../components/BuildSummary";
import Actions from "../components/Actions";
import ProgressBar from "../components/ProgressBar";
import ProductCategories from "../components/ProductCategories";

const BundleBuilderPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
            <ProductCategories
              products={products}
              selectedItems={selectedItems}
            />
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
                style={{
                  marginBottom: "16px",
                  color: "#fff",
                  textShadow: "0 2px 4px rgba(0,0,0,0.4)",
                }}
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
