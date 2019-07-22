
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";

const StyledClipboard = styled.div`
display: flex;
position: relative;
`;

const ShareClipboard = ({ copyLink }) => {
  const [link, setLink] = useState(copyLink);
  useEffect(() => {
    console.log(link);
  }, [link]);

  return (
    <StyledClipboard>
      <Input
        placeholder="Link"
        size="large"
        value={link}
        onChange={e => setLink(e.currentTarget.value)}
      />
      <Clipboard
        data-clipboard-text={link}
        style={{
          position: "absolute",
          right: "0",
          backgroundColor: "#1fd3e0",
          border: "1px solid #1fd3e0",
          letterSpacing: "2px",
          height: "100%",
          width: "53px",
          color: "#fff"
        }}
      >
        複製
      </Clipboard>
    </StyledClipboard>
  );
};

export default ShareClipboard;
