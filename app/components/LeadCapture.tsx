"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  User,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

export default function LeadCapture() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [budget, setBudget] = useState("");

  const handleWhatsApp = () => {
    const text = `Hi, I'm interested in your real estate services. Name: ${name}, Interest: ${interest}, Budget: ${budget}`;
    window.open(
      `https://wa.me/923001234567?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#0B192C] to-[#132F4C]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-[#0B192C] rounded-3xl p-8 lg:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Connect with a Property Advisor
            </h2>
            <p className="text-slate-300 mt-4 text-lg">
              Get instant assistance via WhatsApp. Our experts are ready to help
              you find the perfect property.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
                <span className="text-slate-300">
                  Instant WhatsApp Response within 5 minutes
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
                <span className="text-slate-300">
                  Free Property Consultation & Market Analysis
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
                <span className="text-slate-300">
                  No Obligation - Get Expert Advice
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Schedule Consultation
            </h3>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleWhatsApp();
              }}
            >
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-slate-200 rounded-xl px-4 py-3 pl-11 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none w-full"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="tel"
                  placeholder="+92 XXX XXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border border-slate-200 rounded-xl px-4 py-3 pl-11 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none w-full"
                />
              </div>
              <div className="relative">
                <ChevronDown className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="border border-slate-200 rounded-xl px-4 py-3 pl-11 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none w-full appearance-none bg-white"
                >
                  <option value="" disabled>
                    Select your interest
                  </option>
                  <option value="Buying">Buying</option>
                  <option value="Selling">Selling</option>
                  <option value="Renting">Renting</option>
                  <option value="Investment">Investment</option>
                </select>
              </div>
              <div className="relative">
                <ChevronDown className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="border border-slate-200 rounded-xl px-4 py-3 pl-11 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none w-full appearance-none bg-white"
                >
                  <option value="" disabled>
                    Select your budget
                  </option>
                  <option value="Under PKR 1 Crore">Under PKR 1 Crore</option>
                  <option value="PKR 1-5 Crore">PKR 1-5 Crore</option>
                  <option value="PKR 5-10 Crore">PKR 5-10 Crore</option>
                  <option value="PKR 10+ Crore">PKR 10+ Crore</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>
              <button
                type="submit"
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] text-white rounded-xl py-3.5 font-semibold text-lg flex items-center justify-center gap-2 hover:bg-[#20BA5C] transition-colors cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                Connect via WhatsApp
              </button>
              <a
                href="tel:+923001234567"
                className="w-full mt-3 border border-slate-200 text-slate-700 rounded-xl py-3 font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Or Call Us Now: +92 300 123 4567
              </a>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
