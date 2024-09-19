import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
    changePassword: builder.mutation({
      query: ({ id, body }) => ({
        url: `users/forgot-password-change`,
        method: "POST",
        body,
      }),
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
  useChangePasswordMutation,
  usePostLoginMutation,
  useForgotPasswordMutation,
  useVerifyEmailMutation,
} = authApi;
