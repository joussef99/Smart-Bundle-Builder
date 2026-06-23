import { Progress } from "antd";
import { MAX_BUDGET } from "./constants/budget";
import { DollarOutlined } from "@ant-design/icons";

interface ProgressBarProps {
  totalPrice: number;
}
const ProgressBar = ({ totalPrice }: ProgressBarProps) => {
  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <p
          style={{
            fontWeight: "bold",
            marginBottom: "8px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <DollarOutlined />
          Budget: ${totalPrice} / ${MAX_BUDGET}
        </p>
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={1000}
          aria-valuenow={totalPrice}
          aria-label="Budget usage"
        >
          <Progress
            strokeColor="#27C4A5"
            percent={(totalPrice / MAX_BUDGET) * 100}
            status={totalPrice > MAX_BUDGET ? "exception" : "active"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
