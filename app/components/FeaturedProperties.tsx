"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Car,
  Eye,
  Heart,
  MessageCircle,
  Building2,
  Home,
  LandPlot,
} from "lucide-react";

interface Property {
  id: number;
  name: string;
  type: string;
  tag: string;
  tagColor: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  parking: string;
  location: string;
  gradient: string;
  icon: React.ReactNode;
}

const filters = ["All", "Villa", "Apartment", "Plot", "Commercial"] as const;

const properties: Property[] = [
  {
    id: 1,
    name: "Luxury 1 Kanal Modern House",
    type: "villa",
    tag: "Hot Deal",
    tagColor: "bg-red-500",
    price: "PKR 4.5 Crore",
    beds: 5,
    baths: 6,
    area: "4,500 sqft",
    parking: "2 Cars",
    location: "Madina Town, Faisalabad",
    gradient: "from-slate-200 to-slate-300",
    icon: <Building2 className="w-12 h-12 text-slate-400" />,
  },
  {
    id: 2,
    name: "Commercial Corner Plot",
    type: "commercial",
    tag: "Prime Location",
    tagColor: "bg-[#D4AF37]",
    price: "PKR 6.5 Crore",
    beds: 0,
    baths: 0,
    area: "4 Marla",
    parking: "-",
    location: "D-Ground, Faisalabad",
    gradient: "from-amber-100 to-amber-200",
    icon: <LandPlot className="w-12 h-12 text-amber-400" />,
  },
  {
    id: 3,
    name: "Executive 2-Bed Apartment",
    type: "apartment",
    tag: "Ready to Move",
    tagColor: "bg-emerald-500",
    price: "PKR 85 Lac",
    beds: 2,
    baths: 2,
    area: "1,200 sqft",
    parking: "1 Car",
    location: "Gulberg, Faisalabad",
    gradient: "from-blue-100 to-blue-200",
    icon: <Home className="w-12 h-12 text-blue-400" />,
  },
  {
    id: 4,
    name: "2 Kanal Farmhouse Plot",
    type: "plot",
    tag: "New Launch",
    tagColor: "bg-[#0B192C]",
    price: "PKR 2.8 Crore",
    beds: 0,
    baths: 0,
    area: "2 Kanal",
    parking: "-",
    location: "Sargodha Road, Faisalabad",
    gradient: "from-green-100 to-green-200",
    icon: <LandPlot className="w-12 h-12 text-green-400" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = properties.filter(
    (p) => activeFilter === "All" || p.type === activeFilter.toLowerCase()
  );

  return (
    <section id="featured" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Featured &amp; Verified Listings
          </h2>
          <div className="mt-4 w-16 h-1 bg-[#D4AF37] rounded-full mx-auto" />
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap rounded-xl px-5 py-2 text-sm font-medium transition-colors ${
                activeFilter === f
                  ? "bg-[#0B192C] text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((property) => (
            <motion.div
              key={property.id}
              variants={cardVariants}
              className="rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5 overflow-hidden card-hover"
            >
              <div className="relative">
                <div
                  className={`rounded-2xl h-56 bg-gradient-to-br ${property.gradient} flex items-center justify-center`}
                >
                  {property.icon}
                </div>
                <span
                  className={`absolute top-3 left-3 ${property.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-lg`}
                >
                  {property.tag}
                </span>
                <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-slate-500 hover:text-red-500" />
                </button>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg text-slate-900">
                  {property.name}
                </h3>
                <p className="flex items-center gap-1 text-sm text-slate-500 mt-1">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </p>

                <div className="flex gap-4 mt-3 text-sm text-slate-600">
                  {property.beds > 0 && (
                    <span className="flex items-center gap-1">
                      <BedDouble className="w-4 h-4" />
                      {property.beds} Beds
                    </span>
                  )}
                  {property.baths > 0 && (
                    <span className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      {property.baths} Baths
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    {property.area}
                  </span>
                  <span className="flex items-center gap-1">
                    <Car className="w-4 h-4" />
                    {property.parking}
                  </span>
                </div>

                <div className="mt-4 font-bold text-xl text-[#0B192C]">
                  {property.price}
                </div>

                <div className="flex gap-3 mt-4">
                  <button className="flex-1 rounded-xl border border-[#0B192C] text-[#0B192C] py-2 text-sm font-semibold hover:bg-[#0B192C] hover:text-white transition-colors flex items-center justify-center gap-1">
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                  <button className="flex-1 rounded-xl bg-emerald-500 text-white py-2 text-sm font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
