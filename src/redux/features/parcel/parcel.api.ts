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

    //delivery routes
    updateParcelStatus: builder.mutation({
      query: ({ data, tracking_id }) => ({
        url: `/parcel/status/${tracking_id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["PARCEL"],
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
    //confirm delivery route for receiver
    confirmDelivery: builder.mutation({
      query: ({ tracking_id, data }) => ({
        url: `/parcel/confirm-delivery/${tracking_id}`,
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
  useUpdateParcelStatusMutation,
  useConfirmDeliveryMutation,
} = parcelApi;
