/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetMyParcelsQuery } from "@/redux/features/parcel/parcel.api";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import Loading from "@/components/ui/Loading/Loading";
import DataTable from "@/components/modules/Shared/DataTable";
import { senderColumns } from "@/components/modules/Sender/SenderColumns";

const SenderParcels = () => {
  const [page, setPageChange] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  const { data, isLoading, isError } = useGetMyParcelsQuery({
    page,
    searchTerm: debouncedSearch || undefined,
  });
  const parcels = data?.data?.data?.map((parcel: any) => ({
    ...parcel,
    sender: parcel?.sender?.email ?? "",
    receiver: parcel?.receiver?.email ?? "",
    deliveryDriver: parcel?.deliveryDriver?.email ?? "",
    createdAt: format(new Date(parcel?.createdAt), "dd-MMM-yyyy"),
  }));
  return (
    <div className="space-y-12 bg-white shado-sm rounded-xl p-10">
      <DashboardGrid />
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
      </div>

      {isError && (
        <div className="flex items-center justify-center w-fit min-h-[60vh]">
          <h3 className="text-muted-foreground text-3xl">
            Something went wrong please try again later!
          </h3>
        </div>
      )}
      {isLoading && <Loading />}
      {!isLoading && !isError && (
        <DataTable
          columns={senderColumns}
          data={parcels}
          page={data?.data?.meta?.page}
          totalPage={data?.data?.meta?.totalPage}
          onPageChange={setPageChange}
        />
      )}
    </div>
  );
};

import { ArrowUpRight } from "lucide-react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function DashboardGrid() {
  const barData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Spending",
        data: [30, 40, 60, 75, 40, 50, 65],
        backgroundColor: "#fff",
        borderRadius: 8,
        barThickness: 25,
      },
    ],
  };

  const barOptions = {
    responsive: true,

    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { display: false },
        ticks: { color: "#fff" },
      },
      x: {
        grid: { display: false },
        ticks: { color: "#fff" },
      },
    },
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p className="text-muted-foreground">Welcome to dashboard</p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-1 md:col-span-2">
          {/* Card */}
          <DashboardCard
            title="Balance"
            amount="$60,900"
            percent="74% then last month"
            color="bg-orange-50"
          />

          <DashboardCard
            title="Spending"
            amount="$1,200"
            percent="3.4% then last month"
            color="bg-green-50"
          />

          <DashboardCard
            title="Portfolio"
            amount="$142,390"
            percent="3.1% then last month"
            color="bg-purple-50"
          />

          <DashboardCard
            title="Investment"
            amount="$32,390"
            percent="11.4% then last month"
            color="bg-blue-50"
          />
        </div>

        {/* Right side chart */}
        <div className="rounded-2xl p-6 bg-primary text-white shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-semibold">Spending</h2>
              <p className="text-2xl font-bold">$1,200</p>
            </div>

            <button className="bg-white/20 px-3 py-1 rounded-lg text-sm">
              12 Days
            </button>
          </div>

          <Bar data={barData} options={barOptions} height={150} />
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, amount, percent, color }) {
  return (
    <div
      className={`rounded-2xl p-5 shadow-sm flex flex-col justify-between ${color}`}
    >
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">{title}</p>
        <ArrowUpRight className="w-4 h-4 text-gray-600" />
      </div>
      <p className="text-2xl font-bold mt-2">{amount}</p>
      <p className="text-xs text-gray-500 mt-1">{percent}</p>
    </div>
  );
}

export default SenderParcels;
