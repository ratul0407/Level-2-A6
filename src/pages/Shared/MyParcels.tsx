import CancelParcelModal from "@/components/modules/Shared/CancelParcelModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { parcelStatus } from "@/constants/parcelStatus";
import { cn } from "@/lib/utils";
import { useGetMyParcelsQuery } from "@/redux/features/parcel/parcel.api";
const MyParcels = () => {
  const { data } = useGetMyParcelsQuery(undefined);
  const parcels = data?.data?.data;
  console.log(parcels);
  return (
    <Table>
      <TableHeader>
        <TableRow className="*:text-center">
          <TableHead>Name</TableHead>
          <TableHead>Tracking ID</TableHead>
          <TableHead>Receiver</TableHead>
          <TableHead>Cost</TableHead>
          <TableHead>Weight</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Cancel Parcel</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {parcels?.map((parcel) => (
          <TableRow key={parcel.trackingId} className="*:text-center">
            <TableCell>{parcel?.name}</TableCell>
            <TableCell>{parcel?.trackingId}</TableCell>
            <TableCell>{parcel?.receiver?.email}</TableCell>
            <TableCell>{parcel?.cost}</TableCell>
            <TableCell>{parcel?.weight}</TableCell>
            <TableCell className="max-w-[100px]">
              <div
                className={cn(
                  "py-1 w-full rounded text-xs font-medium text-center",
                  parcel?.currentStatus === parcelStatus.delivered &&
                    "bg-green-100 text-green-800",
                  parcel?.currentStatus === parcelStatus.requested &&
                    "bg-yellow-100 text-yellow-800",
                  parcel?.currentStatus === parcelStatus.cancelled &&
                    "bg-red-100 text-red-800",
                  parcel?.currentStatus === parcelStatus.approved &&
                    "bg-blue-100 text-blue-800"
                )}
              >
                {parcel?.currentStatus}
              </div>
            </TableCell>
            <TableCell>
              <CancelParcelModal parcel={parcel} button={true} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MyParcels;
