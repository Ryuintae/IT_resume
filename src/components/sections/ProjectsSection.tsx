import Section from "../ui/Section";
import { projects } from "../../lib/data/projects";
import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};
type VideoModalState = {
    open: boolean;
    title?: string;
    src?: string;
    poster?: string;
    isPublic?: boolean;
};
export default function ProjectsSection() {
    const [videoModal, setVideoModal] = useState<VideoModalState>({ open: false });

    const closeVideo = () => setVideoModal({ open: false });

    return (
        <Section id="projects" className="py-16">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* 헤더 */}
                <header className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        업무 경험
                    </h2>
                </header>

                {/* 카드 리스트 */}
                <motion.div
                    className="relative grid gap-6 md:gap-7"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {/* 타임라인 라인 */}
                    <div
                        aria-hidden="true"
                        className="hidden md:block absolute left-[0.4375rem] top-0 bottom-0 w-px
                        bg-gradient-to-b from-blue-300/40 via-neutral-200 to-transparent
                        dark:from-blue-500/40 dark:via-neutral-700"
                    />

                    {projects.map((project) => (
                        <motion.article
                            key={project.id}
                            variants={cardVariants}
                            className="relative md:pl-10"
                        >
                            {/* 타임라인 Dot */}
                            <div
                                aria-hidden="true"
                                className="hidden md:flex absolute left-0 top-6 h-3.5 w-3.5 items-center justify-center"
                            >
                                <div className="h-3.5 w-3.5 rounded-full bg-white dark:bg-neutral-950 shadow-[0_0_0_4px_rgba(37,99,235,0.18)] dark:shadow-[0_0_0_4px_rgba(59,130,246,0.35)]">
                                    <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500" />
                                </div>
                            </div>

                            {/* 카드 */}
                            <div
                                className="
                                    rounded-3xl border border-neutral-200/80
                                    bg-gradient-to-br from-neutral-50 via-white to-blue-50/40
                                    shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                                    dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-950 dark:to-blue-950/20
                                    dark:border-neutral-700/80
                                    overflow-hidden
                                "
                            >
                                <div className="p-5 md:p-6 space-y-5">
                                    {/* 상단 정보 */}
                                    <div className="space-y-2">
                                        <span
                                            className="
                                                inline-flex items-center rounded-full
                                                bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600
                                                dark:bg-neutral-800 dark:text-neutral-300
                                            "
                                        >
                                            {project.client}
                                        </span>

                                        <h3 className="text-base md:text-lg font-semibold leading-snug break-keep">
                                            {project.title}
                                        </h3>

                                        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed break-keep">
                                            {project.summary}
                                        </p>
                                    </div>

                                    {/* 문제 / 접근 / 결과 */}
                                    <div className="space-y-3">
                                        {project.points.map((p, idx) => (
                                            <div
                                                key={idx}
                                                className="
                                                    rounded-2xl border border-neutral-200/70
                                                    bg-white/70 px-4 py-3
                                                    dark:bg-neutral-950/40 dark:border-neutral-800/70
                                                "
                                            >
                                                <div className="grid gap-2.5">
                                                    {/* 문제 */}
                                                    <div className="grid grid-cols-[auto,1fr] items-start gap-x-2 gap-y-1">
                                                         <span className="
                                                            whitespace-nowrap
                                                            rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-semibold
                                                            text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200
                                                         ">
                                                            문제
                                                        </span>
                                                        <p className="text-xs md:text-sm leading-relaxed break-keep">
                                                            {p.problem}
                                                        </p>
                                                    </div>

                                                    {/* 접근 */}
                                                    <div className="grid grid-cols-[auto,1fr] items-start gap-x-2 gap-y-1">
                                                        <span className="
                                                          whitespace-nowrap
                                                          rounded-full
                                                          bg-blue-50 px-2 py-0.5 text-[11px] font-semibold
                                                          text-blue-700
                                                          dark:bg-blue-950/40 dark:text-blue-200
                                                        ">
                                                        접근
                                                      </span>
                                                        <p className="text-xs md:text-sm leading-relaxed break-keep">
                                                            {p.action}
                                                        </p>
                                                    </div>

                                                    {/* 결과 */}
                                                    <div className="grid grid-cols-[auto,1fr] items-start gap-x-2 gap-y-1">
                                                      <span className="
                                                          whitespace-nowrap
                                                          rounded-full
                                                          bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold
                                                          text-emerald-700
                                                          dark:bg-emerald-950/30 dark:text-emerald-200
                                                      ">
                                                        결과
                                                      </span>
                                                        <p className="text-xs md:text-sm leading-relaxed break-keep">
                                                            {p.result}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* 기술 스택 */}
                                    <div className="pt-3 border-t border-neutral-200/70 dark:border-neutral-700/70 flex flex-wrap gap-2">
                                        {project.techStack.split("·").map((raw) => {
                                            const tech = raw.trim();
                                            if (!tech) return null;
                                            return (
                                                <span
                                                    key={tech}
                                                    className="
                                                        rounded-full px-3 py-1 text-[11px] md:text-xs font-medium
                                                        bg-neutral-50/80 text-neutral-700
                                                        border border-blue-200 shadow-sm
                                                        dark:bg-neutral-900/70 dark:text-neutral-200 dark:border-blue-900/40
                                                        whitespace-nowrap
                                                    ">
                                                    {tech}
                                                </span>
                                            );
                                        })}
                                    </div>
                                    {/* Links */}
                                    {project.links?.length ? (
                                        <div className="pt-3 flex flex-wrap gap-2">
                                            {project.links.map((l) => {
                                                const isVideo = (l.kind ?? "url") === "video";

                                                const pillClass =
                                                    "inline-flex items-center gap-2 rounded-full " +
                                                    "px-3 py-1 text-[11px] md:text-xs font-medium " +
                                                    "border border-neutral-200/70 bg-white/60 " +
                                                    "text-neutral-700 hover:bg-white " +
                                                    "dark:border-neutral-800/70 dark:bg-neutral-950/40 dark:text-neutral-200";

                                                if (isVideo) {
                                                    return (
                                                        <button
                                                            key={`${project.id}-${l.label}`}
                                                            type="button"
                                                            onClick={() =>
                                                                setVideoModal({
                                                                    open: true,
                                                                    title: project.title,
                                                                    src: l.videoSrc,
                                                                    poster: l.videoPoster,
                                                                    isPublic: project.id === "flood-alert",
                                                                })
                                                            }
                                                            className={pillClass}
                                                        >
                                                            {l.label}
                                                            <span className="opacity-60">▶</span>
                                                        </button>
                                                    );
                                                }

                                                return (
                                                    <a
                                                        key={l.href}
                                                        href={l.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className={pillClass}
                                                    >
                                                        {l.label}
                                                        <span className="opacity-60">↗</span>
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
            {/* Video Modal */}
            {videoModal.open ? (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label="시연 영상"
                >
                    {/* Backdrop */}
                    <button
                        type="button"
                        aria-label="닫기"
                        onMouseDown={closeVideo}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Panel */}
                    <div className="
                         relative w-[min(980px,94vw)] overflow-hidden rounded-3xl
                         border border-neutral-200/80 bg-white text-neutral-900
                         shadow-[0_24px_90px_rgba(15,23,42,0.18)]
                         dark:border-neutral-800/80 dark:bg-neutral-950 dark:text-neutral-100
                     ">
                        {/* Top accent */}
                        <div
                            aria-hidden="true"
                            className="
                                    absolute inset-x-0 top-0 h-20
                                    bg-gradient-to-br from-blue-50 via-white to-indigo-50
                                    dark:from-blue-950/25 dark:via-neutral-950 dark:to-indigo-950/25
                            "/>

                        {/* Header (2 rows) */}
                        <div className="
                             relative px-5 py-4
                             border-b border-neutral-200/70 dark:border-neutral-800/70
                        ">
                            {/* 1행: 제목(가운데) + 닫기(오른쪽) */}
                            <div className="relative flex items-center justify-end">
                                <p className="
                                    absolute left-1/2 -translate-x-1/2
                                    text-sm md:text-base font-semibold truncate
                                    max-w-[70%]
                                 ">
                                    {videoModal.title ?? "시연 영상"}
                                </p>

                                <button
                                    type="button"
                                    onClick={closeVideo}
                                    className="
                                        inline-flex items-center justify-center
                                        rounded-full px-3.5 py-1.5 text-xs font-semibold leading-none
                                        border border-neutral-200 bg-white/70 text-neutral-800
                                        hover:bg-white hover:shadow-sm
                                        dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-100
                                        dark:hover:bg-white/10
                                    ">
                                    닫기
                                </button>
                            </div>

                            {/* 2행: 설명 + 뱃지 */}
                            <div className="mt-2 flex flex-wrap items-center gap-2">
                                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                    실사용 흐름을 그대로 녹화한 데모
                                </p>

                                {videoModal.isPublic ? (
                                    <span className="
                                        inline-flex items-center rounded-full
                                        bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-800
                                        border border-amber-200/60
                                        dark:bg-amber-950/30 dark:text-amber-200 dark:border-amber-900/30
                                    ">
                                      공공기관 보수적 UI 톤 적용
                                    </span>
                                ) : null}
                            </div>
                        </div>

                        {/* Body */}
                        <div className="relative p-4 md:p-5 bg-white dark:bg-neutral-950">
                            <div className="
                                    overflow-hidden rounded-2xl
                                    border border-neutral-200/70 bg-neutral-100
                                    dark:border-neutral-800/70 dark:bg-black
                            ">
                                <video
                                    key={videoModal.src}
                                    controls
                                    autoPlay
                                    playsInline
                                    preload="metadata"
                                    poster={videoModal.poster}
                                    className="block w-full h-auto bg-black"
                                >
                                    {videoModal.src ? <source src={videoModal.src} type="video/mp4" /> : null}
                                    브라우저가 video 태그를 지원하지 않습니다.
                                </video>
                            </div>

                            {videoModal.isPublic ? (
                                <p className="mt-3 text-[11px] text-neutral-500 dark:text-neutral-500">
                                    * 공공기관/업무 시스템에서 선호하는 보수적 톤앤매너를 맞춰 구현한 화면입니다.
                                </p>
                            ) : null}
                        </div>
                    </div>
                </div>
            ) : null}
        </Section>
    );
}
