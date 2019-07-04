import React, { useState } from "react";
import { Row, Col } from "antd";
import IntroInfo from "./component/intro/IntroContent";
import IntroContent from "./component/intro/IntroInfo";
import Tab from "./component/tab/Tab";
import Styled from "styled-components";
import StyledContainer from "./component/layout/StyledContainer";
import Banner from "./component/common/Banner";
import "./App.css";
import { TabProvider, TabContext } from "./component/tab/TabContext";
import { animateScroll } from "react-scroll";

const StyledIntro = Styled.div`
padding: 20px 0px 28px;
@media (min-width: 767px) {
  padding: 40px 0px 28px;
}
`;

const App = () => {
  const [isShowing, setIsShowing] = useState(true);
  const tabRef = React.createRef();
  const CardRef = React.createRef();
  return (
    <>
      <TabProvider>
        <TabContext.Consumer>
          {({ setActivePane }) => (
            <Banner
              onClose={() => setIsShowing(false)}
              onSupportClick={() => {
                setActivePane("support");
                tabRef.current &&
                  animateScroll.scrollTo(tabRef.current.offsetTop + 300);
                console.log(CardRef.current);
              }}
              isShowing={isShowing}
            />
          )}
        </TabContext.Consumer>
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
        <Tab offsetTop={isShowing ? 50 : 0} ref={tabRef} />
      </TabProvider>
    </>
  );
};

export default App;
