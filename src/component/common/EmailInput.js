import React from "react";
import { Input } from "antd";

const EmailInput = ({ value, onChange, style }) => {
    return (
      <Input
        name="email"
        placeholder="輸入你的信箱..."
        value={value}
        onChange={onChange}
        style={style}
      />
    );
  };

export default  EmailInput;