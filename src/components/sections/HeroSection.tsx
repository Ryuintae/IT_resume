import Section from "../ui/Section";

export default function HeroSection() {
    return (
        <Section id="hero">
            <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    도시를 데이터로 이해하는<br />프론트엔드 개발자
                </h1>

                <p className="text-lg text-neutral-600 mt-3 max-w-xl">
                    공간정보 기반의 UI를 만들고,
                    3D 시각화·지도 서비스·디지털트윈을 구현합니다.
                </p>
            </div>
        </Section>
    );
}