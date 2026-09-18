import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="top" 
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/storefront-night.png" 
          alt="O'Brien Marketing Group storefront at night" 
          className="w-full h-full object-cover opacity-60 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h2 className="electric-text font-display font-extrabold italic uppercase tracking-[0.24em] text-sm md:text-base mb-6">
            O'Brien Marketing Group
          </h2>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground uppercase leading-[0.9] mb-8">
            We STRIVE<br/>
            <span className="electric-text">so you THRIVE</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Signs / Banners, Screen Printing, Embroidery, Vinyl Wraps, Decals &amp; More
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <Button 
              size="lg"
              onClick={() => handleNavClick('#contact')}
              className="electric-button font-display rounded-none px-10 py-8 text-lg h-auto font-black uppercase italic tracking-[0.14em]"
            >
              Get Started
            </Button>
            
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <MapPin size={16} className="text-primary" />
              <span>605 Gilmer Rd | Longview, Texas</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[2px] h-[30px] bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
