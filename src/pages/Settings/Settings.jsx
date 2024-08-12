import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { LiaArrowLeftSolid } from "react-icons/lia";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [form] = Form.useForm();
  const handleNavigate = (value) => {
    if (value === "change-password") {
      setModalTitle("Change Password");
      setIsModalOpen(true);
    } else {
      navigate(`/settings/${value}`);
    }
  };
  const handleChangePassword = (values) => {
    console.log(values);
  };

  const handleForgetPassword = (values) => {
    setModalTitle("Verify Email");
    console.log(values);
  };
  const handleVerifyOtp = (values) => {
    console.log(values);
    setModalTitle("Reset Password");
  };
  const settingsItem = [
    {
      title: "Change Password",
      path: "change-password",
    },

    {
      title: "Privacy Policy",
      path: "privacy-policy",
    },
    {
      title: "Terms & Conditions",
      path: "terms-conditions",
    },
    {
      title: "About us",
      path: "about-us",
    },
  ];

  return (
    <div className="w-full pt-5 min-h-screen">
      {settingsItem.map((setting, index) => (
        <div
          key={index}
          className="h-[64px] bg-[#FFF3E6] hover:bg-[#ffece6] py-4 mb-2 px-4 text-sm rounded-lg bg-primary flex items-center justify-between cursor-pointer text-[#222222]"
          onClick={() => handleNavigate(setting.path)}
        >
          <h2>{setting.title}</h2>
          <FaAngleRight size={18} />
        </div>
      ))}
      <Modal
        title={null}
        open={isModalOpen}
        closeIcon={null}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        style={{
          maxWidth: 441,
        }}
        // bodyProps={{
        //   style: {
        //     backgroundColor: "red",
        //     margin: "0px"
        //   },
        // }}
        footer={[]}
      >
        {modalTitle === "Change Password" && (
          <div className="px-[44px] pb-[44px]">
            <div className="flex justify-center items-center gap-1.5 pt-[44px]">
              <button onClick={() => setIsModalOpen(false)}>
                <LiaArrowLeftSolid size={26} />
              </button>
              <h6 className="text-2xl font-medium">{modalTitle}</h6>
            </div>
            <p className="text-[16px] my-[24px]">
              Your password must be 8-10 character long.
            </p>
            <Form
              form={form}
              name="dependencies"
              autoComplete="off"
              // style={{
              //   maxWidth: 600,
              //   border: "4px solid red",
              // }}
              layout="vertical"
              className="space-y-6 fit-content object-contain"
              onFinish={handleChangePassword}
            >
              <Form.Item
                name="currentPassword"
                rules={[
                  {
                    required: true,
                    message: "Please Input Your Password!",
                  },
                ]}
              >
                <Input.Password
                  style={{
                    backgroundColor: "#FFF3E6",
                  }}
                  placeholder="Current Password"
                  className="p-4 rounded-lg h-[56px]  placeholder:text-[#999999]"
                />
              </Form.Item>
              <Form.Item
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Please Input Your Password!",
                  },
                ]}
              >
                <Input.Password
                  style={{
                    backgroundColor: "#FFF3E6",
                  }}
                  placeholder="Set your password"
                  className="p-4 rounded-lg h-[56px]  placeholder:text-[#999999]"
                />
              </Form.Item>
              <Form.Item
                name="reenterPassword"
                dependencies={["newPassword"]}
                rules={[
                  {
                    required: true,
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  style={{
                    backgroundColor: "#FFF3E6",
                  }}
                  placeholder="Re-enter your password"
                  className="p-4 rounded-lg h-[56px] text-[#999999]"
                />
              </Form.Item>
              <p className="text-center">
                <Button
                  style={{
                    color: "#FF8400",
                  }}
                  type="link"
                  className="text-[16px]"
                  onClick={() => setModalTitle("Forget Password")}
                  // onClick={() => navigate("/auth/forget-password")}
                >
                  Forget Password?
                </Button>
              </p>
              <Form.Item>
                <Button
                  style={{
                    backgroundColor: "#FF8400",
                    color: "#fff",
                  }}
                  htmlType="submit"
                  className="w-full h-[56px]  placeholder:text-[#999999] text-[18px] font-medium"
                >
                  Change Password
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
        {modalTitle === "Forget Password" && (
          <div className="px-[44px] pb-[44px]">
            <div className="flex justify-center items-center gap-1.5 pt-[44px]">
              <button onClick={() => setModalTitle("Change Password")}>
                <LiaArrowLeftSolid size={26} />
              </button>
              <h6 className="text-2xl font-medium">{modalTitle}</h6>
            </div>
            <p className="text-[16px] my-[24px] text-center">
              Please enter your email address to reset your password.
            </p>
            <Form
              form={form}
              onFinish={handleForgetPassword}
              autoComplete="off"
              layout="vertical"
              className="space-y-8 fit-content object-contain"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  style={{
                    backgroundColor: "#FFF3E6",
                  }}
                  placeholder="Enter your email"
                  className="p-4 rounded-lg h-[56px] placeholder:text-[#999999]"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{
                    backgroundColor: "#FF8400",
                    color: "#fff",
                    height: "56 px",
                  }}
                  htmlType="submit"
                  className="w-full h-[56px] text-[18px] font-medium"
                >
                  Sent OTP
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
        {modalTitle === "Verify Email" && (
          <div className="px-[44px] pb-[44px]">
            <div className="flex justify-center items-center gap-1.5 pt-[44px]">
              <button onClick={() => setModalTitle("Forget Password")}>
                <LiaArrowLeftSolid size={26} />
              </button>
              <h6 className="text-2xl font-medium">{modalTitle}</h6>
            </div>
            <p className="text-[16px] my-[24px] text-center">
              Please enter the otp we have sent you in your email.
            </p>
            <Form
              form={form}
              autoComplete="off"
              layout="vertical"
              className="space-y-8 fit-content object-contain"
              onFinish={handleVerifyOtp}
            >
              <div className="">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  inputStyle={{
                    height: "55px",
                    width: "40px",
                    margin: "auto",
                    background: "#FFF3E6",
                    border: "1px solid #FFAD54",
                    marginRight: "4px",
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
                  style={{
                    backgroundColor: "#FF8400",
                    color: "#fff",
                    height: "56 px",
                  }}
                  htmlType="submit"
                  className="w-full h-[56px] text-[18px] font-medium"
                >
                  Verify Email
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
        {modalTitle === "Reset Password" && (
          <div className="px-[44px] pb-[44px]">
            <div className="flex justify-center items-center gap-1.5 pt-[44px]">
              <button onClick={() => setModalTitle("Verify Email")}>
                <LiaArrowLeftSolid size={26} />
              </button>
              <h6 className="text-2xl font-medium">{modalTitle}</h6>
            </div>
            <p className="text-[16px] my-[24px]">
              Your password must be 8-10 character long.
            </p>
            <Form
              form={form}
              name="dependencies"
              autoComplete="off"
              // style={{
              //   maxWidth: 600,
              //   border: "4px solid red",
              // }}
              layout="vertical"
              className="space-y-6 fit-content object-contain"
              onFinish={handleChangePassword}
            >
              <Form.Item
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Please Input Your Password!",
                  },
                ]}
              >
                <Input.Password
                  style={{
                    backgroundColor: "#FFF3E6",
                  }}
                  placeholder="Set your password"
                  className="p-4 rounded-lg h-[56px]  placeholder:text-[#999999]"
                />
              </Form.Item>
              <Form.Item
                name="reenterPassword"
                dependencies={["newPassword"]}
                rules={[
                  {
                    required: true,
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  style={{
                    backgroundColor: "#FFF3E6",
                  }}
                  placeholder="Re-enter your password"
                  className="p-4 rounded-lg h-[56px] text-[#999999]"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{
                    backgroundColor: "#FF8400",
                    color: "#fff",
                  }}
                  htmlType="submit"
                  className="w-full h-[56px]  placeholder:text-[#999999] text-[18px] font-medium"
                >
                  Reset Password
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Settings;