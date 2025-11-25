import { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";

const LocationMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Default location (fallback)
    const defaultPosition = fromLonLat([23.7655, 90.3878]);

    // Marker feature for current location
    const marker = new Feature({
      geometry: new Point(defaultPosition),
    });

    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Marker icon
          scale: 0.05,
        }),
      })
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    // Initialize the map
    const initialMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: defaultPosition,
        zoom: 13,
      }),
    });

    setMap(initialMap);

    map
      ?.getView()
      .fit(
        [fromLonLat([90.387, 23.765]), fromLonLat([90.388, 23.766])].flat(),
        {
          size: map.getSize(),
          padding: [100, 100, 100, 100],
          duration: 500,
        }
      );
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = fromLonLat([pos.coords.longitude, pos.coords.latitude]);
        marker.setGeometry(new Point(coords));
        initialMap.getView().setCenter(coords);
      });
    }
  }, []);

  return <div ref={mapRef} className="w-full h-96 rounded-xl shadow-lg" />;
};

export default LocationMap;
