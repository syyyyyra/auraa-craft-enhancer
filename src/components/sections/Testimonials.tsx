import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with AURAA transformed our brand completely. They understood our vision and elevated it beyond what we imagined.",
    author: "Sarah",
    role: "Founder of MERAKI",
    rating: 5,
  },
  {
    quote: "The attention to detail is extraordinary. Every label, every box — everything tells our story perfectly.",
    author: "Youssef",
    role: "CEO of VESPERA",
    rating: 5,
  },
  {
    quote: "AURAA doesn't just design, they create experiences. Our customers constantly compliment our packaging.",
    author: "Amina",
    role: "Creative Director, Olivia",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center fade-in-up">
        <p className="font-accent text-lg text-accent tracking-[0.15em] mb-12">Testimonials</p>

        <div className="flex justify-center gap-1 mb-8">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
          ))}
        </div>

        <blockquote className="font-heading text-2xl md:text-4xl leading-relaxed mb-8 italic">
          "{t.quote}"
        </blockquote>

        <p className="font-body text-primary-foreground/80 text-lg">
          {t.author}, <span className="font-accent italic">{t.role}</span>
        </p>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="p-3 border border-primary-foreground/20 rounded-full hover:bg-primary-foreground/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? 'bg-accent' : 'bg-primary-foreground/30'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-3 border border-primary-foreground/20 rounded-full hover:bg-primary-foreground/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
