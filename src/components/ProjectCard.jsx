import { useEffect, useState } from "react";

const ProjectCard = ({ title, images, description, tech, demoLink }) => {
    const [current, setCurrent] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (!hovered) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [hovered, images.length]);

    const handleMouseLeave = () => {
        setHovered(false);
        setCurrent(0);
    };

    return (
        <div className="mb-14">
            {/* Project Title */}
            <h3 className="mb-4 text-2xl font-bold text-white">
                {title}
            </h3>

            {/* Image Card */}
            <div
                className="relative mx-auto h-[380px] max-w-3xl overflow-hidden rounded-xl cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={handleMouseLeave}
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`${title} ${index + 1}`}
                        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-900 ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}

                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"
                        }`}
                />

                {/* Center Title */}
                <div
                    className={`absolute inset-0 flex items-center justify-center text-center px-4 transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"
                        }`}
                >
                    <h4 className="text-xl md:text-2xl font-semibold tracking-wide text-white leading-tight">
                        {title}
                    </h4>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-3">
                {tech.map((item, index) => (
                    <span
                        key={index}
                        className="rounded-full border border-zinc-700 px-4 py-1 text-sm text-zinc-300"
                    >
                        {item}
                    </span>
                ))}
            </div>
            {/* Demo Button */}
            <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sweep mt-4 inline-block rounded-lg bg-white px-6 py-2 text-sm font-semibold text-black"
            >
                Demo
            </a>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-zinc-400">
                {description}
            </p>
        </div>
    );
};

export default ProjectCard;
