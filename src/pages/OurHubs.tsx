import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import hubImg from "../assets/images/hub-img.jpg";
import L from "leaflet";
import mapUrl from "../assets/icons/map.svg";
import { useGetHubsQuery } from "@/redux/features/hubs/hubs.api";
import { useEffect } from "react";

const OurHubs = () => {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const customIcon = L.icon({
    iconUrl: mapUrl,
    iconSize: [30, 30],
    iconAnchor: [25, 50],
  });
  const { data } = useGetHubsQuery(undefined);
  const hubs = data?.data;
  return (
    <div className="container mx-auto px-10 bg-slate-50 min-h-screen pt-10 space-y-20">
      <div className="flex flex-col lg:flex-row gap-10 items-center ">
        <div className="w-1/2 space-y-10">
          <h1 className="text-5xl font-bold text-open-sans ">
            Nationwide hubs for faster delivery
          </h1>
          <p className="font-bold text-gray-500 leading-loose">
            We operate multiple hubs across the country, allowing us to sort,
            process, and deliver your parcels more efficiently. Our network of
            hubs ensures quicker processing times and faster delivery to any
            destination. By using strategic hubs nationwide, we speed up your
            shipping and get parcels delivered sooner. Our nationwide hubs
            streamline sorting and routing, giving you faster and more reliable
            shipping.
          </p>
        </div>
        <div className="w-1/2">
          <img src={hubImg} alt="" className="rounded-4xl" />
        </div>
      </div>
      <div id="hubs" className="z-20 relative">
        <MapContainer
          center={[23.8103, 90.4125]}
          zoom={7}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {hubs?.map((hub: any) => (
            <Marker
              icon={customIcon}
              position={[hub.position.latitude, hub.position.longitude]}
            >
              <Popup>{hub.popupText}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default OurHubs;
