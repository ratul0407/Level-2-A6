import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserStats: builder.query({
      query: () => ({
        url: "/stats/users",
        method: "Get",
      }),
    }),
  }),
});

export const { useGetUserStatsQuery } = userApi;
