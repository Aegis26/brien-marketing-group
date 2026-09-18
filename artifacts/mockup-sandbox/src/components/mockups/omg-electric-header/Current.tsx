import './_group.css';

const navLinks = ['Services', 'Portfolio', 'Contact'];

export function Current() {
  return (
    <div className="omg-preview relative min-h-screen overflow-hidden bg-[#0a0a0a] text-[#e8e8e8]">
      <header className="absolute inset-x-0 top-0 z-20 py-6">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6">
          <img
            src="/__mockup/images/obrien-logo.png"
            alt="O'Brien Marketing Group"
            className="h-48 w-auto object-contain"
          />
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link} className="rounded px-2 py-1 text-sm font-medium tracking-wide transition-colors hover:text-[#1fff00]">
                {link}
              </button>
            ))}
            <button className="bg-[#1fff00] px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-black shadow-[0_0_15px_rgba(31,255,0,0.3)]">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 text-center">
        <div className="absolute inset-0">
          <img src="/__mockup/images/omg-storefront-night.png" alt="" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 max-w-4xl px-6">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#1fff00] drop-shadow-[0_0_10px_rgba(31,255,0,0.5)]">
            O'Brien Marketing Group
          </p>
          <h1 className="omg-display mb-8 text-7xl font-black uppercase leading-[0.9]">
            We Strive<br />
            <span className="bg-gradient-to-r from-[#1fff00] to-[#80ff00] bg-clip-text text-transparent">So You Thrive</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl font-medium text-[#a6a6a6]">
            Signs / Banners, Screen Printing, Embroidery, Vinyl Wraps, Decals &amp; More
          </p>
          <button className="bg-[#1fff00] px-10 py-6 text-lg font-bold uppercase tracking-[0.1em] text-black shadow-[0_0_20px_rgba(31,255,0,0.2)]">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}