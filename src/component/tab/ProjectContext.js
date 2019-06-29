import React from "react";
import TestImg from "./../../images/text.png";
import Styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

const StyledTitleDiv = Styled.div`
  font-size: 20px;
  border-left: 6px solid #1fd3e0;
  padding: 6px 12px 6px 12px;
  margin-bottom: 32px;
`;

const StyledDiv = Styled.div`
  color: #000;
  margin: 32px 0px;
`;

const StyledTextP = Styled.p`
  line-height: 1.75;
  letter-spacing: 0.2px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
`;

const StyledTitle = ({ children }) => {
  return (
    <StyledTitleDiv>
      <Title level={4} style={{ marginBottom: 0 }}>
        {children}
      </Title>
    </StyledTitleDiv>
  );
};

const StyledText = ({ children }) => {
  return (
    <StyledDiv>
      <StyledTextP>{children}</StyledTextP>
    </StyledDiv>
  );
};

const ProjectContext = () => {
  return (
    <>
      <StyledTitle>計畫特色</StyledTitle>
      <StyledText>
        我們希望能夠讓使用 MacBook
        筆電的用戶，也能享受機械鍵盤帶來的爽快打擊感，但同時考量到「辦公室」的使用情境，於是減少了機械鍵盤原有的噪音。
      </StyledText>
      <StyledText>
        雖說如此，但此鍵盤仍可連結非蘋果作業系統，但須注意有些使用習慣、鍵位會略有差異。除此之外，希望所有以打字為日常生活者，都可以享受這把鍵盤帶來的好處。
      </StyledText>
      <img src={TestImg} alt="ad" style={{ width: "100%" }} />
      <StyledText>
        Cherry 青軸是市面上最常見的機械鍵盤用軸心，Tek
        矮軸希望能夠在更短的行程內，達到相同經典的手感。
      </StyledText>
      <StyledText>
        Taptek 鍵盤採用 Tek
        矮軸，讓這把鍵盤敲擊起來有機械的清脆感，但噪音較少、觸發行程也較短，同時也擁有比較高的耐用壽命。
      </StyledText>
      <StyledTitle>你會獲得</StyledTitle>
      <img src={TestImg} alt="ad" style={{ width: "100%" }} />
      <StyledText />
    </>
  );
};

export default ProjectContext;
