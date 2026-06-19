import { projects } from "../data";

const Projects = () => {
    return (
        <section id="works" className="bg-[#0a0a0a] px-24 py-32">

            {/* Heading */}
            <div className="flex items-end justify-between mb-16">
                <h2 className="text-5xl font-black text-white leading-tight">
                    Explore my most recent <span className="text-[#e8490f]">projects</span>
                </h2>
                <a href="#" className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider hover:bg-[#2a2a2a] transition-all duration-300 whitespace-nowrap">
                    View All ↗
                </a>
            </div>

            {/* Project Cards */}
            <div className="flex flex-col gap-0">
                {projects.map((project, index) => (
                    <div key={index} className="border-t border-gray-800 py-12 flex flex-col lg:flex-row gap-10 items-start">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full lg:w-1/2 rounded-2xl object-cover"
                        />
                        <div className="lg:w-1/2 flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-white text-2xl font-black uppercase">{project.title}</h3>
                                <span className="text-gray-500 text-lg font-bold">{project.year}</span>
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
                        </div>
                    </div>
                ))}
                <div className="border-t border-gray-800"></div>
            </div>

        </section>
    );
};

export default Projects;