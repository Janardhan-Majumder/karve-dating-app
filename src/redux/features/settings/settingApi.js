import { baseApi } from "../../api/baseApi";

const settingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTerms: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "/terms-and-condition",
          method: "GET",
          params,
        };
      },
      providesTags: ["terms"],
    }),
    updateTerms: builder.mutation({
      query: (body) => ({
        url: "/terms-and-condition",
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["terms"],
    }),
    getPrivacy: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "/privacy-policy",
          method: "GET",
          params,
        };
      },
      providesTags: ["privacy"],
    }),
    updatePrivacy: builder.mutation({
      query: (body) => ({
        url: "/privacy-policy",
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["privacy"],
    }),
    getAbouts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "/about-us",
          method: "GET",
          params,
        };
      },
      providesTags: ["about"],
    }),
    updateAbouts: builder.mutation({
      query: (body) => ({
        url: "/about-us",
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["about"],
    }),
  }),
});

export const {
  useGetTermsQuery,
  useUpdateTermsMutation,
  useGetPrivacyQuery,
  useUpdatePrivacyMutation,
  useGetAboutsQuery,
  useUpdateAboutsMutation,
} = settingApi;
