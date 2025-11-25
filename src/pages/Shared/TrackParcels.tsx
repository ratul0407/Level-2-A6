import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const TrackParcels = () => {
  return (
    <>
      <div>
        <h1>Track Parcels</h1>
        <div>
          <p>Select Parcels to track</p>
        </div>
      </div>
      <MapContainer
        center={[23.790321, 90.4076959]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[23.790321, 90.4076959]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
export default TrackParcels;
