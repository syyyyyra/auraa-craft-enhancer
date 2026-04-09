import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { z } from 'zod';
import Footer from '@/components/sections/Footer';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().trim().min(1, 'Message is required').max(2000),
});

const serviceOptions = ['Brand Identity', 'Packaging Design', 'Brand Strategy', 'Labels & Tags', 'Other'];

const Contact = () => {
  useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: 'Message sent!', description: "We'll get back to you within 24 hours." });
    setForm({ name: '', email: '', service: '', message: '' });
  };

  return (
    <main className="pt-20">
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="fade-in-up">
              <p className="font-accent text-lg text-accent tracking-[0.15em] mb-4">Get in Touch</p>
              <h1 className="font-heading text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Let's create together
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
                Ready to elevate your brand? Tell us about your project and we'll craft something extraordinary.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">Location</h4>
                    <p className="font-body text-muted-foreground">Morocco</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">Phone</h4>
                    <a href="tel:0693024775" className="font-body text-muted-foreground hover:text-foreground transition-colors">0693024775</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✨</span>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">Happy Clients</h4>
                    <p className="font-body text-muted-foreground">2,000 – 4,000 satisfied customers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">Specialty</h4>
                    <p className="font-body text-muted-foreground">Eco-friendly branding</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">Target</h4>
                    <p className="font-body text-muted-foreground">E-commerce & small brands</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📸</span>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">Instagram</h4>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground hover:text-foreground transition-colors">www.instagram.com</a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="fade-in-up space-y-6" style={{ transitionDelay: '200ms' }}>
              <div>
                <label className="font-accent text-sm tracking-[0.15em] text-muted-foreground uppercase block mb-2">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full border border-border bg-card px-4 py-3 font-body text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
                {errors.name && <p className="font-body text-sm text-destructive mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="font-accent text-sm tracking-[0.15em] text-muted-foreground uppercase block mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="w-full border border-border bg-card px-4 py-3 font-body text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="font-body text-sm text-destructive mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="font-accent text-sm tracking-[0.15em] text-muted-foreground uppercase block mb-2">Service</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full border border-border bg-card px-4 py-3 font-body text-foreground focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <p className="font-body text-sm text-destructive mt-1">{errors.service}</p>}
              </div>

              <div>
                <label className="font-accent text-sm tracking-[0.15em] text-muted-foreground uppercase block mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={2000}
                  rows={5}
                  className="w-full border border-border bg-card px-4 py-3 font-body text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="font-body text-sm text-destructive mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 font-body tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
