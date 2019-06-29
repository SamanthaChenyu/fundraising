import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import CountdownTimer from "../CountdownTimer";
import Share from "./../share/Share";

const { Text } = Typography;

const StyledCountdownTimer = styled.div`
  margin-bottom: 24px;
  display: flex;
  position: relative;
`;

const Line = styled.div`
  border-right: 1px solid #d9d9d9;
  margin:0px 7px 0px 5px;
`;

const StyledSharePosition = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const CountdownTimeBlock = () => {
  return (
    <>
      <StyledCountdownTimer>
        募資倒數
        <Text strong>
          <CountdownTimer isDate due="2019/06/30" />
        </Text>
        <Line />
        啟動時間
        <Text strong>
          <CountdownTimer due="2019/06/30" />
        </Text>
        <StyledSharePosition>
          <Share />
        </StyledSharePosition>
      </StyledCountdownTimer>
    </>
  );
};

export default CountdownTimeBlock;
