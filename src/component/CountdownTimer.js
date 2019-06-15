import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/zh-cn";

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
  }, []);
  return (
    <div style={{ display: "flex" }}>
      {isDate ? (
        <div style={{ padding: "0px 5px" }}>{left}</div>
      ) : (
        <div style={{ padding: "0px 5px" }}>{due}</div>
      )}
    </div>
  );
};

export default CountdownTimer;
