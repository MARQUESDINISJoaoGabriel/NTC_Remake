import React from 'react';
import Link from 'next/link';
import { MapPin, Search } from 'lucide-react';

const FindShipSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Find Your Nearest Unit</h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          With units across the UK, there’s always a local branch of the Nautical Training Corps ready to welcome you.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Enter your town or postcode"
              className="w-full border border-gray-300 rounded-lg py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Search className="absolute top-3.5 right-4 text-gray-500 w-5 h-5" />
          </div>
          <Link
            href="/find-ship"
            className="mt-2 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-center"
          >
            Search
          </Link>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <MapPin className="w-10 h-10 text-blue-600 mb-2" />
          <p className="text-gray-600">Or explore our map to locate the nearest ship or division.</p>
          
        </div>
      </div>
    </section>
  );
};

export default FindShipSection;
