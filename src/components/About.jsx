const About = () => {
    return (
        <section id="about" className="bg-[#0a0a0a] px-24 py-32 flex flex-col lg:flex-row items-center gap-20">

            {/* Left - Image */}
            <div className="w-full lg:w-1/2">
                <img
                    src="https://placehold.co/600x700/1a1a1a/e8490f?text=God'swill"
                    alt="God'swill Benson"
                    className="w-full rounded-2xl object-cover"
                />
            </div>

            {/* Right - Text */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">

                {/* Scroll indicator */}
                <div className="text-gray-600 text-3xl">❯❯</div>

                {/* Tagline */}
                <h2 className="text-5xl font-black text-white leading-tight">
                    Creating code that{" "}
                    <span className="text-[#e8490f]">ignites</span>{" "}
                    results.
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed">
                    Focus your energy on your goals, and entrust me with the task
                    of efficiently bringing your ideas to life on the web — setting
                    your online presence apart from the rest.
                </p>

                {/* About Me Button */}
                <a
                    href="#works"
                    className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider flex items-center gap-2 w-fit hover:bg-[#2a2a2a] transition-all duration-300"
                >
                    About Me ↗
                </a>

            </div>
        </section>
    );
};

export default About;