const sections = [
    { id: "about", label: "ABOUT ME" },
    { id: "education", label: "EDUCATION" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "resume", label: "RESUME" },
    { id: "contact", label: "CONTACT" },
];

const Sidebar = ({ activeId }) => {
    const handleClick = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <aside className="sidebar hidden lg:block sticky top-24 h-fit w-[260px] rounded-2xl bg-zinc-900 px-8 py-10">
            <ul className="space-y-6">
                {sections.map((item) => {
                    const isActive = activeId === item.id;

                    return (
                        <li
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            className="flex cursor-pointer items-center justify-between"
                        >
                            <span
                                className={`text-sm tracking-widest ${isActive ? "text-white" : "text-zinc-400"
                                    }`}
                            >
                                {item.label}
                            </span>

                            {/* INDICATOR CONTAINER (fixed size) */}
                            <span className="relative flex h-5 w-5 items-center justify-center">
                                {isActive ? (
                                    // ACTIVE → DOTTED CIRCLE (centered)
                                    <span className="h-5 w-5 rounded-full border border-dashed border-zinc-300 animate-dot-pulse" />
                                ) : (
                                    // INACTIVE → SMALL DOT (centered)
                                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                                )}
                            </span>



                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;
