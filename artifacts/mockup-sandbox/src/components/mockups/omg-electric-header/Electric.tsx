import './_group.css';

const navLinks = ['Services', 'Portfolio', 'Contact'];

export function Electric() {
  return (
    <div className="omg-preview relative min-h-screen overflow-hidden bg-[#0a0a0a] text-[#e8e8e8]">
      <header className="absolute inset-x-0 top-0 z-20 py-6">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6">
          <img
            src="/__mockup/images/obrien-logo.png"
            alt="O'Brien Marketing Group"
            className="h-48 w-auto object-contain drop-shadow-[0_0_9px_rgba(31,255,0,0.15)]"
          />
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link} className="electric-nav px-2 py-1 text-[13px] text-[#e8e8e8] transition-all">
                {link}
              </button>
            ))}
            <button className="electric-button omg-display px-7 py-3 text-sm font-black uppercase italic tracking-[0.14em]">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 text-center">
        <div className="absolute inset-0">
          <img src="/__mockup/images/omg-storefront-night.png" alt="" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(31,255,0,0.08),transparent_42%)]" />
        </div>
        <div className="relative z-10 max-w-4xl px-6">
          <p className="electric-text omg-display mb-6 text-sm font-extrabold uppercase italic tracking-[0.24em]">
            O'Brien Marketing Group
          </p>
          <h1 className="omg-display mb-8 text-7xl font-black uppercase leading-[0.9]">
            We Strive<br />
            <span className="electric-text">So You Thrive</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl font-medium text-[#a6a6a6]">
            Signs / Banners, Screen Printing, Embroidery, Vinyl Wraps, Decals &amp; More
          </p>
          <button className="electric-button omg-display px-11 py-6 text-lg font-black uppercase italic tracking-[0.14em]">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}