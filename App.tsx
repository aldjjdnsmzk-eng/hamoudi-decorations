import SiteHeader from '@/components/SiteHeader';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import InspirationGallery from '@/components/InspirationGallery';
import DesignApproachSection from '@/components/DesignApproachSection';
import LocationSection from '@/components/LocationSection';
import SiteFooter from '@/components/SiteFooter';

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory"
      >
        تخطي إلى المحتوى
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <InspirationGallery />
        <DesignApproachSection />
        <LocationSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
