import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-nrs-navy text-white py-2 px-4 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 gap-2 sm:gap-0">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+91 87142 81444</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>info@antesglobal.com</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/news-media" className="hover:text-nrs-light-blue transition-colors">
            News & Media
          </a>
          <a href="/careers" className="hover:text-nrs-light-blue transition-colors">
            Careers
          </a>
          <a href="/contacts" className="hover:text-nrs-light-blue transition-colors">
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
