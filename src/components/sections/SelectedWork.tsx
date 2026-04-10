import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import merakiImg from '@/assets/project-meraki.jpg';
import vesperaImg from '@/assets/project-vespera.jpg';
import oliviaImg from '@/assets/project-olivia.jpg';
import filterEtiquettesImg from '@/assets/filter-etiquettes.jpg';
import filterTagsImg from '@/assets/filter-tags.jpg';
import filterKraftImg from '@/assets/filter-kraft.jpg';
import filterFilsImg from '@/assets/filter-fils.jpg';
import filterPackagingImg from '@/assets/filter-packaging.jpg';

type Category = 'all' | 'etiquettes' | 'tags' | 'kraft' | 'fils' | 'packaging';

const categories: { id: Category; label: string; image?: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'etiquettes', label: 'Étiquettes', image: filterEtiquettesImg },
  { id: 'tags', label: 'Tags', image: filterTagsImg },
  { id: 'kraft', label: 'Kraft', image: filterKraftImg },
  { id: 'fils', label: 'Fils personnalisés', image: filterFilsImg },
  { id: 'packaging', label: 'Packaging', image: filterPackagingImg },
];

const projects = [
  {
    title: 'MERAKI',
    category: 'etiquettes' as Category,
    displayCategory: 'Cosmetics Branding',
    image: merakiImg,
    description: 'A complete brand identity for a luxury skincare line. We crafted everything from the minimal packaging to the brand story, creating a cohesive visual language that speaks to conscious beauty.',
    services: ['Brand Identity', 'Packaging Design', 'Brand Guidelines'],
    className: 'col-span-1 row-span-1 md:col-span-2 aspect-[16/10]',
  },
  {
    title: 'VESPERA',
    category: 'packaging' as Category,
    displayCategory: 'Candle Brand Identity',
    image: vesperaImg,
    description: 'Luxury candle brand identity and packaging design. We designed ceramic vessels, kraft labels, and a warm visual identity that evokes comfort and sophistication.',
    services: ['Visual Identity', 'Packaging', 'Product Photography Direction'],
    className: 'col-span-1 row-span-1 aspect-[4/5]',
  },
  {
    title: 'Olivia',
    category: 'etiquettes' as Category,
    displayCategory: 'Fashion Labels',
    image: oliviaImg,
    description: 'Elegant clothing tags and fashion branding for a premium fashion house. Minimalist design with luxurious materials that elevate the unboxing experience.',
    services: ['Hang Tag Design', 'Label System', 'Brand Collateral'],
    className: 'col-span-1 row-span-1 aspect-[4/3]',
  },
];

const SelectedWork = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filtered = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="work" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 fade-in-up">
          <p className="font-accent text-lg text-accent tracking-[0.15em] mb-4">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4">Selected Work</h2>
          <p className="font-body text-muted-foreground text-lg">Brands we've brought to life</p>
        </div>

        {/* Visual Filter Cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 fade-in-up" style={{ transitionDelay: '50ms' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`group flex flex-col items-center gap-2 transition-all duration-300 ${
                activeCategory === cat.id ? 'scale-105' : 'opacity-70 hover:opacity-100 hover:scale-105'
              }`}
            >
              {cat.image ? (
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 transition-all duration-300 shadow-sm ${
                  activeCategory === cat.id ? 'border-accent shadow-md' : 'border-border/40 group-hover:border-accent/50'
                }`}>
                  <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm ${
                  activeCategory === cat.id
                    ? 'border-accent bg-accent/15 shadow-md'
                    : 'border-border/40 bg-muted group-hover:border-accent/50'
                }`}>
                  <span className="font-heading text-lg text-foreground">✦</span>
                </div>
              )}
              <span className={`font-body text-xs md:text-sm tracking-wider transition-colors duration-300 ${
                activeCategory === cat.id ? 'text-foreground font-medium' : 'text-muted-foreground'
              }`}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`${project.className} fade-in-up img-zoom group cursor-pointer relative overflow-hidden rounded transition-opacity duration-500`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={`${project.title} - ${project.displayCategory}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500 flex items-end p-6 md:p-8">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-accent text-sm text-primary-foreground/80 tracking-widest mb-1">{project.displayCategory}</p>
                  <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground font-semibold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-muted-foreground text-lg">Aucun projet dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-background">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-3xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="font-accent text-lg text-accent tracking-wider">
                  {selectedProject.displayCategory}
                </DialogDescription>
              </DialogHeader>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover rounded my-4"
              />
              <p className="font-body text-muted-foreground leading-relaxed">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedProject.services.map((s) => (
                  <span key={s} className="font-accent text-sm px-3 py-1 border border-border rounded-full text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SelectedWork;
