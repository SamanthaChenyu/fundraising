import { Input } from "antd";
import React from "react";

const EmailInput = ({ value, onChange, style }, ref) => {
  return (
    <Input
      ref={ref}
      name="email"
      placeholder="輸入你的信箱..."
      value={value}
      onChange={onChange}
      style={style}
    />
  );
};

export default React.forwardRef(EmailInput);
