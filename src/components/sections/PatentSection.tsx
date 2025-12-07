import Section from "../ui/Section";
import { motion } from "framer-motion";
import { Box, Map, Mountain, Layers } from "lucide-react";

const modules = [
    {
        title: "3D 관망 표출",
        icon: Box,
        desc: `디지털트윈 상에서 도시 지하 우수관망을 자동 생성·표출하는 모듈.
맨홀·관 속성(매설 깊이·기울기·방향)에 기반해 3D 객체를 생성하고 고유 ID와 속성을 연계합니다.`,
    },
    {
        title: "도시홍수 GIS 시각화 모듈",
        icon: Map,
        desc: `관측소 위치를 지도 feature로 표출하고 클릭 시 관측 데이터를 팝업으로 제공합니다.
법정경계·하천·유역·토양 정보 등 WMS 기반 주제도를 함께 시각화합니다.`,
    },
    {
        title: "3D 지형 정보 연계 모듈",
        icon: Mountain,
        desc: `DEM을 3D 베이스맵에 연동해 실감형 지형 표출과 경사 효과를 제공합니다.
대용량 DEM 타일링으로 빠른 로딩 속도와 안정성을 확보했습니다.`,
    },
    {
        title: "3D 베이스맵 표출 모듈",
        icon: Layers,
        desc: `위성·지형·야간·표준 등 다양한 베이스맵을 WebGL 기반 3D 환경에서 매끄럽게 전환합니다.
레이어 토글·표출순서 제어 등 조합형 시각화를 제공합니다.`,
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

export default function PatentSection() {
    return (
        <Section id="patents" className="py-16">
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
                        Patents &amp; Modules
                    </span>

                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        특허 · 모듈
                    </h2>

                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300">
                        연구 과제와 서비스 개발 과정에서 설계·구현한 시각화 모듈들입니다.
                    </p>
                </div>

                {/* 카드 그리드 */}
                <motion.div
                    className="grid gap-5 md:gap-6 md:grid-cols-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {modules.map((m) => {
                        const Icon = m.icon;
                        return (
                            <motion.article
                                key={m.title}
                                variants={cardVariants}
                                className="
                                    rounded-2xl border border-neutral-200/80
                                    bg-gradient-to-br from-neutral-50 via-white to-neutral-100
                                    dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900
                                    shadow-[0_6px_20px_rgba(15,23,42,0.06)]
                                    dark:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
                                    px-5 py-5 md:px-6 md:py-6
                                    flex flex-col gap-3
                                    break-keep
                                "
                            >
                                {/* 상단 아이콘 + 타이틀 */}
                                <div className="flex items-start gap-3">
                                    <div
                                        className="
                                            mt-0.5 flex h-9 w-9 items-center justify-center
                                            rounded-xl bg-blue-50 text-blue-700
                                            dark:bg-blue-900/40 dark:text-blue-200
                                            border border-blue-100 dark:border-blue-800/60
                                            shadow-sm
                                        "
                                    >
                                        <Icon className="h-4 w-4" />
                                    </div>

                                    <div className="space-y-1 flex-1">
                                        <h3 className="text-sm md:text-base font-semibold text-neutral-900 dark:text-neutral-100">
                                            {m.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* 설명 */}
                                <p className="text-xs md:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-line break-keep text-balance">
                                    {m.desc}
                                </p>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </motion.div>
        </Section>
    );
}