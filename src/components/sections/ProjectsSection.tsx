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
                {/* 헤더 영역 */}
                <header className="space-y-3">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                            업무경험
                        </h2>
                    </div>
                </header>

                {/* 카드 리스트 */}
                <motion.div
                    className="relative grid gap-6 md:gap-7"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {/* 세로 라인 */}
                    <div
                        aria-hidden
                        className="hidden md:block absolute left-[0.4375rem] top-0 bottom-0 w-px bg-gradient-to-b from-blue-300/40 via-neutral-200 to-transparent dark:from-blue-500/40 dark:via-neutral-700"
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

                            {/* 카드 본문 */}
                            <div
                                className="
                                    rounded-3xl border border-neutral-200/80 bg-gradient-to-br from-neutral-50 via-white to-blue-50/40
                                    shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                                    dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-950 dark:to-blue-950/20
                                    dark:border-neutral-700/80
                                    overflow-hidden
                                "
                            >
                                <div className="p-5 md:p-6 space-y-4 md:space-y-5">
                                    {/* 상단 헤더 */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-[11px] md:text-xs text-neutral-500 dark:text-neutral-400">
                                            <span
                                                className="
                                                    inline-flex items-center rounded-full
                                                    bg-neutral-100 px-2.5 py-1
                                                    font-medium text-neutral-600
                                                    dark:bg-neutral-800 dark:text-neutral-300
                                                "
                                            >
                                                {project.client}
                                            </span>
                                        </div>

                                        <h3 className="text-base md:text-lg font-semibold leading-snug text-neutral-900 dark:text-neutral-50 break-keep text-balance">
                                            {project.title}
                                        </h3>

                                        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed break-keep text-balance">
                                            {project.summary || project.description}
                                        </p>
                                    </div>

                                    {/* 포인트 리스트 */}
                                    <ul className="space-y-2.5 text-xs md:text-sm leading-relaxed text-neutral-700 dark:text-neutral-200 break-keep text-balance">
                                        {project.points.map((point, idx) => (
                                            <li key={idx} className="flex gap-2">
                                                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/80 dark:bg-blue-400/80" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech 스택 */}
                                    <div className="pt-3 border-t border-neutral-200/70 dark:border-neutral-700/70 flex flex-wrap gap-2">
                                        {project.techStack.split("·").map((raw) => {
                                            const tech = raw.trim();
                                            if (!tech) return null;
                                            return (
                                                <span
                                                    key={tech}
                                                    className="
                                                        rounded-full
                                                        px-3 py-1 text-[11px] md:text-xs font-medium
                                                        bg-neutral-50/80
                                                        text-neutral-700
                                                        border border-blue-200
                                                        shadow-sm backdrop-blur-sm
                                                        dark:bg-neutral-900/70
                                                        dark:text-neutral-200
                                                        dark:border-blue-900/40
                                                        whitespace-nowrap
                                                    "
                                                >
                                                    {tech}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}