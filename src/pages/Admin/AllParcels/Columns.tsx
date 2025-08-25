import TableRowActions from "@/components/modules/Admin/Parcel/TableRowActions";
import { cn } from "@/lib/utils";
import { IParcel } from "@/types/response/parcel";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IParcel>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "sender", header: "sender" },
  { accessorKey: "weight", header: "weight" },
  { accessorKey: "createdAt", header: "Created At" },
  { accessorKey: "receiver", header: "receiver" },
  { accessorKey: "deliveryDriver", header: "Delivery Man" },
  {
    accessorKey: "currentStatus",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.currentStatus;
      const parcel = row.original; // full row data

      return (
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "px-2 py-1 rounded text-xs font-medium",
              status === "REQUESTED" && "bg-yellow-100 text-yellow-800",
              status === "DELIVERED" && "bg-green-100 text-green-800",
              status === "CANCELLED" && "bg-red-100 text-red-800",
              status === "RETURNED" && "bg-purple-100 text-purple-800"
            )}
          >
            {status}
          </span>
          <TableRowActions {...parcel} />
        </div>
      );
    },
  },
];
