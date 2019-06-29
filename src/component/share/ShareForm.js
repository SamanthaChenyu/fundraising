import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import ShareResult from "./ShareResult";

const EmailInput = ({ value, onChange }) => {
  return (
    <Input
      name="email"
      placeholder="輸入你的信箱..."
      value={value}
      onChange={onChange}
    />
  );
};

const ShareForm = () => {
  const [emailValue, setEmailValue] = useState();
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
    },
    [emailValue]
  );

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <EmailInput
          value={emailValue}
          onChange={e => setEmailValue(e.currentTarget.value)}
        />
        <Button style={{ width: "100%", marginTop: "24px" }} htmlType="submit">
          獲得連結 並 查看回饋
        </Button>
      </Form>
      {/* <ShareResult email="abc123@mail.com" reward={0} /> */}
    </>
  );
};

export default ShareForm;
