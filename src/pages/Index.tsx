import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Hero from '@/components/sections/Hero';
import SelectedWork from '@/components/sections/SelectedWork';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import ConfiguratorTeaser from '@/components/sections/ConfiguratorTeaser';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';

const Index = () => {
  useScrollAnimation();

  return (
    <main>
      <Hero />
      <SelectedWork />
      <About />
      <Services />
      <Pricing />
      <ConfiguratorTeaser />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
