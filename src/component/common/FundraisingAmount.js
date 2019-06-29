import React from "react";
import { Row, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const StyledTextForMoney = styled.p`
  font-size: 24px;
  margin-bottom: 0px;
  color: #000;
  font-weight: bold;
`;

const FundraisingAmount = ({ money, target, sponsors }) => {
  return (
    <Row type="flex" style={{ flexDirection: "column" }}>
      <StyledTextForMoney>{money}</StyledTextForMoney>
      <Text style={{ color: "rgba(0, 0, 0, 0.45)", marginBottom: "20px" }}>
        目標 {target}
      </Text>
      <Text style={{ fontWeight: "bold" }}>贊助人數 {sponsors}</Text>
    </Row>
  );
};

export default FundraisingAmount;
