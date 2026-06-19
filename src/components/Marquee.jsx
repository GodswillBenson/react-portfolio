import { useEffect, useRef } from "react";

const Marquee = () => {
    const textRef = useRef(null);
    const position = useRef(0);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const diff = currentScrollY - lastScrollY.current;
            position.current -= diff * 0.5;
            lastScrollY.current = currentScrollY;

            if (textRef.current) {
                textRef.current.style.transform = `translateX(${position.current}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const items = ["HTML", "CSS", "JAVASCRIPT", "REACT", "TAILWIND CSS", "GIT"];

    return (
        <div className="bg-[#0a0a0a] py-12 overflow-hidden border-t border-b border-gray-800">
            <div
                ref={textRef}
                style={{ transform: "translateX(0px)", willChange: "transform" }}
                className="flex whitespace-nowrap"
            >
                {[...items, ...items, ...items].map((item, index) => (
                    <span key={index} className="text-gray-700 text-4xl font-black mx-8 uppercase">
                        {item} <span className="text-[#e8490f]">—</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;