import { useState } from "react";
import { Home, UtensilsCrossed, Droplet, Bed, Sofa, Building2 } from "lucide-react";
import ServiceModal from "./ServiceModal";

const services = [
  {
    icon: Home,
    title: "House Cleaning Service",
    imageUrl: "/house-cleaning.jpeg",
    description: "Comprehensive residential cleaning for a spotless home",
    details: "Our House Cleaning Service is designed to transform your living space into a pristine, healthy environment. We understand that a clean home is a happy home, and our expert team is committed to delivering exceptional results every time. From dusting and vacuuming to floor polishing and window cleaning, we handle every aspect of your home's cleanliness with meticulous attention to detail.",
    whatWeProvide: [
      "Complete floor cleaning and maintenance",
      "Dusting of all surfaces and furniture",
      "Window and glass cleaning",
      "Kitchen and bathroom sanitization",
      "Bed sheet and curtain cleaning",
      "Carpet and upholstery care"
    ]
  },
  {
    icon: Bed,
    title: "Bedroom Cleaning Service",
    imageUrl: "/images/bedroomCleaning.jpeg",
    description: "Thorough bedroom cleaning and sanitization",
    details: "Create a peaceful sanctuary with our specialized Bedroom Cleaning Service. A clean bedroom promotes better sleep and overall wellness. Our trained professionals use eco-friendly products to ensure a healthy environment for you and your family, removing allergens, dust mites, and bacteria that accumulate over time.",
    whatWeProvide: [
      "Deep dusting of all surfaces",
      "Bed linens and mattress cleaning",
      "Floor vacuuming and polishing",
      "Wardrobe and cabinet organization",
      "Allergen removal treatment",
      "Fresh scent application"
    ]
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchen Cleaning Service",
    description: "Professional kitchen deep cleaning and degreasing",
    details: "The kitchen is the heart of your home, and it deserves professional attention. Our Kitchen Cleaning Service tackles the toughest challenges, from grease-stained stovetops to sparkling countertops. We use food-safe, eco-friendly products to ensure your cooking space is not just clean, but also hygienic and safe for food preparation.",
    whatWeProvide: [
      "Grease removal from stovetops and walls",
      "Sink and faucet polishing",
      "Cabinet interior and exterior cleaning",
      "Appliance sanitization",
      "Floor deep cleaning and sealing",
      "Backsplash and tile cleaning"
    ]
  },
  {
    icon: Droplet,
    title: "Bathroom Cleaning Service",
    description: "Complete bathroom sanitation and hygiene solutions",
    details: "Bathrooms require special care and attention to maintain hygiene standards. Our Bathroom Cleaning Service ensures every corner is sanitized and sparkling. We focus on eliminating harmful bacteria, mold, and mildew while leaving your bathroom fresh, safe, and inviting for your family and guests.",
    whatWeProvide: [
      "Toilet bowl and seat sanitization",
      "Shower and bathtub scrubbing",
      "Mirror and glass polishing",
      "Tile grout cleaning",
      "Mold and mildew removal",
      "Deodorizing and disinfection"
    ]
  },
  {
    icon: Sofa,
    title: "Sofa Dry Cleaning",
    description: "Expert fabric care and upholstery cleaning",
    details: "Your furniture deserves expert care to maintain its beauty and longevity. Our Sofa Dry Cleaning Service uses advanced techniques and specialized solutions to remove deep-seated dirt, stains, and odors without damaging your precious upholstery. Trust us to restore your furniture to its original pristine condition.",
    whatWeProvide: [
      "Professional fabric analysis and care",
      "Deep stain removal treatment",
      "Dust and allergen extraction",
      "Odor elimination",
      "Color protection application",
      "Protective coating for future stain resistance"
    ]
  },
  {
    icon: Building2,
    title: "Office Cleaning Service",
    description: "Professional commercial cleaning for workspaces",
    details: "A clean office boosts productivity and creates a positive impression on clients and employees. Our Office Cleaning Service is tailored to minimize disruption to your business operations. We maintain the highest standards of cleanliness using professional-grade equipment and eco-friendly products suitable for commercial environments.",
    whatWeProvide: [
      "Daily floor cleaning and maintenance",
      "Desk and furniture sanitization",
      "Restroom and break room cleaning",
      "Window and glass cleaning",
      "Waste management and recycling setup",
      "Customizable cleaning schedules"
    ]
  }
];

// Array of random image URLs using picsum.photos
const getRandomImage = (index) => {
  const imageId = Math.floor(Math.random() * 1000) + index * 100;
  return `https://picsum.photos/400/400?random=${imageId}`;
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  // const [selectedImage, setSelectedImage] = useState(null);

  const handleLearnMore = (service, index) => {
    setSelectedService(service);
    // setSelectedImage(getRandomImage(index));
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    // setSelectedImage(null);
  };

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wide">Our Services</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 font-rubik">
            We Provide Best Cleaning Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow border border-border"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3 font-rubik">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>
                <button
                  onClick={() => handleLearnMore(service, index)}
                  className="text-xs sm:text-sm md:text-base text-primary font-semibold hover:opacity-80 transition cursor-pointer"
                >
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8 font-rubik">Additional Services Available</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Mall Cleaning",
              "Full House Cleaning",
              "Home Deep Cleaning",
              "Carpet Cleaning",
              "Window Cleaning",
              "Post-Construction Cleaning"
            ].map((service, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg border border-border hover:border-primary transition"
              >
                <span className="text-foreground font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={selectedService !== null}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </section>
  );
}
