import React from "react";
import { Form, Input, message, Button, InputNumber } from "antd";
import { StyledContainer } from "../Styled/Antd.styledConainer";
import { useAppDispatch } from "../../../app/hooks";
import { actions } from "../../../app/rootReducer";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();

  let navigate = useNavigate()

  const onFinish = (values: any) => {
    message.success("Submit success!");
    console.log(values);
    dispatch(actions.addProductPending(values.product))
    navigate('/addedProducts')
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <StyledContainer >
      <Form
        {...layout}
        name="nest-messages"
        validateMessages={validateMessages}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name={["product", "image"]}
          label="Image URL"
          rules={[
            { required: true },
            { type: "url", warningOnly: true },
            { type: "string", min: 6 },
          ]}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
          name={["product", "title"]}
          label="Title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["product", "price"]}
          label="Price"
          rules={[{ type: "number", min: 0, max: 1000 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={["product", "category"]} label="Category">
          <Input />
        </Form.Item>
        <Form.Item name={["product", "description"]} label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledContainer>
  );
};
