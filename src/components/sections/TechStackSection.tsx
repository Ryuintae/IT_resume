import Section from "../ui/Section";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import { FaReact } from "react-icons/fa";
import {
    SiTypescript,
    SiJavascript,
    SiNextdotjs,
    SiReactquery,
    SiTailwindcss,
    SiVite,
    SiJquery,
    SiStorybook,
    SiFramer,
    SiSpring,
    SiDocker,
    SiPostgresql,
    SiMysql,
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";

import zustandIcon from "../../assets/zustand.svg";
import jspIcon from "../../assets/jsp.svg";

type StackItem =
    | {
    name: string;
    iconType?: "component";
    icon: IconType;
    color?: string;
}
    | {
    name: string;
    iconType: "image";
    src: string;
};

type StackGroup = {
    id: string;
    label: string;
    description: string;
    items: StackItem[];
};

const stacks: StackGroup[] = [
    {
        id: "frontend",
        label: "Front-End",
        description: "직관적인 UI와 사용자 경험 중심의 웹 화면을 구현합니다.",
        items: [
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
            { name: "jQuery", icon: SiJquery, color: "text-blue-500" },
            { name: "React", icon: FaReact, color: "text-sky-500" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
            { name: "TanStack Query", icon: SiReactquery, color: "text-red-500" },
            { name: "Zustand", iconType: "image", src: zustandIcon },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
            { name: "Vite", icon: SiVite, color: "text-violet-500" },
            { name: "Storybook", icon: SiStorybook, color: "text-pink-500" },
            { name: "Framer Motion", icon: SiFramer, color: "text-purple-500" },
        ],
    },
    {
        id: "backend",
        label: "Back-End / Infra",
        description: "서비스 운영을 위한 API와 배포 환경을 구축하고 관리합니다.",
        items: [
            { name: "Spring", icon: SiSpring, color: "text-green-600" },
            { name: "JSP", iconType: "image", src: jspIcon },
            { name: "Security", icon: MdSecurity, color: "text-emerald-600" },
            { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        ],
    },
    {
        id: "db",
        label: "Database",
        description: "데이터를 효율적인 저장·조회 구조를 설계합니다.",
        items: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
            { name: "MySQL", icon: SiMysql, color: "text-orange-500" },
        ],
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
};

export default function TechStackSection() {
    return (
        <Section id="tech" className="py-16">
            <motion.div
                className="max-w-5xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="space-y-3">
                    <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                        Skills
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        기술 스택
                    </h2>
                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300">
                        실제 프로젝트 및 포트폴리오 제작 과정에서 사용한 기술을 정리했습니다.
                    </p>
                </div>

                <motion.div
                    className="grid gap-5 md:gap-6 md:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {stacks.map((stack) => (
                        <motion.div
                            key={stack.id}
                            variants={cardVariants}
                            className="
                                rounded-2xl border border-neutral-200/70
                                bg-gradient-to-br from-neutral-50 via-white to-neutral-100
                                dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900
                                shadow-[0_4px_14px_rgba(15,23,42,0.06)]
                                dark:shadow-[0_4px_14px_rgba(0,0,0,0.35)]
                                px-5 py-6 md:px-6 md:py-7
                                flex flex-col gap-3
                            "
                        >
                            <h3 className="text-sm md:text-base font-semibold">
                                {stack.label}
                            </h3>

                            <p className="text-xs text-neutral-600 dark:text-neutral-300">
                                {stack.description}
                            </p>

                            <div className="pt-3 flex flex-wrap gap-2">
                                {stack.items.map((item) => {
                                    const baseClass =
                                        "flex items-center gap-1.5 px-2 py-1 rounded-lg text-[11px] md:text-xs " +
                                        "bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700";

                                    if (item.iconType === "image") {
                                        return (
                                            <span key={item.name} className={baseClass}>
                                                <img
                                                    src={item.src}
                                                    alt={item.name}
                                                    className="w-4 h-4 object-contain"
                                                />
                                                {item.name}
                                            </span>
                                        );
                                    }

                                    const Icon = item.icon;

                                    return (
                                        <span key={item.name} className={baseClass}>
                                            <Icon className={`w-4 h-4 ${item.color ?? ""}`} />
                                            {item.name}
                                        </span>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Section>
    );
}