import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import profileImage from "../../assets/images/demo-profile.jpg";
import { useNavigate } from "react-router-dom";
import { PiCameraPlus } from "react-icons/pi";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { useUpadateProfileMutation } from "../../redux/features/Users/userApi";
import Swal from "sweetalert2";

const EditProfile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [imageFile, setImageFile] = useState();
  const [phoneNumber, setPhoneNumber] = useState(user?.phone);
  const [mutation, { isLoading }] = useUpadateProfileMutation();
  const onFinish = async (values) => {
    try {
      const bodyDatas = { ...values, phone: phoneNumber };
      const formData = new FormData();
      if (imageFile) {
        formData.append("image", imageFile);
      }
      for (const [key, value] of Object.entries(bodyDatas)) {
        formData.append(key, value);
      }
      const res = await mutation({
        id: user._id,
        body: formData,
      });
      if (res?.data?.statusCode == 200) {
        setImageFile(null);
        Swal.fire({
          icon: "success",
          title: "Update Success!!",
          text: res?.data?.message || res?.error?.data?.message || "Complete",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Update Faild!!",
          text:
            res?.data?.message ||
            res?.error?.data?.message ||
            "Something went wrong!!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Something went wrong!!",
      });
    }
  };
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
          <label htmlFor="profileImage">
            <div className="my-3 relative h-[144px] w-[144px] overflow-hidden ">
              <div className="h-full w-full absolute inset-0 bg-[#22222294] rounded-full flex justify-center items-center text-white cursor-pointer">
                <PiCameraPlus size={34} />
              </div>
              <img
                // src={dashProfile}
                src={
                  imageFile
                    ? URL.createObjectURL(imageFile)
                    : user?.profilePictureUrl
                    ? `${import.meta.env.VITE_IMAGE_BASE_URL}` +
                      user.profilePictureUrl?.publicFileURL
                    : profileImage
                }
                alt=""
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </label>
          <input
            type="file"
            accept="image/*"
            id="profileImage"
            name="profileImage"
            multiple={false}
            style={{ display: "none" }}
            onChange={(e) => {
              if (e.target.files) {
                setImageFile(e.target.files[0]);
              }
            }}
          />
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
            <PhoneInput
              className="custom-phone "
              placeholder="Enter phone number"
              international
              countryCallingCodeEditable={false}
              style={{
                marginTop: "12px",
              }}
              defaultCountry="RU"
              value={phoneNumber?.toString()}
              onChange={setPhoneNumber}
            />
          </Form.Item>
          <div className="flex justify-end">
            <Button
              disabled={isLoading}
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
