import { Card, Button, Tooltip } from "antd";
import "../index.css";
import { UndoOutlined, RedoOutlined, DeleteOutlined } from "@ant-design/icons";
import { useBundleStore } from "../store/bundleStore";

const Actions = () => {
  const { undo, redo, clearBuild } = useBundleStore();

  return (
    <Card
      style={{
        width: "fit-content",
        margin: "0 auto",
        borderRadius: 16,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        marginBottom: 16,
        border: "1px solid #d9d9d9",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "12px",          
        }}
      >
        <Tooltip title="Undo" >
          <Button onClick={undo} icon={<UndoOutlined />} aria-label="Undo" />
        </Tooltip>
        <Tooltip title="Redo">
          <Button onClick={redo} icon={<RedoOutlined />} aria-label="Redo" />
        </Tooltip>
        <Tooltip title="Clear Build">
          <Button
            onClick={clearBuild}
            icon={<DeleteOutlined />}
            danger
            aria-label="Clear Build"
          />
        </Tooltip>
      </div>
    </Card>
  );
};

export default Actions;
