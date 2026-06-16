// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ data }) {
  const location = useLocation();

  return (
    <nav className="border-b border-neutral-900 bg-[#0c0c0c] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/portfolio" className="font-mono tracking-wider text-xs font-bold text-white uppercase">
          {data.logo}
        </Link>
        <div className="flex gap-6 md:gap-8 text-xs font-light tracking-widest">
          {data.links.map((link, idx) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={idx} 
                to={link.path} 
                className={`transition-colors duration-300 uppercase ${isActive ? 'text-white font-medium border-b border-white pb-1' : 'text-neutral-400 hover:text-white'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}