import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center fade-in-up">
        <h2 className="font-heading text-4xl md:text-[56px] font-semibold text-foreground leading-tight mb-6">
          Ready to build your brand?
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-10">
          Let's create something extraordinary together
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-12 py-5 font-body text-base tracking-wider transition-all duration-400 hover:scale-[1.02] hover:shadow-xl"
          >
            Start Your Project →
          </Link>
          <Link
            to="/contact"
            className="font-body text-muted-foreground link-underline tracking-wider text-sm"
          >
            Or schedule a free consultation →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
