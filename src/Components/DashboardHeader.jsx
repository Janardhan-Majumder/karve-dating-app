import React from "react";
import dashboardLaptop from "../assets/images/dashboard-laptop.png";
import profileImage from "../assets/images/demo-profile.jpg";
import { useSelector } from "react-redux";

const DashboardHeader = ({ className }) => {
  const { user } = useSelector((state) => state.auth);
  // console.log(user);
  return (
    <div className={className}>
      <div className="col-span-8 bg-[#FFF3E6] flex justify-between items-center px-8 rounded">
        <div className="space-y-3">
          <h3 className="text-3xl font-semibold text-[#FF8400]">
            {`Welcome🌹!!`}
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
        <div className=" w-16 h-16 overflow-hidden">
          <img
            src={
              user?.profilePictureUrl
                ? `${import.meta.env.VITE_IMAGE_BASE_URL}` +
                  user.profilePictureUrl?.publicFileURL
                : profileImage
            }
            alt=""
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="space-y-3 text-right">
          <h3 className="text-2xl font-medium text-[#FF8400]">{user.name}</h3>
          <p className="text-sm text-[#555555]">{"Admin"}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
