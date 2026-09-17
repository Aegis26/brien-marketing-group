import { motion } from 'framer-motion';

const portfolioItems = [
  {
    title: "Vehicle Wraps",
    image: "/images/portfolio-wrap.jpg"
  },
  {
    title: "Screen Printing",
    image: "/images/portfolio-screenprint.jpg"
  },
  {
    title: "Embroidery",
    image: "/images/portfolio-embroidery.jpg"
  },
  {
    title: "Vinyl & Decals",
    image: "/images/portfolio-decals.jpg"
  },
  {
    title: "Signs & Banners",
    image: "/images/portfolio-signs.jpg"
  },
  {
    title: "Custom Apparel",
    image: "/images/portfolio-apparel.jpg"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-card py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-primary font-display font-black uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] bg-background border-2 border-primary/20 overflow-hidden hover:border-primary transition-colors duration-300"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="w-8 h-1 bg-primary mb-3"></div>
                <h3 className="text-primary font-display font-bold uppercase tracking-widest text-lg md:text-xl">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
