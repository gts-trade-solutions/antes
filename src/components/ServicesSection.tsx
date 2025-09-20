import { Card, CardContent } from "@/components/ui/card";
import refrigerationPlant from "@/assets/solution-blast-freezer.png";
import gasCompression from "@/assets/solution-turnkey.png";
import fluidChillers from "@/assets/solution-chiller.png";
import heroVideo from "/provide.mp4";



const ServicesSection = () => {
  const services = [
    {
      title: "Blast Freezers",
      description:
        "In cases where time and the timeliness of food are of priceless importance, our blast freezers do not disappoint. Intended to flash freeze products, they preserve nutrients, flavor, and shelf life. In particular, these freezers are perfect for businesses that value fast freezing and that's why all products stored in such a freezer remain as fresh as on the day they were picked.",
      image: refrigerationPlant,
      link: "/products-solutions/centralized-refrigeration-plants/",
    },
    {
      title: "Turnkey Cold Storage Solutions",
      description:
        "Let us take care of the details by availing of all of our comprehensive turnkey solution services. Whether it's a breeze concept, a breeze design, a breeze installation or just a breeze support, we're here to help. We design and develop systems for your specific needs and deliver to you a consistent and stable system that is turnkey and ready for operation upon your arrival.",
      image: gasCompression,
      link: "/products-solutions/gas-compression-package/",
    },
    {
      title: "Supermarket Display Chillers",
      description:
        "They are cut to become your brand, and your products should get the best display. When it comes to supermarket display chillers, they not only must cool the products but do so making them look mouthwatering. These chillers are impact-efficient in their installation with their energy conservation nature and easy maintenance, as they enhance the best appearances of your store layout.",
      image: fluidChillers,
      link: "/products-solutions/fluid-chillers-package/",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Full-width Video */}
        <div className="mb-12">
          {/* <h3 className="text-3xl font-bold text-nrs-navy mb-6 text-center">
            Services We Provided
          </h3> */}
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            {/* Background video */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/provide.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/provide.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Services We Provide
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
                Delivering innovative and sustainable cold storage solutions tailored to your needs.
              </p>
            </div>
          </div>


        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-lift card-shadow bg-white overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-nrs-navy mb-4 leading-tight">
                  <a
                    href={service.link}
                    className="hover:text-nrs-blue transition-colors"
                  >
                    {service.title}
                  </a>
                </h3>
                <p className="text-nrs-dark-gray leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
