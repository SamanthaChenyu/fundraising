import { Progress } from "antd";
import React from "react";

const ProgressBar = ({ percent }) => {
  return (
    <Progress
      type="circle"
      percent={percent}
      width={76}
      strokeColor="#2dd4e0"
      strokeWidth={15}
    />
  );
};

export default ProgressBar;
