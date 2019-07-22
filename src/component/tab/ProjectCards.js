import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import CardBlock from "../card/CardBlock";
import CardBlockType from "../card/StyledCardBlock";
import ShareContent from "./../share/ShareContent";
import { useProjectPlans, useProject } from "../../hooks";

const StyleTitle = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
`;

const ProjectPackage = ({ title, children }) => {
  return (
    <>
      <StyleTitle>{title}</StyleTitle>
      <ul style={{ paddingLeft: "20px" }}>{children}</ul>
    </>
  );
};

const ProjectCards = () => {
  const { loading, error, project } = useProject(
    process.env.REACT_APP_PROJECT_ID
  );
  return loading ? (
    "載入中"
  ) : error ? (
    "無法載入方案"
  ) : (
    <>
      {project.plans.map(plan => (
        <CardBlock key={plan.id} plan={plan} />
      ))}
      <CardBlockType>
        <ShareContent />
      </CardBlockType>
    </>
  );
};

export default ProjectCards;
