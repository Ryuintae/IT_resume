import Section from "../ui/Section";

export default function ContactSection() {
    return (
        <Section id="contact">
            <div className="space-y-4 text-left">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Contact
                </h2>

                <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-200">
                    공간정보 기반 웹 서비스, 3D 시각화, 디지털트윈 관련 프론트엔드 개발에
                    관심이 있으시다면 언제든 편하게 연락 주세요.
                </p>

                <div className="space-y-2 text-sm md:text-base">
                    <p className="text-neutral-700 dark:text-neutral-200">
            <span className="font-medium text-neutral-800 dark:text-neutral-100">
              Email
            </span>{" "}
                        <a
                            href="mailto:dlsxichlrg@naver.com"
                            className="text-blue-600 hover:underline dark:text-blue-400"
                        >
                            dlsxichlrg@naver.com
                        </a>
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-200">
            <span className="font-medium text-neutral-800 dark:text-neutral-100">
              GitHub
            </span>{" "}
                        <a
                            href="https://github.com/Ryuintae"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline dark:text-blue-400"
                        >
                            github.com/Ryuintae
                        </a>
                    </p>
                </div>

                <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">
                    새로운 지도 서비스와 도시 데이터를 다루는 프로젝트에서
                    함께 문제를 정의하고 해결하는 일을 좋아합니다.
                </p>
            </div>
        </Section>
    );
}