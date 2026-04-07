import Section from "../ui/Section";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import { FaReact } from "react-icons/fa";
import {
    SiTypescript,
    SiVite,
    SiTailwindcss,
    SiReactrouter,
    SiThreedotjs,
    SiDocker,
} from "react-icons/si";

import zustandIcon from "../../assets/zustand.svg";

type ProjectTechItem =
    | {
    name: string;
    iconType: "component";
    icon: IconType;
    iconColor?: string;
}
    | {
    name: string;
    iconType: "image";
    iconSrc: string;
};

type ProjectLink = {
    label: string;
    href: string;
};

type SideProject = {
    id: string;
    category: string;
    title: string;
    summary: string;
    thumbnail: string;
    thumbnailAlt: string;
    problem: string;
    action: string;
    result: string;
    techStack: ProjectTechItem[];
    links: ProjectLink[];
};

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

const sideProjects: SideProject[] = [
    {
        id: "self-interior-guide",
        category: "Side Project",
        title: "셀프 인테리어 가이드",
        summary:
            "셀프 인테리어 초보자를 위한 체크리스트형 가이드 + 3D 견적 서비스",
        thumbnail:
            "https://github.com/user-attachments/assets/7f8da2b7-5a0f-4df7-821f-37ff847ea2ac",
        thumbnailAlt: "self-interior-guide HomePage",
        problem:
            "셀프 인테리어 초보자는 무엇부터 시작해야 할지 모르고, 정보가 많아도 실제 행동으로 이어지기 어려운 문제가 있었습니다.",
        action:
            "단계 완료형 튜토리얼 대신 체크리스트형 UX로 재설계하고, 가이드 → 결과 정리 → 3D 견적으로 이어지는 흐름을 구성했습니다.",
        result:
            "사용자 부담을 줄이는 정보 구조를 기반으로 가이드·상태관리·3D 견적을 분리한 프론트엔드 중심 서비스를 구현했습니다.",
        techStack: [
            {
                name: "React",
                iconType: "component",
                icon: FaReact,
                iconColor: "text-sky-500",
            },
            {
                name: "TypeScript",
                iconType: "component",
                icon: SiTypescript,
                iconColor: "text-blue-600",
            },
            {
                name: "Zustand",
                iconType: "image",
                iconSrc: zustandIcon,
            },
            {
                name: "Vite",
                iconType: "component",
                icon: SiVite,
                iconColor: "text-violet-500",
            },
            {
                name: "Tailwind CSS",
                iconType: "component",
                icon: SiTailwindcss,
                iconColor: "text-cyan-500",
            },
            {
                name: "React Router",
                iconType: "component",
                icon: SiReactrouter,
                iconColor: "text-rose-500",
            },
            {
                name: "Three.js",
                iconType: "component",
                icon: SiThreedotjs,
                iconColor: "text-neutral-900 dark:text-neutral-100",
            },
            {
                name: "Docker",
                iconType: "component",
                icon: SiDocker,
                iconColor: "text-blue-500",
            },
        ],
        links: [
            {
                label: "서비스 보기",
                href: "https://self-interior-guide.vercel.app/",
            },
            {
                label: "GitHub",
                href: "https://github.com/Ryuintae/self-interior-guide",
            },
            {
                label: "회고 글",
                href: "https://dlsxo.tistory.com/12",
            },
        ],
    },
];

export default function SideProjectsSection() {
    return (
        <Section id="side-projects" className="py-16">
            <div className="max-w-5xl mx-auto space-y-10">
                <header className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        사이드 프로젝트
                    </h2>
                </header>

                <motion.div
                    className="relative grid gap-6 md:gap-7"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <div
                        aria-hidden="true"
                        className="hidden md:block absolute left-[0.4375rem] top-0 bottom-0 w-px
                        bg-gradient-to-b from-indigo-300/40 via-neutral-200 to-transparent
                        dark:from-indigo-500/40 dark:via-neutral-700"
                    />

                    {sideProjects.map((project) => (
                        <motion.article
                            key={project.id}
                            variants={cardVariants}
                            className="relative md:pl-10"
                        >
                            <div
                                aria-hidden="true"
                                className="hidden md:flex absolute left-0 top-6 h-3.5 w-3.5 items-center justify-center"
                            >
                                <div className="h-3.5 w-3.5 rounded-full bg-white dark:bg-neutral-950 shadow-[0_0_0_4px_rgba(99,102,241,0.18)] dark:shadow-[0_0_0_4px_rgba(99,102,241,0.35)]">
                                    <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
                                </div>
                            </div>

                            <div
                                className="
                                    rounded-3xl border border-neutral-200/80
                                    bg-gradient-to-br from-neutral-50 via-white to-indigo-50/40
                                    shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                                    dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-950 dark:to-indigo-950/20
                                    dark:border-neutral-700/80
                                    overflow-hidden
                                "
                            >
                                <div className="p-5 md:p-6 space-y-5">
                                    <div className="space-y-2">
                                        <span
                                            className="
                                                inline-flex items-center rounded-full
                                                bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600
                                                dark:bg-neutral-800 dark:text-neutral-300
                                            "
                                        >
                                            {project.category}
                                        </span>

                                        <h3 className="text-base md:text-lg font-semibold leading-snug break-keep">
                                            {project.title}
                                        </h3>

                                        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed break-keep">
                                            {project.summary}
                                        </p>
                                    </div>

                                    <div className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-100 dark:border-neutral-800/70 dark:bg-neutral-900">
                                        <img
                                            src={project.thumbnail}
                                            alt={project.thumbnailAlt}
                                            loading="lazy"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <div className="rounded-2xl border border-neutral-200/70 bg-white/70 px-4 py-3 dark:bg-neutral-950/40 dark:border-neutral-800/70">
                                            <div className="grid gap-2.5">
                                                <div className="grid grid-cols-[auto,1fr] items-start gap-x-2 gap-y-1">
                                                    <span className="whitespace-nowrap flex-shrink-0 rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                                                        문제
                                                    </span>
                                                    <p className="text-xs md:text-sm leading-relaxed break-keep">
                                                        {project.problem}
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-[auto,1fr] items-start gap-x-2 gap-y-1">
                                                    <span className="whitespace-nowrap flex-shrink-0 rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-200">
                                                        접근
                                                    </span>
                                                    <p className="text-xs md:text-sm leading-relaxed break-keep">
                                                        {project.action}
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-[auto,1fr] items-start gap-x-2 gap-y-1">
                                                    <span className="whitespace-nowrap flex-shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-200">
                                                        결과
                                                    </span>
                                                    <p className="text-xs md:text-sm leading-relaxed break-keep">
                                                        {project.result}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-neutral-200/70 dark:border-neutral-700/70 flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => {
                                            const pillClass =
                                                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] md:text-xs font-medium " +
                                                "bg-neutral-50/80 text-neutral-700 border border-indigo-200 shadow-sm " +
                                                "dark:bg-neutral-900/70 dark:text-neutral-200 dark:border-indigo-900/40";

                                            if (tech.iconType === "image") {
                                                return (
                                                    <span key={tech.name} className={pillClass}>
                                                        <img
                                                            src={tech.iconSrc}
                                                            alt={tech.name}
                                                            className="w-4 h-4 object-contain"
                                                        />
                                                        {tech.name}
                                                    </span>
                                                );
                                            }

                                            const Icon = tech.icon;

                                            return (
                                                <span key={tech.name} className={pillClass}>
                                                    <Icon className={`w-4 h-4 ${tech.iconColor ?? ""}`} />
                                                    {tech.name}
                                                </span>
                                            );
                                        })}
                                    </div>

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
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}