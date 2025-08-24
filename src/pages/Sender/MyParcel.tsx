import { useGetMyParcelsQuery } from "@/redux/features/parcel/parcel.api";

const MyParcel = () => {
  const { data } = useGetMyParcelsQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>MyParcel</h1>
    </div>
  );
};

export default MyParcel;
