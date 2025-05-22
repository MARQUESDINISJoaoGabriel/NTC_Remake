"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import { MapPin, Navigation, Users } from "lucide-react";

// Enhanced ship icon with custom styling
const shipIcon = new L.Icon({
  iconUrl: "/images/ship-marker.png",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
  shadowUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGVsbGlwc2UgY3g9IjIwIiBjeT0iMzUiIHJ4PSIxNSIgcnk9IjUiIGZpbGw9InJnYmEoMCwwLDAsMC4zKSIvPgo8L3N2Zz4K",
  shadowSize: [40, 40],
  shadowAnchor: [20, 35],
});

type ShipUnit = {
  name: string;
  location: string;
  lat: number;
  lng: number;
  cadets?: number;
  meetingDay?: string;
  contactEmail?: string;
};

export default function ShipMap({ units }: { units: ShipUnit[] }) {
  const [mapReady, setMapReady] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<ShipUnit | null>(null);

  useEffect(() => {
    setMapReady(true);
  }, []);

  if (!mapReady) {
    return (
      <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-ntcBlue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Map Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Find Your Local Unit</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Discover NTC units across the country. Click on any marker to learn more about that unit.
        </p>
      </div>

      {/* Map Container */}
      <div className="relative">
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative">
          <MapContainer 
            center={[51.5, -0.12]} 
            zoom={6} 
            style={{ height: "100%", width: "100%" }}
            className="z-10"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {units.map((unit, index) => (
              <Marker 
                key={index} 
                position={[unit.lat, unit.lng]} 
                icon={shipIcon}
                eventHandlers={{
                  click: () => setSelectedUnit(unit),
                }}
              >
                <Popup className="custom-popup">
                  <div className="p-3 min-w-[250px]">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-ntcBlue rounded-full flex items-center justify-center flex-shrink-0">
                        <Navigation className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-lg">{unit.name}</h3>
                        <p className="text-slate-600 text-sm flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {unit.location}
                        </p>
                      </div>
                    </div>
                    
                    {unit.cadets && (
                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                        <Users className="w-4 h-4" />
                        <span>{unit.cadets} active cadets</span>
                      </div>
                    )}
                    
                    {unit.meetingDay && (
                      <div className="text-sm text-slate-600 mb-2">
                        <strong>Meets:</strong> {unit.meetingDay}
                      </div>
                    )}
                    
                    {unit.contactEmail && (
                      <div className="text-sm mb-3">
                        <a 
                          href={`mailto:${unit.contactEmail}`}
                          className="text-ntcBlue hover:underline"
                        >
                          Contact Unit
                        </a>
                      </div>
                    )}
                    
                    <button className="w-full bg-ntcBlue text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                      Learn More
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          
          {/* Map Controls Overlay */}
          <div className="absolute top-4 left-4 z-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-slate-200">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <MapPin className="w-4 h-4 text-ntcBlue" />
                <span className="font-medium">{units.length} Units Found</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unit Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Navigation className="w-6 h-6 text-ntcBlue" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800">{units.length}</h3>
          <p className="text-slate-600">Active Units</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800">
            {units.reduce((total, unit) => total + (unit.cadets || 0), 0)}
          </h3>
          <p className="text-slate-600">Total Cadets</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <MapPin className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800">UK Wide</h3>
          <p className="text-slate-600">Coverage</p>
        </div>
      </div>
    </div>
  );
}