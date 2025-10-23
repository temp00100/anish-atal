import { X } from "lucide-react";

export default function ServiceModal({ isOpen, onClose, service,  }) {
  const handleGetInTouch = () => {
    onClose();
    // Scroll to contact section after modal closes
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end md:items-center justify-center z-50 p-3 md:p-4">
      <div className="bg-white rounded-t-lg md:rounded-lg w-full md:max-w-5xl max-h-[90vh] md:max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 md:top-4 right-3 md:right-4 p-2 hover:bg-gray-100 rounded-full transition z-10"
          aria-label="Close modal"
        >
          <X size={24} className="text-foreground" />
        </button>

        <div className="flex flex-col p-4 md:p-8">
          {/* Image Section - Top */}
          <div className="grid place-items-center mb-4 md:mb-8 mt-8 md:mt-0">
             <img
              src={service?.imageUrl}
              alt={service?.title || "service image"}
              loading="lazy"
              decoding="async"
              className="w-full h-48 sm:h-56 md:h-72 lg:h-96 xl:h-[70vh] object-cover object-center rounded-lg"
            />
          </div>

          {/* Content Section - Middle */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6 flex-1">
            <div>
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 font-rubik">
                {service.title}
              </h2>
              <p className="text-muted-foreground mb-2 sm:mb-3 md:mb-4 leading-relaxed text-xs sm:text-sm md:text-base italic">
                {service.description}
              </p>
            </div>

            {/* Detailed Description */}
            <div>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6">
                {service.details}
              </p>
            </div>

            {/* What We Provide */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="font-bold text-foreground font-rubik text-xs sm:text-sm md:text-base lg:text-lg">What We Provide</h3>
              <ul className="space-y-1 md:space-y-2 text-muted-foreground text-xs sm:text-xs md:text-sm lg:text-base">
                {service.whatWeProvide && service.whatWeProvide.map((item, idx) => (
                  <li key={idx} className="grid grid-cols-[auto_1fr] gap-2 md:gap-3 items-start">
                    <span className="text-primary font-bold flex-shrink-0 text-sm sm:text-sm md:text-base">•</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Let's Build & Improve Further */}
            <div className="space-y-2 md:space-y-3 pt-2 sm:pt-3 md:pt-4 border-t border-border">
              <h3 className="font-bold text-foreground font-rubik text-xs sm:text-sm md:text-base lg:text-lg">Let's Build & Improve Further</h3>
              <ul className="space-y-1 md:space-y-2 text-muted-foreground text-xs sm:text-xs md:text-sm lg:text-base">
                <li className="grid grid-cols-[auto_1fr] gap-2 md:gap-3 items-start">
                  <span className="text-primary font-bold flex-shrink-0 text-sm sm:text-sm md:text-base">✓</span>
                  <span className="pt-0.5">Enhanced service quality and innovation</span>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-2 md:gap-3 items-start">
                  <span className="text-primary font-bold flex-shrink-0 text-sm sm:text-sm md:text-base">✓</span>
                  <span className="pt-0.5">Continuous training and skill development</span>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-2 md:gap-3 items-start">
                  <span className="text-primary font-bold flex-shrink-0 text-sm sm:text-sm md:text-base">✓</span>
                  <span className="pt-0.5">Latest equipment and technology integration</span>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-2 md:gap-3 items-start">
                  <span className="text-primary font-bold flex-shrink-0 text-sm sm:text-sm md:text-base">✓</span>
                  <span className="pt-0.5">Customer feedback-driven improvements</span>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-2 md:gap-3 items-start">
                  <span className="text-primary font-bold flex-shrink-0 text-sm sm:text-sm md:text-base">✓</span>
                  <span className="pt-0.5">Sustainable and eco-friendly practices</span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleGetInTouch}
              className="w-full px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg mt-3 sm:mt-4 md:mt-6"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
