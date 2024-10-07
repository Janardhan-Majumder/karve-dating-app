import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import dashProfile from "../../assets/images/dashboard-profile.png";
import { useNavigate } from "react-router-dom";
import { PiCameraPlus } from "react-icons/pi";
import { LiaArrowLeftSolid } from "react-icons/lia";
import PhoneCountryInput from "../../Components/PhoneCountryInput";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState();
  const { user } = useSelector((state) => state.auth);
  const [phoneNumber, setPhoneNumber] = useState();
  const onFinish = (values) => {};
console.log(phoneNumber)
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-1.5">
        <button onClick={() => navigate("/profile")}>
          <LiaArrowLeftSolid size={26} />
        </button>
        <h6 className="text-xl font-medium">Edit Profile</h6>
      </div>
      <Form
        name="basic"
        layout="vertical"
        className="w-full grid grid-cols-12 gap-x-5"
        onFinish={onFinish}
        autoComplete="off"
        initialValues={user}
      >
        <div className="col-span-4 h-[365px] flex flex-col items-center justify-center bg-[#FFF3E6] px-8 py-8 rounded-xl border-2 border-[#FFD9B0] space-y-4">
          <div className="my-3 relative">
            <div className="h-full w-full absolute inset-0 bg-[#222222bb] rounded-full flex justify-center items-center text-white cursor-pointer">
              <PiCameraPlus size={34} />
            </div>
            <img
              src={dashProfile}
              alt=""
              className="h-[144px] w-[144px] rounded-full"
            />
          </div>
          <h3 className="text-2xl text-center text-[#FF8400]">
            {"Change Picture"}
          </h3>
        </div>
        <div className="col-span-8 px-8 space-y-[24px]">
          <Form.Item
            className="text-lg text-[#222222] font-medium"
            label="Name"
            name="name"
          >
            <Input className="h-[56px] border rounded-lg border-[#FFAD54] bg-[#FFF3E6] disabled:text-[#222222] disabled:bg-[#FFF3E6] mt-3" />
          </Form.Item>
          <Form.Item
            className="text-lg text-[#222222] font-medium"
            label="Email"
            name="email"
          >
            <Input
              readOnly
              className="h-[56px] border rounded-lg border-[#FFAD54] bg-[#FFF3E6] disabled:text-[#222222] disabled:bg-[#FFF3E6] mt-3"
            />
          </Form.Item>
          <Form.Item
            className="text-lg text-[#222222] font-medium"
            label="Phone Number"
          >
            <PhoneCountryInput />
          </Form.Item>
          <div className="flex justify-end">
            <Button
              style={{
                backgroundColor: "#FF8400",
                color: "#fff",
              }}
              htmlType="submit"
              className="h-[56px] w-[206px]  placeholder:text-[#999999] text-[18px] font-medium"
              type="primary"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EditProfile;
