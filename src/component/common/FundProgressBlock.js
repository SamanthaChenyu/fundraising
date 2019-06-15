import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import FundraisingAmount from "./FundraisingAmount";

const StyledFundProgressBlock = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 20px;
  padding: 5%;
  align-items: center;
  justify-content: space-between;
  background-color: #f7fbfe;
  span.ant-progress-text {
    color: #000;
    font-size: 16px;
  }
`;

const FundProgressBlock = ({ percent }) => {
  return (
    <StyledFundProgressBlock>
      <FundraisingAmount money={23917345} target="1000000" sponsors={4832} />
      <ProgressBar percent={92} />
    </StyledFundProgressBlock>
  );
};

export default FundProgressBlock;
