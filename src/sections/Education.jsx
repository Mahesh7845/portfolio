import SectionCard from "../components/SectionCard";

const Education = () => {
    return (
        <SectionCard id="education">
            {/* Heading */}
            <p className="mb-2 text-sm tracking-widest text-zinc-400">
        // EDUCATION
            </p>

            <h2 className="mb-4 text-3xl font-bold text-white">
                Academic Background
            </h2>

            {/* Top Icon */}
            <div className="mb-10 flex justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 text-xl text-white">
                    🎓
                </span>
            </div>

            {/* Timeline */}
            <div className="relative border-l border-dashed border-zinc-700 pl-10 space-y-14">

                {/* Item 1 */}
                <div className="relative pl-4">
                    {/* Dot */}
                    <span className="absolute -left-[10px] top-2 h-3 w-3 rounded-full bg-white" />

                    {/* Date */}
                    <span className="inline-block mb-3 rounded-full border border-zinc-700 px-5 py-1 text-xs text-zinc-300">
                        2021 – 2025
                    </span>

                    <h3 className="text-lg font-semibold text-white">
                        B.Tech in Computer Science
                    </h3>

                    <p className="text-sm text-zinc-400">
                        @Amrita Sai Institute of Science and Technology
                    </p>

                    <p className="mt-2 text-sm text-zinc-400">
                        Focused on core computer science subjects including data structures,
                        databases, and web technologies, with hands-on frontend and Python
                        development experience.
                    </p>
                </div>

                {/* Item 2 */}
                <div className="relative pl-4">

                    <span className="absolute -left-[10px] top-2 h-3 w-3 rounded-full bg-white" />

                    <span className="inline-block mb-3 rounded-full border border-zinc-700 px-5 py-1 text-xs text-zinc-300">
                        2019 – 2021
                    </span>

                    <h3 className="text-lg font-semibold text-white">
                        Intermediate (Class XII)
                    </h3>

                    <p className="text-sm text-zinc-400">
                        @P.B. Siddhartha College of Arts and Science
                    </p>

                    <p className="mt-2 text-sm text-zinc-400">
                        Built a strong foundation in mathematics and science, developing
                        analytical and problem-solving skills.
                    </p>
                </div>

                {/* Item 3 */}
                <div className="relative pl-4">

                    <span className="absolute -left-[10px] top-2 h-3 w-3 rounded-full bg-white" />

                    <span className="inline-block mb-3 rounded-full border border-zinc-700 px-5 py-1 text-xs text-zinc-300">
                        2018 – 2019
                    </span>

                    <h3 className="text-lg font-semibold text-white">
                        Secondary School (Class X)
                    </h3>

                    <p className="text-sm text-zinc-400">
                        @S.K.P.V.V. Hindu High School
                    </p>

                    <p className="mt-2 text-sm text-zinc-400">
                        Strengthened academic fundamentals with emphasis on mathematics
                        and science.
                    </p>
                </div>

            </div>
        </SectionCard>
    );
};

export default Education;
