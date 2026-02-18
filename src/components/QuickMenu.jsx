import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const QuickMenu = ({ onClose }) => {
    const { setLightTheme, setDarkTheme } = useTheme();

    return (
        <div className="fixed inset-0 z-50">
            {/* BACKDROP */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/50"
            />

            {/* MENU PANEL */}
            <div className="quick-menu absolute right-0 top-0 h-screen w-[320px] bg-zinc-900 p-6">
                {/* CLOSE */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-xl text-white"
                >
                    ✕
                </button>

                {/* CONTENT */}
                <div className="mt-12 space-y-6">
                    {/* PHONE */}
                    <div>
                        <p className="text-sm text-zinc-400">PHONE :</p>
                        <p className="text-white">+91 7093044331</p>
                    </div>

                    {/* EMAIL */}
                    <div>
                        <p className="text-sm text-zinc-400">EMAIL :</p>
                        <p className="text-white">maheshmahanthi70@gmail.com</p>
                    </div>

                    {/* 🔗 SOCIAL ICONS */}
                    <div className="flex gap-4 pt-2">
                        <a
                            href="https://linkedin.com/in/mahesh-mahanthi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-blue-600"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="https://github.com/Mahesh7845"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-zinc-600"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.instagram.com/mr.mahesh_000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-pink-600"
                        >
                            <FaInstagram />
                        </a>
                    </div>

                    {/* THEME OPTIONS */}
                    <div className="space-y-2 pt-4">
                        <button
                            onClick={setLightTheme}
                            className="block text-sm text-white hover:underline"
                        >
                            • Light Version
                        </button>

                        <button
                            onClick={setDarkTheme}
                            className="block text-sm text-white hover:underline"
                        >
                            • Buy Gray
                        </button>
                    </div>

                    {/* FOOTER */}
                    <p className="pt-4 text-xs text-zinc-500">
                        © 2026 Mahesh.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QuickMenu;