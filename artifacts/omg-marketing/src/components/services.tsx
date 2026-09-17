import { motion } from 'framer-motion';
import { Layers, Scissors, CarFront, Signpost, Sticker, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Signs / Banners",
    description: "Professional signs, banners, and large-format graphics designed to get your business noticed.",
    icon: Signpost
  },
  {
    title: "Screen Printing",
    description: "High-quality screen printing for apparel, bags, and promotional items with precision color matching and durability.",
    icon: Layers
  },
  {
    title: "Embroidery",
    description: "Professional embroidery services for hats, polos, jackets, and custom apparel with detailed stitch work.",
    icon: Scissors
  },
  {
    title: "Vinyl Wraps",
    description: "Custom vinyl wraps for vehicles, buildings, and large format applications that make a statement.",
    icon: CarFront
  },
  {
    title: "Decals",
    description: "Custom decals for windows, vehicles, equipment, products, and more—made to look sharp and last.",
    icon: Sticker
  },
  {
    title: "And More",
    description: "Need something different? Talk with our team about promotional products and custom solutions for your next project.",
    icon: Sparkles
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

export function Services() {
  return (
    <section id="services" className="bg-background py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-primary font-display font-black uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-card p-8 group relative overflow-hidden flex flex-col"
            >
              {/* Left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/30 group-hover:w-2 group-hover:bg-primary transition-all duration-300"></div>
              
              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-background border border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(31,255,0,0.2)] transition-all duration-300">
                  <service.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold uppercase text-primary tracking-wide mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
