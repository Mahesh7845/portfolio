import SectionCard from "../components/SectionCard";

const Experience = () => {
    return (
        <SectionCard id="experience">
            {/* Heading */}
            <p className="mb-2 text-sm tracking-widest text-zinc-400">
        // EXPERIENCE
            </p>

            <h2 className="mb-8 text-3xl font-bold text-white">
                Professional Experience
            </h2>

            {/* Timeline */}
            <div className="relative border-l border-zinc-700 pl-8 space-y-10">

                {/* Experience 1 */}
                <div className="relative pl-6">
                    {/* Icon */}
                    <span className="absolute -left-[14px] top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-black text-sm">
                        🚀
                    </span>

                    <h3 className="text-xl font-semibold text-white">
                        Software Developer Apprentice
                    </h3>

                    <p className="text-sm text-zinc-400">
                        Best Infra pvt.ltd
                    </p>

                    <p className="mt-1 text-sm text-zinc-500">
                        Present · 3 Months Experience
                    </p>

                    <p className="mt-3 max-w-2xl text-zinc-400">
                        Currently gaining hands-on training in Go (Golang), frontend development, and full-stack application development. Actively working on real-world tasks, improving coding standards, debugging skills, and understanding best practices in software development.
                    </p>
                </div>

                {/* Experience 2 */}

                <div className="relative pl-6">
                    {/* Icon */}
                    <span className="absolute -left-[14px] top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-black text-sm">
                        💼
                    </span>

                    <h3 className="text-xl font-semibold text-white">
                        Web Developer Intern
                    </h3>

                    <p className="text-sm text-zinc-400">
                        Zenecks Infotech Pvt Ltd, Bangalore
                    </p>

                    <p className="mt-1 text-sm text-zinc-500">
                        June 2023 – August 2023 · 2 Months
                    </p>

                    <p className="mt-3 max-w-2xl text-zinc-400">
                        Worked on developing responsive and user-friendly web interfaces
                        using HTML, CSS, and JavaScript. Collaborated with team members in
                        an Agile environment, improved website performance, and ensured
                        cross-browser compatibility across multiple client projects.
                    </p>
                </div>

            </div>
        </SectionCard>
    );
};

export default Experience;
