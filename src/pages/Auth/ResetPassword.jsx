import React from "react";
import { Button, Form, Input, Checkbox } from "antd";
import AuthLogo from "../../assets/images/auth-logo.png";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CustomSpinner } from "../../Components/Spinners";
import { useChangePasswordMutation } from "../../redux/features/Auth/authApi";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [mutation, { isLoading }] = useChangePasswordMutation();
  const onFinish = async (values) => {
    try {
      const response = await mutation({
        body: {
          password: values.password,
        },
      });
      if (response?.data?.statusCode == 200) {
        localStorage.setItem("verify-token", null);
        navigate("/auth");
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1000,
        });
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
        title: "Failed !!",
        text: "Something went wrong.",
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
        <div className=" w-[451px] bg-[#FFF3E6] py-[64px] px-[44px] rounded-2xl space-y-7">
          <div className="flex justify-center items-center gap-1">
            <FaArrowLeft size={20} onClick={() => navigate(-1)}/>
            <h5 className="text-2xl font-medium">Reset Password</h5>
          </div>
          <p className="text-center">
            Your password must be 8-10 character long.
          </p>
          <Form
            name="basic"
            layout="vertical"
            className="w-full space-y-[24px]"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              className="text-base font-medium "
              name="password"
              rules={[
                {
                  min: 6,
                  message: "Password be minimum 6 character's!",
                },
                {
                  required: true,
                  message: "Please Input New Password!",
                },
              ]}
            >
              <Input.Password
                className="h-[56px] border rounded-lg border-[#FFAD54] bg-[#FFF3E6]"
                placeholder="Set your password"
              />
            </Form.Item>
            <Form.Item
              className="text-base font-medium "
              name="rePassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please Re-Input Your New Password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
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
                className="h-[56px] border rounded-lg border-[#FFAD54] bg-[#FFF3E6]"
                placeholder="Re-enter your password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                disabled={isLoading}
                type="primary"
                htmlType="submit"
                className="w-full bg-[#FF8400] h-[59px] text-base font-medium"
              >
                Reset Password {isLoading && <CustomSpinner />}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
