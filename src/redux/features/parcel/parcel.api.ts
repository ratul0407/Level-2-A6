import { baseApi } from "@/redux/baseApi";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createParcel: builder.mutation({
      query: (parcelInfo) => ({
        url: "/parcel/create",
        method: "POST",
        data: parcelInfo,
      }),
      invalidatesTags: ["PARCEL"],
    }),
    getMyParcels: builder.query({
      query: (params) => ({
        url: "/parcel/my-parcels",
        method: "GET",
        params,
      }),
      providesTags: ["PARCEL"],
    }),

    // admin routes
    getAllParcels: builder.query({
      query: (params) => ({
        url: "/parcel/all-parcels",
        method: "GET",
        params,
      }),
      providesTags: ["PARCEL"],
    }),
    cancelParcels: builder.mutation({
      query: ({ tracking_id, data }) => ({
        url: `/parcel/cancel/${tracking_id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["PARCEL"],
    }),
    approveParcel: builder.mutation({
      query: ({ tracking_id, data }) => ({
        url: `/parcel/approve/${tracking_id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["PARCEL"],
    }),
  }),
});

export const {
  useCreateParcelMutation,
  useGetMyParcelsQuery,
  useGetAllParcelsQuery,
  useCancelParcelsMutation,
  useApproveParcelMutation,
} = parcelApi;
