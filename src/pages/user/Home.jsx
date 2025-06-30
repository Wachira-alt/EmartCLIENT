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
      {/* 🔥 Full-Screen Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F5F3EA] to-white min-h-screen flex items-center px-4 font-body overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center w-full z-10">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-[#3B3A36] mb-4 leading-tight">
              Customize Your Stationery with Style
            </h1>
            <p className="text-[#6F4E37] text-lg sm:text-xl mb-6 max-w-lg">
              Explore our wide selection of premium stationery — notebooks, pens, planners, and more — all customizable to fit your unique style.
            </p>
            <Link
              to="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow font-semibold text-sm"
            >
              Shop Now
            </Link>
          </div>

          {/* Illustration */}
          <div className="hidden md:block">
            <img
              src="/hero-stationery.svg"
              alt="Stationery illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* SVG Bottom Blob */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40 pointer-events-none"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,192L60,176C120,160,240,128,360,133.3C480,139,600,181,720,197.3C840,213,960,203,1080,192C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* 🧩 Features */}
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
