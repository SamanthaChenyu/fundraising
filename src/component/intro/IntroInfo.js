import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import FundProgressBlock from "../common/FundProgressBlock";
import SupportButton from "../common/SupportButton";
import CountdownTimeBlock from "../common/CountdownTimeBlock";

const { Title, Text } = Typography;

const ContextBox = styled.div`
  padding: 15px 0px 0px 0px;
  height: 100%;
`;

const IntroInfo = () => {
  return (
    <ContextBox>
      <Title
        level={1}
        style={{
          color: "#000",
          lineHeight: "1.4",
          letterSpacing: "0.5px",
          width: "230px"
        }}
      >
        OO設計學院募資計畫
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
