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
            value={7280}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"NT$"}
          />
        }
        listPrice={
          <NumberFormat
            value={15000}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"NT$"}
          />
        }
        cardTitle="股票全攻略組合包"
        people={139}
      >
        包含項目
        <ul>
          <li>經典股票課程 (超過600分鐘)</li>
          <li>如何選擇股票課程(超過400分鐘)</li>
          <li>買賣時機點的選擇課程(超過400分鐘)</li>
          <li>課程完整講義下載</li>
          <li>Excel 示範模板下載 </li>
        </ul>
        優惠期間購買再加碼
        <ul>
          <li>可免費參加葉教授實體課程 (一次)</li>
          <li>有機會抽中「萬元」投資金 </li>
          <li>有機會抽中「IphoneXS」</li>
        </ul>
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
