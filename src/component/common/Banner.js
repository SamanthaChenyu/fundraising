import React from "react";
import { Affix, Typography, Icon } from "antd";
import Styled from "styled-components";
import NumberFormat from "react-number-format";

const { Text } = Typography;

const StyledBlock = Styled.div`
background-color: #f65d70;
position: relative;
cursor: pointer;
`;

const StyledText = Styled.div`
width: 90%;
height: 50px;
text-align: center;
font-size: 13px;
padding: 5px 0px;
line-height: 20px;
display: block;
align-items: center;
  @media (min-width: 767px) {
    width: 600px;
    display: flex;
    margin: 0px auto;
    padding: 0px;
  }
`;

const StyledCheckArrow = Styled.span`
margin-left: 32px;
color: #ffffff;
`;

const StyledClose = Styled.div`
color: #fff;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    padding: 0px 10px;
    cursor: pointer;
  @media (min-width: 767px) {
    padding: 0px 24px;
  }
`;

const Banner = ({ onClick, isShowing }) => {
  return (
    <>
      {isShowing ? (
        <Affix offsetTop={0} onChange={affixed => console.log(affixed)}>
          <StyledBlock>
            <StyledText>
              <Text strong style={{ color: "#ffffff" }}>
                【限時特惠 3 天】《微痛轉職工程師》線上課程 特價
                <NumberFormat
                  value={1800}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"NT$"}
                />
              </Text>
              <Text delete style={{ marginLeft: "5px" }}>
                <NumberFormat
                  value={2300}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"NT$"}
                />
              </Text>
              <StyledCheckArrow>查看方案 ></StyledCheckArrow>
            </StyledText>
            <StyledClose onClick={onClick}>
              <Icon type="close" />
            </StyledClose>
          </StyledBlock>
        </Affix>
      ) : (
        <div />
      )}
    </>
  );
};

export default Banner;
