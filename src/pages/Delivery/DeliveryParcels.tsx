import { useGetMyParcelsQuery } from "@/redux/features/parcel/parcel.api";

import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import Loading from "@/components/ui/Loading/Loading";
import DataTable from "@/components/modules/Shared/DataTable";
import { driverColumns } from "@/components/modules/Driver/DriverColumns";
const DeliveryParcels = () => {
  const [page, setPageChange] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  const { data, isLoading, isError } = useGetMyParcelsQuery({
    page,
    searchTerm: debouncedSearch || undefined,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parcels = data?.data?.data?.map((parcel: any) => ({
    ...parcel,
    sender: parcel?.sender?.email ?? "",
    receiver: parcel?.receiver?.email ?? "",
    deliveryDriver: parcel?.deliveryDriver?.email ?? "",
    createdAt: format(new Date(parcel?.createdAt), "dd-MMM-yyyy"),
  }));
  console.log(parcels);
  return (
    <div>
      <div></div>
      {/* <MyParcels /> */}
      <Input
        placeholder="Search by Tracking ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />
      {isError && (
        <div className="flex items-center justify-center w-full min-h-[60vh]">
          <h3 className="text-muted-foreground text-3xl">
            Something went wrong please try again later!
          </h3>
        </div>
      )}
      {isLoading && <Loading />}
      {!isLoading && !isError && (
        <DataTable
          columns={driverColumns}
          data={parcels}
          page={data?.data?.meta?.page}
          totalPage={data?.data?.meta?.totalPage}
          onPageChange={setPageChange}
        />
      )}
    </div>
  );
};

export default DeliveryParcels;
