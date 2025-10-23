import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-rubik">
            Get In Touch
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
            Contact us for all your cleaning service needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-border text-center">
            <div className="mb-3 sm:mb-4 flex justify-center">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="text-primary" size={24} />
              </div>
            </div>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-foreground mb-1 sm:mb-2">Call Us</h3>
            <a href="tel:+91 7734077750" className="text-xs sm:text-sm md:text-base text-primary hover:opacity-80 transition break-all">
              +91 7734077750
            </a>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-border text-center">
            <div className="mb-3 sm:mb-4 flex justify-center">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="text-primary" size={24} />
              </div>
            </div>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-foreground mb-1 sm:mb-2">Email Us</h3>
            <a href="mailto:info@atalservices.demo" className="text-xs sm:text-sm md:text-base text-primary hover:opacity-80 transition break-all">
              info@atalservices.demo
            </a>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-border text-center">
            <div className="mb-3 sm:mb-4 flex justify-center">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="text-primary" size={24} />
              </div>
            </div>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-foreground mb-1 sm:mb-2">Visit Us</h3>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
              Sai Dham Colony, kukas, Jaipur, 302028
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-border text-center">
            <div className="mb-3 sm:mb-4 flex justify-center">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="text-primary" size={24} />
              </div>
            </div>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-foreground mb-1 sm:mb-2">Availability</h3>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
              24/7 Support<br />
              Available on Weekends<br />
              Quick Response
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
