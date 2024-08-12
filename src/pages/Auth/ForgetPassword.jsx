import React from "react";
import AuthLogo from "../../assets/images/auth-logo.png";
import { Button, Form, Input } from "antd";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    // console.log("Success:", values);
    navigate("/auth/verify-email");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full min-h-screen grid grid-cols-2 place-items-center bg-[#FFF3E6] ">
      <div>
        <img src={AuthLogo} alt="" className="w-[90%] max-w-[542px] max-h-[354px]" />
      </div>
      <div className="bg-[#FFD9B0] w-full h-full flex justify-center items-center">
        <div className=" w-[451px] bg-[#FFF3E6] py-[64px] px-[44px] rounded-2xl space-y-[24px]">
          <div className="flex justify-center items-center gap-1">
            <FaArrowLeft size={20} />
            <h5 className="text-2xl font-medium">Forget Password</h5>
          </div>
          <p className="text-center">
            Please enter your email address to reset your password.
          </p>
          <Form
            name="basic"
            layout="vertical"
            className="w-full space-y-[24px]"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item className="text-base font-medium " name="email">
              <Input
                className="h-[56px] border rounded-lg border-[#FFAD54] bg-[#FFF3E6]"
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-[#FF8400] h-[59px] text-base font-medium"
              >
                Send OTP
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
