"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Users, Clock, Mail, Navigation } from "lucide-react";
import { Card, CardContent} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";

const ShipMap = dynamic(() => import("@/components/ShipMap"), { ssr: false });

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const dummyUnits = [
  { 
    name: "T.S. Implacable – Brighton", 
    location: "Brighton, BN1", 
    region: "South East", 
    lat: 50.8225, 
    lng: -0.1372,
    cadets: 45,
    meetingDay: "Tuesdays & Thursdays 7:00 PM",
    contactEmail: "brighton@ntc.org.uk",
    activities: ["Sailing", "Drill", "Navigation"],
    ageGroups: ["7-11", "12-15", "16-18"],
    facilities: ["Indoor hall", "Boat storage", "Classroom"]
  },
  { 
    name: "T.S. Ajax – Portsmouth", 
    location: "Portsmouth, PO1", 
    region: "South East", 
    lat: 50.7989, 
    lng: -1.0912,
    cadets: 38,
    meetingDay: "Wednesdays 6:30 PM",
    contactEmail: "portsmouth@ntc.org.uk",
    activities: ["Powerboating", "Leadership", "Community Service"],
    ageGroups: ["10-15", "16-18"],
    facilities: ["Marina access", "Training room", "Equipment store"]
  },
  { 
    name: "T.S. Collingwood – Worthing", 
    location: "Worthing, BN11", 
    region: "South East", 
    lat: 50.814, 
    lng: -0.371,
    cadets: 32,
    meetingDay: "Mondays & Fridays 7:00 PM",
    contactEmail: "worthing@ntc.org.uk",
    activities: ["Band", "Drill", "Sailing"],
    ageGroups: ["7-11", "12-18"],
    facilities: ["Band room", "Drill hall", "Kitchen"]
  },
  { 
    name: "T.S. Cornwall – Hayle", 
    location: "Hayle, TR27", 
    region: "South West", 
    lat: 50.1853, 
    lng: -5.4202,
    cadets: 28,
    meetingDay: "Saturdays 2:00 PM",
    contactEmail: "hayle@ntc.org.uk",
    activities: ["Surfing", "Coastal navigation", "Environmental"],
    ageGroups: ["8-16"],
    facilities: ["Beach access", "Equipment shed", "Meeting room"]
  },
  { 
    name: "T.S. Intrepid – Eastbourne", 
    location: "Eastbourne, BN21", 
    region: "South East", 
    lat: 50.768, 
    lng: 0.2905,
    cadets: 41,
    meetingDay: "Thursdays 7:00 PM & Sundays 10:00 AM",
    contactEmail: "eastbourne@ntc.org.uk",
    activities: ["Advanced sailing", "Seamanship", "Leadership"],
    ageGroups: ["7-11", "12-15", "16-18"],
    facilities: ["Large hall", "Boat workshop", "Galley", "Library"]
  }
];

const regions = ["All Regions", "South East", "South West", "London", "North West", "Yorkshire"];

