import { useGetMyParcelsQuery } from "@/redux/features/parcel/parcel.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format, formatDate } from "date-fns";
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

const MyParcel = () => {
  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "secondary";
      case "requested":
        return "success";
      case "cancelled":
        return "success";
      case "CANCELLED":
        return "info";
      default:
        return "outline";
    }
  };
  const { data } = useGetMyParcelsQuery(undefined);
  console.log(data);
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-bold text-3xl">My Parcels</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data?.data?.data.map((item: any) => (
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Tracking ID:{" "}
                <span className="font-mono text-sm">{item?.trackingId}</span>
                <Badge
                  className={cn(
                    "px-2 py-1 rounded text-xs font-medium",
                    item?.currentStatus === "REQUESTED" &&
                      "bg-yellow-100 text-yellow-800",
                    item?.currentStatus === "DELIVERED" &&
                      "bg-green-100 text-green-800",
                    item?.currentStatus === "CANCELLED" &&
                      "bg-red-100 text-red-800",
                    item?.currentStatus === "RETURNED" &&
                      "bg-purple-100 text-purple-800"
                  )}
                >
                  {item?.currentStatus}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Sender Information
                  </h3>
                  <p className="text-sm">
                    <span className="font-medium">Name:</span>{" "}
                    {item?.sender.name}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Address:</span>{" "}
                    {item?.senderInfo.street}, {item?.senderInfo.city},{" "}
                    {item?.senderInfo.division}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Receiver Information
                  </h3>
                  <p className="text-sm">
                    <span className="font-medium">Name:</span>{" "}
                    {item?.receiver.name}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Address:</span>{" "}
                    {item?.deliveryLocation.street},{" "}
                    {item?.deliveryLocation.city},{" "}
                    {item?.deliveryLocation.division}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-muted-foreground">est. Delivery</p>
                  <p className="font-semibold">
                    {format(item?.estimatedDeliveryDate, "dd/MM/yy")}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Weight</p>
                  <p className="font-semibold">{item?.weight} kg</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Cost</p>
                  <p className="font-semibold">${item?.cost}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">Tracking History</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Status</TableHead>
                      <TableHead>Updated By</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {item?.trackingEvents.map((event, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {event.status}
                        </TableCell>
                        <TableCell>{event.updatedBy}</TableCell>
                        <TableCell>{format(event.at, "dd/MM/yy")}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyParcel;
