import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Dutch Lady Milk Industries (M) Sdn Bhd",
      subtitle: "Ammonia Refrigeration Systems",
      location: "Bandar Enstek, Negeri Sembilan",
      year: "2024", 
      description: "Complete ammonia refrigeration system installation for one of Malaysia's leading dairy companies, ensuring optimal temperature control for dairy processing operations.",
      image: "/api/placeholder/400/300"
    },
    {
      id: "02", 
      title: "Baskin Robbins Sdn Bhd",
      subtitle: "Vilter Compressor Unit",
      location: "Bandar Serenia, Selangor",
      year: "2023",
      description: "Installation of specialized Vilter compressor unit for ice cream manufacturing facility, providing precise temperature control for premium ice cream production.",
      image: "/api/placeholder/400/300"
    },
    {
      id: "03",
      title: "Big Blue Logistic Corporation – Big Blue 7",
      subtitle: "Ammonia Refrigeration Systems", 
      location: "Cebu, Philippines",
      year: "2022",
      description: "International project delivering comprehensive ammonia refrigeration systems for large-scale cold storage facility in the Philippines.",
      image: "/api/placeholder/400/300"
    },
    {
      id: "04",
      title: "HAVI Logistics Sdn Bhd",
      subtitle: "Ammonia Refrigeration Systems",
      location: "Bukit Raja, Klang",
      year: "2020", 
      description: "Advanced refrigeration systems for major logistics provider, ensuring optimal cold chain management for food distribution operations.",
      image: "/api/placeholder/400/300"
    },
    {
      id: "05",
      title: "Golden Fresh Sdn Bhd",
      subtitle: "Ammonia Refrigeration Systems",
      location: "Penang",
      year: "2019",
      description: "Comprehensive refrigeration solution for fresh produce storage and distribution, maintaining optimal freshness throughout the supply chain.",
      image: "/api/placeholder/400/300"
    },
    {
      id: "06",
      title: "Big Blue Logistic",
      subtitle: "Refrigeration Systems For Fresh DC",
      location: "Kajang, Selangor",
      year: "2018",
      description: "State-of-the-art refrigeration systems for fresh distribution center, supporting efficient cold chain logistics operations.",
      image: "/api/placeholder/400/300"
    },
    {
      id: "07",
      title: "GCH-Retail (M) Sdn Bhd",
      subtitle: "Refrigeration Systems",
      location: "Giant – GCH Retail",
      year: "2017",
      description: "Retail refrigeration solutions for major supermarket chain, ensuring optimal product preservation and energy efficiency.",
      image: "/api/placeholder/400/300"
    },
    {
      id: "08",
      title: "SK Cold Chain Solutions Sdn Bhd",
      subtitle: "Ammonia Refrigeration Equipment",
      location: "Selayang, Selangor", 
      year: "2016 | 2019",
      description: "Multi-phase ammonia refrigeration equipment installation and upgrade project, enhancing cold chain capabilities for growing operations.",
      image: "/api/placeholder/400/300"
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
            Our <strong>Projects</strong>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Showcasing our successful industrial cooling solutions across Malaysia and Southeast Asia.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h5 className="text-nrs-blue font-semibold text-sm uppercase mb-2">
              PROJECT PORTFOLIO
            </h5>
            <h2 className="text-4xl lg:text-5xl font-bold text-nrs-navy mb-6">
              Successful <strong>implementations</strong>
            </h2>
            <p className="text-nrs-dark-gray leading-relaxed max-w-4xl mx-auto">
              We take pride in our track record of successful projects across various industries, from dairy processing to logistics, retail, and manufacturing. Each project showcases our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover-lift card-shadow bg-white overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-nrs-navy to-nrs-blue">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/20">
                      {project.id}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-2xl font-bold text-nrs-blue">
                      {project.id}
                    </div> 
                  </div>
                  
                  <h3 className="text-xl font-bold text-nrs-navy mb-2">
                    {project.title}
                  </h3>
                  <h4 className="text-lg font-medium text-nrs-text-dark mb-3">
                    {project.subtitle} →
                  </h4>
                  
                  <p className="text-nrs-dark-gray text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-1 text-sm text-nrs-dark-gray border-t pt-4">
                    <p className="font-semibold">{project.location}</p>
                    <p>{project.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-nrs-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-nrs-navy mb-6">
            Ready to Start Your <strong>Project?</strong>
          </h2>
          <p className="text-nrs-dark-gray leading-relaxed max-w-3xl mx-auto mb-8">
            Let us help you create a successful industrial cooling solution tailored to your specific needs and requirements.
          </p>
          <Button 
            size="lg" 
            className="bg-nrs-blue hover:bg-nrs-navy text-white px-8 py-3 text-lg font-semibold"
          >
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;