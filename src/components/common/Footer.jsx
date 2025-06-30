import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#3B3A36] text-[#F5F3EA] pt-12 pb-6 px-6 font-body">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-bold mb-3 font-display text-[#F5F3EA]">
            elimu<span className="text-[#D6CBB6]">emart</span>
          </h3>
          <p className="text-sm text-[#D6CBB6]">
            Your trusted partner for premium, customizable stationery in Kenya.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2 text-[#F5F3EA]">Quick Links</h4>
          <ul className="space-y-1 text-sm text-[#D6CBB6]">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/register" className="hover:underline">Register</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-2 text-[#F5F3EA]">Contact</h4>
          <ul className="text-sm text-[#D6CBB6] space-y-1">
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
          <h4 className="font-semibold mb-2 text-[#F5F3EA]">Newsletter</h4>
          <p className="text-sm text-[#D6CBB6] mb-3">
            Stay up to date with our latest offers and arrivals.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="text-sm bg-[#F5F3EA] text-black placeholder:text-gray-600"
            />
            <Button size="sm" variant="secondary" className="bg-[#D6CBB6] text-[#3B3A36]">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#D6CBB6] mt-10 pt-4 text-center text-xs text-[#D6CBB6]">
        &copy; {new Date().getFullYear()} elimu
        <span className="text-[#F5F3EA]">emart</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
