import Section from "../ui/Section";

export default function IntroSection() {
    return (
        <Section id="intro">
            <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                    About
                </h2>

                <p className="text-base md:text-lg leading-relaxed text-neutral-700">
                    2023년 7월부터 GIS 기반 솔루션 기업 JBT에서 근무하며,
                    Cesium · QGIS · GeoServer 등 공간정보 스택을 연계한 웹 기반
                    시각화 서비스를 구현해 온 프론트엔드 개발자입니다.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-neutral-700">
                    Cesium 기반 3D 시각화 기능을 직접 구현하고 연구과제 프로젝트에 참여하며,
                    공간정보를 효과적으로 표현하기 위한 UX 및 데이터 구조에 대해
                    꾸준히 탐구해 왔습니다.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-neutral-700">
                    문제 해결 중심의 태도와 협업 역량을 바탕으로,
                    안정적인 서비스 품질과 개발 효율을 함께 추구합니다.
                </p>
            </div>
        </Section>
    );
}