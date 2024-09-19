import React from "react";
import AuthLogo from "../../assets/images/auth-logo.png";
import { Button, Form, Input } from "antd";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../../redux/features/Auth/authApi";
import { CustomSpinner } from "../../Components/Spinners";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const onFinish = async (values) => {
    try {
      const response = await forgotPassword(values);
      
      if (response?.data?.statusCode == 200) {
        localStorage.setItem("phone", values.phone);
        localStorage.setItem("token", response?.data?.data);
        navigate(`/auth/verify`);
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!!",
          text:
            response?.data?.message ||
            response?.error?.data?.message ||
            "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed!!",
        text: "Something went wrong. Please try again later.",
      });
    }
  };
  return (
    <div className="w-full min-h-screen grid grid-cols-2 place-items-center bg-[#FFF3E6] ">
      <div>
        <img
          src={AuthLogo}
          alt=""
          className="w-[90%] max-w-[542px] max-h-[354px]"
        />
      </div>
      <div className="bg-[#FFD9B0] w-full h-full flex justify-center items-center">
        <div className=" w-[451px] bg-[#FFF3E6] py-[64px] px-[44px] rounded-2xl space-y-[24px]">
          <div className="flex justify-center items-center gap-1">
            <FaArrowLeft size={20} onClick={() => navigate(-1)} />
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
            autoComplete="off"
            requiredMark={false}
          >
            <Form.Item
              className="text-base font-medium "
              label="Phone Number"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please Input Your number!",
                },
                {
                  pattern: /^[+]*[0-9 ]+$/,
                  message: "Please input valid phone number!",
                },
              ]}
            >
              <Input
                className="h-[56px] border rounded-lg border-[#FFAD54] bg-[#FFF3E6]"
                placeholder="Enter your Number"
              />
            </Form.Item>
            <Form.Item>
              <Button
                disabled={isLoading}
                type="primary"
                htmlType="submit"
                className="w-full bg-[#FF8400] h-[59px] text-base font-medium mt-2"
              >
                Send OTP {isLoading && <CustomSpinner />}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
