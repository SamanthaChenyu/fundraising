import { Affix, Badge, Button, Tabs } from "antd";
import React, { useContext, useState } from "react";
import MediaQuery from "react-responsive";
import { Element } from "react-scroll";
import { PROJECT_TIMELINE } from "../../data";
import CardBlockType from "../card/StyledCardBlock";
import StyledContainer from "../layout/StyledContainer";
import ShareContent from "../share/ShareContent";
import ProjectCards from "./ProjectCards";
import ProjectContext from "./ProjectContext";
import StudentSuggestionsContext from "./StudentSuggestionsContext";
import TabContentBlock from "./TabContentBlock";
import { TabContext } from "./TabContext";
import UpdateContext from "./UpdateContext";

const StyledTab = ({ children, onClick, active }) => {
  return (
    <Button
      style={{
        borderLeft: "0",
        borderRight: "0",
        borderTop: "0",
        borderRadius: "0",
        transform: "translateY(1px)",
        margin: "0px 5px",
        height: "50px",
        color: active && "#1fd3e0",
        borderBottom: active && "1px solid rgb(31, 211, 224)"
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const Tab = ({ offsetTop }, ref) => {
  const [show, setShow] = useState(false);
  const { activePane, setActivePane } = useContext(TabContext);
  return (
    <div ref={ref}>
      <Tabs
        renderTabBar={({ tabBarExtraContent, activeKey, onChange }) => {
          return (
            <>
              <Affix
                offsetTop={offsetTop}
                onChange={affixed => setShow(affixed)}
              >
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
                    <StyledTab
                      active={activeKey === "projectContent"}
                      onClick={() => onChange("projectContent")}
                    >
                      課程內容
                    </StyledTab>
                    <StyledTab
                      active={activeKey === "projectChapter"}
                      onClick={() => onChange("projectChapter")}
                    >
                      課程章節
                    </StyledTab>
                    <StyledTab
                      active={activeKey === "studentSuggestions"}
                      onClick={() => onChange("studentSuggestions")}
                    >
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
                    height: "40px",
                    fontSize: "16px",
                    position: "fixed",
                    bottom: "15px",
                    zIndex: "9999",
                    width: "90%",
                    left: "50%",
                    transform: "translateX(-50%)"
                  }}
                >
                  支持專案
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
        <Tabs.TabPane key="projectContent" tab="課程內容">
          <StyledContainer>
            <TabContentBlock
              contentBlock={<ProjectContext />}
              sideBlock={<ProjectCards />}
            />
          </StyledContainer>
        </Tabs.TabPane>
        <Tabs.TabPane key="projectChapter" tab="課程章節">
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
          <Element name="test1" className="element">
            <StyledContainer>
              <TabContentBlock type contentBlock={<ProjectCards />} />
            </StyledContainer>
          </Element>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default React.forwardRef(Tab);
