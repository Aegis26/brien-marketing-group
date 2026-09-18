import { motion } from 'framer-motion';

const portfolioItems = [
  {
    title: "Vehicle Wraps",
    image: "/images/portfolio-vinyl-wraps.png"
  },
  {
    title: "Screen Printing",
    image: "/images/portfolio-screen-printing.png"
  },
  {
    title: "Embroidery",
    image: "/images/portfolio-embroidery-custom.png"
  },
  {
    title: "Vinyl & Decals",
    image: "/images/portfolio-decals-custom.png"
  },
  {
    title: "Signs & Banners",
    image: "/images/portfolio-signs-banners.png"
  },
  {
    title: "Custom Apparel",
    image: "/images/portfolio-apparel-custom.png"
  },
  {
    title: "Custom Embroidered Hat",
    image: "/images/work-embroidered-hat.png"
  },
  {
    title: "Coors Light Trailer Wrap",
    image: "/images/work-coors-trailer-wrap.png"
  },
  {
    title: "Mosquito Joe Truck Wrap",
    image: "/images/work-mosquito-joe-truck-wrap.png"
  },
  {
    title: "Shiner Trailer Wrap",
    image: "/images/work-shiner-trailer-wrap.png"
  },
  {
    title: "Miller Lite Trailer Wrap",
    image: "/images/work-miller-lite-trailer-wrap.png"
  },
  {
    title: "Custom Project",
    image: "/images/work-project-06.png"
  },
  {
    title: "Custom Branded Project",
    image: "/images/work-project-07.png"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-card py-24 md:py-32 relative z-10 overflow-hidden">
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

      </div>

      <div className="work-gallery" aria-label="A continuously moving gallery of O'Brien Marketing Group projects">
        <div className="work-gallery-track">
          {[...portfolioItems, ...portfolioItems].map((item, index) => (
            <figure
              key={`${item.title}-${index}`}
              className="work-gallery-item group"
              aria-hidden={index >= portfolioItems.length}
            >
              <img
                src={item.image}
                alt={index < portfolioItems.length ? item.title : ""}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
