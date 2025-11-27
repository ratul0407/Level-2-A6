import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

// Nominatim geocoding function
async function geocodeLocation(query: string) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query + " Bangladesh"
    )}&limit=1`,
    {
      headers: { "User-Agent": "ParcelDeliveryApp/1.0" },
    }
  );
  const data = await res.json();
  if (!data[0]) return null;
  return {
    lat: parseFloat(data[0].lat),
    lon: parseFloat(data[0].lon),
    display: data[0].display_name,
  };
}

export default function DeliveryUpdateMap({
  onConfirm,
}: {
  onConfirm: (location: { lat: number; lon: number; display: string }) => void;
}) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<null | {
    lat: number;
    lon: number;
    display: string;
  }>(null);
  const [loading, setLoading] = useState(false);
  const [mapCenter] = useState<[number, number]>([23.777176, 90.399452]); // default Dhaka

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const data = await geocodeLocation(query);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Update Parcel Location</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter city, area, or zip code (e.g. Niketon, 1212)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button onClick={handleSearch} disabled={loading}>
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Find"}
            </Button>
          </div>

          <div className="h-[400px] w-full rounded overflow-hidden">
            <MapContainer
              center={result ? [result.lat, result.lon] : mapCenter}
              zoom={13}
              className="h-full w-full"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {result && (
                <Marker position={[result.lat, result.lon]}>
                  <Popup>
                    <div className="space-y-2 text-sm max-w-[180px]">
                      <p>
                        <strong>Location Found:</strong>
                      </p>
                      <p className="text-muted-foreground">{result.display}</p>
                      <Button
                        size="sm"
                        className="w-full mt-2"
                        onClick={() => onConfirm(result)}
                      >
                        Confirm Location
                      </Button>
                    </div>
                  </Popup>
                </Marker>
              )}
            </MapContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Example usage:
// <DeliveryUpdateMap onConfirm={(loc) => console.log("Confirmed Location:", loc)} />
