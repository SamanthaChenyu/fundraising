import React from "react";
import CardBlockType from "./../card/CardBlockType";
import CardBlockType1 from "./../card/CardBlockType1";
import CardBlockType2 from "./../card/CardBlockType2";
import ShareContent from "./../share/ShareContent";

const ProjectCards = () => {
  return (
    <>
      <CardBlockType2
        money={699}
        cardTitle="認同我們的理念，純粹贊助計畫！"
        cardContext="支持台灣青年勇敢突破分數門檻，勇闖自己夢想的世界舞台！一起為台灣向這個世界用力發聲！支持計畫後， AmazingTalker 將贈等值抵用卷，可在 AmazingTalker 任意使用學習任何語言。"
        people={139}
        link="www.google.com"
      />
      <CardBlockType1
        option
        money={1200}
        beforePrice="2300"
        cardTitle="《微痛轉職工程師》線上課程"
        people={139}
        countdown="3天"
        link="www.google.com"
      />
      <CardBlockType content={<ShareContent />} />
    </>
  );
};

export default ProjectCards;
