import { Link } from "react-router-dom";
import { PenTool, Truck, Leaf, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="font-body">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#FFF8F0] to-white pt-24 pb-40 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
          {/* Left Text */}
          <div>
            <h1 className="text-5xl font-bold font-display text-[#1C6DD0] leading-tight mb-4 drop-shadow-sm">
              Customize Your Stationery with Style
            </h1>
            <p className="text-[#3B3A36] text-lg sm:text-xl mb-6">
              Premium notebooks, pens, and planners tailored for your school, office, or gifting needs.
            </p>
            <Link
              to="/products"
              className="inline-block bg-[#F4A261] hover:bg-[#e99658] text-white px-6 py-3 rounded-lg shadow-md font-semibold text-sm transition"
            >
               Shop Now
            </Link>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img src="/https://i.pinimg.com/1200x/d5/bc/76/d5bc76c659c1b8ba0ccd64523de9b274.jpg" alt="Stationery" className="w-full max-w-md drop-shadow-md" />
          </div>
        </div>

        {/* SVG Separator */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="https://i.pinimg.com/1200x/d5/bc/76/d5bc76c659c1b8ba0ccd64523de9b274.jpg"
          />
        </svg>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6">
          <Feature
            icon={<PenTool size={28} className="text-[#F4A261]" />}
            title="Custom Engraving"
            description="Add your name, logo, or message to any product."
          />
          <Feature
            icon={<Truck size={28} className="text-[#F4A261]" />}
            title="Fast Delivery"
            description="Nationwide shipping in 2–5 business days."
          />
          <Feature
            icon={<Leaf size={28} className="text-green-600" />}
            title="Eco-Friendly"
            description="We use sustainable materials and recyclable packaging."
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#FAF9F6] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-display text-[#1C6DD0] mb-2">What Our Customers Say</h2>
          <p className="text-[#3B3A36]">Real stories from students, creatives, and professionals like you.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Testimonial
            name="Diana"
            quote="Absolutely loved the engraved notebooks. Fast shipping and great quality!"
          />
          <Testimonial
            name="Kevin"
            quote="The customization options are awesome. I’ve used Elimu Emart for all my gifting."
          />
          <Testimonial
            name="Mwangi"
            quote="Eco-friendly and elegant. Their planners are perfect for my daily work."
          />
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1C6DD0] mb-4 font-display">Stay Updated</h2>
          <p className="text-[#3B3A36] mb-6">
            Subscribe to get the latest on new products, offers, and events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Input
              type="email"
              placeholder="you@example.com"
              className="w-full sm:w-auto"
            />
            <Button
              type="submit"
              className="bg-[#F4A261] hover:bg-[#e99658] text-white"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

// Feature Card Component
const Feature = ({ icon, title, description }) => (
  <Card className="text-left border border-[#E7E0CE] hover:shadow-md transition-all duration-200">
    <CardHeader className="flex items-center gap-3 pb-2">
      {icon}
      <CardTitle className="text-lg font-semibold text-[#3B3A36]">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-[#6F4E37]">{description}</CardContent>
  </Card>
);

// Testimonial Card
const Testimonial = ({ name, quote }) => (
  <Card className="bg-white border shadow-sm">
    <CardContent className="p-6">
      <p className="text-sm text-[#3B3A36] italic mb-2">"{quote}"</p>
      <div className="flex items-center gap-2 mt-2">
        <Star className="text-yellow-500" size={16} />
        <span className="font-semibold text-sm text-[#6F4E37]">{name}</span>
      </div>
    </CardContent>
  </Card>
);

export default Home;
