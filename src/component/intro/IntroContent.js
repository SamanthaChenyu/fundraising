import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const StyledIntroContent = styled.div`
  height: 200px;
  background-color: #192129;
  div {
    height: 100%;
  }
  @media (min-width: 767px) {
    height: 100%;
  }
`;

const IntroContent = ({ children }) => {
  return (
    <StyledIntroContent>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=aNuaNHH4IhI"
        width="100%"
        height="100%"
      />
    </StyledIntroContent>
  );
};

export default IntroContent;
