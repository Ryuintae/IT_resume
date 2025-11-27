import { useCallback, useEffect, useState } from "react";

type HeaderProps = {
    isDark: boolean;
    onToggleDark: () => void;
    isLargeText: boolean;
    onToggleTextSize: () => void;
};

const navItems = [
    { id: "hero", label: "Home" },
    { id: "intro", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export default function Header({
                                   isDark,
                                   onToggleDark,
                                   isLargeText,
                                   onToggleTextSize,
                               }: HeaderProps) {
    const [activeId, setActiveId] = useState<string>("hero");

    const handleScroll = useCallback((id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    // 현재 화면에 보이는 section 감지 (IntersectionObserver)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        if (id) setActiveId(id);
                    }
                });
            },
            {
                root: null,
                threshold: 0.4, // 섹션이 40% 이상 보일 때 active
            }
        );

        navItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const pillButtonBase =
        "px-3 py-1.5 rounded-full text-xs md:text-sm font-medium border transition-colors";

    return (
        <>
            {/* 상단 헤더 */}
            <header
                className="
                    fixed top-0 left-0 w-full z-40
                    border-b border-neutral-200/70 dark:border-neutral-800/70
                    bg-neutral-50/80 dark:bg-neutral-900/80
                    backdrop-blur-md
                "
            >
                <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
                    {/* 왼쪽 로고 */}
                    <div className="text-sm md:text-base font-semibold tracking-tight">
                        <span className="text-neutral-900 dark:text-neutral-50">
                            RyuIntae
                        </span>{" "}
                        <span className="text-neutral-500 dark:text-neutral-400">
                            포트폴리오
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-xs md:text-sm">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => handleScroll(item.id)}
                                className={`
                                    bg-transparent
                                    transition-colors
                                    ${
                                    activeId === item.id
                                        ? "text-neutral-900 dark:text-blue-300"
                                        : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-blue-300"
                                }
                                `}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* 오른쪽 컨트롤: 글자 크기 / 다크모드 */}
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className={`
                                ${pillButtonBase}
                                border-neutral-200 bg-neutral-50 text-neutral-600
                                hover:bg-neutral-100 hover:text-neutral-900
                                dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700
                            `}
                            onClick={onToggleTextSize}
                        >
                            {isLargeText ? "글자 작게" : "글자 크게"}
                        </button>

                        <button
                            type="button"
                            className={`
                                ${pillButtonBase}
                                border-neutral-200 bg-neutral-50 text-neutral-600
                                hover:bg-neutral-100 hover:text-neutral-900
                                dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700
                            `}
                            onClick={onToggleDark}
                        >
                            {isDark ? "라이트 모드" : "다크 모드"}
                        </button>
                    </div>
                </div>
            </header>

            {/* 오른쪽 Notion 스타일 tick 네비게이션 */}
            <nav
                className="
                    fixed right-4 top-1/2 -translate-y-1/2
                    flex flex-col items-center gap-3
                    z-50
                "
            >
                {/* 세로 라인 (가이드용) */}
                <div className="absolute w-px h-full bg-neutral-200/70 dark:bg-neutral-700/70 pointer-events-none" />

                {navItems.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => handleScroll(item.id)}
                            aria-label={item.label}
                            className={`
                                group relative
                                w-2.5 h-2.5
                                rounded-sm
                                transition-all
                                ${
                                isActive
                                    ? "bg-neutral-900 dark:bg-neutral-50 scale-110"
                                    : "bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-900 dark:hover:bg-neutral-100"
                            }
                            `}
                        >
                            {/* hover 시 나타나는 라벨 */}
                            <span
                                className="
                                    pointer-events-none
                                    absolute right-full mr-3
                                    px-2 py-1 rounded-md
                                    text-xs font-medium
                                    bg-neutral-900 text-neutral-50
                                    dark:bg-neutral-50 dark:text-neutral-900
                                    opacity-0 translate-x-1
                                    group-hover:opacity-100 group-hover:translate-x-0
                                    transition-all
                                    whitespace-nowrap
                                    shadow-lg
                                "
                            >
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </nav>
        </>
    );
}