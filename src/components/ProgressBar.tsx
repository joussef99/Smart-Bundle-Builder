import { Progress } from "antd";
import { MAX_BUDGET } from "../constants/budget";
import { DollarOutlined } from "@ant-design/icons";

interface ProgressBarProps {
  totalPrice: number;
}
const ProgressBar = ({ totalPrice }: ProgressBarProps) => {
  const percentage = (totalPrice / MAX_BUDGET) * 100;
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
            percent={percentage}
            strokeColor={
              percentage > 90
                ? "#ff4d4f"
                : percentage > 70
                  ? "#faad14"
                  : "#27C4A5"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
