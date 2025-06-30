import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-[#f5f5f5] pt-12 pb-6 px-6 font-body">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-3 font-display text-[#F4A261]">
            elimu<span className="text-white">emart</span>
          </h3>
          <p className="text-sm text-gray-300">
            Your trusted partner for premium, customizable stationery in Kenya.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-[#F4A261] transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-[#F4A261] transition">Products</Link></li>
            <li><Link to="/login" className="hover:text-[#F4A261] transition">Login</Link></li>
            <li><Link to="/register" className="hover:text-[#F4A261] transition">Register</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Contact</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li className="flex items-center gap-2">
              <Phone size={14} /> +254 712 345 678
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} /> support@elimuemart.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} /> Nairobi, Kenya
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Newsletter</h4>
          <p className="text-sm text-gray-300 mb-3">
            Stay up to date with our latest offers and arrivals.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="text-sm bg-white text-black placeholder:text-gray-600"
            />
            <Button
              size="sm"
              className="bg-[#F4A261] hover:bg-[#e88a47] text-white transition"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} elimu<span className="text-[#F4A261]">emart</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
