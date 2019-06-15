import React from "react";
import { Row, Col } from "antd";
import Styled from "styled-components";

const StyledTabContentBlock = Styled.div`
  padding: 24px 0px 40px;
`;

const StyledSideBlock = Styled.div`
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 0px 20px;
    position: absolute;
    right: 0px;
    @media (min-width: 991px) {
    width: 33.33333333%;
  }
`;

const TabContentBlock = ({ contentBlock, sideBlock }) => {
  return (
    <StyledTabContentBlock>
      <Row gutter={{ md: 52, lg: 32 }}>
        <Col md={24} lg={16}>
          {contentBlock}
        </Col>
        <StyledSideBlock>{sideBlock}</StyledSideBlock>
      </Row>
    </StyledTabContentBlock>
  );
};

export default TabContentBlock;
