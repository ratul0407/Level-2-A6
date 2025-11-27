import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Hash, DollarSign, Truck } from "lucide-react";
import { Status } from "@/constants/statusFlow";

type Parcel = {
  id: string;
  name: string;
  trackingId: string;
  cost: number; // in your currency
  estimatedDeliveryDate?: string; // e.g. "2025-11-28" or "2-3 days"
  deliveryLocation: {
    city: string;
  };
  destination: [number, number];
  currentStatus?: Status;
};

type Props = {
  parcel: Parcel;
  onTrack?: (trackingId: string) => void;
  onDetails?: (id: string) => void;
  handleDestination: (des: [number, number]) => void;
};

const statusColor = (s?: Parcel["currentStatus"]) => {
  switch (s) {
    case "DELIVERED":
      return "bg-green-100 text-green-800";
    case "OUT_FOR_DELIVERY":
      return "bg-amber-100 text-amber-800";
    case "CANCELLED":
      return "bg-red-100 text-red-800";
    default:
      return "bg-slate-100 text-slate-800";
  }
};

export default function ParcelCard({
  parcel,
  onDetails,
  handleDestination,
}: Props) {
  console.log(parcel.destination);
  return (
    <Card className="max-w-md w-full shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex items-start justify-between gap-4">
        <div>
          <CardTitle className="text-base sm:text-lg">{parcel.name}</CardTitle>
          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
            <Hash className="w-4 h-4" />
            <span className="font-mono text-xs">{parcel.trackingId}</span>
          </p>
        </div>

        <div className="text-right">
          <div className="text-sm text-muted-foreground">Price</div>
          <div className="font-semibold text-lg flex items-center justify-end gap-2">
            <DollarSign className="w-4 h-4" />
            <span>{parcel.cost}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="truncate">
                ETA: {parcel.estimatedDeliveryDate ?? "—"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <MapPin className="w-4 h-4" />
              <span className="truncate">
                {parcel.deliveryLocation.city ?? "Unknown location"}
              </span>
            </div>
          </div>

          <div className="shrink-0">
            <div
              className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor(
                parcel.currentStatus
              )}`}
            >
              {parcel.currentStatus ? parcel.currentStatus : "unknown"}
            </div>
          </div>
        </div>

        <Separator className="my-3" />

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Truck className="w-4 h-4" />
          <span>
            Last update:{" "}
            <span className="font-medium">
              {parcel.estimatedDeliveryDate ?? "N/A"}
            </span>
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onDetails?.(parcel.id)}
          >
            Details
          </Button>
          <Button
            size="sm"
            onClick={() =>
              handleDestination(parcel.destination as [number, number])
            }
          >
            Track
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
