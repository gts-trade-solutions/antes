import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo (1).png";
const Footer = () => {
  return (
    <footer className="bg-nrs-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  {/* Use imported logo */}
                  <img
                    src={logo}   // ✅ now uses imported logo
                    alt="Antes Logo"
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Antes Corporation 1/844-a3, First Floor, Basil Building, H.R.Road, Westhill, Calicut, Kerala - 673005
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-nrs-blue" />
                <span className="text-sm">+91 87142 81444
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-nrs-blue" />
                <span className="text-sm">info@antesglobal.com
                </span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-nrs-blue" />
                <span className="text-sm">Mon - Fri: 8:30am - 5:00pm</span>
              </div> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-nrs-blue transition-colors">Centralized Refrigeration Plants</a></li>
              <li><a href="#" className="text-gray-300 hover:text-nrs-blue transition-colors">Gas Compression Packages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-nrs-blue transition-colors">Fluid Chillers Package</a></li>
              <li><a href="#" className="text-gray-300 hover:text-nrs-blue transition-colors">Design & Planning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-nrs-blue transition-colors">Installation Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-nrs-blue transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-nrs-blue transition-colors">Company</a></li>
              <li><a href="#" className="text-gray-300 hover:text-nrs-blue transition-colors">Solutions & Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-nrs-blue transition-colors">Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-nrs-blue transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2022 Antes . All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;