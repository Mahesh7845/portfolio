import SectionCard from "../components/SectionCard";
import TypeText from "../components/TypeText";

const About = () => {
    return (

        <SectionCard id="about">
            <div className="grid grid-cols-[280px_1fr] gap-10 items-start about-grid">

                {/* LEFT PROFILE */}
                <div className="relative">
                    <img
                        src="/images/myprofilepicture.jpg"
                        alt="Profile"
                        className="about-image h-64 w-64 rounded-full object-cover"
                    />

                    {/* Name Tag */}
                    {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-black/60 backdrop-blur-sm/90 px-5 py-1.5 text-xs tracking-[0.2em] text-white shadow-lg">
                        <TypeText text="I'M MAHESH" speed={110} />
                    </div> */}

                </div>

                {/* RIGHT CONTENT */}
                <div>
                    <p className="mb-2 text-sm tracking-widest text-zinc-400">
            // ABOUT ME
                    </p>

                    <h2 className="mb-4 text-3xl font-bold text-white">
                        FullStack Developer.
                    </h2>

                    {/* Skills Pills */}
                    <div className="mb-5 flex flex-wrap gap-3">
                        <span className="rounded-full border border-zinc-600 px-4 py-1 text-sm text-zinc-300">
                            ⚛️ React
                        </span>
                        <span className="rounded-full border border-zinc-600 px-4 py-1 text-sm text-zinc-300">
                            🐍 Python
                        </span>
                        <span className="rounded-full border border-zinc-600 px-4 py-1 text-sm text-zinc-300">
                            🗄️ SQL
                        </span>
                    </div>

                    <p className="mb-8 max-w-2xl text-zinc-400">
                        Frontend and Python Developer with hands-on experience in building responsive web applications and interactive user interfaces using HTML, CSS, JavaScript, and Python. Experienced in developing performance-optimized UI components, database-driven features, and Python-based logic through internships and real-world projects. Passionate about writing clean, scalable code and continuously improving technical skills to deliver user-focused solutions.
                    </p>

                    {/* Stats */}
                    <div className="flex gap-12">
                        <div>
                            <h3 className="text-4xl font-bold text-white">6+</h3>
                            <p className="text-sm text-zinc-400">Months Experience</p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-white">5+</h3>
                            <p className="text-sm text-zinc-400">Academic & Real-World Projects</p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-white">2</h3>
                            <p className="text-sm text-zinc-400">Internships / Apprenticeship</p>
                        </div>
                    </div>
                </div>

            </div>
        </SectionCard>
    );
};

export default About;
