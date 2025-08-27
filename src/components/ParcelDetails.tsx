import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { IParcel } from "@/types/response/parcel";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { role } from "@/constants/role";
import TrackingChart from "./TrackingChart";
import { parcelStatus } from "@/constants/parcelStatus";
const ParcelDetails = (parcel: IParcel) => {
  const { data } = useGetMeQuery(undefined);
  const UserRole = data?.data?.data?.role;
  console.log(UserRole === role.superAdmin || UserRole === role.admin);
  console.log(data);
  return (
    <Card
      className={`${
        UserRole === role.superAdmin || UserRole === role.admin
          ? "md:min-w-3xl"
          : ""
      } md:max-w-3xl w-full   mx-auto shadow-lg `}
    >
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Tracking ID:{" "}
          <span className="font-mono text-sm">{parcel?.trackingId}</span>
          <Badge
            className={cn(
              "px-2 py-1 rounded text-xs font-medium",
              parcel?.currentStatus === parcelStatus.requested &&
                "bg-yellow-100 text-yellow-800",
              parcel?.currentStatus === parcelStatus.delivered &&
                "bg-green-100 text-green-800",
              parcel?.currentStatus === parcelStatus.cancelled &&
                "bg-red-100 text-red-800",
              parcel?.currentStatus === parcelStatus.returned &&
                "bg-purple-100 text-purple-800",
              parcel?.currentStatus === parcelStatus.approved &&
                "bg-blue-100 text-blue-800",
              parcel?.currentStatus === parcelStatus.picked_up &&
                "bg-orange-100 text-orange-800",
              parcel?.currentStatus === parcelStatus.dispatched &&
                "bg-violet-100 text-violet-800",
              parcel?.currentStatus === parcelStatus.out_for_delivery &&
                "bg-amber-100 text-amber-800",
              parcel?.currentStatus === parcelStatus.failed_delivery &&
                "bg-red-100 text-red-800"
            )}
          >
            {parcel?.currentStatus}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {(data?.data?.data?.role === role.superAdmin ||
          data?.data?.data?.role === role.admin) && (
          <div>
            Delivery Man:{" "}
            {parcel?.deliveryDriver
              ? parcel.deliveryDriver
              : "Not Assigned yet!"}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sender Information</h3>
            <p className="text-sm">
              <span className="font-medium">Name:</span> {parcel?.sender.name}
            </p>
            <p className="text-sm">
              <span className="font-medium">Address:</span>{" "}
              {parcel?.senderInfo.street}, {parcel?.senderInfo.city},{" "}
              {parcel?.senderInfo.division}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Receiver Information</h3>
            <p className="text-sm">
              <span className="font-medium">Name:</span> {parcel?.receiver.name}
            </p>
            <p className="text-sm">
              <span className="font-medium">Address:</span>{" "}
              {parcel?.deliveryLocation.street}, {parcel?.deliveryLocation.city}
              , {parcel?.deliveryLocation.division}
            </p>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs text-muted-foreground">est. Delivery</p>
            <p className="font-semibold">
              {format(parcel?.estimatedDeliveryDate, "dd/MM/yy")}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Weight</p>
            <p className="font-semibold">{parcel?.weight} kg</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Cost</p>
            <p className="font-semibold">${parcel?.cost}</p>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-2">Tracking History</h3>

          <TrackingChart trackingEvents={parcel?.trackingEvents} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ParcelDetails;
