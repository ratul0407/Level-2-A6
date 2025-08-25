import { useGetMyParcelsQuery } from "@/redux/features/parcel/parcel.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import ParcelDetails from "@/components/ParcelDetails";
import { IParcel } from "@/types/response/parcel";

const MyParcel = () => {
  const { data } = useGetMyParcelsQuery(undefined);
  console.log(data);
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-bold text-3xl">My Parcels</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data?.data?.data.map((parcel: IParcel, index: number) => (
          <ParcelDetails key={index} {...parcel} />
        ))}
      </div>
    </div>
  );
};

export default MyParcel;
