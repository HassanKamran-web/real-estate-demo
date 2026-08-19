"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Home,
  Building,
  LandPlot,
  Star,
  ShieldCheck,
  TrendingUp,
  Award,
  BedDouble,
  Bath,
  Maximize,
  Car,
} from "lucide-react";

const tabs = [
  { id: "buy", label: "Buy", icon: Home },
  { id: "rent", label: "Rent", icon: Building },
  { id: "commercial", label: "Commercial", icon: LandPlot },
] as const;

type TabId = (typeof tabs)[number]["id"];

const propertyTypes = ["Villa", "Apartment", "Plot", "Land"];
const priceRanges = ["Under 1Cr", "1-5Cr", "5-10Cr", "10Cr+"];

const floatAnimation = {
  y: [0, -8, 0],
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState<TabId>("buy");

  return (
    <section className="relative overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700">
              <ShieldCheck className="h-4 w-4" />
              #1 Real Estate & Property Advisory in Faisalabad
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Find Your <span className="gold-text-gradient">Dream Property</span>
              <br />
              in Prime Locations.
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
              Discover verified residential plots, commercial spaces, and luxury
              apartments in Faisalabad with complete legal protection.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 rounded-2xl bg-white p-1.5 shadow-lg ring-1 ring-slate-900/5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-[#0B192C] text-white shadow"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-slate-900/5 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter location..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition-colors focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                />
              </div>
              <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20">
                <option>Property Type</option>
                {propertyTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20">
                <option>Price Range</option>
                {priceRanges.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
              <button className="flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B89628]">
                <Search className="h-4 w-4" />
                Search Properties
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <TrendingUp className="h-4 w-4 text-[#D4AF37]" />
                <span className="text-sm font-medium text-slate-700">
                  500+ Verified Listings
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700">
                  100% Legal Clearance
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <Award className="h-4 w-4 text-[#D4AF37]" />
                <span className="text-sm font-medium text-slate-700">
                  PKR 2B+ Deals Closed
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-lg lg:mx-0">
              <div className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-[#0B192C] via-[#1a3050] to-[#0B192C]">
                <Building className="h-24 w-24 text-[#D4AF37]" />
              </div>

              <motion.div
                animate={floatAnimation}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white shadow-lg"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                Hot Deal
              </motion.div>

              <motion.div
                animate={floatAnimation}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-20 left-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-[#0B192C] shadow-lg backdrop-blur"
              >
                Madina Town, Faisalabad
              </motion.div>

              <motion.div
                animate={floatAnimation}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-20 right-4 rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white shadow-lg"
              >
                Ready for Possession
              </motion.div>

              <motion.div
                animate={floatAnimation}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.75,
                }}
                className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 shadow-lg backdrop-blur"
              >
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span className="text-xs font-semibold text-slate-900">4.9</span>
              </motion.div>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                <span className="flex items-center gap-1.5 rounded-lg bg-white/20 px-3 py-1.5 text-sm text-white backdrop-blur">
                  <BedDouble className="h-4 w-4" />
                  5 Beds
                </span>
                <span className="flex items-center gap-1.5 rounded-lg bg-white/20 px-3 py-1.5 text-sm text-white backdrop-blur">
                  <Bath className="h-4 w-4" />
                  6 Baths
                </span>
                <span className="flex items-center gap-1.5 rounded-lg bg-white/20 px-3 py-1.5 text-sm text-white backdrop-blur">
                  <Maximize className="h-4 w-4" />
                  4,500 sqft
                </span>
                <span className="flex items-center gap-1.5 rounded-lg bg-white/20 px-3 py-1.5 text-sm text-white backdrop-blur">
                  <Car className="h-4 w-4" />
                  2 Car
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
