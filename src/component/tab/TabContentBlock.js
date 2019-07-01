import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import Styled from "styled-components";
import MediaQuery from "react-responsive";

const StyledMBOpenButton = Styled.div`
  margin-bottom: 41px;
  position: relative;
  &:before {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 200px;
    top: -200px;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9) 70%, #ffffff);
  }
`;

const StyledMBContentBlock = Styled.div`
height: 515px;
overflow: hidden;
`;

const StyledTabContentBlock = Styled.div`
  padding: 24px 0px 40px;
`;

const StyledCol = Styled.div`
    column-count: 1;
    column-gap: 0;
    @media (min-width: 767px) {
      column-count: 2;
    }
`;

const StyledColDiv = Styled.div`
width: 100%;
margin: 0 auto; 
@media (min-width: 767px) {
  width: 93%;
}
`;

const StyledSideBlock = Styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 0px 0px;
    float: left;
  @media (min-width: 767px) {
      padding: 0px 20px;
  }
  @media (min-width: 991px) {
    width: 33.33333333%;
    padding: 0px 20px;
  }
`;

const TabContentBlock = ({ contentBlock, sideBlock, type }) => {
  const [open, setOpen] = useState(false);
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
              <MediaQuery query="(min-device-width: 767px)">
                <Col md={24} lg={16} style={{ margin: "15px auto" }}>
                  {contentBlock}
                </Col>
              </MediaQuery>

              <MediaQuery query="(max-device-width: 766px)">
                {open ? (
                  <Col md={24} lg={16}>
                    {contentBlock}
                  </Col>
                ) : (
                  <>
                    <StyledMBContentBlock>{contentBlock}</StyledMBContentBlock>
                    <StyledMBOpenButton>
                      <Button
                        size="large"
                        style={{ width: "100%" }}
                        onClick={() => setOpen(true)}
                      >
                        展開內容
                      </Button>
                    </StyledMBOpenButton>
                  </>
                )}
              </MediaQuery>

              <StyledSideBlock>{sideBlock}</StyledSideBlock>
            </>
          )}
        </Row>
      </StyledTabContentBlock>
    </>
  );
};

export default TabContentBlock;
