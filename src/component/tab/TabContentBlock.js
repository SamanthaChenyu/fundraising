import React from "react";
import { Row, Col } from "antd";
import Styled from "styled-components";

const StyledTabContentBlock = Styled.div`
  padding: 24px 0px 40px;
`;

const StyledCol = Styled.div`
    column-count: 2;
    column-gap: 0;
`;

const StyledColDiv = Styled.div`
width: 93%;
margin: 0 auto; 
`;

const StyledSideBlock = Styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 0px 20px;
    float: left;
    @media (min-width: 991px) {
    width: 33.33333333%;
  }
`;

const TabContentBlock = ({ contentBlock, sideBlock, type }) => {
  return (
    <>
      <StyledTabContentBlock>
        <Row gutter={{ md: 52, lg: 32 }}>
          {type ? (
            <>
              <StyledCol>
                <StyledColDiv>{contentBlock}</StyledColDiv>
              </StyledCol>
            </>
          ) : (
            <>
              <Col md={24} lg={16}>
                {contentBlock}
              </Col>
              <StyledSideBlock>{sideBlock}</StyledSideBlock>
            </>
          )}
        </Row>
      </StyledTabContentBlock>
    </>
  );
};

export default TabContentBlock;
