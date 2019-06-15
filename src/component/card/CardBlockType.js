import React from "react";
import Styled from "styled-components";

const StyledCardBlock = Styled.div`
  border-radius: 5px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  padding: 32px;
  margin-bottom: 20px;
`;

const CardBlockType = ({ content }) => {
  return <StyledCardBlock>{content}</StyledCardBlock>;
};

export default CardBlockType;
