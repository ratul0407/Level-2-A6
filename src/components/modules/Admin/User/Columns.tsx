import { userActivity } from "@/constants/userActivity";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import ChangeActivityModal from "../Parcel/ChangeActivityModal";

interface IUser {
  name: string;
  email: string;
  isVerified: boolean;
  role: string;
  parcels: string;
  isActive: string;
}
export const UserColumns: ColumnDef<IUser>[] = [
  { accessorKey: "name", header: "Name" },

  {
    accessorKey: "email",
    header: "Email",
  },
  { accessorKey: "verified", header: "Verified" },
  { accessorKey: "role", header: "Role" },
  { accessorKey: "parcels", header: "Parcels" },
  {
    accessorKey: "isActive",
    header: "IsActive",
    cell: ({ row }) => {
      const isActive = row.original.isActive;
      const user = row.original;
      return (
        <div className="justify-around flex items-center gap-3">
          <span
            className={cn(
              "px-2 py-1 rounded text-xs font-medium",
              isActive === userActivity.active && "bg-green-100 text-green-800",
              isActive === userActivity.inActive &&
                "bg-yellow-100 text-yellow-800",
              isActive === userActivity.blocked && "bg-red-100 text-red-800"
            )}
          >
            {isActive}
          </span>
          <ChangeActivityModal {...user} />
        </div>
      );
    },
  },
];
