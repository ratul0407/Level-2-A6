import { baseApi } from "@/redux/baseApi";

export const statsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getParcelStats: builder.query({
      query: () => ({
        url: "/stats/parcels",
        method: "Get",
      }),
    }),
  }),
});

export const { useGetParcelStatsQuery } = statsApi;
