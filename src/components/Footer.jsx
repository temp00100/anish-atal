import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 font-rubik">Atal Services</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Your trusted service provider. Delivering professional, reliable, and high-quality services across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg font-rubik">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-primary transition">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg font-rubik">Services</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
              <li><a href="#services" className="hover:text-primary transition">House Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary transition">Office Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary transition">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary transition">Sofa Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary transition">Kitchen Cleaning</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg font-rubik">Contact Info</h4>
            <div className="space-y-2 sm:space-y-3 text-gray-300 text-xs sm:text-sm">
              <div>
                <p className="font-semibold text-white mb-1 text-xs sm:text-sm">Phone</p>
                <a href="tel:+18001234567" className="text-xs sm:text-sm hover:text-primary transition">
                  +91-9982943996
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1 text-xs sm:text-sm">Email</p>
                <a href="mailto:info@atalservices.demo" className="text-xs sm:text-sm hover:text-primary transition">
                  info@atalservices.demo
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-primary transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm">
            <p>© {currentYear} Atal Services. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-xs sm:text-sm hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="text-xs sm:text-sm hover:text-primary transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
