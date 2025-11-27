import { useEffect, useState } from "react";
import "./App.css";
import HeroSection from "./components/sections/HeroSection";
import IntroSection from "./components/sections/IntroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Header from "./components/layout/Header";

function App() {
    const [isDark, setIsDark] = useState(false);
    const [isLargeText, setIsLargeText] = useState(false);

    // 다크 모드: html 태그에 dark 클래스 토글
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    // 전체 기본 폰트 크기 조정 (본문 기준)
    const textSizeClass = isLargeText
        ? "text-[17px] md:text-[18px]"
        : "text-[15px] md:text-[16px]";

    return (
        <div
            className={`${textSizeClass} min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 transition-colors`}
        >
            <Header
                isDark={isDark}
                onToggleDark={() => setIsDark((prev) => !prev)}
                isLargeText={isLargeText}
                onToggleTextSize={() => setIsLargeText((prev) => !prev)}
            />

            {/* 헤더 fixed라서 위에 패딩 */}
            <main className="pt-16">
                <HeroSection />
                <IntroSection />
                <ProjectsSection />
                <ContactSection />
            </main>
        </div>
    );
}

export default App;