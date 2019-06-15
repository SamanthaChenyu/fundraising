import React from "react";
import { Affix, Typography } from "antd";
import Styled from "styled-components";

const { Text } = Typography;

const StyledBlock = Styled.div`
background-color: #f65d70;
position: relative;
cursor: pointer;
`;

const StyledText = Styled.div`
    width: 600px;
margin: 0px auto;
height: 40px;
display: flex;
    align-items: center;
`;

const StyledCheckArrow = Styled.span`
margin-left: 32px;
color: #ffffff;
`;

const StyledClose = Styled.div`
color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 20px;
    padding: 5px 24px;
    cursor: pointer;
`;

const Banner = () => {
  return (
    <Affix offsetTop={0} onChange={affixed => console.log(affixed)}>
      <StyledBlock>
        <StyledText>
          <Text strong style={{ color: "#ffffff" }}>
            【限時特惠 3 天】《微痛轉職工程師》線上課程 特價 NT$1,800
          </Text>
          <Text delete style={{ marginLeft: "5px" }}>
            NT$2300
          </Text>
          <StyledCheckArrow>查看方案 ></StyledCheckArrow>
        </StyledText>
        <StyledClose>X</StyledClose>
      </StyledBlock>
    </Affix>
  );
};

export default Banner;
