import { useGetMyParcelsQuery } from "@/redux/features/parcel/parcel.api";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
const MyParcel = () => {
  const { data } = useGetMyParcelsQuery(undefined);
  console.log(data);
  return (
    <div className="grid grid-cols-3 gap-4">
      {data?.data?.data.map((item) => (
        <Card key={item._id} className="shadow-lg">
          <CardHeader>
            <CardTitle>{item?.name}</CardTitle>
            <CardDescription>
              {" "}
              created At: {format(new Date(item?.createdAt), "dd/MM/yy")}
            </CardDescription>
            <CardAction>Tk. {item?.cost}</CardAction>
          </CardHeader>
          <CardContent>
            <div>
              <p>
                Estimated Delivery date:{" "}
                {format(new Date(item?.estimatedDeliveryDate), "dd/MM/yy")}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MyParcel;
