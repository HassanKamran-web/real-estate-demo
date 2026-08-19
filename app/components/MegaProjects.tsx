"use client"

import { motion } from "framer-motion"
import {
  FileDown,
  Building2,
  MapPin,
  ArrowRight,
  Clock,
  Percent,
  Star,
} from "lucide-react"

interface Project {
  name: string
  location: string
  roi: string
  status: string
  statusColor: string
  price: string
  installment: string
  highlights: string[]
  dark: boolean
}

const projects: Project[] = [
  {
    name: "D-Ground Commercial Hub",
    location: "Faisalabad",
    roi: "40%+",
    status: "Booking Open",
    statusColor: "bg-emerald-500 text-white",
    price: "PKR 3.5 Crore",
    installment: "3-Year Easy Installments",
    highlights: ["Prime Commercial Zone", "Near Clock Tower", "TMA Approved"],
    dark: true,
  },
  {
    name: "Madina Town Residencia",
    location: "Faisalabad",
    roi: "30%+",
    status: "Limited Stock",
    statusColor: "bg-amber-500 text-white",
    price: "PKR 1.8 Crore",
    installment: "2-Year Easy Installments",
    highlights: ["Gated Community", "Schools & Hospitals", "LDA Approved"],
    dark: false,
  },
  {
    name: "Gulberg Empire Heights",
    location: "Faisalabad",
    roi: "35%+",
    status: "Pre-Launch",
    statusColor: "bg-blue-500 text-white",
    price: "PKR 2.2 Crore",
    installment: "3-Year Easy Installments",
    highlights: ["High-Rise Apartments", "Rooftop Lounge", "Smart Home"],
    dark: true,
  },
  {
    name: "Sargodha Road Farmhouses",
    location: "Faisalabad",
    roi: "45%+",
    status: "Booking Open",
    statusColor: "bg-emerald-500 text-white",
    price: "PKR 2.5 Crore",
    installment: "3-Year Easy Installments",
    highlights: ["2 Kanal Plots", "Private Parks", "24/7 Security"],
    dark: false,
  },
]

export default function MegaProjects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Premier Investment Projects
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] rounded-full mx-auto mt-4 mb-6" />
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Exclusive early-bird investment opportunities with guaranteed high
            ROI
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={
                project.dark
                  ? "bg-gradient-to-br from-[#0B192C] to-[#1a3050] text-white rounded-2xl p-6 min-w-[340px] snap-start flex-shrink-0"
                  : "bg-white border border-slate-200 text-slate-900 rounded-2xl p-6 min-w-[340px] snap-start flex-shrink-0"
              }
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-xl">{project.name}</h3>
                  <div className="flex items-center gap-1 mt-1 text-sm text-slate-400">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                </div>
                <Building2
                  size={32}
                  className={project.dark ? "text-[#D4AF37]" : "text-[#0B192C]"}
                />
              </div>

              <div
                className={`flex items-center gap-2 mb-4 ${
                  project.dark ? "text-[#D4AF37]" : "text-[#D4AF37]"
                }`}
              >
                <Percent size={20} />
                <span className="font-bold text-lg">
                  Expected ROI: {project.roi}
                </span>
              </div>

              <span
                className={`inline-block ${project.statusColor} rounded-full px-3 py-1 text-xs font-semibold mb-4`}
              >
                {project.status}
              </span>

              <div className="mb-4">
                <p
                  className={`text-sm ${
                    project.dark ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  Price Starting From
                </p>
                <p className="font-bold text-xl">{project.price}</p>
              </div>

              <div className="mb-5">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs border ${
                    project.dark
                      ? "bg-amber-50 text-amber-700 border-amber-200"
                      : "bg-amber-50 text-amber-700 border-amber-200"
                  }`}
                >
                  <Clock size={12} />
                  {project.installment}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Star
                      size={14}
                      className={
                        project.dark ? "text-[#D4AF37]" : "text-[#D4AF37]"
                      }
                    />
                    <span
                      className={
                        project.dark ? "text-slate-200" : "text-slate-600"
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <button
                  className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                    project.dark
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-[#0B192C] text-white hover:bg-[#132238]"
                  }`}
                >
                  <FileDown size={16} />
                  Download Brochure
                </button>
                <button
                  className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                    project.dark
                      ? "bg-[#D4AF37] text-[#0B192C] hover:bg-[#c5a02e]"
                      : "bg-[#D4AF37] text-[#0B192C] hover:bg-[#c5a02e]"
                  }`}
                >
                  View Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}