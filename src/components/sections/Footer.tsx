import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          <div>
            <h3 className="font-heading text-2xl tracking-[0.2em] font-semibold mb-3">AURAA</h3>
            <p className="font-body text-primary-foreground/60 text-sm mb-6">Premium Brand Creation Studio</p>
            <div className="flex gap-4">
              {['Instagram', 'Behance', 'LinkedIn'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors link-underline"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-accent text-sm tracking-[0.2em] text-primary-foreground/40 uppercase mb-6">Navigation</h4>
            <div className="flex flex-col gap-3">
              {['Home', 'Work', 'Services', 'Configurator', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Home' ? '/' : link === 'Work' ? '/portfolio' : link === 'Services' ? '/#services' : `/${link.toLowerCase()}`}
                  className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-accent text-sm tracking-[0.2em] text-primary-foreground/40 uppercase mb-6">Services</h4>
            <div className="flex flex-col gap-3">
              {['Brand Identity', 'Packaging', 'Labels', 'Strategy'].map((s) => (
                <span key={s} className="font-body text-sm text-primary-foreground/60">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-accent text-sm tracking-[0.2em] text-primary-foreground/40 uppercase mb-6">Contact</h4>
            <div className="flex flex-col gap-3 font-body text-sm text-primary-foreground/60">
              <span>📍 Casablanca, Morocco</span>
              <a href="tel:+212693024775" className="hover:text-primary-foreground transition-colors">📞 +212 693-024775</a>
              <a href="mailto:hello@auraa-studio.com" className="hover:text-primary-foreground transition-colors">✉️ hello@auraa-studio.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40 tracking-wider">
            © 2026 AURAA Brand Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
