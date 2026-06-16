// src/pages/Works.jsx
export default function Works({ data }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 animate-[fadeIn_0.6s_ease-out]">
      <div className="mb-16">
        <span className="text-[10px] font-mono text-neutral-600 block mb-2">PORTFOLIO</span>
        <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold">Selected Works</h2>
      </div>
      
      {/* Minimal Table-style Container Grid */}
      <div className="border border-neutral-900 divide-y divide-neutral-900">
        {data.map((work, index) => (
          <div 
            key={index} 
            className="p-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-center bg-transparent hover:bg-neutral-900/40 transition-all duration-300 group cursor-pointer"
          >
            <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
              {work.id}
            </span>
            <div className="md:col-span-2">
              <h3 className="text-lg text-white font-medium group-hover:text-neutral-300 transition-colors">
                {work.title}
              </h3>
              <p className="text-xs text-neutral-500 tracking-wider uppercase font-mono mt-1">
                {work.category}
              </p>
            </div>
            <span className="text-right text-xs font-mono text-neutral-500 hidden md:block group-hover:text-neutral-300 transition-colors">
              {work.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}