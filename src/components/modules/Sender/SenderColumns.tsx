import { parcelStatus } from "@/constants/parcelStatus";
import { cn } from "@/lib/utils";
import { IParcel } from "@/types/response/parcel";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import TableRowActionsSender from "./TableRowActionsSender";

export const senderColumns: ColumnDef<IParcel>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "trackingId", header: "Tracking ID" },
  {
    accessorKey: "weight",
    header: ({ column }) => (
      <button
        className="flex items-center"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Weight
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => row.original.weight,
  },
  { accessorKey: "createdAt", header: "Created At" },
  { accessorKey: "sender", header: "sender" },
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
              status === parcelStatus.requested &&
                "bg-yellow-100 text-yellow-800",
              status === parcelStatus.delivered &&
                "bg-green-100 text-green-800",
              status === parcelStatus.cancelled && "bg-red-100 text-red-800",
              status === parcelStatus.returned &&
                "bg-purple-100 text-purple-800",
              status === parcelStatus.approved && "bg-blue-100 text-blue-800",
              status === parcelStatus.picked_up &&
                "bg-orange-100 text-orange-800",
              status === parcelStatus.dispatched &&
                "bg-violet-100 text-violet-800",
              status === parcelStatus.out_for_delivery &&
                "bg-amber-100 text-amber-800",
              status === parcelStatus.failed_delivery &&
                "bg-red-100 text-red-800"
            )}
          >
            {status}
          </span>
          <TableRowActionsSender {...parcel} />
        </div>
      );
    },
  },
];
