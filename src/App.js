import React from "react";
import "./App.css";
import { Row, Col } from "antd";
import IntroInfo from "./component/intro/IntroContent";
import IntroContent from "./component/intro/IntroInfo";
import Tab from "./component/tab/Tab";
import Styled from "styled-components";
import Banner from "./component/common/Banner";

const StyledIntro = Styled.div`
padding: 40px 0px 28px;
`;

const Container = Styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0px 15px;
  @media (min-width: 767px) {
    max-width: 750px;
  }
  @media (min-width: 991px) {
    max-width: 970px;
  }
  @media (min-width: 1199px) {
    max-width: 1170px;
  }
`;

const App = () => {
  return (
    <>
      <Banner />
      <Container>
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
        <Row>
          <Col span={24}>
            <Tab />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
