import moment from "moment";
import "moment/locale/zh-cn";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    padding: 0px 1px; 
    @media (min-width: 1199px) {
            padding: 0px 5px;
        }
`;

const CountdownTimer = ({ due, isDate }) => {
  const [left, setLeft] = useState(moment(due).fromNow());
  useEffect(() => {
    setInterval(() => {
      setLeft(
        moment(due)
          .locale("zh-tw")
          .fromNow()
      );
    }, 1000);
  }, [due]);
  return (
    <div>
      {isDate ? (
        <StyledDiv> {left} </StyledDiv>
      ) : (
        <StyledDiv> {due} </StyledDiv>
      )}
    </div>
  );
};

export default CountdownTimer;
