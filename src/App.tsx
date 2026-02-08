import { useEffect, useState } from "react";
import "./App.css";
import HeroSection from "./components/sections/HeroSection";
import IntroSection from "./components/sections/IntroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Header from "./components/layout/Header";
import TechStackSection from "./components/sections/TechStackSection.tsx";
import PatentSection from "./components/sections/PatentSection.tsx";
import EducationSection from "./components/sections/EducationSection.tsx";

function App() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <div
            className="
                min-h-screen
                text-[15px] md:text-[16px]
                bg-neutral-50 text-neutral-900
                dark:bg-neutral-950 dark:text-neutral-50
                transition-colors
            "
        >
            <Header
                isDark={isDark}
                onToggleDark={() => setIsDark((prev) => !prev)}
            />

            <main className="pt-16">
                <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
                    <HeroSection />
                    <TechStackSection />
                    <IntroSection />
                    <ProjectsSection />
                    <PatentSection />
                    <EducationSection />
                </div>
            </main>

            <ContactSection />
        </div>
    );
}

export default App;
