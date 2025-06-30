import { Link } from "react-router-dom";
import { PenTool, Truck, Leaf, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="font-body">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#F5F3EA] to-white pt-20 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
          {/* Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-[#3B3A36] leading-tight mb-4">
              Customize Your Stationery with Style
            </h1>
            <p className="text-[#6F4E37] text-lg sm:text-xl mb-6">
              Explore our premium notebooks, pens, and planners — all customizable for your personal or business needs.
            </p>
            <Link
              to="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow font-semibold text-sm"
            >
              Shop Now
            </Link>
          </div>

          {/* Image */}
          <div className="hidden md:block">
            <img src="/hero-stationery.svg" alt="Stationery" className="w-full max-w-md" />
          </div>
        </div>

        {/* Decorative SVG Bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L40,197.3C80,171,160,117,240,112C320,107,400,149,480,165.3C560,181,640,171,720,165.3C800,160,880,160,960,144C1040,128,1120,96,1200,101.3C1280,107,1360,149,1400,170.7L1440,192V320H0Z"
          />
        </svg>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6">
          <Feature
            icon={<PenTool size={28} className="text-blue-600" />}
            title="Custom Engraving"
            description="Names, logos, and styles that reflect your personality."
          />
          <Feature
            icon={<Truck size={28} className="text-blue-600" />}
            title="Fast Delivery"
            description="Nationwide shipping in 2–5 business days."
          />
          <Feature
            icon={<Leaf size={28} className="text-green-600" />}
            title="Eco Materials"
            description="All products use sustainable, recyclable materials."
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#F9F9F6] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-display font-bold text-[#3B3A36] mb-4">What Our Customers Say</h2>
          <p className="text-[#6F4E37]">Real feedback from stationery lovers across Kenya.</p>
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
          <h2 className="text-2xl font-bold text-[#3B3A36] mb-4">Stay Updated</h2>
          <p className="text-[#6F4E37] mb-6">
            Join our newsletter and be the first to know about new arrivals and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Input
              type="email"
              placeholder="you@example.com"
              className="w-full sm:w-auto"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </main>
  );
};

const Feature = ({ icon, title, description }) => (
  <Card className="text-left border border-gray-200">
    <CardHeader className="flex items-center gap-3 pb-2">{icon}
      <CardTitle className="text-lg font-semibold text-[#3B3A36]">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-[#6F4E37]">{description}</CardContent>
  </Card>
);

const Testimonial = ({ name, quote }) => (
  <Card className="bg-white border">
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
