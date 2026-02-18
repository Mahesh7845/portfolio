import { useState } from "react";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import useScrollSpy from "./hooks/useScrollSpy";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import QuickMenu from "./components/QuickMenu";
import { Toaster } from "react-hot-toast";
import CustomCursor from "./components/CustomCursor";

const sectionIds = [
  "about",
  "education",
  "projects",
  "experience",
  "resume",
  "contact",
];

function App() {
  const activeId = useScrollSpy(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full relative flex justify-center transition-colors duration-300">

      {/* CUSTOM CURSOR */}
      <CustomCursor />

      {/* GLOBAL 3 DOTS */}
      <button
        onClick={() => setMenuOpen(true)}
        className="menu-dots fixed right-8 top-8 z-50 text-2xl"
      >
        ⋮
      </button>

      {/* QUICK MENU */}
      {menuOpen && <QuickMenu onClose={() => setMenuOpen(false)} />}

      {/* MAIN CONTENT */}
      <div className="relative w-full max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
        <h1 className="hero-name mb-16 text-6xl font-extrabold tracking-tight md:text-7xl">
          <span className="mr-3">Mahesh</span>
          <span className="outlined-text">Mahanthi</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <Sidebar activeId={activeId} />

          <main className="flex-1">
            <About />
            <Education />
            <Projects />
            <Experience />
            <Resume />
            <Contact />
          </main>
        </div>
      </div>

      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;