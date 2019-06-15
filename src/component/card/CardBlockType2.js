import React from "react";
import Styled from "styled-components";
import { Typography, Button } from "antd";

const { Title } = Typography;

const StyledCardBlock = Styled.div`
  border-radius: 5px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  padding: 32px;
  margin-bottom: 20px;
`;

const StyledCardTitle = Styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0px 24px 0px;
`;

const StyledCardContext = Styled.p`
  font-size: 14px;
  text-align: justify;
`;

const StyledPeople = Styled.p`
  color:rgba(0, 0, 0, 0.45);
  margin-top: 22px;
  margin-bottom: 12px;
  text-align: right;
`;

const CardBlockType2 = ({ money, cardTitle, cardContext, people, link }) => {
  return (
    <StyledCardBlock>
      <Title
        level={3}
        style={{ marginRight: "5px", marginBottom: 0, color: "#1ed3e0" }}
      >
        NT${money}
      </Title>
      <StyledCardTitle>{cardTitle}</StyledCardTitle>
      <StyledCardContext>{cardContext}</StyledCardContext>
      <StyledPeople>{people}人</StyledPeople>
      <Button href={link} type="primary" size="large" style={{ width: "100%" }}>
        支持此專案
      </Button>
    </StyledCardBlock>
  );
};

export default CardBlockType2;
