import { Button } from "antd";
import React, { useContext } from "react";
import { TabContext } from "../tab/TabContext";

const SupportButton = () => {
  const { setActivePane } = useContext(TabContext);
  return (
    <Button
      type="primary"
      size="large"
      style={{ width: "100%" }}
      onClick={() => setActivePane("support")}
    >
      支持專案
    </Button>
  );
};

export default SupportButton;
