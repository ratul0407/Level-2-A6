import { useGetAllParcelsQuery } from "@/redux/features/parcel/parcel.api";
import DataTable from "./AllParcels/DataTable";
import { columns } from "./AllParcels/Columns";
import { useState } from "react";
import { format } from "date-fns";
import Loading from "@/components/ui/Loading/Loading";
import { Input } from "@/components/ui/input";
import { useDebounce } from "use-debounce";
import { Package, PackagePlus, PackageX } from "lucide-react";
import { useGetParcelStatsQuery } from "@/redux/features/stats/stats.api";
import { UsersBarChart } from "@/components/modules/Admin/User/UsersBarChart";
const AllParcels = () => {
  const [page, setPageChange] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  console.log(search);
  const { data: parcelStats, isLoading: parcelStatsLoading } =
    useGetParcelStatsQuery(undefined);

  console.log(parcelStats);
  const { data, isLoading, isError } = useGetAllParcelsQuery({
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
  const statsBox = {
    "Parcels Cancelled": {
      value: parcelStats?.data?.totalCancelledParcels,
      icon: <Package />,
    },
    "Parcels Delivered": {
      value: parcelStats?.data?.totalDeliveredParcels,
      icon: <PackageX />,
    },
    "Parcel created 30 Days": {
      value: parcelStats?.data?.totalParcelCreatedInLast30Days,
      icon: <PackagePlus />,
    },
    "Parcel created 7 Days": {
      value: parcelStats?.data?.totalParcelCreatedInLast7Days,
      icon: <PackagePlus />,
    },
    "Total Parcels": {
      value: parcelStats?.data?.totalParcels,
      icon: <Package />,
    },
  };
  const barData = parcelStats?.data?.totalParcelDeliveredInLast30Days?.map(
    (item: { _id: string; count: number }) => ({
      date: item._id,
      users: item.count,
    })
  );
  console.log(statsBox);
  if (isLoading || parcelStatsLoading) {
    return (
      <div className="grid justify-center items-center min-h-[70vh]">
        <Loading />;
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div>
        <h1 className="font-bold text-3xl">All Parcels</h1>
      </div>
      {!parcelStatsLoading && (
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Object.entries(statsBox)?.map(([key, { value, icon }]) => (
            <div
              key={key}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-2 flex-col ">
                <div className="items-center flex justify-center gap-3">
                  <div className="p-4 rounded-full bg-gradient-to-tr from-primary to-ring text-white flex items-center justify-center">
                    {icon}
                  </div>
                  <p className="text-gray-900 font-extrabold text-3xl md:text-4xl">
                    {value}
                  </p>
                </div>
                <div className="block">
                  <p className="text-gray-500 uppercase tracking-wide text-sm">
                    {key}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <UsersBarChart data={barData} />
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

export default AllParcels;
