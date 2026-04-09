import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Footer from '@/components/sections/Footer';
import merakiImg from '@/assets/project-meraki.jpg';
import vesperaImg from '@/assets/project-vespera.jpg';
import oliviaImg from '@/assets/project-olivia.jpg';

const allProjects = [
  {
    title: 'MERAKI',
    category: 'Cosmetics',
    image: merakiImg,
    description: 'A complete brand identity for a luxury skincare line. Minimal packaging and cohesive visual language for conscious beauty.',
    services: ['Brand Identity', 'Packaging Design', 'Brand Guidelines'],
  },
  {
    title: 'VESPERA',
    category: 'Lifestyle',
    image: vesperaImg,
    description: 'Luxury candle brand identity and packaging. Ceramic vessels, kraft labels, and a warm visual identity.',
    services: ['Visual Identity', 'Packaging', 'Photography Direction'],
  },
  {
    title: 'Olivia',
    category: 'Fashion',
    image: oliviaImg,
    description: 'Elegant clothing tags and fashion branding. Minimalist design with luxurious materials.',
    services: ['Hang Tag Design', 'Label System', 'Brand Collateral'],
  },
];

const categories = ['All', ...new Set(allProjects.map((p) => p.category))];

const Portfolio = () => {
  useScrollAnimation();
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<typeof allProjects[0] | null>(null);

  const filtered = filter === 'All' ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <main className="pt-20">
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 fade-in-up">
            <p className="font-accent text-lg text-accent tracking-[0.15em] mb-4">Portfolio</p>
            <h1 className="font-heading text-4xl md:text-6xl font-semibold text-foreground mb-4">Our Work</h1>
            <p className="font-body text-lg text-muted-foreground">Every project is a story brought to life</p>
          </div>

          <div className="flex justify-center gap-4 mb-12 fade-in-up" style={{ transitionDelay: '100ms' }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`font-body text-sm tracking-wider px-4 py-2 transition-all duration-300 ${
                  filter === c ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <div
                key={project.title}
                className="fade-in-up img-zoom group cursor-pointer relative overflow-hidden rounded aspect-[4/3]"
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setSelected(project)}
              >
                <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500 flex items-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-accent text-sm text-primary-foreground/80 tracking-widest mb-1">{project.category}</p>
                    <h3 className="font-heading text-2xl text-primary-foreground font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-2xl bg-background">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-3xl">{selected.title}</DialogTitle>
                <DialogDescription className="font-accent text-lg text-accent">{selected.category}</DialogDescription>
              </DialogHeader>
              <img src={selected.image} alt={selected.title} className="w-full aspect-video object-cover rounded my-4" />
              <p className="font-body text-muted-foreground leading-relaxed">{selected.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {selected.services.map((s) => (
                  <span key={s} className="font-accent text-sm px-3 py-1 border border-border rounded-full text-muted-foreground">{s}</span>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Portfolio;
