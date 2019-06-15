import React from "react";
import { Layout } from "antd";

const DefaultLayout = ({ children }) => {
  console.log(children);
  return (
    <div style={{ display: "flex" }}>
      {Array.isArray(children) ? (
        <Layout className="vh-100">
          <div style={{ background: "red", width: "70%", margin: "12px" }}>
            {children[0]}
          </div>
          <div style={{ background: "blue", width: "30%", margin: "12px" }}>
            {children[1]}
          </div>
        </Layout>
      ) : (
        <Layout className="vh-100">
          <div style={{ background: "red", width: "70%" }}>{children}</div>
          <div style={{ background: "blue", width: "30%" }} />
        </Layout>
      )}
    </div>
  );
};

export default DefaultLayout;
