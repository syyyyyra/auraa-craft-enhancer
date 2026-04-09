import { useState, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Footer from '@/components/sections/Footer';

const materials = [
  { id: 'kraft', label: 'Kraft', color: '#C4A882' },
  { id: 'cotton', label: 'Cotton', color: '#F5F1EB' },
  { id: 'cardboard', label: 'Cardboard', color: '#A0876C' },
];

const sizes = [
  { id: 'small', label: 'Small (5×3 cm)', price: 2.8 },
  { id: 'medium', label: 'Medium (8×5 cm)', price: 3.5 },
  { id: 'large', label: 'Large (10×6 cm)', price: 4.5 },
];

const quantities = [100, 200, 500, 1000];

const Configurator = () => {
  useScrollAnimation();
  const [material, setMaterial] = useState('kraft');
  const [size, setSize] = useState('medium');
  const [quantity, setQuantity] = useState(200);
  const [brandName, setBrandName] = useState('YOUR BRAND');
  const [logoFile, setLogoFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedSize = sizes.find((s) => s.id === size)!;
  const selectedMaterial = materials.find((m) => m.id === material)!;
  const unitPrice = selectedSize.price;
  const totalPrice = Math.round(unitPrice * quantity * (quantity >= 500 ? 0.85 : quantity >= 200 ? 0.9 : 1));

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setLogoFile(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="pt-20">
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 fade-in-up">
            <p className="font-accent text-lg text-accent tracking-[0.15em] mb-4">Interactive Tool</p>
            <h1 className="font-heading text-4xl md:text-6xl font-semibold text-foreground mb-4">Label Configurator</h1>
            <p className="font-body text-lg text-muted-foreground">Customize your labels and get instant pricing</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Preview */}
            <div className="fade-in-up sticky top-24">
              <div className="bg-muted rounded-lg p-12 flex items-center justify-center min-h-[400px]">
                <div
                  className="relative flex flex-col items-center justify-center rounded shadow-lg transition-all duration-500"
                  style={{
                    backgroundColor: selectedMaterial.color,
                    width: size === 'small' ? 150 : size === 'medium' ? 200 : 250,
                    height: size === 'small' ? 90 : size === 'medium' ? 125 : 150,
                    border: material === 'cotton' ? '2px dashed #ccc' : 'none',
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-3 h-3 rounded-full border-2 border-foreground/30" />
                  {logoFile && (
                    <img src={logoFile} alt="Logo" className="w-10 h-10 object-contain mb-2" />
                  )}
                  <span
                    className="font-heading text-sm md:text-base font-semibold text-center px-4"
                    style={{ color: material === 'cotton' ? '#1A1A1A' : '#3a2e1e' }}
                  >
                    {brandName}
                  </span>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="font-accent text-3xl text-accent font-semibold">{totalPrice} dh</p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {quantity} pcs × {unitPrice.toFixed(1)} dh/pc
                  {quantity >= 200 && <span className="text-accent ml-1">(bulk discount applied)</span>}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="fade-in-up space-y-8" style={{ transitionDelay: '200ms' }}>
              <div>
                <label className="font-accent text-sm tracking-[0.15em] text-muted-foreground uppercase block mb-3">Brand Name</label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value.slice(0, 30))}
                  maxLength={30}
                  className="w-full border border-border bg-card px-4 py-3 font-body text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Enter your brand name"
                />
              </div>

              <div>
                <label className="font-accent text-sm tracking-[0.15em] text-muted-foreground uppercase block mb-3">Material</label>
                <div className="grid grid-cols-3 gap-3">
                  {materials.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMaterial(m.id)}
                      className={`flex flex-col items-center gap-2 p-4 border rounded transition-all duration-300 ${
                        material === m.id ? 'border-accent bg-accent/10' : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-full border border-border" style={{ backgroundColor: m.color }} />
                      <span className="font-body text-sm text-foreground">{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-accent text-sm tracking-[0.15em] text-muted-foreground uppercase block mb-3">Size</label>
                <div className="space-y-2">
                  {sizes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSize(s.id)}
                      className={`w-full flex justify-between items-center px-4 py-3 border rounded font-body text-sm transition-all duration-300 ${
                        size === s.id ? 'border-accent bg-accent/10 text-foreground' : 'border-border text-muted-foreground hover:border-accent/50'
                      }`}
                    >
                      <span>{s.label}</span>
                      <span className="font-accent text-accent">{s.price} dh/pc</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-accent text-sm tracking-[0.15em] text-muted-foreground uppercase block mb-3">Quantity</label>
                <div className="grid grid-cols-4 gap-3">
                  {quantities.map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuantity(q)}
                      className={`py-3 border rounded font-body text-sm transition-all duration-300 ${
                        quantity === q ? 'border-accent bg-accent/10 text-foreground' : 'border-border text-muted-foreground hover:border-accent/50'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-accent text-sm tracking-[0.15em] text-muted-foreground uppercase block mb-3">Logo (optional)</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-3 border border-dashed border-border rounded font-body text-sm text-muted-foreground hover:border-accent/50 hover:text-foreground transition-all duration-300"
                >
                  {logoFile ? '✓ Logo uploaded — Click to change' : 'Upload Logo'}
                </button>
              </div>

              <button className="w-full bg-primary text-primary-foreground py-4 font-body tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                Request Quote →
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Configurator;
