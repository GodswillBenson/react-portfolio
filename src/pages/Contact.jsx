// src/pages/Contact.jsx
export default function Contact({ data }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 animate-[fadeIn_0.6s_ease-out] text-center flex flex-col items-center justify-center">
      <div className="flex gap-3 items-center mb-6">
        <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full"></span>
        <p className="text-xs tracking-[0.3em] font-medium text-neutral-400 uppercase font-mono">GET IN TOUCH</p>
      </div>
      <h2 className="text-4xl md:text-7xl font-light text-white tracking-tight max-w-2xl leading-none mb-8">
        Let's discuss about a project.
      </h2>
      <p className="text-neutral-400 font-light max-w-md mb-12 text-sm leading-relaxed">
        Have an interface system layout, web integration challenge, or production scaling deployment that needs expert execution? Let's build together.
      </p>
      <a 
        href={`mailto:${data.email}`} 
        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold tracking-widest uppercase text-xs hover:bg-neutral-200 transition-colors duration-300 rounded-none shadow-xl"
      >
        Work With Me <span>→</span>
      </a>
    </div>
  );
}