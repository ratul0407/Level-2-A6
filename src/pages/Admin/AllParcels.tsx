import { useGetAllParcelsQuery } from "@/redux/features/parcel/parcel.api";
import DataTable from "./AllParcels/DataTable";
import { columns } from "./AllParcels/Columns";
import { useState } from "react";

const AllParcels = () => {
  const [page, setPageChange] = useState(1);
  const { data, isLoading } = useGetAllParcelsQuery(undefined);
  console.log(data?.data?.data);
  const parcels = data?.data?.data?.map((parcel: any) => ({
    ...parcel,
    sender: parcel?.sender?.name ?? "",
    receiver: parcel?.receiver?.name ?? "",
    deliveryDriver: parcel?.deliveryDriver?.name ?? "",
  }));

  console.log(data);
  console.log(parcels);
  return (
    <div>
      <h1>AllParcels</h1>
      {!isLoading && (
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

export default AllParcels;
