import React, { createElement } from "react";
import AuthLogo from "../assets/images/auth-logo.png";
import { LuUsers2 } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineSettings, MdSpaceDashboard } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/Auth/authSlice";

const Sidebar = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.setItem("token", null);
    navigate("/auth");
  };
  const sidebarItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: MdSpaceDashboard,
    },
    {
      name: "Users",
      path: "/users",
      icon: LuUsers2,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: FaRegUser,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: MdOutlineSettings,
    },
  ];
  return (
    <div className={className + " px-10"}>
      <div className="py-8">
        <img src={AuthLogo} alt="" className="w-[90%] mx-auto" />
      </div>
      <div className="flex flex-col gap-y-3 py-8">
        {sidebarItems.map(({ name, icon, path }, indx) => (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? "bg-[#FF8400] text-white rounded text-[20px]"
                : "hover:bg-[#FF8400] hover:text-white rounded text-[20px]" +
                  " transition-all"
            }
            key={indx}
          >
            <button
              type="text"
              className="py-2 px-4 w-full justify-start flex items-center gap-3"
            >
              <div>{createElement(icon, { size: "20" })}</div>
              <span> {name}</span>
            </button>
          </NavLink>
        ))}
        <button
          onClick={handleLogout}
          type="text"
          className="py-2 px-4 w-full justify-start flex items-center gap-3 text-[#EB5757] hover:bg-[#FF8400] hover:text-white rounded text-[20px] outline-none"
        >
          <div>{createElement(IoLogOutOutline, { size: "20" })}</div>
          <span> Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
