import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Section from "../ui/Section";
import { Dog } from "../three/Dog";

export default function HeroSection() {
    return (
        <Section id="hero">
            <div className="w-full py-14 md:py-16 flex flex-col gap-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full"
                >
                    <div className="w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-3xl overflow-hidden">
                        <Canvas
                            shadows
                            gl={{ alpha: true }}
                            camera={{ position: [6, 4.5, 9], fov: 32 }}
                            className="!w-full !h-full"
                        >
                            <ambientLight intensity={0.7} />
                            <directionalLight
                                intensity={1.1}
                                position={[6, 10, 6]}
                                castShadow
                            />
                            <Environment preset="city" />

                            <Dog
                                position={[0, -1.4, 0]}
                                rotation={[0, Math.PI / 5, 0]}
                                scale={0.8}
                            />

                            <OrbitControls
                                enablePan={false}
                                enableZoom={false}
                                autoRotate
                                autoRotateSpeed={0.9}
                                makeDefault
                            />
                        </Canvas>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                    className="grid gap-10 md:grid-cols-[auto,1fr] items-center"
                >
                    <div className="flex justify-center md:justify-start">
                        <div
                            className="
                                relative
                                w-[230px] sm:w-[260px] md:w-[300px]
                                h-[300px] sm:h-[340px] md:h-[380px]
                                rounded-3xl overflow-hidden
                                shadow-[0_18px_45px_rgba(0,0,0,0.18)]
                                dark:shadow-[0_18px_45px_rgba(255,255,255,0.1)]
                                transition-transform duration-300 hover:-translate-y-1
                            "
                        >
                            <img
                                src="/images/resume_profile.png"
                                alt="Profile"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* 텍스트 영역 */}
                    <div className="space-y-4 text-center md:text-left">
                        <div className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 shadow-sm backdrop-blur">
                            Frontend · Web · UI
                        </div>

                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                            안녕하세요, 프론트엔드 개발자 류인태 입니다
                        </h1>

                        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed break-keep text-balance">
                            여러 기능과 데이터를 하나의 흐름으로 정리해, 복잡한 정보도 자연스럽게 이해할 수 있는 UI로 만드는 일을 합니다.
                        </p>
                        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed break-keep text-balance">
                            프로젝트마다 화면 구조·시각화·성능 개선을 중심으로 사용자 경험을 높이는 데 집중해 왔습니다.
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
