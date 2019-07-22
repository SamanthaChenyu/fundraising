import { Button, Form, Icon, Input, message, Modal, Typography } from "antd";
import axios from "axios";
import gql from "graphql-tag";
import React, { useCallback, useState } from "react";
import { useQuery } from "react-apollo-hooks";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import StyledCardBlock from "./StyledCardBlock";

const { Title, Text } = Typography;

const StyledLine = styled.div`
  background-color: #dcdcdc;
  height: 1px;
  width: 100%;
  margin-bottom: 24px;
`;

const StyleTitleBG = styled.div`
  background-color: #f7fbfe;
  padding: 24px 20px;
`;

const StyledError = styled.div`
  color: red;
`;

const StyledMargin = styled.div`
  margin: 24px 0px;
`;

const StyledCardTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0px 24px 0px;
`;

const StyledCardContext = styled.div`
  font-size: 14px;
  text-align: justify;
`;

const StyledPeople = styled.div`
  color: rgba(0, 0, 0, 0.45);
  margin-top: 22px;
  margin-bottom: 12px;
  text-align: right;
  display: flex;
  align-items: baseline;
`;

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSaleIcon = styled.div`
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

const StyledCountdown = styled.div`
  color: #2dd4e0;
  font-size: 16px;
  font-weight: bold;
  margin: 0px 5px;
`;

const CardBlock = ({ form, plan, BannerClick }) => {
  const [loading, setLoading] = useState();
  const [check, setCheck] = useState({ discount: 0, totalPrice: 0 });
  const [visible, setVisible] = useState(false);
  const [discount, setDiscount] = useState(false);
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      form.validateFields((error, values) => {
        if (!error) {
          setLoading(true);
          axios
            .post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/getPayForm`, {
              planId: plan.id,
              email: values.email,
              code: values.code || "",
              clientBackUrl: window.location.href,
              notifyUrl: `${
                process.env.REACT_APP_BACKEND_ENDPOINT
              }/handleOrderNotification`
            })
            .then(({ data }) => {
              document.write(data);
            })
            .catch(err => {
              message.error(err.message);
              setLoading(false);
            });
        }
      });
    },
    [form, plan.id]
  );
  const handleCheckGet = useCallback(() => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/getCheck`, {
        planId: plan.id,
        code: form.getFieldValue("code") || ""
      })
      .then(({ data }) => {
        if (data.discount === 0) {
          message.error("無此折扣碼");
        } else {
          setCheck({ discount: data.discount, totalPrice: data.totalPrice });
        }
      })
      .catch(err => message.error(err.message));
  }, [form, plan.id]);
  return (
    <>
      <StyledCardBlock
        className={BannerClick ? `TranslateBackground` : `InitialBackground`}
      >
        {plan && plan.onSale && (
          <StyledSaleIcon>
            <div>限時推薦</div>
          </StyledSaleIcon>
        )}
        <StyledFlex>
          <Title
            level={3}
            style={{ marginRight: "5px", marginBottom: 0, color: "#ff812c" }}
          >
            <NumberFormat
              value={plan && plan.salePrice}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"NT$"}
            />
          </Title>
          {plan && plan.listPrice && (
            <Text delete style={{ color: "rgba(0, 0, 0, 0.45)" }}>
              <NumberFormat
                value={plan.listPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"NT$"}
              />
            </Text>
          )}
        </StyledFlex>

        <StyledCardTitle>{plan && plan.title}</StyledCardTitle>
        <StyledCardContext
          dangerouslySetInnerHTML={{ __html: plan && plan.description }}
        />
        <StyledFlex style={{ justifyContent: "space-between" }}>
          {plan && plan.discountTo ? (
            <StyledPeople>
              <Text type="warning">優惠倒數</Text>
              <StyledCountdown>{plan.discountTo}</StyledCountdown>
            </StyledPeople>
          ) : (
            <div />
          )}
          <StyledPeople>
            {(plan && plan.sales && plan.sales.sum) || 0}人
          </StyledPeople>
        </StyledFlex>
        <Button
          type="primary"
          size="large"
          style={{ width: "100%" }}
          onClick={() => setVisible(true)}
        >
          支持此專案
        </Button>
      </StyledCardBlock>
      <Modal
        centered
        footer={null}
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        <StyledMargin style={{ textAlign: "center", fontSize: "16px" }}>
          <Text strong>支付項目</Text>
        </StyledMargin>
        <StyleTitleBG>{plan && plan.title}</StyleTitleBG>
        <StyledMargin
          dangerouslySetInnerHTML={{ __html: plan && plan.description }}
        />
        <StyledLine />
        <Form onSubmit={handleSubmit}>
          <Form.Item label="請輸入信箱">
            {form.getFieldDecorator("email", {
              rules: [
                { required: true, message: "此為必填欄位" },
                { type: "email", message: "email 格式錯誤" }
              ]
            })(<Input />)}
          </Form.Item>

          {discount ? (
            <div className="d-flex align-items-center mb-3">
              {form.getFieldDecorator("code")(
                <Input
                  autoFocus
                  className="flex-grow-1 mr-2"
                  placeholder="請輸入折扣碼"
                />
              )}
              <Button className="mr-2" onClick={handleCheckGet}>
                確認
              </Button>
              <Icon
                type="cross"
                onClick={() => {
                  setDiscount(false);
                  setCheck({ ...check, discount: 0 });
                }}
              />
            </div>
          ) : (
            <div
              style={{ color: "#ff812c", cursor: "pointer" }}
              onClick={() => setDiscount(!discount)}
            >
              使用折扣碼？
            </div>
          )}

          <div className="d-flex justify-content-end align-items-center">
            {check.discount ? (
              <Text>回饋折抵 -NT${check.discount} =　</Text>
            ) : null}
            <span
              style={{
                color: "#ff812c",
                fontSize: "24px",
                fontWeight: "600"
              }}
            >
              <NumberFormat
                value={plan && plan.salePrice - check.discount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"NT$"}
              />
            </span>
          </div>
          <div style={{ textAlign: "right", marginTop: "16px" }}>
            <Button
              loading={loading}
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

export default Form.create()(CardBlock);
