import { useState, useMemo } from "react";
import { Menu, X, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSeed = useMemo(() => Math.random().toString(36).substring(7), []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-border">
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-border hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91-9982943996</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Sai Dham Colony, kukas, Jaipur, 302028</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={`/icon.png`}
              alt="Atal Services Logo"
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full"
            />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary"><p>Atal Services</p></h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#home" className="text-sm lg:text-base text-foreground hover:text-primary transition font-medium">
              Home
            </a>
            <a href="#about" className="text-sm lg:text-base text-foreground hover:text-primary transition font-medium">
              About
            </a>
            <a href="#services" className="text-sm lg:text-base text-foreground hover:text-primary transition font-medium">
              Services
            </a>
            <a href="#contact" className="text-sm lg:text-base text-foreground hover:text-primary transition font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="tel:+18001234567"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <Phone size={18} />
            Book A Call
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              <a href="#home" className="text-foreground hover:text-primary transition font-medium">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition font-medium">
                About
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition font-medium">
                Services
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition font-medium">
                Contact
              </a>
              <a
                href="tel:+18001234567"
                className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full font-medium hover:opacity-90 transition-opacity w-fit"
              >
                <Phone size={18} />
                Book A Call
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
