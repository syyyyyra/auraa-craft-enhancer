import kraftTagsImg from '@/assets/kraft-tags.jpg';
import cardboardLabelsImg from '@/assets/cardboard-labels.jpg';
import stickersImg from '@/assets/product-stickers.jpg';
import boxesImg from '@/assets/product-boxes.jpg';
import thankyouImg from '@/assets/product-thankyou.jpg';
import fabricLabelsImg from '@/assets/product-fabric-labels.jpg';
import bagsImg from '@/assets/product-bags.jpg';

const products = [
  {
    title: 'Custom Kraft Tags',
    image: kraftTagsImg,
    bestSeller: true,
    tiers: [
      { qty: '100 pcs', price: '280 dh' },
      { qty: '200 pcs', price: '380 dh' },
      { qty: '500 pcs', price: '600 dh' },
      { qty: '1000 pcs', price: '1,000 dh' },
    ],
  },
  {
    title: 'Cardboard Labels',
    image: cardboardLabelsImg,
    bestSeller: false,
    tiers: [
      { qty: '100 pcs', price: '200 dh' },
      { qty: '200 pcs', price: '300 dh' },
      { qty: '500 pcs', price: '500 dh' },
      { qty: '1000 pcs', price: '900 dh' },
    ],
  },
  {
    title: 'Custom Stickers',
    image: stickersImg,
    bestSeller: true,
    tiers: [
      { qty: '100 pcs', price: '150 dh' },
      { qty: '200 pcs', price: '250 dh' },
      { qty: '500 pcs', price: '450 dh' },
      { qty: '1000 pcs', price: '800 dh' },
    ],
  },
  {
    title: 'Packaging Boxes',
    image: boxesImg,
    bestSeller: false,
    tiers: [
      { qty: '100 pcs', price: '1,200 dh' },
      { qty: '200 pcs', price: '2,000 dh' },
      { qty: '500 pcs', price: '4,500 dh' },
      { qty: '1000 pcs', price: '8,000 dh' },
    ],
  },
  {
    title: 'Thank You Cards',
    image: thankyouImg,
    bestSeller: false,
    tiers: [
      { qty: '100 pcs', price: '180 dh' },
      { qty: '200 pcs', price: '280 dh' },
      { qty: '500 pcs', price: '500 dh' },
      { qty: '1000 pcs', price: '900 dh' },
    ],
  },
  {
    title: 'Fabric Labels',
    image: fabricLabelsImg,
    bestSeller: false,
    tiers: [
      { qty: '100 pcs', price: '350 dh' },
      { qty: '200 pcs', price: '550 dh' },
      { qty: '500 pcs', price: '1,000 dh' },
      { qty: '1000 pcs', price: '1,800 dh' },
    ],
  },
  {
    title: 'Shopping Bags',
    image: bagsImg,
    bestSeller: false,
    tiers: [
      { qty: '100 pcs', price: '800 dh' },
      { qty: '200 pcs', price: '1,400 dh' },
      { qty: '500 pcs', price: '3,000 dh' },
      { qty: '1000 pcs', price: '5,500 dh' },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 fade-in-up">
          <p className="font-accent text-lg text-accent tracking-[0.15em] mb-4">Products</p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">Our Catalog</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={product.title}
              className="fade-in-up bg-card border border-border/40 rounded-lg overflow-hidden hover-lift relative group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {product.bestSeller && (
                <div className="absolute top-3 right-3 bg-accent text-accent-foreground font-body text-[10px] tracking-wider px-2.5 py-1 rounded-full z-10 uppercase font-medium">
                  Best Seller
                </div>
              )}
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{product.title}</h3>
                <div className="space-y-2">
                  {product.tiers.map((tier) => (
                    <div key={tier.qty} className="flex justify-between items-center font-body text-sm">
                      <span className="text-muted-foreground">{tier.qty}</span>
                      <span className="font-semibold text-accent font-accent">{tier.price}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-5 bg-primary text-primary-foreground py-2.5 font-body text-xs tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-lg rounded">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
