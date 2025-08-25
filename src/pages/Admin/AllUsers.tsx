import ChangeActivityModal from "@/components/modules/Admin/Parcel/ChangeActivityModal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { userActivity } from "@/constants/userActivity";
import { cn } from "@/lib/utils";
import { useGetAllUsersQuery } from "@/redux/features/auth/auth.api";
import { Pen } from "lucide-react";
const AllUsers = () => {
  const { data } = useGetAllUsersQuery(undefined);
  const users = data?.data;
  console.log(users);
  return (
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
  );
};

export default AllUsers;
