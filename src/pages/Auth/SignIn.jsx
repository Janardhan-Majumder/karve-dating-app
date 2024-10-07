import React from "react";
import AuthLogo from "../../assets/images/auth-logo.png";
import { Button, Checkbox, Form, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { usePostLoginMutation } from "../../redux/features/Auth/authApi";
import Swal from "sweetalert2";
import { setUser } from "../../redux/features/Auth/authSlice";
import { CustomSpinner } from "../../Components/Spinners";

const SignIn = () => {
  const navigate = useNavigate();
  const [setData, { isLoading }] = usePostLoginMutation();
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state || "/";
  const onFinish = async (values) => {
    try {
      const response = await setData(values);
      if (response?.data?.statusCode == 200) {
        if (response?.data?.data?.user?.role === "ADMIN") {
          localStorage.setItem("token", response?.data?.data?.token);
          dispatch(
            setUser({
              user: response?.data?.data?.user,
              token: response?.data?.data?.token,
            })
          );
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: response?.data?.message,
            showConfirmButton: false,
            timer: 1000,
          });
          navigate(from, { replace: true });
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Failed!!",
            text: "You are not a Admin",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title:
            response?.data?.message ||
            response?.error?.data?.message ||
            "Login Failed!!",
          text: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed!!",
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
        <div className=" w-[451px] bg-[#FFF3E6] py-[64px] px-[44px] rounded-2xl">
          <h5 className="text-3xl font-medium text-center mb-[24px]">
            Sign In
          </h5>
          <Form
            name="basic"
            layout="vertical"
            className="w-full space-y-[24px]"
            onFinish={onFinish}
            requiredMark={false}
            // autoComplete="off"
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

            <Form.Item
              className="text-base font-medium "
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please Input Your Password!",
                },
              ]}
            >
              <Input.Password
                className="h-[56px] border rounded-lg border-[#FFAD54] bg-[#FFF3E6]"
                placeholder="Enter your password"
              />
            </Form.Item>
            <div className="flex justify-between items-center">
              <Checkbox className="text-base font-medium text-[#FF8400]">
                Remember me
              </Checkbox>
              <Button
                htmlType="button"
                onClick={() => navigate("/auth/forget-password")}
                type="link"
                className="text-base font-medium text-[#FF8400]"
              >
                Forget password?
              </Button>
            </div>
            <Form.Item>
              <Button
                disabled={isLoading}
                type="primary"
                htmlType="submit"
                className="w-full bg-[#FF8400] h-[59px] text-base font-medium flex items-center justify-center gap-2"
              >
                Sign In {isLoading && <CustomSpinner />}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
