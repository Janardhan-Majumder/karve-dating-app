import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import DashboardHeader from "../../Components/DashboardHeader";

const Main = () => {
  return (
    <div className="w-full flex min-h-screen gap-5 px-5 relative">
      <div className="w-[320px]">
        <Sidebar className="w-[315px] bg-[#FFF3E6] h-[93%] fixed my-5" />
      </div>
      <div className="flex-1 space-y-5 relative">
        <div className="h-[125px]">
          <DashboardHeader className="w-[970px] grid grid-cols-12 gap-5 py-5 z-10 bg-white fixed" />
        </div>
        <div className="py-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
