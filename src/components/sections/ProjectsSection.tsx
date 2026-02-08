import Section from "../ui/Section";
import { projects } from "../../lib/data/projects";
import { motion } from "framer-motion";

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

export default function ProjectsSection() {
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
                        aria-hidden
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
                                aria-hidden
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
                                                    <div className="flex gap-2">
                                                        <span className="
                                                            shrink-0 rounded-full
                                                            bg-neutral-100 px-2 py-0.5 text-[11px] font-semibold
                                                            text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200
                                                        ">
                                                            문제
                                                        </span>
                                                        <p className="text-xs md:text-sm leading-relaxed break-keep">
                                                            {p.problem}
                                                        </p>
                                                    </div>

                                                    {/* 접근 */}
                                                    <div className="flex gap-2">
                                                        <span className="
                                                            shrink-0 rounded-full
                                                            bg-blue-50 px-2 py-0.5 text-[11px] font-semibold
                                                            text-blue-700 dark:bg-blue-950/40 dark:text-blue-200
                                                        ">
                                                            접근
                                                        </span>
                                                        <p className="text-xs md:text-sm leading-relaxed break-keep">
                                                            {p.action}
                                                        </p>
                                                    </div>

                                                    {/* 결과 */}
                                                    <div className="flex gap-2">
                                                        <span className="
                                                            shrink-0 rounded-full
                                                            bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold
                                                            text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-200
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
                                                    "
                                                >
                                                    {tech}
                                                </span>
                                            );
                                        })}
                                    </div>
                                    {/* Links */}
                                    {project.links?.length ? (
                                        <div className="pt-3 flex flex-wrap gap-2">
                                            {project.links.map((l) => (
                                                <a
                                                    key={l.href}
                                                    href={l.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="
                                                     inline-flex items-center gap-2 rounded-full
                                                     px-3 py-1 text-[11px] md:text-xs font-medium
                                                     border border-neutral-200/70 bg-white/60
                                                     text-neutral-700 hover:bg-white
                                                     dark:border-neutral-800/70 dark:bg-neutral-950/40 dark:text-neutral-200
                                                     "
                                                >
                                                    {l.label}
                                                    <span className="opacity-60">↗</span>
                                                </a>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
