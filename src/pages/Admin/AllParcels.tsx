import { useGetAllParcelsQuery } from "@/redux/features/parcel/parcel.api";
import DataTable from "./AllParcels/DataTable";
import { columns } from "./AllParcels/Columns";
import { useState } from "react";
import { format } from "date-fns";

const AllParcels = () => {
  const [page, setPageChange] = useState(1);
  console.log(page);
  const { data, isLoading } = useGetAllParcelsQuery({ page });
  console.log(data?.data?.data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parcels = data?.data?.data?.map((parcel: any) => ({
    ...parcel,
    sender: parcel?.sender?.email ?? "",
    receiver: parcel?.receiver?.email ?? "",
    deliveryDriver: parcel?.deliveryDriver?.email ?? "",
    createdAt: format(new Date(parcel?.createdAt), "dd-MMM-yyyy"),
  }));

  console.log(data);
  console.log(parcels);
  return (
    <div className="space-y-12">
      <div>
        <h1 className="font-bold text-3xl">All Parcels</h1>
      </div>
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
