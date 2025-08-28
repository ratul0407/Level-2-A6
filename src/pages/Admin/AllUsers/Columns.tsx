import ChangeActivityModal from "@/components/modules/Admin/Parcel/ChangeActivityModal";
import { ColumnDef } from "@tanstack/react-table";

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
          <span>{isActive}</span>
          <ChangeActivityModal {...user} />
        </div>
      );
    },
  },
];
