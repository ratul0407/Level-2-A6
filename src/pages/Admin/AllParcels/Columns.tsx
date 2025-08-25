import { ColumnDef } from "@tanstack/react-table";
export interface IParcel {
  _id: string;
  name: string;
  cost: number;
  receiver: string;
  weight: number;
  createdAt: string;
}

export const columns: ColumnDef<IParcel>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "sender", header: "sender" },
  { accessorKey: "cost", header: "cost" },
  { accessorKey: "weight", header: "weight" },
  { accessorKey: "createdAt", header: "Created At" },
  { accessorKey: "receiver", header: "receiver" },
];
