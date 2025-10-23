import { useState } from "react";
import { Phone, Mail, User } from "lucide-react";

export default function QuickService() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-rubik">
              Quick Service Request
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Schedule an on-site inspection or get a quick quote for your cleaning needs. Our team will contact you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">Call Us Anytime</h4>
                  <a href="tel:+18001234567" className="text-xs sm:text-sm md:text-base text-primary hover:opacity-80">
                    +91-9982943996
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">Email Us</h4>
                  <a href="mailto:info@atalservices.demo" className="text-xs sm:text-sm md:text-base text-primary hover:opacity-80">
                    info@atalservices.demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8 border border-border">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've received your request and will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition"
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition"
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition"
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition"
                  >
                    <option value="">Select a service</option>
                    <option value="House Cleaning">House Cleaning</option>
                    <option value="Office Cleaning">Office Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Sofa Cleaning">Sofa Cleaning</option>
                    <option value="Kitchen Cleaning">Kitchen Cleaning</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your cleaning needs"
                    rows="3"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Send Request
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
