import Section from "../ui/Section";

export default function HeroSection() {
    return (
        <Section id="hero">
            <div style={{ textAlign: "left" }}>
                <h1 style={{
                    fontSize: "48px",
                    fontWeight: 700,
                    marginBottom: "16px",
                    lineHeight: 1.2
                }}>
                    도시를 데이터로 이해하는<br />프론트엔드 개발자
                </h1>

                <p style={{
                    fontSize: "20px",
                    color: "#777",
                    marginTop: "12px",
                    maxWidth: "600px"
                }}>
                    공간정보 기반의 UI를 만들고,
                    3D 시각화·지도 서비스·디지털트윈을 구현합니다.
                </p>
            </div>
        </Section>
    );
}