import { techStack } from "../data";

const TechStack = () => {
    return (
        <section className="bg-[#0a0a0a] px-24 py-32">
            <h2 className="text-5xl font-black text-white mb-16">
                My <span className="text-[#e8490f]">Tech Stack</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                {techStack.map((tech, index) => (
                    <div key={index} className="border border-gray-800 rounded-2xl px-8 py-6 text-center hover:border-[#e8490f] transition-all duration-300">
                        <p className="text-white text-xl font-bold">{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;