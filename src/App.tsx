import './App.css'
import HeroSection from "./components/sections/HeroSection.tsx";
import IntroSection from "./components/sections/IntroSection.tsx";
import ProjectsSection from "./components/sections/ProjectsSection.tsx";
import ContactSection from "./components/sections/ContactSection.tsx";

function App() {
    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900">
        <main className="bg-neutral-50 text-neutral-900">
            <HeroSection />
            <IntroSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
        </div>
    );
}

export default App
