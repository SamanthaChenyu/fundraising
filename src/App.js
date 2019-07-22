import { Col, Row } from "antd";
import ApolloClient from "apollo-boost";
import React, { useState } from "react";
import { ApolloProvider } from "react-apollo-hooks";
import { animateScroll } from "react-scroll";
import styled from "styled-components";
import "./App.css";
import Banner from "./component/common/Banner";
import IntroInfo from "./component/intro/IntroContent";
import IntroContent from "./component/intro/IntroInfo";
import StyledContainer from "./component/layout/StyledContainer";
import Tab from "./component/tab/Tab";
import { TabContext, TabProvider } from "./component/tab/TabContext";

const StyledIntro = styled.div`
padding: 20px 0px 28px;
@media (min-width: 767px) {
  padding: 40px 0px 28px;
}
`;

const App = () => {
  const [isShowing, setIsShowing] = useState(true);
  const tabRef = React.createRef();
  const apolloClient = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
  });
  return (
    <ApolloProvider client={apolloClient}>
      <TabProvider>
        <TabContext.Consumer>
          {({ setActivePane }) => (
            <Banner
              onClose={() => setIsShowing(false)}
              onSupportClick={() => {
                setActivePane("support");
                tabRef.current &&
                  animateScroll.scrollTo(tabRef.current.offsetTop + 300);
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
        <Tab offsetTop={isShowing ? 40 : 0} ref={tabRef} />
      </TabProvider>
    </ApolloProvider>
  );
};

export default App;
