import { useGetAllParcelsQuery } from "@/redux/features/parcel/parcel.api";
import DataTable from "./AllParcels/DataTable";
import { columns } from "./AllParcels/Columns";
import { useState } from "react";
import { format } from "date-fns";
import Loading from "@/components/ui/Loading/Loading";
import { Input } from "@/components/ui/input";
import { useDebounce } from "use-debounce";
const AllParcels = () => {
  const [page, setPageChange] = useState(1);
  const [sorting, setSorting] = useState();
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);

  console.log(search);
  const { data, isLoading, isError } = useGetAllParcelsQuery({
    page,
    sort: sorting?.[0].desc ? "weight" : "-weight",
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
  console.log(isLoading);
  return (
    <div className="space-y-12">
      <div>
        <h1 className="font-bold text-3xl">All Parcels</h1>
      </div>

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
          columns={columns}
          data={parcels}
          page={data?.data?.meta?.page}
          totalPage={data?.data?.meta?.totalPage}
          onPageChange={setPageChange}
          sorting={sorting}
          setSorting={setSorting}
        />
      )}
    </div>
  );
};

export default AllParcels;
