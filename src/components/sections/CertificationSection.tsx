import Section from "../ui/Section";
import { motion } from "framer-motion";
import { BadgeCheck, CalendarClock } from "lucide-react";

const certifications = [
    {
        title: "정보처리기사",
        status: "필기 합격 · 실기 준비 중",
        date: "2026",
        desc: `개발 전반의 이론적 기반을 정리하며 정보처리기사 필기에 합격했고, 현재는 실기 준비를 진행하고 있습니다.`,
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
};

export default function CertificationSection() {
    return (
        <Section id="certifications" className="py-16">
            <motion.div
                className="max-w-5xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* 헤더 */}
                <div className="space-y-3">
                    <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                        Certifications
                    </span>

                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        자격증
                    </h2>

                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300">
                        실무 역량 강화를 위해 학습하고 있는 자격 및 준비 현황입니다.
                    </p>
                </div>

                {/* 카드 */}
                <motion.div
                    className="grid gap-5 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {certifications.map((cert) => (
                        <motion.article
                            key={cert.title}
                            variants={cardVariants}
                            className="
                                rounded-2xl border border-neutral-200/80
                                bg-gradient-to-br from-neutral-50 via-white to-neutral-100
                                dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900
                                shadow-[0_6px_20px_rgba(15,23,42,0.06)]
                                dark:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
                                px-5 py-5 md:px-6 md:py-6
                                flex flex-col gap-4
                                break-keep
                            "
                        >
                            <div className="flex items-start gap-3">
                                <div
                                    className="
                                        mt-0.5 flex h-9 w-9 items-center justify-center
                                        rounded-xl bg-emerald-50 text-emerald-700
                                        dark:bg-emerald-900/40 dark:text-emerald-200
                                        border border-emerald-100 dark:border-emerald-800/60
                                        shadow-sm
                                    "
                                >
                                    <BadgeCheck className="h-4 w-4" />
                                </div>

                                <div className="flex-1 space-y-2">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                        <h3 className="text-sm md:text-base font-semibold text-neutral-900 dark:text-neutral-100">
                                            {cert.title}
                                        </h3>

                                        <span
                                            className="
                                                inline-flex w-fit items-center rounded-full
                                                bg-blue-50 text-blue-700
                                                dark:bg-blue-900/40 dark:text-blue-200
                                                border border-blue-100 dark:border-blue-800/60
                                                px-3 py-1 text-xs font-medium
                                            "
                                        >
                                            {cert.status}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-500 dark:text-neutral-400">
                                        <CalendarClock className="h-4 w-4" />
                                        <span>{cert.date}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-xs md:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-line break-keep text-balance">
                                {cert.desc}
                            </p>
                        </motion.article>
                    ))}
                </motion.div>
            </motion.div>
        </Section>
    );
}