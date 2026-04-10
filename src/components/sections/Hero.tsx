import { Link } from 'react-router-dom';
import heroImg from '@/assets/hero-packaging.jpg';
import logoImg from '@/assets/logo.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Subtle warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/60 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize: '256px 256px',
      }} />
      {/* Decorative soft circles */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[300px] h-[300px] rounded-full bg-accent/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            {/* Brand Aura logo overlay on the box */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: '38%',
                left: '22%',
                width: '56%',
                transform: 'rotate(-2deg) perspective(500px) rotateY(3deg)',
                mixBlendMode: 'multiply',
                opacity: 0.88,
                filter: 'blur(0.3px)',
              }}
            >
              <img
                src={logoImg}
                alt=""
                className="w-full h-auto"
                style={{ filter: 'contrast(1.1) brightness(0.95)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
