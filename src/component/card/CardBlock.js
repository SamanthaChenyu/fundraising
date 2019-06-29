import React from "react";
import Styled from "styled-components";
import { Typography, Button } from "antd";
import StyledCardBlock from "./StyledCardBlock";

const { Title, Text } = Typography;

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
  display: flex;
  align-items: baseline;
`;

const StyledFlex = Styled.div`
display: flex;
align-items: center;
`;

const StyledSaleIcon = Styled.div`
position: relative;
cursor: pointer;
  div {
    position: absolute;
    padding: 8px;
    top: -32px;
    right: 0;
    z-index: 1;
    overflow: hidden;
    &::before {
      content: " ";
      background-color: #ffcd34;
      position: absolute;
      width: 150px;
      left: 50%;
      bottom: 0px;
      height: 100px;
      z-index: -1;
      border-radius: 50%;
      transform: translateX(-50%);
    }
  }
`;

const StyledCountdown = Styled.div`
color: #2dd4e0;
font-size: 16px;
font-weight: bold;
margin: 0px 5px;
`;

const CardBlock = ({
  salePrice,
  listPrice,
  onSale,
  cardTitle,
  people,
  link,
  countdown,
  children
}) => {
  return (
    <StyledCardBlock>
      {onSale && (
        <StyledSaleIcon>
          <div>限時推薦</div>
        </StyledSaleIcon>
      )}
      <StyledFlex>
        <Title
          level={3}
          style={{ marginRight: "5px", marginBottom: 0, color: "#1ed3e0" }}
        >
          {salePrice}
        </Title>
        {listPrice && (
          <Text delete style={{ color: "rgba(0, 0, 0, 0.45)" }}>
            {listPrice}
          </Text>
        )}
      </StyledFlex>

      <StyledCardTitle>{cardTitle}</StyledCardTitle>
      <StyledCardContext>{children}</StyledCardContext>
      <StyledFlex style={{ justifyContent: "space-between" }}>
        {countdown ? (
          <StyledPeople>
            <Text type="warning">優惠倒數</Text>
            <StyledCountdown>{countdown}</StyledCountdown>
          </StyledPeople>
        ) : (
          <div />
        )}
        <StyledPeople>{people}人</StyledPeople>
      </StyledFlex>
      <Button href={link} type="primary" size="large" style={{ width: "100%" }}>
        支持此專案
      </Button>
    </StyledCardBlock>
  );
};

export default CardBlock;
