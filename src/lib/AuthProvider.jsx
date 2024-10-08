import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetUserByTokenQuery } from "../redux/features/Auth/authApi";
import { setUser } from "../redux/features/Auth/authSlice";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUserByTokenQuery();
  // console.log({ data, isLoading })
  useEffect(() => {
    if (!isLoading) {
      dispatch(
        setUser({
          user: data?.data || null,
        })
      );
    }
  }, [data, isLoading]);
  return children;
};

export default AuthProvider;
