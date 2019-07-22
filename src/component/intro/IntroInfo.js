import { Typography } from "antd";
import * as R from "ramda";
import React from "react";
import styled from "styled-components";
import CountdownTimeBlock from "../common/CountdownTimeBlock";
import FundProgressBlock from "../common/FundProgressBlock";
import SupportButton from "../common/SupportButton";
import { useQuery } from "react-apollo-hooks";
import { useProject } from "../../hooks";

const { Title, Text } = Typography;

const StyledContextTitle = styled.div`
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

const ContextBox = styled.div`
  padding: 15px 0px 0px 0px;
  height: 100%;
`;

const IntroInfo = () => {
  const { loading, project } = useProject(process.env.REACT_APP_PROJECT_ID);
  const totalAmount = project
    ? R.sum(project.plans.map(plan => (plan.sales ? plan.sales.amount : 0)))
    : 0;
  const totalSponsors = project
    ? R.sum(project.plans.map(plan => (plan.sales ? plan.sales.sum : 0)))
    : 0;
  return (
    <ContextBox>
      <Title level={1}>
        <StyledContextTitle>
          {project && project.title}
          <br />
          用Excel打造你的「高勝率投資工具」
        </StyledContextTitle>
      </Title>
      <Text style={{ color: "#000", fontSize: "16px" }}>
        不用會寫程式，只使用直覺式的Excel就能完成選股分析
        <br />
        不用每天盯盤，一個月只看一次盤，照樣平均年賺15%
        <br />
        股票實戰全攻略，讓你學完就可以直接上場操作！
      </Text>
      <FundProgressBlock
        totalAmount={totalAmount}
        targetAmount={1000000}
        totalSponsors={totalSponsors}
      />
      <CountdownTimeBlock />
      <SupportButton />
    </ContextBox>
  );
};

export default IntroInfo;
