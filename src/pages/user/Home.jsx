import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-[#F5F3EA] min-h-[80vh] flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#3B3A36] leading-tight mb-4">
        Customize Your Stationery with Style
      </h1>
      <p className="text-[#6F4E37] text-lg sm:text-xl max-w-xl mb-6">
        Explore our wide selection of premium stationery — notebooks, pens, planners, and more — all customizable to fit your unique style.
      </p>
      <Link
        to="/products"
        className="bg-[#6F4E37] text-white px-6 py-3 rounded shadow hover:bg-[#5a3e2b] transition"
      >
        Shop Now
      </Link>

      {/* Features */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl w-full">
        <Feature
          icon="🖋️"
          title="Custom Engraving"
          description="Make it yours with names, logos, and styles that speak to you."
        />
        <Feature
          icon="📦"
          title="Fast Delivery"
          description="Reliable delivery anywhere in Kenya within 2-5 business days."
        />
        <Feature
          icon="🌿"
          title="Eco-Friendly"
          description="Sustainably sourced materials and recyclable packaging."
        />
      </div>
    </section>
  );
};

const Feature = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-md p-6 text-left border border-[#E7E0CE]">
    <div className="text-3xl mb-2">{icon}</div>
    <h3 className="text-xl font-semibold text-[#3B3A36] mb-1">{title}</h3>
    <p className="text-[#6F4E37] text-sm">{description}</p>
  </div>
);

export default Home;
