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
      width: 100%;
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
        <StyledContextTitle>
          股票投資全攻略
          <br />
          用Excel打造你的「高勝率投資工具」
        </StyledContextTitle>
      </Title>
      <Text style={{ color: "#000", fontSize: "16px" }}>
        不用會寫程式，只使用直覺式的Excel就能完成選股分析<br />
        不用每天盯盤，一個月只看一次盤，照樣平均年賺15%<br />
        股票實戰全攻略，讓你學完就可以直接上場操作！
      </Text>
      <FundProgressBlock />
      <CountdownTimeBlock />
      <SupportButton />
    </ContextBox>
  );
};

export default IntroInfo;
