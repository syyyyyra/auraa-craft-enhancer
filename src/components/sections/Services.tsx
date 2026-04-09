const services = [
  {
    icon: '✦',
    title: 'Brand Identity',
    description: 'Logo design, color palettes, typography systems, brand guidelines',
    price: 'From 8,000 MAD',
  },
  {
    icon: '📦',
    title: 'Packaging Design',
    description: 'Custom packaging, labels, boxes, sustainable materials consulting',
    price: 'From 6,000 MAD',
  },
  {
    icon: '🎯',
    title: 'Brand Strategy',
    description: 'Positioning, storytelling, target audience research, brand voice',
    price: 'From 5,000 MAD',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 fade-in-up">
          <p className="font-accent text-lg text-accent tracking-[0.15em] mb-4">Our Expertise</p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">What We Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="fade-in-up bg-card p-8 md:p-10 border border-border/60 rounded hover-lift group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-4xl mb-6 block">{service.icon}</span>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <p className="font-accent text-lg text-accent tracking-wider">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
