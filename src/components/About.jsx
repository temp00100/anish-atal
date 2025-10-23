export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-rubik">
              About Atal Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              Atal Services is a trusted provider specializing in comprehensive professional service solutions for homes, offices, and businesses.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              With modern equipment, professionally trained staff, and customer-focused solutions, we deliver thorough and reliable service tailored to your specific needs.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              We're committed to providing exceptional services for homes, offices, businesses, and more. Your satisfaction is our guarantee.
            </p>
            <a
              href="tel:+91 7734077750"
              className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4 font-rubik">10+</div>
              <p className="text-xl text-foreground font-medium mb-6">Years of Excellence</p>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Professional & Trained Staff</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Eco-Friendly Products</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">24/7 Service Availability</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
