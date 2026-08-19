"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin, User } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  review: string;
  location: string;
  dark?: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Ahmad R.",
    role: "Madina Town House Buyer",
    rating: 5,
    review:
      "Abu Dawood Estate Linkers made our house purchase completely hassle-free. The legal verification was thorough, and the team guided us through every step. Highly recommended!",
    location: "Madina Town, Faisalabad",
  },
  {
    name: "Sarah K.",
    role: "Overseas Investor",
    rating: 5,
    review:
      "As an overseas Pakistani, I was worried about buying property remotely. The team handled everything professionally and kept me updated throughout. Excellent service!",
    location: "Gulberg, Faisalabad",
    dark: true,
  },
  {
    name: "Muhammad T.",
    role: "Commercial Plot Buyer",
    rating: 5,
    review:
      "Found the perfect commercial plot through Abu Dawood Estate. Their market knowledge is exceptional, and the ROI projections were spot on. Great investment partner!",
    location: "D-Ground, Faisalabad",
  },
  {
    name: "Fatima A.",
    role: "First-Time Home Buyer",
    rating: 5,
    review:
      "As a first-time buyer, I had many questions. The portfolio manager was incredibly patient and helpful. We got our dream apartment within budget!",
    location: "Clock Tower, Faisalabad",
  },
  {
    name: "Hassan M.",
    role: "Farmhouse Plot Investor",
    rating: 5,
    review:
      "The investment advisory was top-notch. They recommended the perfect farmhouse plot that has already appreciated 30% in value. Truly professional team!",
    location: "Sargodha Road, Faisalabad",
    dark: true,
  },
  {
    name: "Ayesha N.",
    role: "Rental Property Seeker",
    rating: 5,
    review:
      "Found a beautiful rental apartment in minutes. The team's attention to detail and quick response time made the whole process smooth and enjoyable.",
    location: "Susan Road, Faisalabad",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Client Success Stories
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-slate-500 max-w-2xl mx-auto">
            Hear from our satisfied clients who found their dream properties
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className={`rounded-2xl p-6 card-hover ${
                t.dark
                  ? "bg-gradient-to-br from-[#0B192C] to-[#132238] text-white"
                  : "bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`rounded-full w-12 h-12 flex items-center justify-center ${
                    t.dark
                      ? "bg-white/10 text-white/60"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      t.dark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {t.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      t.dark ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {t.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]"
                  />
                ))}
              </div>

              <Quote
                className={`w-8 h-8 text-[#D4AF37] opacity-20 mb-2`}
              />

              <p
                className={`text-sm leading-relaxed mb-4 ${
                  t.dark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {t.review}
              </p>

              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs text-slate-400">{t.location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
