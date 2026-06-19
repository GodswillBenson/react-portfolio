import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center px-24 pt-24">

            {/* Name */}
            <h1 className="text-8xl font-black text-white uppercase leading-none tracking-tight">
                God'swill Benson
            </h1>

            {/* Divider */}
            <hr className="border-gray-700 my-8" />

            {/* Social Icons */}
            <div className="flex items-center gap-6 mb-8">
                <a href="#" className="text-white text-2xl hover:text-[#e8490f] transition-colors duration-300">
                    <FaInstagram />
                </a>
                <a href="#" className="text-white text-2xl hover:text-[#e8490f] transition-colors duration-300">
                    <FaFacebook />
                </a>
                <a href="#" className="text-white text-2xl hover:text-[#e8490f] transition-colors duration-300">
                    <FaWhatsapp />
                </a>
            </div>

            {/* Bio */}
            <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-12">
                A passionate beginner frontend developer based in Rivers State, Nigeria,
                building clean and responsive web experiences one line of code at a time.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">
                <a
                    href="#contact"
                    className="bg-[#e8490f] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider flex items-center gap-2 hover:opacity-90 transition-opacity duration-300"
                >
                    Let's Talk <span>↗</span>
                </a>
                <a
                    href="#about"
                    className="border border-white text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300"
                >
                    Click Here <span>↓</span>
                </a>
            </div>

        </section>
    );
};

export default Hero;