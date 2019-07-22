import "antd/dist/antd.css";
import React from "react";
import styled from "styled-components";

const StyledOnSaleUntilBlock = styled.div`
  background-color: #000;
  &::after {
    content: " ";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 100px 100px 100px;
    border-color: transparent transparent #007bff transparent;
  }
`;

const OnSaleUntilBlock = () => {
  return <StyledOnSaleUntilBlock>限時推薦</StyledOnSaleUntilBlock>;
};

export default OnSaleUntilBlock;
