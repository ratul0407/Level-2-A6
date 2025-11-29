import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import hubImg from "../assets/images/hub-img.jpg";
import L from "leaflet";
import mapUrl from "../assets/icons/map.svg";
const hubs = [
  {
    id: "dhaka",
    name: "Dhaka Hub",
    position: { latitude: 23.8103, longitude: 90.4125 },
    popupText:
      "Dhaka Hub — Central sorting & distribution center serving Greater Dhaka. High-capacity, priority handling.",
  },
  {
    id: "chattogram",
    name: "Chattogram Hub",
    position: { latitude: 22.3569, longitude: 91.7832 },
    popupText:
      "Chattogram Hub — Major port-side hub for southern and southeastern routes. Fast sea/road transfers.",
  },
  {
    id: "khulna",
    name: "Khulna Hub",
    position: { latitude: 22.8456, longitude: 89.5403 },
    popupText:
      "Khulna Hub — Regional hub serving the southwest; optimized for bulk shipments.",
  },
  {
    id: "rajshahi",
    name: "Rajshahi Hub",
    position: { latitude: 24.3636, longitude: 88.6241 },
    popupText:
      "Rajshahi Hub — Northern-west hub focused on express and inter-district deliveries.",
  },
  {
    id: "sylhet",
    name: "Sylhet Hub",
    position: { latitude: 24.8949, longitude: 91.8687 },
    popupText:
      "Sylhet Hub — Northeastern hub for fast rural routing and hilly-area logistics.",
  },
  {
    id: "barishal",
    name: "Barishal Hub",
    position: { latitude: 22.701, longitude: 90.3535 },
    popupText:
      "Barishal Hub — Southern riverine hub handling last-mile deliveries across the delta.",
  },
  {
    id: "rangpur",
    name: "Rangpur Hub",
    position: { latitude: 25.7439, longitude: 89.2752 },
    popupText:
      "Rangpur Hub — Northern hub for fast distribution across Rangpur division.",
  },
  {
    id: "mymensingh",
    name: "Mymensingh Hub",
    position: { latitude: 24.7471, longitude: 90.4203 },
    popupText:
      "Mymensingh Hub — Central-north hub serving nearby districts with quick turnarounds.",
  },
  {
    id: "gazipur",
    name: "Gazipur Hub",
    position: { latitude: 24.0033, longitude: 90.426 },
    popupText:
      "Gazipur Hub — Industrial-area hub for B2B shipments and warehouse consolidation.",
  },
  {
    id: "narayanganj",
    name: "Narayanganj Hub",
    position: { latitude: 23.6245, longitude: 90.501 },
    popupText:
      "Narayanganj Hub — Eastern Dhaka-adjacent hub for quick suburban pickups and deliveries.",
  },
  {
    id: "coxsbazar",
    name: "Cox's Bazar Hub",
    position: { latitude: 21.4272, longitude: 92.0058 },
    popupText:
      "Cox's Bazar Hub — Coastal/tourism hub optimized for seasonal demand and remote-area deliveries.",
  },
  {
    id: "cumilla",
    name: "Cumilla Hub",
    position: { latitude: 23.4607, longitude: 91.1809 },
    popupText:
      "Cumilla Hub — Eastern hub for Chattogram–Dhaka corridor support and express routing.",
  },
];

const OurHubs = () => {
  const customIcon = L.icon({
    iconUrl: mapUrl,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });
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
      <div className="z-20 relative">
        <MapContainer
          center={[23.790321, 90.4076959]}
          zoom={7}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {hubs.map((hub) => (
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
