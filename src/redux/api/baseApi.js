import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// "http://192.168.10.35:8000/api"

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      // console.log("token----=-=-=-==-=-=", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("X-Custom-Header", "foobar");
      return headers;
    },
  }),
  tagTypes: ["auth", "user", "setting"],
  endpoints: () => ({}),
});
