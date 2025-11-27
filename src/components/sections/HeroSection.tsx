import { motion } from "framer-motion";
import Section from "../ui/Section";

export default function HeroSection() {
    return (
        <Section id="hero">
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.1,
                    type: "spring",
                    damping: 18,
                    stiffness: 120
                }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    도시를 데이터로 이해하는<br />프론트엔드 개발자
                </h1>

                <p className="text-lg text-neutral-700 mt-3 max-w-xl">
                    공간정보 기반의 UI를 만들고,
                    3D 시각화·지도 서비스·디지털트윈을 구현합니다.
                </p>
            </motion.div>
        </Section>
    );
}