"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

// Basic ship icon
const shipIcon = new L.Icon({
  iconUrl: "/images/ship-marker.png", // Add this icon to /public/icons
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

type ShipUnit = {
  name: string;
  location: string;
  lat: number;
  lng: number;
};

export default function ShipMap({ units }: { units: ShipUnit[] }) {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow">
      <MapContainer center={[51.5, -0.12]} zoom={6} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {units.map((unit, index) => (
          <Marker key={index} position={[unit.lat, unit.lng]} icon={shipIcon}>
            <Popup>
              <strong>{unit.name}</strong><br />
              {unit.location}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
