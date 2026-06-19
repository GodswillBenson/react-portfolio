import { useState } from "react";
import { navLinks } from "../data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const leftLinks = navLinks.slice(0, 3); // Home, About, Works
  const rightLinks = navLinks.slice(3);   // Blog, Contact

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a] px-36 py-6 flex items-center justify-between">

      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a] py-6 flex items-center" />

      {/* Left Links */}
      <ul className="hidden lg:flex items-center gap-10 pl-24">
        {leftLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Center Logo */}
      <a href="#home" className="text-white text-2xl font-black tracking-wider mx-auto">
        GOD<span className="text-[#e8490f]">'</span>SWILL<span className="text-[#e8490f]">.</span>
      </a>

      {/* Right Links */}
      <ul className="hidden lg:flex items-center gap-10 pr-24">
        {rightLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Button - mobile only */}
      <button
        onClick={() => setMenuOpen(true)}
        className="lg:hidden w-12 h-12 rounded-full border border-white flex flex-col items-center justify-center gap-1.5 ml-auto"
      >
        <span className="w-5 h-0.5 bg-white"></span>
        <span className="w-5 h-0.5 bg-white"></span>
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#0a0a0a] z-50 flex flex-col px-8 py-6">

          {/* Top Row */}
          <div className="flex items-center justify-between">
            <a href="#home" className="text-white text-2xl font-black tracking-wider">
              GOD<span className="text-[#e8490f]">'</span>SWILL<span className="text-[#e8490f]">.</span>
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white text-xl"
            >
              ✕
            </button>
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-8 mt-16">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-5xl font-bold hover:text-[#e8490f] transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;