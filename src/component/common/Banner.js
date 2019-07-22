import { Affix, Icon, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const { Text } = Typography;

const StyledBlock = styled.div`
  background-color: #f65d70;
  position: relative;
  cursor: pointer;
`;

const StyledText = styled.div`
  width: 90%;
  text-align: center;
  font-size: 14px;
  padding: 10px 0px;
  line-height: 20px;
  display: block;
  align-items: center;
  @media (min-width: 767px) {
    width: 600px;
    display: flex;
    margin: 0px auto;
  }
`;

const StyledCheckArrow = styled.span`
  margin-left: 32px;
  color: #ffffff;
`;

const StyledClose = styled.div`
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

const Banner = ({ onClose, isShowing, onSupportClick }) => {
  return (
    <>
      {isShowing ? (
        <Affix offsetTop={0} onChange={affixed => console.log(affixed)}>
          <StyledBlock>
            <StyledText>
              <Text strong style={{ color: "#ffffff" }}>
                【課程優惠48折起】限時購買再抽「萬元投資啟動金」及「Iphone XS」
              </Text>
            </StyledText>
            <StyledClose onClick={onClose}>
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
