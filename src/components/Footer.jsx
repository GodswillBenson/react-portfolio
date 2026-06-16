// src/components/Footer.jsx
export default function Footer({ data }) {
  return (
    <footer className="bg-[#080808] border-t border-neutral-900 pt-20 pb-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="text-xs tracking-[0.2em] font-medium text-neutral-500 uppercase mb-2">Project Request Terminal</h2>
          <a href={`mailto:${data.email}`} className="text-xl font-light text-white hover:text-neutral-400 transition-colors">
            {data.email}
          </a>
        </div>
        <div className="flex flex-col items-end gap-3 text-xs tracking-wider">
          <div className="flex gap-6 font-mono text-neutral-400">
            <a href={data.github} target="_blank" rel="noreferrer" className="hover:text-white">GITHUB</a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LINKEDIN</a>
          </div>
          <p className="text-neutral-600 text-[10px] uppercase font-mono mt-2">{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}