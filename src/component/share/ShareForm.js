import React, { useState, useCallback } from "react";
import { Form, Button } from "antd";
import EmailInput from "../common/EmailInput";
// import ShareResult from "./ShareResult";

const ShareForm = () => {
  const [emailValue, setEmailValue] = useState();
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log(emailValue);
    },
    [emailValue]
  );

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <EmailInput
          className="InputError"
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
