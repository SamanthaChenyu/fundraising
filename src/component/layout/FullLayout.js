import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const FullLayout = ({ children }) => {
  return (
    <Layout className="vh-100" style={{ backgroundColor: "#f3f3f4" }}>
      <Layout.Content />
    </Layout>
  );
};

export default FullLayout;
