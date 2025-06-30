import { Link } from "react-router-dom";
import { PenTool, Truck, Leaf } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F5F3EA] to-white pb-24 pt-16 px-4 font-body overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center z-10 relative">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-[#3B3A36] mb-4 leading-tight">
              Customize Your Stationery with Style
            </h1>
            <p className="text-[#6F4E37] text-lg sm:text-xl mb-6">
              Explore our wide selection of premium stationery — notebooks, pens, planners, and more — all customizable to fit your unique style.
            </p>
            <Link
              to="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow font-semibold text-sm"
            >
              Shop Now
            </Link>
          </div>

          {/* Image / Illustration */}
          <div className="hidden md:block">
            <img
              src="/hero-stationery.svg"
              alt="Stationery illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* SVG Blob Background at Bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L40,133.3C80,139,160,149,240,170.7C320,192,400,224,480,240C560,256,640,256,720,250.7C800,245,880,235,960,213.3C1040,192,1120,160,1200,133.3C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Feature
            icon={<PenTool className="text-blue-600" size={28} />}
            title="Custom Engraving"
            description="Make it yours with names, logos, and styles that speak to you."
          />
          <Feature
            icon={<Truck className="text-blue-600" size={28} />}
            title="Fast Delivery"
            description="Reliable delivery anywhere in Kenya within 2-5 business days."
          />
          <Feature
            icon={<Leaf className="text-green-600" size={28} />}
            title="Eco-Friendly"
            description="Sustainably sourced materials and recyclable packaging."
          />
        </div>
      </section>
    </>
  );
};

const Feature = ({ icon, title, description }) => (
  <Card className="text-left border border-gray-200">
    <CardHeader className="flex flex-row items-center gap-3 pb-2">
      {icon}
      <CardTitle className="text-lg font-semibold text-[#3B3A36]">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-[#6F4E37]">{description}</CardContent>
  </Card>
);

export default Home;
