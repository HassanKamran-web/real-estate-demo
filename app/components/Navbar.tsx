"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Phone,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Featured Properties", href: "featured" },
  { label: "Buy", href: "buy" },
  { label: "Rent", href: "rent" },
  { label: "Investment Projects", href: "projects" },
  { label: "Why Choose Us", href: "why-us" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("featured");

  const scrollTo = (id: string) => {
    setActive(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2"
        >
          <span className="flex items-center justify-center rounded-xl bg-[#0B192C] p-2">
            <Building2 className="h-5 w-5 text-[#D4AF37]" />
          </span>
          <span className="font-bold text-xl text-[#0B192C]">Abu Dawood Estate</span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`relative whitespace-nowrap text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                active === link.href
                  ? "text-[#0B192C]"
                  : "text-slate-600"
              }`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#D4AF37]" />
              )}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+923041997215"
            className="flex items-center gap-2 rounded-xl border-2 border-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#0B192C] transition-colors hover:bg-[#D4AF37]/10"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">+92 304 1997215</span>
          </a>
          <button className="rounded-xl bg-[#D4AF37] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#B89628]">
            List Your Property
          </button>
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-lg p-2 text-[#0B192C] transition-colors hover:bg-slate-100 lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors hover:bg-slate-100 ${
                    active === link.href
                      ? "border-l-2 border-[#D4AF37] bg-[#D4AF37]/5 text-[#0B192C]"
                      : "text-slate-600"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="mt-3 flex flex-col gap-3 border-t border-slate-200/60 pt-4">
                <a
                  href="tel:+923041997215"
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#D4AF37] px-4 py-2.5 text-sm font-semibold text-[#0B192C] transition-colors hover:bg-[#D4AF37]/10"
                >
                  <Phone className="h-4 w-4" />
                  +92 304 1997215
                </a>
                <button className="rounded-xl bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#B89628]">
                  List Your Property
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
