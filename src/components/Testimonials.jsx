import { useState } from "react";
import { testimonials } from "../data";

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((current + 1) % testimonials.length);

    const t = testimonials[current];

    return (
        <section className="bg-[#0a0a0a] px-24 py-32">
            <h2 className="text-5xl font-black text-white leading-tight mb-16">
                What People <span className="text-[#e8490f]">Say</span> About Me
            </h2>

            <div className="flex flex-col gap-6">
                <span className="text-gray-700 text-6xl font-black">"</span>
                <div className="bg-[#111] rounded-2xl p-10 flex flex-col lg:flex-row gap-10 items-start">
                    <img
                        src={`https://placehold.co/200x200/1a1a1a/e8490f?text=${t.name.split(" ")[0]}`}
                        alt={t.name}
                        className="w-40 h-40 rounded-2xl object-cover"
                    />
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-300 text-xl leading-relaxed">"{t.quote}"</p>
                        <div>
                            <p className="text-white font-bold text-lg">{t.name}</p>
                            <p className="text-gray-500">{t.role}</p>
                            <div className="flex gap-1 mt-2">
                                {Array(t.rating).fill(0).map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-lg">★</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 mt-4">
                    <button onClick={prev} className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">←</button>
                    <button onClick={next} className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">→</button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;