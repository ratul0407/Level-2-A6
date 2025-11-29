import { baseApi } from "@/redux/baseApi";

export const hubsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHubs: builder.query({
      query: () => ({
        url: "/hubs",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetHubsQuery } = hubsApi;
