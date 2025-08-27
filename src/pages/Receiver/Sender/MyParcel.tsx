import { useGetMyParcelsQuery } from "@/redux/features/parcel/parcel.api";
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
      <div className="grid grid-cols-2 gap-4">
        {data?.data?.data.map((parcel: IParcel, index: number) => (
          <ParcelDetails key={index} {...parcel} />
        ))}
      </div>
    </div>
  );
};

export default MyParcel;
