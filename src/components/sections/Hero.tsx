import { Link } from 'react-router-dom';
import heroImg from '@/assets/hero-packaging.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="fade-in-up">
          <p className="font-accent text-lg md:text-xl text-accent tracking-[0.15em] mb-6">
            Premium Brand Creation Studio
          </p>
          <h1 className="font-heading text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] font-semibold text-foreground mb-6">
            We craft brands that leave marks.
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed mb-10">
            Premium branding studio specializing in packaging, identity design, and storytelling for conscious brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-body text-sm tracking-wider transition-all duration-400 hover:scale-[1.02] hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <a
              href="#work"
              className="inline-flex items-center justify-center border border-foreground text-foreground px-8 py-4 font-body text-sm tracking-wider transition-all duration-400 hover:bg-foreground hover:text-background"
            >
              View Our Work
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-end">
          <div className="animate-float relative">
            <img
              src={heroImg}
              alt="Premium kraft packaging mockup with branded boxes and hang tags"
              width={500}
              height={640}
              className="w-full max-w-[500px] object-cover rounded shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
