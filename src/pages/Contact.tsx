import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-nrs-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact <strong>Us</strong>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team of industrial cooling specialists. We're here to help with your next project.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-nrs-navy mb-6">
                Send us a Message
              </h2>
              <p className="text-nrs-dark-gray mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible to discuss your industrial cooling requirements.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-nrs-navy mb-2">
                      First Name *
                    </label>
                    <Input type="text" required className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-nrs-navy mb-2">
                      Last Name *
                    </label>
                    <Input type="text" required className="w-full" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-nrs-navy mb-2">
                    Email Address *
                  </label>
                  <Input type="email" required className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-nrs-navy mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-nrs-navy mb-2">
                    Company Name
                  </label>
                  <Input type="text" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-nrs-navy mb-2">
                    Service Required
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nrs-blue">
                    <option value="">Select a service</option>
                    <option value="centralized-refrigeration">Centralized Refrigeration Plants</option>
                    <option value="gas-compression">Gas Compression Packages</option>
                    <option value="fluid-chillers">Fluid Chillers Package</option>
                    <option value="consultation">Consultation</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-nrs-navy mb-2">
                    Message *
                  </label>
                  <Textarea 
                    required 
                    className="w-full min-h-32" 
                    placeholder="Please describe your project requirements or questions..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-nrs-blue hover:bg-nrs-navy text-white py-3 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-nrs-navy mb-6">
                Get in Touch
              </h2>
              <p className="text-nrs-dark-gray mb-8 leading-relaxed">
                Reach out to us directly through any of the channels below. Our team is ready to assist you with your industrial cooling needs.
              </p>

              <div className="space-y-6">
                <Card className="hover-lift card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-nrs-blue w-12 h-12 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-nrs-navy">Phone</h3>
                        <p className="text-nrs-dark-gray">+91 87142 81444
</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-nrs-blue w-12 h-12 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-nrs-navy">Email</h3>
                        <p className="text-nrs-dark-gray">info@antesglobal.com
</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift card-shadow">
                  <CardContent className="p-6">
                    {/* <div className="flex items-center space-x-4">
                      <div className="bg-nrs-blue w-12 h-12 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-nrs-navy">Business Hours</h3>
                        <p className="text-nrs-dark-gray">Mon - Fri: 8:30am - 5:00pm</p>
                        <p className="text-nrs-dark-gray text-sm">Saturday & Sunday: Closed</p>
                      </div>
                    </div> */}
                  </CardContent>
                </Card>

                <Card className="hover-lift card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-nrs-blue w-12 h-12 rounded-full flex items-center justify-center mt-1">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-nrs-navy">Address</h3>
                        <p className="text-nrs-dark-gray leading-relaxed">
                          Antes Process Systems Sdn Bhd<br />
                          Industrial Cooling Specialists<br />
                          Kuala Lumpur, Malaysia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-nrs-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-nrs-navy mb-4">
              Visit Our <strong>Office</strong>
            </h2>
            <p className="text-nrs-dark-gray leading-relaxed max-w-3xl mx-auto">
              We welcome visitors to our facilities. Schedule an appointment to see our capabilities firsthand.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="hover-lift card-shadow">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-nrs-navy to-nrs-blue rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <h3 className="text-2xl font-semibold mb-2">Interactive Map</h3>
                      <p className="opacity-90">Location details available upon contact</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;