"use client";

const brands = [
  { name: "Emerson", logo: "/brands/brand-image-one.png" },
  { name: "Danfoss", logo: "/brands/brand-image-two.png" },
  { name: "Bitzer", logo: "/brands/brand-image-three.png" },
  { name: "Fascol", logo: "/brands/brand-image-four.png" },
  { name: "LU-VE", logo: "/brands/brand-image-five.png" },
  { name: "Hyundai", logo: "/brands/brand-image-six.png" },
  { name: "Linde", logo: "/brands/brand-image-seven.png" },
  { name: "Isoflex", logo: "/brands/brand-image-eight.png" },
  { name: "Metaflex", logo: "/brands/brand-image-nine.png" },
  { name: "Nilkamal", logo: "/brands/brand-image-ten.png" },
  { name: "Kingspan", logo: "/brands/brand-image-eleven.png" },
  { name: "Dorin", logo: "/brands/dorin.jpg" },
  { name: "Bock", logo: "/brands/bock.svg" },
  { name: "Güntner", logo: "/brands/Güntner.png" },
  { name: "Alfa Laval", logo: "/brands/alfalaval.svg" },
  { name: "Zanotti", logo: "/brands/zanotti.png" },
  { name: "Daikin", logo: "/brands/daikin.png" },
];

const BrandsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-nrs-light-blue/5 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Title + Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-nrs-navy mb-6">
            Trusted <span className="text-nrs-blue">Brands</span> We Deal With
          </h2>
          <p className="text-nrs-dark-gray max-w-3xl mx-auto leading-relaxed text-lg">
            We work with industry-leading brands to deliver advanced, reliable, and innovative 
            cold storage solutions tailored to your needs.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center h-28 p-6 rounded-xl bg-white/80 backdrop-blur shadow-md hover:shadow-2xl border border-gray-100 transition duration-500 group animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Border Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-nrs-blue transition duration-500"></div>

              {/* Logo (always colorful) */}
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 group-hover:scale-110 transition duration-500 relative z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
