import React, { useState } from "react";
import Styled from "styled-components";
import ShareImage from "../../images/share.png";
import { Modal } from "antd";
import ShareContent from "./ShareContent";

const StyledShareIcon = Styled.div`
width: 20px;
height: 20px;
  background-size: 20px 20px;
  background-position: center right;
  background-repeat: no-repeat;
  position: relative;
  background-image: url(${ShareImage});
`;

const Share = () => {
  const [modal2Visible, setModal2Visible] = useState(false);
  return (
    <>
      <StyledShareIcon onClick={() => setModal2Visible(true)} />
      <Modal
        centered
        footer={null}
        visible={modal2Visible}
        onCancel={() => setModal2Visible(false)}
      >
        <ShareContent />
      </Modal>
    </>
  );
};

export default Share;
