import React, { useState } from "react";
import { Tabs, Button, Affix } from "antd";
import TabContentBlock from "./TabContentBlock";
import ProjectContext from "./ProjectContext";
import ProjectCards from "./ProjectCards";
import UpdateContext from "./UpdateContext";
import CardBlockType from "../card/StyledCardBlock";
import ShareContent from "../share/ShareContent";
import StudentSuggestionsContext from "./StudentSuggestionsContext";
import StyledContainer from "../layout/StyledContainer";
import MediaQuery from 'react-responsive';

const StyledTab = ({ children, onClick }) => {
  return (
    <Button
      style={{
        borderLeft: "0",
        borderRight: "0",
        borderTop: "0",
        borderRadius: "0",
        transform: "translateY(1px)",
        margin: "0px 5px",
        height: "50px"
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const Tab = ({ offsetTop }) => {
  const [show, setShow] = useState(false);
  const [activePane, setActivePane] = useState("projectContent");
  console.log(offsetTop);
  return (
    <>
      <Tabs
        renderTabBar={({ tabBarExtraContent, activeKey, onChange }) => {
          return (
            <>
            <Affix offsetTop={offsetTop} onChange={affixed => setShow(affixed)}>
              <div
                style={{
                  background: "white",
                  borderBottom: "1px solid #dadada"
                }}
              >
                <StyledContainer
                  style={{
                    display: "flex",
                    height: "50px",
                    position: "relative"
                  }}
                >
                  <StyledTab onClick={() => onChange("projectContent")}>
                    計畫內容
                  </StyledTab>
                  <StyledTab onClick={() => onChange("projectUpdates")}>
                    計畫更新
                  </StyledTab>
                  <StyledTab onClick={() => onChange("studentSuggestions")}>
                    學員推薦
                  </StyledTab>
                    {tabBarExtraContent}      
                </StyledContainer>
              </div>
            </Affix>
            </>
          );
        }}
        tabBarExtraContent={
          show ? (
            <>
            <MediaQuery query="(min-device-width: 767px)">
              <Button
                onClick={() => setActivePane("support")}
                type="primary"
                style={{ padding: "0px 24px" }}
              >
                支持專案
              </Button>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 766px)">
              <Button
                  onClick={() => setActivePane("support")}
                  type="primary"
                  style={{ 
                    height: '40px',
                    fontSize: '16px',
                    position: 'fixed',
                    bottom: '15px',
                    zIndex: '9999',
                    width: '90%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
              >支持專案
              </Button>
            </MediaQuery>
            </>
          ) : (
            <div />
          )
        }
        activeKey={activePane}
        onChange={setActivePane}
      >
        <Tabs.TabPane key="projectContent" tab="計畫內容">
          <StyledContainer>
            <TabContentBlock
              contentBlock={<ProjectContext />}
              sideBlock={<ProjectCards />}
            />
          </StyledContainer>
        </Tabs.TabPane>
        <Tabs.TabPane key="projectUpdates" tab="計畫更新">
          <StyledContainer>
            <TabContentBlock
              contentBlock={<UpdateContext />}
              sideBlock={
                <CardBlockType>
                  <ShareContent />
                </CardBlockType>
              }
            />
          </StyledContainer>
        </Tabs.TabPane>
        <Tabs.TabPane key="studentSuggestions" tab="學員推薦">
          <StyledContainer>
            <TabContentBlock
              contentBlock={<StudentSuggestionsContext />}
              sideBlock={
                <CardBlockType>
                  <ShareContent />
                </CardBlockType>
              }
            />
          </StyledContainer>
        </Tabs.TabPane>
        <Tabs.TabPane key="support">
          <StyledContainer>
            <TabContentBlock type contentBlock={<ProjectCards />} />
          </StyledContainer>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default Tab;
