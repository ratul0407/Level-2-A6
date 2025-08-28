/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetMyParcelsQuery } from "@/redux/features/parcel/parcel.api";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import Loading from "@/components/ui/Loading/Loading";
import DataTable from "@/components/modules/Shared/DataTable";
import { receiverColumns } from "@/components/modules/Receiver/ReceiverColumns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ReceiverParcels = () => {
  const [page, setPageChange] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  const [status, setStatus] = useState({});

  const { data, isLoading, isError } = useGetMyParcelsQuery({
    page,
    searchTerm: debouncedSearch || undefined,
    currentStatus: status,
  });
  const parcels = data?.data?.data?.map((parcel: any) => ({
    ...parcel,
    sender: parcel?.sender?.email ?? "",
    receiver: parcel?.receiver?.email ?? "",
    deliveryDriver: parcel?.deliveryDriver?.email ?? "",
    createdAt: format(new Date(parcel?.createdAt), "dd-MMM-yyyy"),
  }));

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold">My Parcels</h1>
      </div>
      <div className="flex justify-between ">
        <Input
          placeholder="Search by Tracking ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Select onValueChange={(e) => setStatus(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="DELIVERED">View Delivery History</SelectItem>
            <SelectItem value="NOT_DELIVERED">In Coming</SelectItem>
            <SelectItem value="ALL">All</SelectItem>
          </SelectContent>
        </Select>
      </div>

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
          columns={receiverColumns}
          data={parcels}
          page={data?.data?.meta?.page}
          totalPage={data?.data?.meta?.totalPage}
          onPageChange={setPageChange}
        />
      )}
    </div>
  );
};

export default ReceiverParcels;
