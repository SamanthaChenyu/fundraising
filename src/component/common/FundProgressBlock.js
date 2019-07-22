import React from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import FundraisingAmount from "./FundraisingAmount";
import ProgressBar from "./ProgressBar";

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

const FundProgressBlock = ({ totalAmount, targetAmount, totalSponsors }) => {
  return (
    <StyledFundProgressBlock>
      <FundraisingAmount
        money={
          <NumberFormat
            value={totalAmount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"NT$"}
          />
        }
        target={
          <NumberFormat
            value={targetAmount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"NT$"}
          />
        }
        sponsors={
          <NumberFormat
            value={totalSponsors}
            displayType={"text"}
            thousandSeparator={true}
          />
        }
      />
      <ProgressBar percent={((totalAmount / targetAmount) * 100).toFixed(0)} />
    </StyledFundProgressBlock>
  );
};

export default FundProgressBlock;
