import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Truck, Leaf } from "lucide-react";

const Home = () => {
  return (
    <section className="bg-[#F5F3EA] min-h-[90vh] flex flex-col items-center px-4 text-center font-body py-12">
      {/* Hero */}
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-[#3B3A36] leading-tight mb-4">
          Customize Your Stationery with Style
        </h1>
        <p className="text-[#6F4E37] text-lg sm:text-xl mb-6">
          Explore our wide selection of premium stationery — notebooks, pens, planners, and more — all customizable to fit your unique style.
        </p>
        <Link
          to="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow transition font-semibold text-sm"
        >
          Shop Now
        </Link>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl w-full">
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
