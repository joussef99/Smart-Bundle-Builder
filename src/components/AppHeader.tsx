import { Layout, Typography, Row, Col } from "antd";
import "../index.css";
const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <Header
      style={{
        background: " #27C4A5",
        borderBottom: "1px solid #d9d9d9",
        padding: "0 20px",
      }}
    >
      <Row
        align="middle"
        justify="center"
        gutter={[0, 12]}
        style={{ width: "100%" }}
      >
        <Col xs={24} md={4} className="logo-col">
          <img
            src="/logo.png"
            alt="Axis Company Logo"
            className="logo"
            style={{
              height: 80,
              width: "auto",
              padding: "24px",
            }}
          />
        </Col>
        <Col xs={24} md={16} style={{ textAlign: "center" }}>
          <Title
            level={2}
            style={{
              margin: 0,
              color: "#fff",
              textShadow: "0 2px 4px rgba(0,0,0,0.4)",
              letterSpacing: "-1.5px",
              fontWeight: 500,
            }}
            className="title"
          >
            Smart Bundle Builder
          </Title>
        </Col>
        <Col style={{ flex: "100px" }}/>
      </Row>
    </Header>
  );
};

export default AppHeader;
