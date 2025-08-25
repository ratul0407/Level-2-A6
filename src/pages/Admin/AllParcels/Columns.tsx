import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
export interface IParcel {
  _id: string;
  name: string;
  cost: number;
  receiver: {
    name: string;
  };
  weight: number;
  createdAt: string;
  sender: string;
  currentStatus: string;
  trackingId: string;
  deliveryDriver: string;
}

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-6 w-6 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                onClick={() => {
                  console.log("View details of", parcel);
                  // e.g. open modal with row data
                }}
              >
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem
                disabled={
                  parcel.currentStatus === "CANCELLED" ||
                  parcel.currentStatus === "DELIVERED" ||
                  parcel.currentStatus === "RETURNED"
                }
                onClick={() => {
                  console.log("Mark delivered", parcel.trackingId);
                  // call API to update status
                }}
              >
                Assign Delivery
              </DropdownMenuItem>
              <DropdownMenuItem
                disabled={
                  parcel.currentStatus === "CANCELLED" ||
                  parcel.currentStatus === "DELIVERED" ||
                  parcel.currentStatus === "RETURNED"
                }
                onClick={() => {
                  console.log("Cancel parcel", parcel._id);
                  // call API to cancel
                }}
              >
                Cancel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
