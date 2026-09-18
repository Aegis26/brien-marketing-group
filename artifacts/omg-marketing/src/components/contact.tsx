import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SiFacebook, SiInstagram } from 'react-icons/si';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Extract form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Construct mailto link
    const subject = encodeURIComponent(`Website Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:sales@theOMGshop.com?subject=${subject}&body=${body}`;
    
    // Simulate slight delay for UX, then open email client
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setIsSent(true);
      
      // Reset form visually
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after a few seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 600);
  };

  return (
    <>
      <section id="contact" className="bg-background py-24 md:py-32 relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-primary font-display font-black uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-card border border-border"
            >
              <Phone className="text-primary mb-4" size={32} />
              <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Call Us</h3>
              <a 
                href="tel:903-212-3266" 
                className="text-foreground text-xl md:text-2xl font-medium hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2"
              >
                903-212-3266
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center p-8 bg-card border border-border"
            >
              <Mail className="text-primary mb-4" size={32} />
              <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Email</h3>
              <a 
                href="mailto:sales@theOMGshop.com" 
                className="text-foreground text-lg md:text-xl font-medium hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2"
              >
                sales@theOMGshop.com
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card p-8 md:p-12 border-t-4 border-primary"
          >
            <div className="mb-8 text-center">
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                Fill out the form below to open a draft in your email client.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-primary text-xs font-bold uppercase tracking-widest block">
                  Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="bg-background border-primary/30 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary rounded-none h-12 px-4"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-primary text-xs font-bold uppercase tracking-widest block">
                  Email
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="bg-background border-primary/30 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary rounded-none h-12 px-4"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-primary text-xs font-bold uppercase tracking-widest block">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  className="bg-background border-primary/30 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary rounded-none min-h-[150px] p-4 resize-y"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting || isSent}
                className={`w-full h-14 rounded-none font-bold uppercase tracking-widest text-lg transition-all duration-300 ${
                  isSent 
                    ? 'bg-transparent border-2 border-primary text-primary hover:bg-transparent cursor-default' 
                    : 'bg-primary text-black hover:bg-primary/90 hover:-translate-y-1 shadow-[0_0_15px_rgba(31,255,0,0.2)] hover:shadow-[0_0_25px_rgba(31,255,0,0.4)]'
                }`}
              >
                {isSubmitting ? 'Preparing Email...' : isSent ? 'Email Draft Opened!' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-primary/30 py-16">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-10">
            <a 
              href="https://www.facebook.com/omgoflongview" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 border-2 border-primary bg-background text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              aria-label="Visit our Facebook page"
            >
              <SiFacebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/obrienmarketinggroup/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 border-2 border-primary bg-background text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              aria-label="Visit our Instagram page"
            >
              <SiInstagram size={24} />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-primary font-bold text-lg mb-4">
            <MapPin size={20} />
            <p>605 Gilmer Rd, Longview, TX 75604</p>
          </div>

          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            Trusted partner in screen printing, embroidery, vinyl, and promotional excellence.
          </p>

          <p className="text-muted-foreground/60 text-xs">
            &copy; {new Date().getFullYear()} O'Brien Marketing Group. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
