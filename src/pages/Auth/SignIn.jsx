import React from "react";
import AuthLogo from "../../assets/images/auth-logo.png";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen grid grid-cols-2 place-items-center bg-[#FFF3E6] ">
      <div>
        <img src={AuthLogo} alt="" className="w-[90%] max-w-[542px] max-h-[354px]" />
      </div>
      <div className="bg-[#FFD9B0] w-full h-full flex justify-center items-center">
        <div className=" w-[451px] bg-[#FFF3E6] py-[64px] px-[44px] rounded-2xl">
          <h5 className="text-2xl font-medium text-center mb-[24px]">
            Singn In
          </h5>
          <Form
            name="basic"
            layout="vertical"
            className="w-full space-y-[24px]"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              className="text-base font-medium "
              label="Email"
              name="email"
            >
              <Input
                className="h-[56px] border rounded-lg border-[#FFAD54] bg-[#FFF3E6]"
                placeholder="Enter your email"
              />
            </Form.Item>

            <Form.Item
              className="text-base font-medium "
              label="Password"
              name="password"
            >
              <Input.Password
                className="h-[56px] border rounded-lg border-[#FFAD54] bg-[#FFF3E6]"
                placeholder="Enter your password"
              />
            </Form.Item>
            <div className="flex justify-between items-center">
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox className="text-base font-medium text-[#FF8400]">
                  Remember me
                </Checkbox>
              </Form.Item>
              <Button
                onClick={() => navigate("/auth/forget-password")}
                type="link"
                className="text-base font-medium text-[#FF8400] pb-5"
              >
                Forget password?
              </Button>
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-[#FF8400] h-[59px] text-base font-medium"
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
