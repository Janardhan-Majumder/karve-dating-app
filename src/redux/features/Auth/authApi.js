import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserByToken: builder.query({
      query: (data) => {
        return {
          url: `users`,
          method: "GET",
        };
      },
      providesTags: ["auth"],
    }),
    postLogin: builder.mutation({
      query: (data) => {
        return {
          url: `users/login`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["auth"],
    }),
    changePasswordByOldPass: builder.mutation({
      query: (body) => {
        // const token = localStorage.getItem("verify-token");
        // console.log(token)
        return {
          url: `users/forgot-password-change`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["auth"],
    }),
    changePassword: builder.mutation({
      query: ({ id, body }) => {
        const token = localStorage.getItem("verify-token");
        // console.log(token)
        return {
          url: `users/forgot-password-change`,
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body,
        };
      },
      invalidatesTags: ["auth"],
    }),
    forgotPassword: builder.mutation({
      query: (data) => {
        return {
          url: `users/forgot-password`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["auth"],
    }),
    verifyEmail: builder.mutation({
      query: (data) => {
        return {
          url: `users/verify-code`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useGetUserByTokenQuery,
  useChangePasswordByOldPassMutation,
  useChangePasswordMutation,
  usePostLoginMutation,
  useForgotPasswordMutation,
  useVerifyEmailMutation,
} = authApi;
