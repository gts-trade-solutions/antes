import { CheckHexagon } from "lucide-react"; // you can use any icon or custom SVG

const CompanyIntroSection = () => {
  const points = [
    "Highly skilled & competent team, involving consultancy, design, planning, supply, execution & after sales service.",
    "Professionals with Industry experience of more than three decades.",
    "Catering to the wide segments of Industrial refrigeration requirements for temperature range of +25 Deg C to -40 Deg C.",
    "Excellent after sales service support.",
    "Good Industry references & repeat customers.",
    "Innovative & energy-efficient refrigeration technologies for sustainable operations.", // ✅ New Point
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-white via-nrs-light-blue/10 to-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-nrs-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-nrs-navy/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h5 className="text-nrs-blue font-semibold text-xl uppercase tracking-wide mb-3">
            Why Choose Us
          </h5>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-nrs-navy leading-tight">
            Your Trusted Cold Storage Supplier
          </h2>
          <p className="text-nrs-dark-gray mt-5 text-lg leading-relaxed">
            Quality, reliability, and customer satisfaction are values we hold as a company,
            making us your preferred cold storage solution provider.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition duration-300 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-nrs-blue text-white group-hover:scale-110 transition-transform duration-300">
                  {/* Hexagon shape */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 2 2 7v10l10 5 10-5V7z" />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <p className="text-nrs-dark-gray text-base leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroSection;
