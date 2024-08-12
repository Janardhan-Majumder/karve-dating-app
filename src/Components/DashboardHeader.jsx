import React from "react";
import dashboardLaptop from "../assets/images/dashboard-laptop.png";
import profileImage from "../assets/images/profile-img.png";

const DashboardHeader = ({className}) => {
  return (
    <div className={className}>
            <div className="col-span-8 bg-[#FFF3E6] flex justify-between items-center px-8 rounded">
              <div className="space-y-3">
                <h3 className="text-3xl font-semibold text-[#FF8400]">
                  {"Welcome, Frank"}
                </h3>
                <p className="text-[18px] text-[#555555]">
                  {"Have a nice day at work"}
                </p>
              </div>
              <div>
                <img src={dashboardLaptop} alt="" className="h-[120px]" />
              </div>
            </div>
            <div className="col-span-4 bg-[#FFF3E6] flex justify-between items-center px-4 rounded">
              <div>
                <img src={profileImage} alt="" className="rounded-full" />
              </div>
              <div className="space-y-3 text-right">
                <h3 className="text-2xl font-medium text-[#FF8400]">
                  {"Jane Cooper"}
                </h3>
                <p className="text-sm text-[#555555]">{"Admin"}</p>
              </div>
            </div>
          </div>
  );
};

export default DashboardHeader;
