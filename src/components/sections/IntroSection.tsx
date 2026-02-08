import Section from "../ui/Section";
import { motion } from "framer-motion";

export default function IntroSection() {
    return (
        <Section id="intro">
            <motion.div
                className="space-y-6 md:space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* 섹션 타이틀 */}
                <div className="space-y-2">
                    <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                        Introduction
                    </span>

                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        About Me
                    </h2>
                </div>

                {/* 단일 컬럼 카드 본문 */}
                <div
                    className="
                        relative overflow-hidden
                        rounded-3xl border border-neutral-200/80
                        bg-gradient-to-br from-neutral-50 via-white to-neutral-100
                        px-5 py-6 md:px-7 md:py-7
                        shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                        dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900
                        dark:border-neutral-700/80 dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                    "
                >
                    {/* 상단 얇은 그라데이션 바 */}
                    <div className="pointer-events-none absolute inset-x-5 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 dark:from-blue-400 dark:via-sky-300 dark:to-emerald-300" />

                    <div className="space-y-4 md:space-y-5 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-200">
                        {/* 현재 포지션 태그 */}
                        <div className="flex flex-wrap gap-2 pb-1">
                        <span
                         className="inline-flex items-center rounded-full
                         bg-white text-neutral-900
                         dark:bg-neutral-800 dark:text-neutral-100
                         border border-neutral-300 dark:border-neutral-700
                        px-3 py-1 text-[11px] font-medium shadow-sm"
                        >
                        Frontend Developer @ JBT
                        </span>
                        </div>

                        <p className="break-keep text-balance">
                            2023년 7월부터 GIS 기반 솔루션 기업{" "}
                            <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
                                JBT
                            </strong>
                            에서 프론트엔드 개발자로 근무하며,
                            웹 기반 시각화 서비스의 화면 개발과 운영을 맡아왔습니다.
                        </p>

                        <p className="break-keep text-balance">
                            복잡한 기능과 데이터를 다루는 환경에서
                            화면 구조와 사용자 흐름을 우선으로 두고 개발해 왔습니다.
                        </p>

                        <p className="break-keep text-balance">
                            유지보수와 협업을 고려해
                            공통 컴포넌트와 코드 흐름을 정리하며 작업해 왔습니다.
                        </p>

                        <p className="break-keep text-balance">
                            팀 내에서 프론트엔드 개발을 담당하며
                            화면 구현과 협업을 함께 진행했습니다.
                        </p>


                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
