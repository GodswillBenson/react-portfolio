import { services } from "../data";

const Services = () => {
    return (
        <section id="services" className="bg-[#0a0a0a] px-24 py-32">

            {/* Heading */}
            <div className="flex flex-col lg:flex-row gap-20 mb-20">
                <div className="lg:w-1/2">
                    <h2 className="text-5xl font-black text-white leading-tight">
                        I provide <span className="text-[#e8490f]">clean code</span> to bring your ideas to life online.
                    </h2>
                </div>
                <div className="lg:w-1/2 flex flex-col gap-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        My skills blend logic and creativity to build your vision on the web, leaving a lasting impression.
                    </p>
                </div>
            </div>

            {/* Services List */}
            <div className="flex flex-col">
                {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-8 py-8 border-t border-gray-800">
                        <span className="text-gray-700 text-4xl font-black">{service.number}</span>
                        <div>
                            <h3 className="text-white text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-500 uppercase text-sm tracking-widest">{service.description}</p>
                        </div>
                    </div>
                ))}
                <div className="border-t border-gray-800"></div>
            </div>

        </section>
    );
};

export default Services;