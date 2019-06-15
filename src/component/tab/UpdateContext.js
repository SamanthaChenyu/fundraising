import React from "react";
import { Timeline, Typography } from "antd";
import Styled from "styled-components";
import Image from "../../images/text2.png";

const { Title, Text } = Typography;

const StyledTimeLime = Styled.div`
width: 90%;
margin: auto;
`;

const StyledText = Styled.div`
padding: 12px 0px;
`;

const StyledTimeLimeItem = Styled.div`
padding-left: 12px;
`;

const UpdateContext = () => {
  return (
    <StyledTimeLime>
      <Timeline>
        <Timeline.Item>
          <StyledTimeLimeItem>
            <Title level={4}>500萬延伸解鎖目標公開！</Title>
            <Text type="secondary">2019/06/13</Text>
            <StyledText>
              <Text>
                感謝各位贊助者的支持，這是我們公告的第一個解鎖項目，所有贊助者將會免費贈送專用的清潔擦拭布！會隨著您的產品一起寄到您的手中
                :)接下來我們還準備了許多解鎖好禮要送給大家，請大家拭目以待
              </Text>
            </StyledText>
          </StyledTimeLimeItem>
        </Timeline.Item>
        <Timeline.Item>
          <StyledTimeLimeItem>
            <Title level={4}>Luft Cube＠4/24-4/28文博會展出｜來看樣品</Title>
            <Text type="secondary">2019/06/10</Text>
            <StyledText>
              <Text>
                Luft
                Cube的贊助者您好，感謝大家支持，讓專案第二天就突破100萬！感謝各位呀！帶著的鼓勵，MIT的Luft
                Cube也前進松菸的文博會，開始面向世界，也在4/24獲得日本通路業者的好評喔。如果您想搶先看看，Luft
                Cube的樣品，歡迎來文博會喔！詳細資訊，請關注Luft.Qi粉絲專頁！Luft
                Cube團隊
              </Text>
            </StyledText>
          </StyledTimeLimeItem>
        </Timeline.Item>
        <Timeline.Item>
          <StyledTimeLimeItem>
            <Title level={4}>Luft Cube＠4/24-4/28文博會展出｜來看樣品</Title>
            <Text type="secondary">2019/06/08</Text>
            <img
              src={Image}
              alt="測試"
              style={{ width: "100%", paddingTop: "12px" }}
            />
            <StyledText>
              <Text>
                Luft
                Cube的贊助者您好，感謝大家支持，讓專案第二天就突破100萬！感謝各位呀！帶著的鼓勵，MIT的Luft
                Cube也前進松菸的文博會，開始面向世界，也在4/24獲得日本通路業者的好評喔。如果您想搶先看看，Luft
                Cube的樣品，歡迎來文博會喔！詳細資訊，請關注Luft.Qi粉絲專頁！Luft
                Cube團隊
              </Text>
            </StyledText>
          </StyledTimeLimeItem>
        </Timeline.Item>
      </Timeline>
    </StyledTimeLime>
  );
};

export default UpdateContext;
