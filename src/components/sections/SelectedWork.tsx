import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import merakiImg from '@/assets/project-meraki.jpg';
import vesperaImg from '@/assets/project-vespera.jpg';
import oliviaImg from '@/assets/project-olivia.jpg';

type Category = 'all' | 'etiquettes' | 'tags-kraft' | 'fils' | 'packaging';
type SubCategory = 'coton' | 'cartonnees' | 'imprimees' | null;

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'etiquettes', label: 'Étiquettes' },
  { id: 'tags-kraft', label: 'Tags Kraft' },
  { id: 'fils', label: 'Fils personnalisés' },
  { id: 'packaging', label: 'Packaging' },
];

const subCategories: { id: SubCategory; label: string }[] = [
  { id: 'coton', label: 'Étiquettes en Coton' },
  { id: 'cartonnees', label: 'Étiquettes Cartonnées' },
  { id: 'imprimees', label: 'Étiquettes Imprimées' },
];

const projects = [
  {
    title: 'MERAKI',
    category: 'etiquettes' as Category,
    subCategory: 'imprimees' as SubCategory,
    displayCategory: 'Cosmetics Branding',
    image: merakiImg,
    description: 'A complete brand identity for a luxury skincare line. We crafted everything from the minimal packaging to the brand story, creating a cohesive visual language that speaks to conscious beauty.',
    services: ['Brand Identity', 'Packaging Design', 'Brand Guidelines'],
    className: 'col-span-1 row-span-1 md:col-span-2 aspect-[16/10]',
  },
  {
    title: 'VESPERA',
    category: 'packaging' as Category,
    subCategory: null,
    displayCategory: 'Candle Brand Identity',
    image: vesperaImg,
    description: 'Luxury candle brand identity and packaging design. We designed ceramic vessels, kraft labels, and a warm visual identity that evokes comfort and sophistication.',
    services: ['Visual Identity', 'Packaging', 'Product Photography Direction'],
    className: 'col-span-1 row-span-1 aspect-[4/5]',
  },
  {
    title: 'Olivia',
    category: 'etiquettes' as Category,
    subCategory: 'coton' as SubCategory,
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
  const [activeSubCategory, setActiveSubCategory] = useState<SubCategory>(null);

  const handleCategoryClick = (cat: Category) => {
    setActiveCategory(cat);
    setActiveSubCategory(null);
  };

  const filtered = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    if (p.category !== activeCategory) return false;
    if (activeCategory === 'etiquettes' && activeSubCategory) {
      return p.subCategory === activeSubCategory;
    }
    return true;
  });

  return (
    <section id="work" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 fade-in-up">
          <p className="font-accent text-lg text-accent tracking-[0.15em] mb-4">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4">Selected Work</h2>
          <p className="font-body text-muted-foreground text-lg">Brands we've brought to life</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-6 fade-in-up" style={{ transitionDelay: '50ms' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`font-body text-sm tracking-wider px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-accent/20 hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sub-category filters for Étiquettes */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12 transition-all duration-500"
          style={{
            opacity: activeCategory === 'etiquettes' ? 1 : 0,
            maxHeight: activeCategory === 'etiquettes' ? '60px' : '0px',
            overflow: 'hidden',
            marginBottom: activeCategory === 'etiquettes' ? '3rem' : '0',
          }}
        >
          <button
            onClick={() => setActiveSubCategory(null)}
            className={`font-body text-xs tracking-wider px-4 py-1.5 rounded-full transition-all duration-300 ${
              activeSubCategory === null
                ? 'bg-accent/60 text-accent-foreground'
                : 'bg-muted/60 text-muted-foreground hover:bg-accent/15'
            }`}
          >
            Toutes
          </button>
          {subCategories.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveSubCategory(sub.id)}
              className={`font-body text-xs tracking-wider px-4 py-1.5 rounded-full transition-all duration-300 ${
                activeSubCategory === sub.id
                  ? 'bg-accent/60 text-accent-foreground'
                  : 'bg-muted/60 text-muted-foreground hover:bg-accent/15'
              }`}
            >
              {sub.label}
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
