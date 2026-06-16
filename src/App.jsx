// src/App.jsx
import React from 'react';

export default function App() {
  const navLinks = ["Home", "About", "Works", "Blog", "Contact"];
  
  const services = [
    { num: "01", title: "Research & planning", desc: "USER RESEARCH, AUDITS AND PLANS" },
    { num: "02", title: "Branding", desc: "USER RESEARCH, AUDITS AND PLANS" },
    { num: "03", title: "UI/UX Design", desc: "USER RESEARCH, AUDITS AND PLANS" },
    { num: "04", title: "Illustration", desc: "USER RESEARCH, AUDITS AND PLANS" }
  ];

  const works = [
    { id: "01", title: "LOGO DESIGN", year: "2024", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
    { id: "02", title: "WEBSITE UI DESIGN", year: "2024", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop" },
    { id: "03", title: "BRAND IDENTITY DESIGN", year: "2024", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
    { id: "04", title: "UX RESEARCH", year: "2024", img: "https://images.unsplash.com/photo-1581291518655-9523c932eecf?q=80&w=800&auto=format&fit=crop" }
  ];

  const clients = ["ESTATE", "SORA", "VENUS", "ETHER", "SPINE", "SEAL"];

  const awards = [
    { name: "Honorable Mention", detail: "2024 - AWWARDS" },
    { name: "Best Ui Design Award", detail: "2024 - Behance" },
    { name: "Site Of The Day", detail: "2023 - AWWARDS" },
    { name: "CSS Awards", detail: "2022 - CSS Design Awards" }
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans antialiased selection:bg-[#fd562a] selection:text-white pb-12">
      
      {/* GLOBAL BACKGROUND LINES */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between max-w-5xl mx-auto px-6 opacity-[0.015]">
        <div className="w-px h-full bg-white"></div>
        <div className="w-px h-full bg-white hidden md:block"></div>
        <div className="w-px h-full bg-white hidden md:block"></div>
        <div className="w-px h-full bg-white"></div>
      </div>

      <div className="relative z-10">
        
        {/* STICKY HEADER NAVBAR */}
        <nav className="border-b border-neutral-900/60 sticky top-0 bg-[#080808]/80 backdrop-blur-md z-50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xs font-black tracking-widest font-mono uppercase">
              GOD<span className="text-[#fd562a]">'</span>SWILL<span className="text-[#fd562a]">.</span>
            </div>
            <div className="flex gap-5 text-[10px] tracking-[0.2em] font-bold uppercase text-neutral-400">
              {navLinks.map((link, i) => (
                <span key={i} className={`cursor-pointer hover:text-white transition-colors duration-200 ${link === 'Home' ? 'text-[#fd562a]' : ''}`}>
                  {link}
                </span>
              ))}
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <header className="max-w-5xl mx-auto px-6 pt-16 pb-12 border-b border-neutral-900/40 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-black tracking-tighter leading-[0.85] text-white select-none">
              GOD'SWILL BENSON
            </h1>
            <div className="w-full h-px bg-neutral-900 my-6 max-w-md"></div>
            {/* SOCIAL ICON WRAPPER */}
            <div className="flex gap-4 text-[10px] font-mono tracking-wider text-neutral-500">
              <span className="hover:text-white cursor-pointer transition-colors">📸 INSTAGRAM</span>
              <span className="hover:text-white cursor-pointer transition-colors">Bē BEHANCE</span>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <p className="text-neutral-400 font-light text-xs leading-relaxed">
              Experienced creative designer and custom artist based in London, blending innovation with artistic flair. Crafting captivating visuals that leave a lasting impression.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#fd562a] text-white px-4 py-2.5 text-[10px] font-bold tracking-widest uppercase rounded hover:bg-[#e0451b] transition-all duration-300">
              Let's Talk ↗
            </button>
          </div>
        </header>

        {/* PROFILE PICTURE BREAK SECTION */}
        <section className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
          <div className="md:col-span-5">
            <div className="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 aspect-[4/5] relative shadow-xl max-w-sm mx-auto md:max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop" 
                alt="Rivera Jonas Portrait" 
                className="w-full h-full object-cover grayscale opacity-90"
              />
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col gap-4 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Creating designs that <span className="text-[#fd562a]">ignite</span> responses.
            </h2>
            <p className="text-neutral-400 text-xs font-light leading-relaxed max-w-md">
              Direct your energy towards growing your business, and entrust me with the task of efficiently presenting your business in the digital world, setting it apart from competitors.
            </p>
            <button className="w-fit border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-800 text-[10px] font-bold tracking-widest uppercase px-4 py-2.5 rounded transition-all">
              About Me ↗
            </button>
          </div>
          <div className="absolute right-6 bottom-0 text-[5rem] md:text-[8rem] font-black text-neutral-900/5 pointer-events-none uppercase font-mono tracking-tighter select-none z-0">
            ABOUT
          </div>
        </section>

        {/* SERVICES BLOCK TERMINAL */}
        <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative border-t border-neutral-900/40">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <h2 className="text-2xl font-black text-white leading-tight max-w-xs">
              I provide artistic <span className="text-[#fd562a]">solutions</span> to meet your business requirements.
            </h2>
            <div className="rounded-lg overflow-hidden aspect-video border border-neutral-800 bg-neutral-900 shadow-md max-w-sm">
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop" 
                alt="Wireframes Sketching" 
                className="w-full h-full object-cover opacity-85"
              />
            </div>
            <p className="text-neutral-500 text-[11px] font-light leading-relaxed max-w-xs">
              My services blend creativity and strategy to bring your vision to life, leaving a lasting impact.
            </p>
          </div>

          <div className="lg:col-span-7 divide-y divide-neutral-900/60 border-b border-neutral-900/60">
            {services.map((service, index) => (
              <div key={index} className="py-5 flex justify-between items-start group cursor-pointer transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <span className="text-neutral-700 font-mono text-xs tracking-wider font-bold pt-1 group-hover:text-[#fd562a] transition-colors">
                    {service.num}
                  </span>
                  <div>
                    <h3 className="text-lg text-white font-bold tracking-tight mb-0.5 group-hover:text-neutral-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-500 text-[9px] font-mono tracking-widest uppercase">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CREATIONS GALLERIES */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-t border-neutral-900/40 relative">
          <div className="flex justify-between items-end mb-10 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Explore my most <br />recent <span className="text-[#fd562a]">creations</span>
            </h2>
            <button className="border border-neutral-800 bg-neutral-900/50 text-white text-[9px] font-bold tracking-widest uppercase px-3 py-2 rounded hover:bg-neutral-800 transition-all">
              View All ↗
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 relative z-10">
            {works.map((work, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col gap-3">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-neutral-800/60 shadow-md relative">
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className="w-full h-full object-cover scale-100 group-hover:scale-102 transition-transform duration-500 opacity-90"
                  />
                </div>
                <div className="flex justify-between items-center border-b border-neutral-900/60 pb-1.5">
                  <h3 className="text-xs text-white font-black tracking-wider uppercase font-mono">{work.title}</h3>
                  <span className="text-[11px] font-mono text-neutral-500 font-bold">{work.year}</span>
                </div>
                <p className="text-neutral-400 text-[11px] font-light leading-relaxed max-w-xs">
                  We invite you to explore our world of design, where each project is a harmonious blend of form and art.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CLIENTS LOGO SEGMENT */}
        <section className="max-w-5xl mx-auto px-6 py-14 border-t border-neutral-900/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-black text-white tracking-tight leading-none">
              My <br /><span className="text-[#fd562a]">Clients</span>
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {clients.map((client, idx) => (
              <div key={idx} className="bg-neutral-950/40 border border-neutral-900/40 py-4 px-2 flex items-center justify-center font-mono font-bold tracking-[0.2em] text-neutral-400 text-[10px] rounded-lg">
                {client}
              </div>
            ))}
          </div>
        </section>

        {/* AWARDS GRID PANEL */}
        <section className="max-w-5xl mx-auto px-6 py-14 border-t border-neutral-900/40 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
              Awards & <br /><span className="text-[#fd562a]">Recognition</span>
            </h2>
            <p className="text-neutral-500 text-[11px] font-light mt-2 leading-relaxed max-w-xs">
              Highlighting notable achievements and accolades received for outstanding work.
            </p>
          </div>
          <div className="lg:col-span-8 divide-y divide-neutral-900/60 border-y border-neutral-900/60">
            {awards.map((award, idx) => (
              <div key={idx} className="py-4 flex justify-between items-center text-xs group">
                <span className="text-white font-bold group-hover:text-[#fd562a] transition-colors">{award.name}</span>
                <span className="font-mono text-[10px] text-neutral-500 tracking-wider font-semibold">{award.detail}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTINUOUS WIRE OUTLINED ACCENT MARQUEE */}
        <div className="w-full bg-transparent py-8 border-t border-neutral-900/40 flex whitespace-nowrap overflow-hidden select-none relative">
          <div className="animate-marquee flex gap-10 font-black tracking-tighter text-4xl sm:text-6xl text-transparent bg-clip-text font-serif italic" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.04)" }}>
            {["BRANDING", "UI/UX DESIGN", "ILLUSTRATION"].concat(["BRANDING", "UI/UX DESIGN", "ILLUSTRATION"]).map((text, idx) => (
              <span key={idx} className="whitespace-nowrap uppercase">{text} —</span>
            ))}
          </div>
        </div>

        {/* TESTIMONIAL FEATURE SECTION */}
        <section className="max-w-5xl mx-auto px-6 py-14 border-t border-neutral-900/40">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-white tracking-tight">
              Client <span className="text-[#fd562a]">Testimonials</span> <br />Speak to My Excellence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-neutral-950/10 border border-neutral-900/40 p-6 sm:p-8 rounded-xl">
            <div className="md:col-span-4 flex justify-center md:justify-start">
              <div className="rounded-lg overflow-hidden aspect-square max-w-[140px] border border-neutral-800 grayscale">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
                  alt="Mark Roberts Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-8 flex flex-col gap-3 relative">
              <p className="text-neutral-300 font-light text-sm leading-relaxed italic relative z-10">
                "They took my vision and turned it into reality. I am grateful for their expertise and dedication to my project."
              </p>
              <div>
                <h4 className="text-white font-bold text-xs tracking-wide">Mark Roberts</h4>
                <p className="text-neutral-500 font-mono text-[9px] mt-0.5 tracking-wider uppercase">Vision Vista Inc. - COO</p>
              </div>
              <div className="text-[#fd562a] text-[10px] flex gap-0.5">★★★★★</div>
            </div>
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION INTERNET CONTAINER */}
        <section className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-neutral-900/20 border border-neutral-900/60 rounded-2xl p-10 sm:p-14 text-center flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white max-w-sm leading-none">
              Let’s discuss about <br />a project
            </h2>
            <button className="bg-[#fd562a] text-white px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase rounded shadow hover:bg-[#e0451b] transition-all mt-2">
              Work with me ↗
            </button>
          </div>
        </section>

        {/* FOOTER METADATA LAYOUT */}
        <footer className="max-w-5xl mx-auto px-6 pt-12 pb-6 border-t border-neutral-900/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-mono text-neutral-500 text-[11px]">
          <div>
            <span className="text-white font-black tracking-widest uppercase text-xs">RIVERA<span className="text-[#fd562a]">.</span></span>
            <p className="text-[9px] text-neutral-600 mt-0.5 uppercase">© The Rivera Jonas. All rights reserved.</p>
          </div>
          <div className="flex gap-6 font-bold tracking-widest text-[10px]">
            <span className="hover:text-white cursor-pointer transition-colors">SITEMAP</span>
            <span className="hover:text-white cursor-pointer transition-colors">STYLEGUIDE</span>
            <span className="hover:text-white cursor-pointer transition-colors">CHANGELOG</span>
          </div>
        </footer>

      </div>
    </div>
  );
}