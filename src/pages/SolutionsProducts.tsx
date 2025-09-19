import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import refrigerationPlant from "@/assets/refrigeration-plant.jpg";
import gasCompression from "@/assets/gas-compression.jpg";
import fluidChillers from "@/assets/fluid-chillers.jpg";

const SolutionsProducts = () => {
  const solutions = [
    {
      title: "CENTRALIZED REFRIGERATION PLANTS",
      description: "Since 1986, NRS offers a extensive menu of customized industrial cooling or freezing solutions to meet your budget or exacting needs. Our Centralized Refrigeration Systems include dedicated control packages that orchestrate your cooling needs from a central location with a variety of natural and low-GWP refrigerants.",
      image: refrigerationPlant,
      features: [
        "Customized cooling & freezing solutions",
        "Single location coordination", 
        "Power consumption minimization",
        "Easy equipment management",
        "Natural & low-GWP refrigerants"
      ]
    },
    {
      title: "GAS COMPRESSION PACKAGES",
      description: "From landfill, well-head and flue gas recovery, our Industrial Gas Compression Packages make it simple, cost effective way to operate natural gas applications. Our systems are designed for reliability and efficiency in various industrial environments.",
      image: gasCompression,
      features: [
        "Landfill gas recovery",
        "Well-head applications",
        "Flue gas recovery",
        "Cost-effective operation",
        "Industrial gas applications"
      ]
    },
    {
      title: "FLUID CHILLERS PACKAGE",
      description: "Our Fluid Chillers for Manufacturing Plants & Industrial Facilities Package can be designed to cool a variety of fluids such as water, glycols, ethanol or methanol. Perfect for precision cooling requirements in manufacturing processes.",
      image: fluidChillers,
      features: [
        "Water cooling systems",
        "Glycol cooling applications",
        "Ethanol & methanol cooling",
        "Manufacturing plant solutions",
        "Precision temperature control"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-nrs-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Solutions & <strong>Products</strong>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive industrial cooling solutions designed to meet your specific requirements and budget.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h2 className="text-3xl lg:text-4xl font-bold text-nrs-navy mb-6">
                    {solution.title}
                  </h2>
                  <p className="text-nrs-dark-gray leading-relaxed mb-8 text-lg">
                    {solution.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-nrs-navy mb-4">Key Features:</h3>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-nrs-dark-gray">
                          <div className="w-2 h-2 bg-nrs-blue rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-nrs-blue hover:bg-nrs-navy text-white px-8 py-3">
                    Learn More
                  </Button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg card-shadow">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-nrs-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-nrs-navy mb-4">
              Additional <strong>Services</strong>
            </h2>
            <p className="text-nrs-dark-gray leading-relaxed max-w-3xl mx-auto">
              Complete support services to ensure optimal performance of your cooling systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift card-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-nrs-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.14 2 5 5.14 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.14 15.86 2 12 2M12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-nrs-navy mb-4">Installation Services</h3>
                <p className="text-nrs-dark-gray leading-relaxed">
                  Professional installation ensuring optimal performance and safety compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-nrs-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7H18V6C18 3.79 16.21 2 14 2H10C7.79 2 6 3.79 6 6V7H5C3.9 7 3 7.9 3 9V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V9C21 7.9 20.1 7 19 7M10 4H14C15.1 4 16 4.9 16 6V7H8V6C8 4.9 8.9 4 10 4Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-nrs-navy mb-4">Maintenance & Support</h3>
                <p className="text-nrs-dark-gray leading-relaxed">
                  Comprehensive maintenance programs and field support services.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-nrs-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-nrs-navy mb-4">Custom Design</h3>
                <p className="text-nrs-dark-gray leading-relaxed">
                  Tailored engineering solutions to meet your specific operational requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsProducts;