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

const AllUsers = () => {
  const { data, isLoading, isError } = useGetAllUsersQuery(undefined);
  const { data: userStatsData, isLoading: userStatsLoading } =
    useGetUserStatsQuery(undefined);
  console.log(userStatsData);
  const users = data?.data;
  console.log(users);

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
