import React, { useState, useCallback } from "react";
import Styled from "styled-components";
import { Typography, Button, Modal, Form } from "antd";
import StyledCardBlock from "./StyledCardBlock";
import EmailInput from "../common/EmailInput";

const { Title, Text } = Typography;

const StyledLine = Styled.div`
background-color: #dcdcdc;
height: 1px;
width: 100%;
`;

const StyleTitleBG = Styled.div`
background-color: #f7fbfe;
padding: 24px 20px;
`;

const StyledError = Styled.div`
margin: 24px 0px;
&::after {
  content: '*此為必填欄位';
  color: red;
}
`;

const StyledMargin = Styled.div`
margin: 24px 0px;
`;

const StyledCardTitle = Styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0px 24px 0px;
`;

const StyledCardContext = Styled.div`
  font-size: 14px;
  text-align: justify;
`;

const StyledPeople = Styled.div`
  color:rgba(0, 0, 0, 0.45);
  margin-top: 22px;
  margin-bottom: 12px;
  text-align: right;
  display: flex;
  align-items: baseline;
`;

const StyledFlex = Styled.div`
display: flex;
align-items: center;
`;

const StyledSaleIcon = Styled.div`
position: relative;
cursor: pointer;
  div {
    position: absolute;
    padding: 8px;
    top: -32px;
    right: 0;
    z-index: 1;
    overflow: hidden;
    &::before {
      content: " ";
      background-color: #ffcd34;
      position: absolute;
      width: 150px;
      left: 50%;
      bottom: 0px;
      height: 100px;
      z-index: -1;
      border-radius: 50%;
      transform: translateX(-50%);
    }
  }
`;

const StyledCountdown = Styled.div`
color: #2dd4e0;
font-size: 16px;
font-weight: bold;
margin: 0px 5px;
`;

const CardBlock = (
  {
    salePrice,
    listPrice,
    onSale,
    cardTitle,
    people,
    countdown,
    children,
    onClick,
    onCancel,
    visible,
    BannerClick
  },
  ref
) => {
  const [emailValue, setEmailValue] = useState();
  const [error, setError] = useState(false);
  const [discount, setDiscount] = useState(false);
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log(emailValue);
      if (emailValue === undefined || emailValue.length === 0) {
        setError(true);
        console.log(error);
      } else {
        setError(false);
        setDiscount(true);
        console.log("扣一百");
      }
    },
    [emailValue, error]
  );
  return (
    <>
      <StyledCardBlock
        ref={ref}
        className={BannerClick ? `TranslateBackground` : `InitialBackground`}
      >
        {onSale && (
          <StyledSaleIcon>
            <div>限時推薦</div>
          </StyledSaleIcon>
        )}
        <StyledFlex>
          <Title
            level={3}
            style={{ marginRight: "5px", marginBottom: 0, color: "#1ed3e0" }}
          >
            {salePrice}
          </Title>
          {listPrice && (
            <Text delete style={{ color: "rgba(0, 0, 0, 0.45)" }}>
              {listPrice}
            </Text>
          )}
        </StyledFlex>

        <StyledCardTitle>{cardTitle}</StyledCardTitle>
        <StyledCardContext>{children}</StyledCardContext>
        <StyledFlex style={{ justifyContent: "space-between" }}>
          {countdown ? (
            <StyledPeople>
              <Text type="warning">優惠倒數</Text>
              <StyledCountdown>{countdown}</StyledCountdown>
            </StyledPeople>
          ) : (
            <div />
          )}
          <StyledPeople>{people}人</StyledPeople>
        </StyledFlex>
        <Button
          type="primary"
          size="large"
          style={{ width: "100%" }}
          onClick={onClick}
        >
          支持此專案
        </Button>
      </StyledCardBlock>
      <Modal centered footer={null} visible={visible} onCancel={onCancel}>
        <StyledMargin style={{ textAlign: "center", fontSize: "16px" }}>
          <Text strong>支付項目</Text>
        </StyledMargin>
        <StyleTitleBG>{cardTitle}</StyleTitleBG>
        <StyledMargin>{children}</StyledMargin>
        <StyledLine />
        <StyledMargin>請輸入信箱</StyledMargin>

        <Form onSubmit={handleSubmit}>
          {error ? (
            <>
              <StyledError>
                <EmailInput
                  style={{ border: "red 1px solid" }}
                  value={emailValue}
                  onChange={e => setEmailValue(e.currentTarget.value)}
                />
              </StyledError>
            </>
          ) : (
            <>
              <StyledMargin>
                <EmailInput
                  value={emailValue}
                  onChange={e => setEmailValue(e.currentTarget.value)}
                />
              </StyledMargin>
            </>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              lineHeight: "35px"
            }}
          >
            {discount ? <Text>回饋折抵 -NT$100 =　</Text> : " "}
            <Title
              level={3}
              style={{
                marginRight: "5px",
                marginBottom: 0,
                color: "#1ed3e0",
                textAlign: "right"
              }}
            >
              {salePrice}
            </Title>
          </div>
          <div style={{ textAlign: "right", marginTop: "16px" }}>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              style={{ width: "170px" }}
            >
              確定購買
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default React.forwardRef(CardBlock);
