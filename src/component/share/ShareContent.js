import React from "react";
import Styled from "styled-components";
import ShareCashImage from "../../images/share_cash.png";
import { Typography } from "antd";
import ShareForm from "./ShareForm";

const { Title, Text } = Typography;

const StyledShareCashImage = Styled.div`
width: 158px;
margin: 0 auto;
`;

const StyledTextBlock = Styled.div`
width: 220px;
margin: 24px auto;
text-align: justify;
@media (min-width: 769px) {
  width: 240px;
  }
`;

const StyledBlock = Styled.div`
width: 220px;
margin: 12px auto;
@media (min-width: 1199px) {
  width: 280px;
  }
`;

const ShareContent = () => {
  return (
    <>
      <StyledShareCashImage>
        <img src={ShareCashImage} alt="cash" style={{ width: "100%" }} />
      </StyledShareCashImage>
      <StyledTextBlock>
        <Title level={4} style={{ textAlign: "center" }}>
          分享拿現金
        </Title>
        <Text>
          邀請你認識的人購買方案，每當有人完成購買，你與對方就可以獲得XXXX的現金回饋！
        </Text>
      </StyledTextBlock>
      <StyledBlock>
        <ShareForm />
      </StyledBlock>
    </>
  );
};

export default ShareContent;
