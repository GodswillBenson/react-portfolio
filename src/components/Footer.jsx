import { footerLinks } from "../data";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] px-24 py-20 border-t border-gray-800">
      <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">

        {/* Logo */}
        <div>
          <a href="#home" className="text-white text-3xl font-black tracking-wider">
            GOD<span className="text-[#e8490f]">'</span>SWILL<span className="text-[#e8490f]">.</span>
          </a>
        </div>

        {/* Sitemap */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-lg">Sitemap</h4>
          {footerLinks.sitemap.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-gray-500 hover:text-[#e8490f] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-lg">Socials</h4>
          {footerLinks.socials.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-500 hover:text-[#e8490f] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-600 text-sm">
          © God'swill Benson. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;