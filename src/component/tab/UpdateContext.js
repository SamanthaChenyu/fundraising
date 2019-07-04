import React from "react";
import { Timeline, Typography } from "antd";
import Styled from "styled-components";
import { PROJECT_TIMELINE } from "../../data";

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
        {PROJECT_TIMELINE.map((updateListItem, index) => {
          let Img;
          try {
            Img = require(`../../images/${updateListItem.content.img.src}`);
          } catch {
            Img = null;
          }
          return (
            <Timeline.Item key={index}>
              <StyledTimeLimeItem>
                <Title level={4} style={{ lineHeight: "1.5" }}>
                  {updateListItem.title}
                </Title>
                <Text type="secondary">{updateListItem.date}</Text>
                {Img && (
                  <img
                    src={Img}
                    style={updateListItem.content.img.style}
                    alt={updateListItem.content.img.alt}
                  />
                )}
                <StyledText>
                  <Text>{updateListItem.content.text}</Text>
                </StyledText>
              </StyledTimeLimeItem>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </StyledTimeLime>
  );
};

export default UpdateContext;
