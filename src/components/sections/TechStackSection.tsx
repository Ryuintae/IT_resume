import Section from "../ui/Section";
import {motion} from "framer-motion";

const stacks = [
    {
        id: "frontend",
        label: "Front-End",
        icon: "</>",
        description: "직관적인 UI와 사용자 경험 중심의 웹 화면을 구현합니다.",
        items: [
            "JavaScript",
            "TypeScript",
            "React.js",
            "MobX",
            "Storybook",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Vite",
            "Framer Motion"
        ]
    },
    {
        id: "backend",
        label: "Back-End / Infra",
        icon: "{}",
        description: "서비스 운영을 위한 API와 배포 환경을 구축하고 관리합니다.",
        items: ["Spring (Java)", "GeoServer", "Git", "Vercel Deploy"]
    },
    {
        id: "db",
        label: "Database",
        icon: "DB",
        description: "데이터를 효율적인 저장·조회 구조를 설계합니다.",
        items: ["PostgreSQL", "MySQL"]
    }
];



const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12
        }
    }
};

const cardVariants = {
    hidden: {opacity: 0, y: 18},
    show: {opacity: 1, y: 0}
};

export default function TechStackSection() {
    return (
        <Section id="tech" className="py-16">
            <motion.div
                className="max-w-5xl mx-auto space-y-8"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                viewport={{once: true}}
            >
                {/* 타이틀 */}
                <div className="space-y-3">
                    <span
                        className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                        Skills
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        기술 스택
                    </h2>
                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300">
                        실제 프로젝트 및 포트폴리오 제작 과정에서 사용한 기술을 정리했습니다.
                    </p>
                </div>

                {/* 스택 카드 리스트 */}
                <motion.div
                    className="grid gap-5 md:gap-6 md:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.2}}
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
                                transition-all duration-300 hover:shadow-[0_6px_20px_rgba(15,23,42,0.12)]
                                hover:-translate-y-0.5
                            "
                        >
                            {/* 아이콘 + 라벨 */}
                            <div className="flex items-center gap-2.5">
                                <div
                                    className="
            flex h-8 w-8 items-center justify-center
            rounded-xl bg-blue-50 text-blue-700
            dark:bg-blue-900/40 dark:text-blue-200
            border border-blue-200 dark:border-blue-700/60
            shadow-sm text-xs font-semibold
        "
                                >
                                    {stack.icon}
                                </div>

                                <h3 className="text-sm md:text-base font-semibold text-neutral-900 dark:text-neutral-100">
                                    {stack.label}
                                </h3>
                            </div>

                            {/* 태그 */}
                            <div
                                className="pt-3 mt-1 border-t border-neutral-200/60 dark:border-neutral-700/60 flex flex-wrap gap-2">
                                {stack.items.map((item) => (
                                    <span
                                        key={item}
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
    "
                                    >
    {item}
</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Section>
    );
}
