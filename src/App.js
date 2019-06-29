import React, { useState } from "react";
import { Row, Col } from "antd";
import IntroInfo from "./component/intro/IntroContent";
import IntroContent from "./component/intro/IntroInfo";
import Tab from "./component/tab/Tab";
import Styled from "styled-components";
import StyledContainer from "./component/layout/StyledContainer";
import Banner from "./component/common/Banner";
import "./App.css";

const StyledIntro = Styled.div`
padding: 40px 0px 28px;
`;

const App = () => {
  const [isShowing, setIsShowing] = useState(true);
  const toggle = () => {
    setIsShowing(false);
  };
  return (
    <>
      <Banner onClick={toggle} isShowing={isShowing} />
      <StyledContainer>
        <StyledIntro>
          <Row type="flex" gutter={{ md: 52, lg: 32 }}>
            <Col md={24} lg={16}>
              <IntroInfo />
            </Col>
            <Col md={24} lg={8}>
              <IntroContent />
            </Col>
          </Row>
        </StyledIntro>
      </StyledContainer>
      <Tab offsetTop={isShowing ? 40 : 0} />
    </>
  );
};

export default App;
