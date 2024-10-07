import React from "react";
import { Grid } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div
        className={`h-screen w-full flex flex-col justify-center items-center`}
      >
        <Grid
          visible={true}
          height="70"
          width="70"
          color="#81649e"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
        <p className="mt-5 font-mono text-gray-500 text-center" >Please Wait <br /> Checking your Account</p>
      </div>
    );
  }
  if (user?.role === "ADMIN") {
    return children;
  }
  //   return <Navigate to="/auth" state={{ from: location }} replace />;
  // };
  return <Navigate state={location.pathname} to="/auth" />;
};

export default AdminRoutes;
