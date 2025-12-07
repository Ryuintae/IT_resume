import Section from "../ui/Section";
import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const schools = [
    {
        name: "둔촌고등학교 (졸업)",
        location: "서울 강동구",
        period: "2016.03 ~ 2019.01"
    },
    {
        name: "경민대학교 컴퓨터소프트웨어과 (졸업)",
        location: "경기도 의정부",
        period: "2019.03 ~ 2024.01"
    }
];

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08 }
    }
};

const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
};

export default function EducationSection() {
    return (
        <Section id="education" className="py-16">
            <motion.div
                className="max-w-4xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* 타이틀 */}
                <div className="space-y-3">
                    <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                        Education
                    </span>

                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        학력
                    </h2>
                </div>

                {/* 학력 리스트 (아이콘 + 라인 스타일) */}
                <motion.ul
                    className="space-y-4 md:space-y-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {schools.map((school) => (
                        <motion.li
                            key={school.name}
                            variants={rowVariants}
                            className="
                                flex flex-col gap-2
                                md:flex-row md:items-center md:justify-between
                                border-b border-neutral-200/70 dark:border-neutral-800
                                pb-4 last:border-b-0 last:pb-0
                            "
                        >
                            {/* 왼쪽: 아이콘 + 학교 정보 */}
                            <div className="flex items-start gap-3">
                                <div
                                    className="
                                        mt-0.5 flex h-9 w-9 items-center justify-center
                                        rounded-xl bg-blue-50 text-blue-700
                                        dark:bg-blue-900/40 dark:text-blue-200
                                    "
                                >
                                    <GraduationCap className="h-4 w-4" />
                                </div>

                                <div className="space-y-0.5">
                                    <h3 className="text-sm md:text-base font-semibold text-neutral-900 dark:text-neutral-100">
                                        {school.name}
                                    </h3>
                                    <p className="flex items-center gap-1 text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
                                        <MapPin className="h-3 w-3" />
                                        <span>{school.location}</span>
                                    </p>
                                </div>
                            </div>

                            {/* 오른쪽: 기간 뱃지 */}
                            <span
                                className="
                                    inline-flex items-center justify-center
                                    self-start md:self-auto
                                    rounded-full bg-neutral-100/90 px-3 py-1
                                    text-[11px] md:text-xs font-medium text-neutral-700
                                    dark:bg-neutral-800/90 dark:text-neutral-200
                                "
                            >
                                {school.period}
                            </span>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </Section>
    );
}
