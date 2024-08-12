import React, { useState } from "react";
import AuthLogo from "../../assets/images/auth-logo.png";
import { FaArrowLeft } from "react-icons/fa6";
import OTPInput from "react-otp-input";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen grid grid-cols-2 place-items-center bg-[#FFF3E6] ">
      <div>
        <img src={AuthLogo} alt="" className="w-[90%] max-w-[542px] max-h-[354px]" />
      </div>
      <div className="bg-[#FFD9B0] w-full h-full flex justify-center items-center">
        <div className="space-y-7 fit-content object-contain w-[451px] bg-[#FFF3E6] py-[64px] px-[44px] rounded-2xl">
          <div className="flex justify-center items-center gap-1">
            <FaArrowLeft size={20} />
            <h5 className="text-2xl font-medium">Verify OTP</h5>
          </div>
          <p className="text-center">
            Please enter the otp we have sent you in your email.
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
          <Button
            onClick={() => navigate("/auth/reset-password")}
            type="primary"
            className="w-full bg-[#FF8400] h-[59px] text-base font-medium text-white rounded-lg"
          >
            Verify Email
          </Button>
        </div>
      </div>
    </div>
  );
};
export default VerifyOtp;
