import SectionCard from "../components/SectionCard";

const Resume = () => {
    return (
        <SectionCard id="resume">
            {/* Heading */}
            <p className="mb-2 text-sm tracking-widest text-zinc-400">
        // RESUME
            </p>

            <h2 className="mb-6 text-3xl font-bold text-white">
                Resume
            </h2>

            {/* Resume Card */}
            <div className="flex flex-col items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 p-10 text-center">

                <div className="mb-4 text-5xl">📄</div>

                <h3 className="mb-2 text-xl font-semibold text-white">
                    Download My Resume
                </h3>

                <p className="mb-6 max-w-xl text-zinc-400">
                    A detailed overview of my skills, education, projects, and professional
                    experience as a Frontend and Python Developer.
                </p>

                <div className="flex gap-4">
                    {/* Download Button */}
                    <a
                        href="/Resume/Mahesh_Resume.pdf"
                        download
                        className="btn-sweep rounded-lg bg-white px-6 py-2 text-sm font-semibold text-black"
                    >
                        <span>Download PDF</span>
                    </a>

                    {/* View Button */}
                    <a
                        href="/Resume/Mahesh_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sweep btn-sweep-dark rounded-lg border border-zinc-700 px-6 py-2 text-sm font-semibold text-white"
                    >
                        <span>View Resume</span>
                    </a>
                </div>
            </div>
        </SectionCard>
    );
};

export default Resume;
