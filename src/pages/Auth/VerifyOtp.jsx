import React, { useState } from "react";
import AuthLogo from "../../assets/images/auth-logo.png";
import { FaArrowLeft } from "react-icons/fa6";
import OTPInput from "react-otp-input";
import { Button, Form } from "antd";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useVerifyEmailMutation } from "../../redux/features/Auth/authApi";
import { CustomSpinner } from "../../Components/Spinners";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [mutation, { isLoading }] = useVerifyEmailMutation();
  const onFinish = async (_values) => {
    if (isNaN(otp) || otp.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Faild",
        text: "Please enter 6 digits OTP!.",
      });
    }
    const phone = localStorage.getItem("phone");
    try {
      const response = await mutation({
        phone: phone,
        code: Number(otp),
      });
      if (response?.data?.statusCode == 200) {
        localStorage.setItem("verify-token", response?.data?.data?.token);
        navigate(`/auth/reset-password`);
      } else {
        Swal.fire({
          icon: "error",
          title: "Faild!",
          text:
            response?.data?.message ||
            response?.error?.data?.message ||
            "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        // title: "Login Failed , Try Again...",
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
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          requiredMark={false}
          className="space-y-7 fit-content object-contain w-[451px] bg-[#FFF3E6] py-[64px] px-[44px] rounded-2xl"
        >
          <div className="flex justify-center items-center gap-1">
            <FaArrowLeft size={20} onClick={() => navigate(-1)} />
            <h5 className="text-2xl font-medium">Verify OTP</h5>
          </div>
          <p className="text-center">
            Please enter the otp we have sent you in your number.
          </p>
          <div className="">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={{
                height: "57px",
                width: "44px",
                margin: "auto",
                background: "#FFF3E6",
                border: "1px solid #FFAD54",
                marginRight: "10px",
                outline: "none",
                borderRadius: "8px",
                color: "black",
              }}
              renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <Form.Item>
            <Button
              disabled={isLoading}
              htmlType="submit"
              type="primary"
              className="w-full bg-[#FF8400] h-[59px] text-base font-medium text-white rounded-lg"
            >
              Verify Email {isLoading && <CustomSpinner />}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default VerifyOtp;
