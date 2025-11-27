import { useGetMyParcelsQuery } from "@/redux/features/parcel/parcel.api";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ParcelCard from "./ParcelCard";
const TrackParcels = () => {
  const { data } = useGetMyParcelsQuery({
    currentStatus: "REQUESTED",
  });
  const [destination, setDestination] = useState<[number, number] | []>([]);

  const parcels = data?.data?.data;
  console.log(parcels);
  const handleSetDestination = (des: any) => {
    setDestination(des);
  };
  console.log(destination);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-3">
        {parcels?.map((parcel: any) => (
          <ParcelCard
            key={parcel._id}
            parcel={parcel}
            handleDestination={handleSetDestination}
          />
        ))}
      </div>
      <MapContainer
        center={[23.790321, 90.4076959]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[23.790321, 90.4076959]}>
          <Popup>
            Currently at our banani Office <br /> waiting for approval
          </Popup>
        </Marker>
        {destination.length > 0 && (
          <Marker position={destination as L.LatLngExpression}>
            <Popup>
              <p>Receivers destination</p>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </>
  );
};
export default TrackParcels;
