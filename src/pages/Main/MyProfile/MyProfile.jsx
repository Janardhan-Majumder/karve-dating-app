import React from "react";
import { Button, Form, Input } from "antd";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const onFinish = (values) => {
    navigate(`/edit-profile/${"123456fdsfa"}`);
  };

  return (
    <div className="pt-5">
      <Form
        name="basic"
        layout="vertical"
        className="w-full grid grid-cols-12 gap-x-5"
        onFinish={onFinish}
        initialValues={user}
        autoComplete="off"
      >
        <div className="col-span-4 h-[365px] flex flex-col items-center justify-center bg-[#FFF3E6] px-8 py-8 rounded-xl border-2 border-[#FFD9B0] space-y-4">
          <div className="my-3 ">
            <img
              src={
                user?.profilePictureUrl
                  ? `${import.meta.env.VITE_SERVER_URL}` +
                    user.profilePictureUrl?.publicFileURL
                  : profileImage
              }
              alt=""
              className="h-[144px] w-[144px] rounded-full"
            />
          </div>
          <h5 className="text-lg text-[#222222]">{"Profile"}</h5>
          <h4 className="text-2xl text-[#222222]">{"Admin"}</h4>
        </div>
        <div className="col-span-8 px-8 space-y-[24px]">
          <Form.Item
            className="text-lg text-[#222222] font-medium"
            label="Name"
            name="name"
          >
            <Input
              disabled
              style={{
                border: "1px solid #FF8400",
              }}
              className="h-[56px] border rounded-lg border-[#FF8400] bg-[#FFF3E6] disabled:text-[#222222] disabled:bg-[#FFF3E6] mt-3"
            />
          </Form.Item>
          <Form.Item
            className="text-lg text-[#222222] font-medium"
            label="Email"
            name="email"
          >
            <Input
              disabled
              style={{
                border: "1px solid #FF8400",
              }}
              className="h-[56px] border rounded-lg border-[#FF8400] bg-[#FFF3E6] disabled:text-[#222222] disabled:bg-[#FFF3E6] mt-3"
            />
          </Form.Item>
          <Form.Item
            className="text-lg text-[#222222] font-medium"
            label="Phone Number"
            name="phone"
          >
            <Input
              disabled
              style={{
                border: "1px solid #FF8400",
              }}
              className="h-[56px] border rounded-lg border-[#FF8400] bg-[#FFF3E6] disabled:text-[#222222] disabled:bg-[#FFF3E6] mt-3"
            />
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
              Edit Profile <FiEdit />
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default MyProfile;
