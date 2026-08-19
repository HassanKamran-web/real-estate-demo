import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ExternalLink,
  Globe,
  Heart,
  Link2,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    "Popular Locations",
    "Commercial Properties",
    "Residential Properties",
    "Installment Plans",
    "Investment Advisory",
    "Free Property Evaluation",
  ];

  const socialIcons = [
    { icon: Globe, label: "Facebook" },
    { icon: Heart, label: "Instagram" },
    { icon: Link2, label: "LinkedIn" },
    { icon: MessageCircle, label: "Twitter" },
  ];

  return (
    <footer className="bg-[#0B192C] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-xl font-bold">Prime Estate</span>
            </div>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              Your trusted real estate advisory platform since 2015. Licensed,
              verified, and committed to transparency in every deal.
            </p>
            <p className="text-sm text-slate-400 mb-4">
              Licensed: RDA/REDA/2015-XXX
            </p>
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-400">
                Mon - Sat: 9:00 AM - 8:00 PM
              </span>
            </div>
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => (
                <div
                  key={social.label}
                  className="rounded-lg bg-white/10 p-2 hover:bg-[#D4AF37] transition-colors cursor-pointer"
                >
                  <social.icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-[#D4AF37] cursor-pointer transition-colors"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                <span className="text-sm text-slate-300">
                  123 Main Boulevard, Gulberg III, Lahore, Pakistan
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                <span className="text-sm text-slate-300">
                  +92 300 123 4567
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                <span className="text-sm text-slate-300">
                  +92 300 987 6543
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                <span className="text-sm text-slate-300">
                  info@primeestate.pk
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Stay Updated</h3>
            <p className="text-sm text-slate-300 mb-4">
              Subscribe to get the latest property listings and market insights.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-slate-400 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none"
            />
            <button className="mt-3 bg-[#D4AF37] text-white rounded-xl px-6 py-3 font-semibold hover:bg-[#B89628] transition-colors w-full flex items-center justify-center gap-2">
              <ArrowRight className="w-4 h-4" />
              Subscribe
            </button>
            <div className="mt-4">
              <a
                href="#"
                className="text-sm text-[#D4AF37] hover:underline cursor-pointer flex items-center gap-1"
              >
                Book Office Visit
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-slate-400">
            &copy; 2024 Prime Estate. All rights reserved.
          </span>
          <span className="text-sm text-slate-400">
            Designed with &#10084; for Modern Real Estate
          </span>
        </div>
      </div>
    </footer>
  );
}
