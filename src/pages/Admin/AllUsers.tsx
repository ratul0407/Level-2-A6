/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetAllUsersQuery,
  useGetUserStatsQuery,
} from "@/redux/features/auth/auth.api";

import { UsersBarChart } from "@/components/modules/Admin/User/UsersBarChart";
import UsersByRolePie from "@/components/modules/Admin/User/UsersRoleByPie";

import { User, UserPen, UserRoundMinus, UserRoundX, Users } from "lucide-react";
import DataTable from "./AllParcels/DataTable";
import { UserColumns } from "./AllUsers/Columns";
import { useState } from "react";
import Loading from "@/components/ui/Loading/Loading";

const AllUsers = () => {
  const [page, setPageChange] = useState(1);
  const { data, isLoading, isError } = useGetAllUsersQuery({ page });
  const { data: userStatsData, isLoading: userStatsLoading } =
    useGetUserStatsQuery(undefined);

  const users = data?.data;

  const tableUsers = users?.map((user: any) => ({
    ...user,
    parcels: user?.parcels?.length,
  }));
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
      icon: <UserPen />,
    },
    "Active Users": {
      value: userStatsData?.data?.totalActiveUsers,
      icon: <User />,
    },
    "InActive Users": {
      value: userStatsData?.data?.totalBlockedUsers,
      icon: <UserRoundMinus />,
    },
    "Blocked Users": {
      value: userStatsData?.data?.totalInactiveUsers,
      icon: <UserRoundX />,
    },
  };

  console.log(data);
  return (
    <div className="space-y-12">
      <div>
        <h1 className="font-bold text-3xl">All Users</h1>
      </div>

      {!userStatsLoading && (
        <>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
        <DataTable
          columns={UserColumns}
          data={tableUsers}
          page={data?.meta?.page}
          totalPage={data?.meta?.totalPage}
          onPageChange={setPageChange}
        />
      )}
    </div>
  );
};

export default AllUsers;
