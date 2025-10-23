import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-slate-800 to-slate-700 py-24 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight font-rubik">
            Atal Services – Your Trusted Service Experts
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
            24/7 Professional Support – Just a Call Away
          </p>
          
          <a
            href="tel:+917734077750"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:opacity-90 transition-opacity text-lg"
          >
            <Phone size={20} />
            +91-7734077750
          </a>
        </div>
      </div>
    </section>
  );
}
