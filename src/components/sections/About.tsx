import workshopImg from '@/assets/about-workshop.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="fade-in-up order-2 lg:order-1">
          <p className="font-accent text-lg text-accent tracking-[0.15em] mb-4">Our Philosophy</p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-8 leading-tight">
            We don't just design.<br />We tell stories.
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-[1.8] mb-6">
            At AURAA, we believe every brand has a unique story waiting to be told. We combine strategic thinking with artistic sensibility to create brands that resonate deeply with their audience.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-[1.8] mb-8">
            Our approach blends Moroccan craftsmanship with contemporary design, resulting in brands that feel both authentic and aspirational.
          </p>
          <p className="font-accent text-xl text-accent italic">— Team AURAA</p>
        </div>

        <div className="fade-in-up order-1 lg:order-2" style={{ transitionDelay: '200ms' }}>
          <div className="relative">
            {/* Slight overlap composition */}
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-transparent rounded-lg hidden lg:block" />
            <img
              src={workshopImg}
              alt="AURAA Brand Studio – kraft materials and design tools in warm editorial light"
              loading="lazy"
              width={800}
              height={800}
              className="relative w-full object-cover rounded shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
            />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border-2 border-accent/20 rounded hidden lg:block" />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/8 rounded hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
