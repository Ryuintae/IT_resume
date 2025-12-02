import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Section from "../ui/Section";
import { Dog } from "../three/Dog";

export default function HeroSection() {
    return (
        <Section id="hero">
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 flex flex-col gap-10 md:gap-12">
                {/* 1) 상단 3D 모델 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full"
                >
                    <div className="w-full h-[260px] sm:h-[300px] md:h-[340px] rounded-3xl overflow-hidden">
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

                            {/* 모델 */}
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

                {/* 프로필 + 텍스트 블록 */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                    className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8"
                >
                    {/* 프로필 카드 – 동그란 네모 + 약간 큰 크기 */}
                    <div className="shrink-0">
                        <div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm">
                            <img
                                src="/images/profile.jpg"
                                alt="Profile"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* 텍스트 영역 */}
                    <div className="flex-1 text-center md:text-left space-y-3">
                        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur">
                            Frontend · GIS · 3D Visualization
                        </div>

                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                            도시를 데이터로 이해하는 프론트엔드 개발자
                        </h1>

                        <p className="text-sm md:text-base text-neutral-600">
                            공간정보 기반의 UI를 만들고, 3D 시각화·지도 서비스·디지털트윈을 구현합니다.
                            실시간 수위 관측, 도시 침수 시뮬레이션, 대시보드 등
                            GIS와 웹 기술을 연결하는 작업을 하고 있습니다.
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
