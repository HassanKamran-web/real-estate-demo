"use client"

import { motion } from "framer-motion"
import { ShieldCheck, BadgeCheck, TrendingUp, UserCheck, CheckCircle2 } from "lucide-react"

const cards = [
  {
    icon: ShieldCheck,
    title: "100% Verified Documents",
    description:
      "Complete RDA/LDA/DHA legal clearance check for every property before listing.",
    points: ["RDA Approved", "LDA Verified", "DHA Certified"],
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    description:
      "Zero hidden commissions. Direct owner-to-buyer deals with complete price transparency.",
    points: ["No Hidden Fees", "Direct Owner Deals", "Fair Market Price"],
  },
  {
    icon: TrendingUp,
    title: "Expert Market Valuation",
    description:
      "Free property evaluation backed by data-driven market analysis for sellers and buyers.",
    points: ["Free Evaluation", "Market Analysis", "Data-Driven Pricing"],
  },
  {
    icon: UserCheck,
    title: "Dedicated Portfolio Manager",
    description:
      "End-to-end assistance from property visit to possession with a dedicated manager.",
    points: ["Personal Manager", "Visit to Possession", "24/7 Support"],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] rounded-full mx-auto mt-4" />
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Your trusted partner in real estate, committed to transparency and
            excellence
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5 p-6 card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0B192C] flex items-center justify-center">
                <card.icon className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mt-5">
                {card.title}
              </h3>
              <p className="text-sm text-slate-500 mt-3">
                {card.description}
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {card.points.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm text-slate-500">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
