import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Priya S.",
    location: "Jaipur",
    rating: 5,
    text: "The team did an amazing job! My house has never looked this clean. Very professional and punctual."
  },
  {
    name: "Ramesh Kumar",
    location: "Jaipur",
    rating: 5,
    text: "I love their eco-friendly products and attention to detail. Highly recommended for anyone in Jaipur!"
  },
  {
    name: "Neha M.",
    location: "Jaipur",
    rating: 5,
    text: "Flexible scheduling and great service. They always leave my home spotless and organized."
  }
];

function TestimonialCard({ testimonial }) {
  return (
    <div
      className="bg-white rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition flex-shrink-0"
      style={{ minWidth: "100%" }}
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
        "{testimonial.text}"
      </p>

      <div>
        <p className="text-sm sm:text-base font-bold text-foreground">{testimonial.name}</p>
        <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
      </div>
    </div>
  );
}

function MobileHorizontalScroll() {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-6 pb-4" style={{ width: "fit-content" }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={{ minWidth: "calc(100vw - 32px)" }} className="px-0">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}

function DesktopAutoScroll() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-primary text-white rounded-full p-2 hover:opacity-90 transition-opacity disabled:opacity-50 hidden lg:flex"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-primary text-white rounded-full p-2 hover:opacity-90 transition-opacity disabled:opacity-50 hidden lg:flex"
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-rubik">
            People Say The Nicest Things
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to serve happy clients who trust us with their homes. Here's what they have to say:
          </p>
        </div>

        <div className="md:hidden">
          <MobileHorizontalScroll />
        </div>

        <div className="hidden md:block">
          <DesktopAutoScroll />
        </div>
      </div>
    </section>
  );
}
