import React, { useState } from "react";
import CardBlockType from "../card/StyledCardBlock";
import ShareContent from "./../share/ShareContent";
import CardBlock from "../card/CardBlock";
import Styled from "styled-components";
import NumberFormat from "react-number-format";

const StyleTitle = Styled.div`
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
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
  const [modal4Visible, setModal4Visible] = useState(false);
  return (
    <>
      <CardBlock
        onClick={() => setModal1Visible(true)}
        onCancel={() => setModal1Visible(false)}
        visible={modal1Visible}
        salePrice={
          <NumberFormat
            value={699}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"NT$"}
          />
        }
        cardTitle="認同我們的理念，純粹贊助計畫！"
        people={139}
      >
        支持台灣青年勇敢突破分數門檻，勇闖自己夢想的世界舞台！一起為台灣向這個世界用力發聲！支持計畫後，
        AmazingTalker 將贈等值抵用卷，可在 AmazingTalker 任意使用學習任何語言。
      </CardBlock>

      <CardBlock
        BannerClick={false}
        onClick={() => setModal2Visible(true)}
        onCancel={() => setModal2Visible(false)}
        visible={modal2Visible}
        salePrice={
          <NumberFormat
            value={1200}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"NT$"}
          />
        }
        listPrice={
          <NumberFormat
            value={2300}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"NT$"}
          />
        }
        cardTitle="《微痛轉職工程師》線上課程"
        people={139}
        countdown="3天"
        onSale
      >
        <ProjectPackage title="包含項目">
          <li>60 小時線上多益課程 × 1</li>
        </ProjectPackage>
        <ProjectPackage title="08/01 - 09/01 募資贈送限定">
          <li>5 小時英文履歷面試技巧 × 1</li>
          <li>5 小時英文履歷面試技巧線上課程 × 1</li>
          <li>英文履歷面 × 1</li>
        </ProjectPackage>
      </CardBlock>

      <CardBlock
        onClick={() => setModal3Visible(true)}
        onCancel={() => setModal3Visible(false)}
        visible={modal3Visible}
        salePrice={
          <NumberFormat
            value={2400}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"NT$"}
          />
        }
        cardTitle="個人淨化空氣專案78折，現賺500元，未來售價2300元"
        people={139}
      >
        <ProjectPackage title="包含項目">
          <li>數量：1件</li>
          <li>內附：供電線1條，說明書與保固卡</li>
          <li>獨家贈禮專屬 Luft Cube導風帽(黑色) 1件</li>
        </ProjectPackage>
      </CardBlock>

      <CardBlock
        onClick={() => setModal4Visible(true)}
        onCancel={() => setModal4Visible(false)}
        visible={modal4Visible}
        salePrice={
          <NumberFormat
            value={2800}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"NT$"}
          />
        }
        cardTitle="個人淨化空氣專案78折，現賺500元，未來售價2300元"
        people={139}
      >
        <ProjectPackage title="包含項目">
          <li>數量：1件</li>
          <li>內附：供電線1條，說明書與保固卡</li>
          <li>獨家贈禮專屬 Luft Cube導風帽(黑色) 1件</li>
        </ProjectPackage>
      </CardBlock>

      <CardBlockType>
        <ShareContent />
      </CardBlockType>
    </>
  );
};

export default ProjectCards;
