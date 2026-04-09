import workshopImg from '@/assets/about-workshop.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="fade-in-up">
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

        <div className="fade-in-up" style={{ transitionDelay: '200ms' }}>
          <div className="relative">
            <img
              src={workshopImg}
              alt="AURAA Brand Studio workshop with kraft paper and branding materials"
              loading="lazy"
              width={800}
              height={800}
              className="w-full object-cover rounded shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-accent/30 rounded hidden lg:block" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
