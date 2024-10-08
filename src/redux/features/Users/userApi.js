import { baseApi } from "../../api/baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getUserByToken: builder.query({
    //   query: () => {
    //     return {
    //       url: "/auth/session",
    //       method: "GET",
    //     };
    //   },
    //   providesTags: ["users"],
    // }),
    // getAdminNotification: builder.query({
    //   query: ({ id, args }) => {
    //     const params = new URLSearchParams();
    //     if (args) {
    //       args.forEach((item) => {
    //         params.append(item.name, item.value);
    //       });
    //     }
    //     return {
    //       url: `/notifications/${id}`,
    //       method: "GET",
    //       params,
    //     };
    //   },
    //   providesTags: ["notification"],
    // }),
    getUserStatus: builder.query({
      query: () => ({
        url: `/users/count`,
      }),
      providesTags: ["user"],
    }),
    getAllUser: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "/users/all",
          method: "GET",
          params,
        };
      },
      providesTags: ["user"],
    }),
    upadateProfile: builder.mutation({
      query: ({ id, body }) => ({
        url: `users/profile/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["user", "auth"],
    }),
  }),
});

export const {
  useGetUserStatusQuery,
  useGetAllUserQuery,
  useUpadateProfileMutation,
} = usersApi;
