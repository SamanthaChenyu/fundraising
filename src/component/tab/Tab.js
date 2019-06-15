import React from "react";
import { Tabs, Button, Row, Col } from "antd";
import TabContentBlock from "./TabContentBlock";
import ProjectContext from "./ProjectContext";
import ProjectCards from "./ProjectCards";
import UpdateContext from "./UpdateContext";
import CardBlockType from "../card/CardBlockType";
import ShareContent from "../share/ShareContent";
import StudentSuggestionsContext from "./StudentSuggestionsContext";

const operations = (
  <Button type="primary" style={{ padding: "0px 24px" }}>
    支持專案
  </Button>
);

const Tab = () => {
  return (
    <>
      <Tabs defaultActiveKey="projectContent" tabBarExtraContent={operations}>
        <Tabs.TabPane key="projectContent" tab="計畫內容">
          <TabContentBlock
            contentBlock={<ProjectContext />}
            sideBlock={<ProjectCards />}
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="projectUpdates" tab="計畫更新">
          <TabContentBlock
            contentBlock={<UpdateContext />}
            sideBlock={<CardBlockType content={<ShareContent />} />}
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="studentSuggestions" tab="學員推薦">
          <TabContentBlock
            contentBlock={<StudentSuggestionsContext />}
            sideBlock={<CardBlockType content={<ShareContent />} />}
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="support">
          <Row>
            <ProjectCards />
          </Row>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default Tab;
