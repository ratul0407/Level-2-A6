import { baseApi } from "@/redux/baseApi";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createParcel: builder.mutation({
      query: (parcelInfo) => ({
        url: "/parcel/create",
        method: "POST",
        data: parcelInfo,
      }),
    }),
    getMyParcels: builder.query({
      query: () => ({
        url: "/parcel/my-parcels",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateParcelMutation, useGetMyParcelsQuery } = parcelApi;
