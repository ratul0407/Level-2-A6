import { columns } from "@/components/modules/Admin/Parcel/Columns";
import DataTable from "@/components/modules/Shared/DataTable";
import { Status } from "@/constants/statusFlow";
import { useGetAllParcelsQuery } from "@/redux/features/parcel/parcel.api";
import { format } from "date-fns";
import { useState } from "react";

const AllCancelledParcels = () => {
  const [page, setPageChange] = useState(1);
  const { data, isLoading, isError } = useGetAllParcelsQuery({
    currentStatus: Status.CANCELLED,
  });
  const parcels = data?.data?.data?.map((parcel: any) => ({
    ...parcel,
    sender: parcel?.sender?.email ?? "",
    receiver: parcel?.receiver?.email ?? "",
    deliveryDriver: parcel?.deliveryDriver?.email ?? "",
    createdAt: format(new Date(parcel?.createdAt), "dd-MMM-yyyy"),
  }));
  console.log(data);
  return (
    <div>
      {!isLoading && !isError && (
        <DataTable
          columns={columns}
          data={parcels}
          page={data?.data?.meta?.page}
          totalPage={data?.data?.meta?.totalPage}
          onPageChange={setPageChange}
        />
      )}
    </div>
  );
};

export default AllCancelledParcels;
