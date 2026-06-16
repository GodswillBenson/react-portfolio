// src/pages/Home.jsx
export default function Home({ data }) {
  return (
    <div className="animate-[fadeIn_0.6s_ease-out]">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-neutral-900">
        <div className="md:col-span-2">
          <p className="text-xs tracking-[0.4em] font-medium text-neutral-400 uppercase font-mono mb-4">{data.title}</p>
          <h1 className="text-5xl md:text-8xl font-light text-white tracking-tight leading-[0.95] mb-8">
            {data.tagline}
          </h1>
        </div>
        <div className="pt-6 md:pt-16 flex flex-col justify-between items-start">
          <p className="text-neutral-400 font-light text-sm leading-relaxed mb-8">
            {data.description}
          </p>
          <button className="px-6 py-4 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all duration-300">
            Let's Talk
          </button>
        </div>
      </section>

      {/* CONTINUOUS ROLLING MARQUEE */}
      <div className="bg-white text-black py-5 border-b border-neutral-900 flex whitespace-nowrap overflow-hidden select-none">
        <div className="animate-marquee flex gap-16">
          {data.marquee.concat(data.marquee).map((text, idx) => (
            <span key={idx} className="text-xs font-black font-mono tracking-[0.3em] uppercase">{text} •</span>
          ))}
        </div>
      </div>

      {/* SERVICES BLOCK */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 border-b border-neutral-900">
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-bold sticky top-28">About Me / Services</h2>
        </div>
        <div className="lg:col-span-2 divide-y divide-neutral-900">
          {data.services.map((service, index) => (
            <div key={index} className="py-8 grid grid-cols-1 md:grid-cols-4 gap-4 group">
              <span className="text-neutral-600 font-mono text-xs pt-1">{service.num}</span>
              <div className="md:col-span-3">
                <h3 className="text-xl text-white font-medium mb-2 group-hover:text-neutral-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-xs font-mono uppercase tracking-wider">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKS SECTIONS */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-b border-neutral-900">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-bold">Recent Creations</h2>
          <span className="text-xs text-neutral-400 border-b border-neutral-800 pb-0.5">View All</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.works.map((work, idx) => (
            <div key={idx} className="border border-neutral-900 p-8 hover:border-neutral-700 transition-all group cursor-pointer bg-[#111111]/10">
              <span className="text-xs font-mono text-neutral-600 block mb-4">{work.year}</span>
              <h3 className="text-2xl text-white font-light tracking-tight mb-2 group-hover:text-neutral-300 transition-colors">{work.title}</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">{work.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS DISPLAY GRID */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 border-b border-neutral-900">
        <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-bold">My Clients</h2>
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
          {data.clients.map((client, idx) => (
            <div key={idx} className="bg-[#0c0c0c] p-8 flex items-center justify-center font-serif italic text-neutral-500 text-sm tracking-wide">
              {client.replace("brand-image-", "").toUpperCase()}
            </div>
          ))}
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 border-b border-neutral-900">
        <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-bold">Awards & Recognition</h2>
        <div className="lg:col-span-2 divide-y divide-neutral-900 border-y border-neutral-900">
          {data.awards.map((award, idx) => (
            <div key={idx} className="py-6 flex justify-between items-center text-sm">
              <span className="text-white font-medium">{award.name}</span>
              <span className="font-mono text-xs text-neutral-500">{award.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SLIDER SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-bold mb-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.testimonials.map((test, idx) => (
            <div key={idx} className="p-8 border border-neutral-900 bg-neutral-950/20">
              <div className="text-yellow-500 text-xs mb-4">★★★★★</div>
              <p className="text-neutral-300 font-light text-sm leading-relaxed mb-6">"{test.quote}"</p>
              <h4 className="text-white font-medium text-xs">{test.author}</h4>
              <p className="text-neutral-500 font-mono text-[10px] mt-0.5 uppercase">{test.company}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}