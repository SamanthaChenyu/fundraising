import React from "react";
import Styled from "styled-components";
import { Typography, Button } from "antd";

const { Title, Text } = Typography;

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

const CardBlockType1 = ({
  money,
  beforePrice,
  cardTitle,
  people,
  link,
  countdown
}) => {
  return (
    <StyledCardBlock>
      <StyledSaleIcon>
        <div>限時推薦</div>
      </StyledSaleIcon>
      <StyledFlex>
        <Title
          level={3}
          style={{ marginRight: "5px", marginBottom: 0, color: "#1ed3e0" }}
        >
          NT${money}
        </Title>
        <Text delete style={{ color: "rgba(0, 0, 0, 0.45)" }}>
          NT${beforePrice}
        </Text>
      </StyledFlex>

      <StyledCardTitle>{cardTitle}</StyledCardTitle>
      {countdown ? (
        <>
          <StyledFlex style={{ justifyContent: "space-between" }}>
            <StyledPeople>
              <Text type="secondary">優惠倒數</Text>
              <StyledCountdown>{countdown}</StyledCountdown>
            </StyledPeople>
            <StyledPeople>{people}人</StyledPeople>
          </StyledFlex>
        </>
      ) : (
        <>
          <StyledFlex style={{ justifyContent: "flex-end" }}>
            <StyledPeople>{people}人</StyledPeople>
          </StyledFlex>
        </>
      )}
      <Button href={link} type="primary" size="large" style={{ width: "100%" }}>
        支持此專案
      </Button>
    </StyledCardBlock>
  );
};

export default CardBlockType1;
