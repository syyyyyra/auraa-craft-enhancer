import kraftTagsImg from '@/assets/kraft-tags.jpg';
import cardboardLabelsImg from '@/assets/cardboard-labels.jpg';

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
    title: 'Custom Cardboard Labels',
    image: cardboardLabelsImg,
    bestSeller: false,
    tiers: [
      { qty: '100 pcs', price: '200 dh' },
      { qty: '200 pcs', price: '300 dh' },
      { qty: '500 pcs', price: '500 dh' },
      { qty: '1000 pcs', price: '900 dh' },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 fade-in-up">
          <p className="font-accent text-lg text-accent tracking-[0.15em] mb-4">Products</p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">Transparent Pricing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, i) => (
            <div
              key={product.title}
              className="fade-in-up bg-card border border-border/60 rounded overflow-hidden hover-lift relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {product.bestSeller && (
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground font-body text-xs tracking-wider px-3 py-1 rounded-full z-10">
                  Best Seller
                </div>
              )}
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-6">{product.title}</h3>
                <div className="space-y-3">
                  {product.tiers.map((tier) => (
                    <div key={tier.qty} className="flex justify-between items-center font-body">
                      <span className="text-muted-foreground">{tier.qty}</span>
                      <span className="text-xl font-semibold text-accent font-accent">{tier.price}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 bg-primary text-primary-foreground py-3 font-body text-sm tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
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
