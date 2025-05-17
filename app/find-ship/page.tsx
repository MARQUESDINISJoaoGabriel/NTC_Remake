"use client";

import { useState } from "react";
import dynamic from "next/dynamic"; // For SSR-safe Leaflet import
const ShipMap = dynamic(() => import("@/components/ShipMap"), { ssr: false });

const dummyUnits = [
  { name: "T.S. Implacable – Brighton", location: "Brighton, BN1", region: "South East", lat: 50.8225, lng: -0.1372 },
  { name: "T.S. Ajax – Portsmouth", location: "Portsmouth, PO1", region: "South East", lat: 50.7989, lng: -1.0912 },
  { name: "T.S. Collingwood – Worthing", location: "Worthing, BN11", region: "South East", lat: 50.814, lng: -0.371 },
  { name: "T.S. Cornwall – Hayle", location: "Hayle, TR27", region: "South West", lat: 50.1853, lng: -5.4202 },
  { name: "T.S. Intrepid – Eastbourne", location: "Eastbourne, BN21", region: "South East", lat: 50.768, lng: 0.2905 },
];


const regions = ["All", "South East", "South West"];

export default function FindShipPage() {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredUnits = dummyUnits.filter((unit) => {
    const matchesRegion = selectedRegion === "All" || unit.region === selectedRegion;
    const matchesSearch =
      unit.name.toLowerCase().includes(search.toLowerCase()) ||
      unit.location.toLowerCase().includes(search.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-ntcBlue mb-6 text-center">Find Your Nearest Ship</h1>
      <p className="text-center mb-8 text-gray-600">
        Enter your town, postcode, or explore by region.
      </p>

      {/* Region Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-4 py-2 rounded-full border ${
              selectedRegion === region
                ? "bg-ntcBlue text-white"
                : "bg-white text-gray-700 border-gray-300"
            } hover:bg-ntcBlue hover:text-white transition`}
          >
            {region}
          </button>
        ))}
      </div>

      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Try: Brighton, BN1..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-ntcBlue"
        />
      </div>

      <div className="space-y-6">
        {filteredUnits.length > 0 ? (
          filteredUnits.map((unit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow border border-gray-100 bg-white"
            >
              <h2 className="text-xl font-bold text-ntcBlue">{unit.name}</h2>
              <p className="text-gray-600">{unit.location}</p>
              <p className="text-sm text-gray-500">{unit.region}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No units found. Try a different location.</p>
        )}
      </div>

      {/* Ship Map */}
        <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-4 text-ntcBlue text-center">Unit Locations Map</h2>
            <ShipMap units={filteredUnits} />
        </div>

    </main>
  );
}
