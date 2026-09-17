import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Portfolio } from '@/components/portfolio';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
