// src/pages/About.jsx
export default function About({ data }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 animate-[fadeIn_0.6s_ease-out] grid grid-cols-1 lg:grid-cols-3 gap-16">
      <div className="border-b lg:border-b-0 pb-8 lg:pb-0">
        <span className="text-[10px] font-mono text-neutral-600 block mb-2">BIOGRAPHY</span>
        <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold mb-4">About Workspace</h2>
        <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Frontend Developer / Engineer</p>
      </div>
      <div className="lg:col-span-2 space-y-12">
        <h3 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
          {data.heading}
        </h3>
        <p className="text-neutral-400 font-light leading-relaxed text-sm max-w-2xl">
          {data.bio}
        </p>
        
        {/* Sub Grid Boxes */}
        <div className="pt-12 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.philosophy.map((phi, idx) => (
            <div key={idx} className="p-8 border border-neutral-900 bg-[#111111]/20 hover:border-neutral-700 transition-colors duration-300">
              <span className="text-[10px] font-mono text-neutral-600 block mb-3">0{idx + 1}</span>
              <h4 className="text-white text-base font-medium mb-2">{phi.key || phi.title}</h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">{phi.detail || phi.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}