import React from "react";
import { Typography } from "antd";
import Styled from "styled-components";
import FundProgressBlock from "../common/FundProgressBlock";
import SupportButton from "../common/SupportButton";
import CountdownTimeBlock from "../common/CountdownTimeBlock";

const { Title, Text } = Typography;

const StyledContextTitle = Styled.div`
    color: #000;
    line-height: 1.4;
    letter-spacing: 0.3px;
    width: 100%;
    font-size: 24px;
    @media (min-width: 767px) {
      width: 230px;
      font-size: 38px;
      letter-spacing: 0.4px;
    }
`;

const ContextBox = Styled.div`
    padding: 15px 0px 0px 0px;
    height: 100%;
`;

const IntroInfo = () => {
  return (
    <ContextBox>
      <Title level={1}>
        <StyledContextTitle>OO設計學院募資計畫</StyledContextTitle>
      </Title>
      <Text style={{ color: "#000", fontSize: "16px" }}>
        一張獲取更多工作機會的門票，從搞定多益英文開始，獲取更多工作機會
      </Text>
      <FundProgressBlock />
      <CountdownTimeBlock />
      <SupportButton />
    </ContextBox>
  );
};

export default IntroInfo;
