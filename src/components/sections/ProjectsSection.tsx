import Section from "../ui/Section";

export default function ProjectsSection() {
    return (
        <Section id="projects">
            <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Projects
                </h2>

                <div className="grid gap-6 md:gap-8">
                    {/* ICT 전북 TP – 도시침수 위험 알림 시스템 */}
                    <article className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between gap-4 mb-2">
                            <h3 className="text-lg md:text-xl font-semibold">
                                도시침수 위험 알림 시스템
                            </h3>
                            <span className="text-xs md:text-sm px-2 py-1 rounded-full bg-blue-50 text-blue-600">
                ICT 전북 TP
              </span>
                        </div>

                        <p className="text-sm md:text-base text-neutral-600 mb-2">
                            전북 군산시 문화동을 테스트 지역으로 과거 데이터를 기반으로
                            침수 예측 및 알림 메시지 전송 시스템을 구현한 프로젝트입니다.
                        </p>

                        <ul className="text-sm md:text-base text-neutral-700 list-disc list-inside space-y-1 mb-3">
                            <li>사내 공통 라이브러리 기반 프론트엔드 환경 구축</li>
                            <li>디지털 트윈 요소 기술 설계 및 주제도 데이터 지도 표출</li>
                            <li>우수관망 표출 처리 속도 <span className="font-semibold">671% 개선 (54초 → 7초)</span></li>
                        </ul>

                        <p className="text-xs md:text-sm text-neutral-500">
                            React · TypeScript · Cesium · GeoServer · PostgreSQL
                        </p>
                    </article>

                    {/* 현대오토에버 – 차세대 공간정보 관리 지도 웹 애플리케이션 */}
                    <article className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between gap-4 mb-2">
                            <h3 className="text-lg md:text-xl font-semibold">
                                차세대 공간정보 관리 지도 웹 애플리케이션
                            </h3>
                            <span className="text-xs md:text-sm px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">
                현대오토에버(외주)
              </span>
                        </div>

                        <p className="text-sm md:text-base text-neutral-600 mb-2">
                            차세대 공간정보 관리 시스템 내 지도 웹 애플리케이션에서
                            검색 및 조회 기능을 중심으로 지도 기반 UX를 구현했습니다.
                        </p>

                        <ul className="text-sm md:text-base text-neutral-700 list-disc list-inside space-y-1 mb-3">
                            <li>Routo Map API 연계로 주변 시설물 검색 기능 설계·구현</li>
                            <li>Routo Map API 연계로 주소/우편번호 검색 기능 개발</li>
                            <li>지도 중심 검색 UX 플로우 및 에러/로딩 상태 처리</li>
                        </ul>

                        <p className="text-xs md:text-sm text-neutral-500">
                            React · TypeScript · Map API · REST API
                        </p>
                    </article>
                </div>
            </div>
        </Section>
    );
}