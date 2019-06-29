import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import FundraisingAmount from "./FundraisingAmount";
import NumberFormat from "react-number-format";

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
      <FundraisingAmount
        money={
          <NumberFormat
            value={23917345}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"NT$"}
          />
        }
        target={
          <NumberFormat
            value={1000000}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"NT$"}
          />
        }
        sponsors={
          <NumberFormat
            value={4832}
            displayType={"text"}
            thousandSeparator={true}
          />
        }
      />
      <ProgressBar percent={92} />
    </StyledFundProgressBlock>
  );
};

export default FundProgressBlock;
