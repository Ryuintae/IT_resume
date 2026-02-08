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
                            React·TypeScript를 기반으로
                            대용량 데이터 시각화, 서비스 공통 UI, 지도 기반 웹 서비스를 개발해 왔습니다.
                        </p>

                        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed break-keep text-balance">
                            또한 DB 설계와 Spring Security 기반 인증 기능을 직접 구현한 경험이 있어,
                            프론트엔드와 백엔드의 경계를 이해하고 자연스럽게 협업할 수 있습니다.
                        </p>
                        {/* 이력서 다운로드 BTN */}
                        <div className="mt-28 pt-2 flex justify-center md:justify-start">
                            <a
                                href="/files/RIT_resume.pdf"
                                download
                                className="
        inline-flex items-center gap-2
        rounded-xl
        px-5 py-2.5
        border border-neutral-200/70 dark:border-neutral-800/70
        bg-white/70 dark:bg-neutral-900/60
        text-sm font-semibold text-neutral-900 dark:text-neutral-50
        shadow-sm
        hover:shadow-md
        hover:bg-white/90 dark:hover:bg-neutral-900/80
        active:translate-y-[1px]
        transition
        backdrop-blur
        focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/50 dark:focus-visible:ring-neutral-600/60
      "
                            >
                                <span>이력서 다운로드</span>
                                <span className="opacity-70">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