export default function FindShipPage() {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("All Ages");
  const [viewMode, setViewMode] = useState("list");

  const filteredUnits = dummyUnits.filter((unit) => {
    const matchesRegion = selectedRegion === "All Regions" || unit.region === selectedRegion;
    const matchesSearch =
      unit.name.toLowerCase().includes(search.toLowerCase()) ||
      unit.location.toLowerCase().includes(search.toLowerCase());
    const matchesAge = selectedAgeGroup === "All Ages" || 
      unit.ageGroups.some(age => age.includes(selectedAgeGroup.split("-")[0]));
    
    return matchesRegion && matchesSearch && matchesAge;
  });

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="outline" className="mb-4 text-ntcBlue border-ntcBlue">
          <Navigation className="w-4 h-4 mr-2" />
          Find Your Unit
        </Badge>
        <h1 className="text-5xl font-bold text-ntcBlue mb-6 bg-gradient-to-r from-ntcBlue to-blue-600 bg-clip-text text-transparent">
          Find Your Nearest Ship
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Discover NTC units near you. Each Training Ship (T.S.) offers unique opportunities for young people to learn, grow, and have adventures.
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div 
        className="mb-12"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <Card className="border-2 hover:border-ntcBlue/20 transition-colors">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search by location, postcode, or unit name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
              </div>
              <div>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>{region}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Age group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Ages">All Ages</SelectItem>
                    <SelectItem value="7-11">7-11 years</SelectItem>
                    <SelectItem value="12-15">12-15 years</SelectItem>
                    <SelectItem value="16-18">16-18 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Results Summary */}
      <motion.div 
        className="flex justify-between items-center mb-8"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <div>
          <h2 className="text-2xl font-semibold text-slate-800">
            {filteredUnits.length} Unit{filteredUnits.length !== 1 ? "s" : ""} Found
          </h2>
          <p className="text-slate-600">
            {selectedRegion !== "All Regions" && `in ${selectedRegion} `}
            {selectedAgeGroup !== "All Ages" && `for ages ${selectedAgeGroup}`}
          </p>
        </div>
        <Tabs value={viewMode} onValueChange={setViewMode}>
          <TabsList>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="map">Map View</TabsTrigger>
          </TabsList>
        </Tabs>
      </motion.div>

      {/* Results Display */}
      <Tabs value={viewMode} onValueChange={setViewMode}>
        <TabsContent value="list">
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {filteredUnits.length > 0 ? (
              filteredUnits.map((unit, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover:shadow-xl transition-all duration-500 hover:scale-[1.01] border-2 hover:border-ntcBlue/20">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-3 gap-6">
                        {/* Main Info */}
                        <div className="lg:col-span-2">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-ntcBlue mb-2">{unit.name}</h3>
                              <p className="text-slate-600 flex items-center gap-2 mb-2">
                                <MapPin className="w-4 h-4" />
                                {unit.location}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-slate-500">
                                <span className="flex items-center gap-1">
                                  <Users className="w-4 h-4" />
                                  {unit.cadets} cadets
                                </span>
                                <Badge variant="outline">{unit.region}</Badge>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <Mail className="w-4 h-4 mr-2" />
                              Contact
                            </Button>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-2">Meeting Times</h4>
                              <p className="text-sm text-slate-600 flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {unit.meetingDay}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-2">Contact</h4>
                              <a 
                                href={`mailto:${unit.contactEmail}`}
                                className="text-sm text-ntcBlue hover:underline flex items-center gap-2"
                              >
                                <Mail className="w-4 h-4" />
                                {unit.contactEmail}
                              </a>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-2">Activities</h4>
                              <div className="flex flex-wrap gap-2">
                                {unit.activities.map((activity, actIndex) => (
                                  <Badge key={actIndex} variant="secondary">
                                    {activity}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-2">Age Groups</h4>
                              <div className="flex flex-wrap gap-2">
                                {unit.ageGroups.map((age, ageIndex) => (
                                  <Badge key={ageIndex} variant="outline">
                                    {age} years
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Facilities & CTA */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2">Facilities</h4>
                            <ul className="text-sm text-slate-600 space-y-1">
                              {unit.facilities.map((facility, facIndex) => (
                                <li key={facIndex} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-ntcBlue rounded-full"></div>
                                  {facility}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <Button className="w-full bg-ntcBlue hover:bg-blue-600">
                              Visit This Unit
                            </Button>
                            <Button variant="outline" className="w-full">
                              Get Directions
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <Navigation className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">No units found</h3>
                  <p className="text-slate-600 mb-4">
                    Try adjusting your search criteria or contact us to find units in your area.
                  </p>
                  <Button variant="outline">
                    Contact Headquarters
                  </Button>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </TabsContent>

        <TabsContent value="map">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ShipMap units={filteredUnits} />
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Additional Information */}
      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Card className="bg-gradient-to-br from-ntcBlue to-blue-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Can"t Find a Unit Near You?</h2>
            <p className="text-xl mb-6 text-blue-100">
              Don"t worry! We"re always looking to expand and can help you start a new unit in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Contact Us About Starting a Unit
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ntcBlue">
                Join Our Mailing List
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}