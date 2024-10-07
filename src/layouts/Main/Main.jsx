import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import DashboardHeader from "../../Components/DashboardHeader";

const Main = () => {

  return (
    <div className="w-full flex min-h-screen gap-5 px-5 relative">
      <div className="w-[320px]">
        <Sidebar className="w-[315px] bg-[#FFF3E6] h-[93%] fixed my-5" />
      </div>
      <div className="flex-1 space-y-5">
        <div className="sticky left-0 top-0 z-10">
          <DashboardHeader className="w-full grid grid-cols-12 gap-5 py-5 bg-white" />
        </div>
        <div className="pb-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
