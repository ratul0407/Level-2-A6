import ChangeActivityModal from "@/components/modules/Admin/Parcel/ChangeActivityModal";
import Loading from "@/components/ui/Loading/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { userActivity } from "@/constants/userActivity";
import { cn } from "@/lib/utils";
import { useGetAllUsersQuery } from "@/redux/features/auth/auth.api";
import { useGetUserStatsQuery } from "@/redux/features/user/user.api";
import { UsersBarChart } from "@/components/modules/Admin/User/UsersBarChart";
import UsersByRolePie from "@/components/modules/Admin/User/UsersRoleByPie";

const AllUsers = () => {
  const { data, isLoading, isError } = useGetAllUsersQuery(undefined);
  const { data: userStatsData, isLoading: userStatsLoading } =
    useGetUserStatsQuery(undefined);
  console.log(userStatsData);
  const users = data?.data;
  console.log(users);

  const chartData = [
    { user: "Delivery Personnel", visitors: 275, fill: "var(--color-chrome)" },
    { user: "Sender", visitors: 200, fill: "var(--color-safari)" },
    { user: "Receiver", visitors: 187, fill: "var(--color-firefox)" },
    { user: "Admin", visitors: 173, fill: "var(--color-edge)" },
    { user: "Super Admin", visitors: 90, fill: "var(--color-other)" },
  ];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "var(--chart-1)",
    },
    safari: {
      label: "Safari",
      color: "var(--chart-2)",
    },
    firefox: {
      label: "Firefox",
      color: "var(--chart-3)",
    },
    edge: {
      label: "Edge",
      color: "var(--chart-4)",
    },
    other: {
      label: "Other",
      color: "var(--chart-5)",
    },
  } satisfies ChartConfig;

  const barData = userStatsData?.data?.usersCreatedOverTheLast30Days?.map(
    (item) => ({
      date: item._id,
      users: item.count,
    })
  );
  const pieData = userStatsData?.data?.usersByRole?.map((item) => ({
    role: item._id,
    value: item.count,
  }));
  return (
    <div className="space-y-12">
      <div>
        <h1 className="font-bold text-3xl">All Users</h1>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {!userStatsLoading && (
          <>
            <UsersBarChart data={barData} />
            <UsersByRolePie data={pieData} />
          </>
        )}
      </div>
      {isLoading && <Loading />}
      {isError && (
        <div className="flex items-center justify-center w-full min-h-[60vh]">
          <h3 className="text-muted-foreground text-3xl">
            Something went wrong please try again later!
          </h3>
        </div>
      )}
      {!isLoading && !isError && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Verified</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Parcels</TableHead>
              <TableHead>Active</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user?.name}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>{user?.isVerified ? "Yes" : "No"}</TableCell>
                <TableCell>{user?.role}</TableCell>
                <TableCell>{user?.parcels.length}</TableCell>
                <TableCell className="max-w-[100px]">
                  <div
                    className={cn(
                      "py-1 w-full rounded text-xs font-medium text-center",
                      user?.isActive === userActivity.active &&
                        "bg-green-100 text-green-800",
                      user?.isActive === userActivity.inActive &&
                        "bg-yellow-100 text-yellow-800",
                      user?.isActive === userActivity.blocked &&
                        "bg-red-100 text-red-800"
                    )}
                  >
                    {user?.isActive}
                  </div>
                </TableCell>
                <TableCell>
                  <ChangeActivityModal {...user} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default AllUsers;
