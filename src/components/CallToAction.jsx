const CallToAction = () => {
    return (
        <section className="bg-[#0a0a0a] px-24 py-32">
            <div className="bg-[#111] rounded-3xl px-16 py-20 flex flex-col items-center text-center gap-8">
                <h2 className="text-6xl font-black text-gray-400 leading-tight">
                    Let's discuss about a project
                </h2>
                <a
                    href="#contact"
                    className="bg-[#e8490f] text-white px-10 py-5 rounded-full text-lg font-semibold tracking-wider hover:opacity-90 transition-opacity duration-300 flex items-center gap-2"
                >
                    Work with me ↗
                </a>
            </div>
        </section>
    );
};

export default CallToAction;