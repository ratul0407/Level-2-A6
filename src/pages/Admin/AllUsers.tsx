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

import { userActivity } from "@/constants/userActivity";
import { cn } from "@/lib/utils";
import { useGetAllUsersQuery } from "@/redux/features/auth/auth.api";
import { useGetUserStatsQuery } from "@/redux/features/user/user.api";
import { UsersBarChart } from "@/components/modules/Admin/User/UsersBarChart";
import UsersByRolePie from "@/components/modules/Admin/User/UsersRoleByPie";
import { IUser } from "@/types/response/user";
import { Package, PackagePlus, PackageX, Users } from "lucide-react";

const AllUsers = () => {
  const { data, isLoading, isError } = useGetAllUsersQuery(undefined);
  const { data: userStatsData, isLoading: userStatsLoading } =
    useGetUserStatsQuery(undefined);

  const users = data?.data;

  if (isLoading || userStatsLoading) {
    return (
      <div className="grid justify-center items-center min-h-[70vh]">
        <Loading />;
      </div>
    );
  }
  const barData = userStatsData?.data?.usersCreatedOverTheLast30Days?.map(
    (item: { _id: string; count: number }) => ({
      date: item._id,
      users: item.count,
    })
  );
  const pieData = userStatsData?.data?.usersByRole?.map(
    (item: { _id: string; count: number }) => ({
      role: item._id,
      value: item.count,
    })
  );

  const statsBox = {
    "Total Users": {
      value: userStatsData?.data?.totalUsers,
      icon: <Users />,
    },
    "New in 7 days": {
      value: userStatsData?.data?.newUsersInLast7Days,
      icon: <PackageX />,
    },
    "Active Users": {
      value: userStatsData?.data?.totalActiveUsers,
      icon: <PackagePlus />,
    },
    "Blocked Users": {
      value: userStatsData?.data?.totalBlockedUsers,
      icon: <PackagePlus />,
    },
    "InActive Users": {
      value: userStatsData?.data?.totalInactiveUsers,
      icon: <Package />,
    },
  };

  return (
    <div className="space-y-12">
      <div>
        <h1 className="font-bold text-3xl">All Users</h1>
      </div>

      {!userStatsLoading && (
        <>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
          </div>
          s
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <UsersBarChart data={barData} />
            <UsersByRolePie data={pieData} />
          </div>
        </>
      )}
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
            {users?.map((user: IUser) => (
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
