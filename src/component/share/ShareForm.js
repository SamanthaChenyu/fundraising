import { Button, Form, Modal, Typography } from "antd";
import React, { useCallback, useState } from "react";
import money from "../../images/money.png";
import EmailInput from "../common/EmailInput";
import ShareClipboard from "./ShareClipboard";

const { Title } = Typography;

const ShareForm = ({ reward }) => {
  const [emailValue, setEmailValue] = useState();
  const [modal1Visible, setModal1Visible] = useState(false);
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log(emailValue);
      if (emailValue === undefined || emailValue.length === 0) {
        console.log("格式不符合");
      } else {
        setModal1Visible(true);
      }
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
      <Modal
        title={
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            {emailValue}
          </div>
        }
        centered
        visible={modal1Visible}
        footer={null}
        onCancel={() => setModal1Visible(false)}
      >
        <p>回饋累計</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Title level={4}>{reward} 元</Title>
          <img
            src={money}
            style={{ width: "20px", height: "20px" }}
            alt="money"
          />
        </div>
        <p>你的邀請連結</p>
        <ShareClipboard />
      </Modal>
    </>
  );
};

export default ShareForm;
