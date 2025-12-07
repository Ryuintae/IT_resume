import { Mail, Github } from "lucide-react";

export default function ContactSection() {
    return (
        <div className="mt-16">
            <footer
                id="contact"
                className="
                    relative
                    left-1/2 right-1/2
                    -ml-[50vw] -mr-[50vw]
                    w-screen
                    border-t border-neutral-200/80 dark:border-neutral-800/80
                    bg-neutral-100/80 dark:bg-neutral-900/80
                "
            >
                <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-10 space-y-6 md:space-y-7">
                    {/* 상단 인사 / 설명 */}
                    <div className="space-y-2">
                        <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-500 dark:text-neutral-400">
                            2025 · Frontend Developer
                        </p>
                        <h3 className="text-base md:text-lg font-semibold leading-relaxed text-neutral-900 dark:text-neutral-50">
                            프론트엔드 개발자 이력서를 끝까지 읽어주셔서 감사합니다.
                        </h3>
                        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
                            궁금한 점이나 협업 제안이 있으시다면 아래 채널로 편하게 연락 주세요.
                        </p>
                    </div>

                    {/* 중단: 섹션 네비 + 연락처 */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8 text-xs md:text-sm">
                        {/* 이력서 섹션 */}
                        <div className="space-y-3">
                            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                                이력서 섹션
                            </h4>
                            <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-neutral-700 dark:text-neutral-200">
                                <li>
                                    <a
                                        href="#intro"
                                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        소개
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#projects"
                                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        업무 경험
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#tech"
                                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        기술 스택
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#patents"
                                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        특허 · 모듈
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#education"
                                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        학력
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="space-y-3 md:min-w-[240px]">
                            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                                Contact
                            </h4>
                            <ul className="space-y-2 text-neutral-700 dark:text-neutral-200">
                                <li>
                                    <a
                                        href="mailto:dlsxichlrg@naver.com"
                                        className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">
                                            <Mail className="h-3.5 w-3.5" />
                                        </span>
                                        <span className="text-sm md:text-base">
                                            dlsxichlrg@naver.com
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/Ryuintae"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900">
                                            <Github className="h-3.5 w-3.5" />
                                        </span>
                                        <span className="text-sm md:text-base">
                                            github.com/Ryuintae
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 하단 크레딧 */}
                    <div className="pt-4 border-t border-neutral-200/70 dark:border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                            © 2025 Ryuintae. All rights reserved.
                        </p>
                        <p className="text-[11px] text-neutral-400 dark:text-neutral-500">
                            3D voxel dog ©{" "}
                            <a
                                href="https://www.craftz.dog/"
                                target="_blank"
                                rel="noreferrer"
                                className="underline underline-offset-2 hover:text-neutral-700 dark:hover:text-neutral-300 transition"
                            >
                                Takuya Matsuyama
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
