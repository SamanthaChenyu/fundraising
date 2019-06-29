import React, { useState } from "react";
import { Modal, Typography, Button } from "antd";
import money from "../../images/money.png";
import ShareClipboard from "./ShareClipboard";

const { Title } = Typography;

const ShareResult = ({ email, reward }) => {
  const [modal1Visible, setModal1Visible] = useState();
  return (
    <>
      <Button type="primary" onClick={() => setModal1Visible(true)}>
        ShareResult
      </Button>
      <Modal
        title={
          <div style={{ textAlign: "center", fontWeight: "bold" }}>{email}</div>
        }
        centered
        visible={modal1Visible}
        footer={null}
        onCancel={() => setModal1Visible(false)}
      >
        <p>回饋累計</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Title level={4}>{reward} 元</Title>
          <img src={money} style={{ width: "20px", height: "20px" }} />
        </div>
        <p>你的邀請連結</p>
        <ShareClipboard />
      </Modal>
    </>
  );
};

export default ShareResult;
