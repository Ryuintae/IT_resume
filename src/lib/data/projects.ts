import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        id: "flood-alert",
        title: "도시침수 위험 알림 시스템",
        client: "ICT 전북 TP",
        summary:
            "군산시 문화동 대상 침수 분석·예측을 위한 시각화 및 분석 UI 고도화",
        description:
            "전북 군산시 문화동을 테스트 지역으로 과거 데이터를 기반으로 침수 예측 및 알림 메시지 전송 UI를 구현한 프로젝트입니다.",
        points: [
            "여러 침수 분석 데이터를 하나의 UI 흐름으로 통합하여 화면 구조 일관성 강화",
            "대용량 ASC/CSV 데이터 렌더링 구조 최적화로 지도 표출 성능 개선",
            "GeoServer 연동 및 레이어 관리 방식을 프론트엔드 관점에서 표준화하여 코드 유지보수성 향상",
            "우수관망 렌더링 로직 최적화로 54초 → 7초 수준의 화면 로딩 속도 개선",
            "시뮬레이션 바 공통 컴포넌트 구현으로 신규 분석 기능 확장성 확보",
            "지형·건물·관망·레이더 등 다양한 시각화 요소를 일관된 컴포넌트 구조로 구성",
            "날짜·시간 기반 필터 UI 및 자동 새로고침 로직 구현으로 분석 화면 사용성 개선",
            "레이어 자동 등록 및 상태 업데이트 흐름을 모듈화하여 운영 안정성 강화"
        ],
        techStack: "JavaScript · Cesium · GeoServer · PostgreSQL"
    },

    {
        id: "hyundai-ev-map",
        title: "차세대 공간정보 관리 지도 웹 애플리케이션",
        client: "현대오토에버(외주)",
        summary:
            "지도 기반의 주소·시설물 검색 및 조사 관리 기능을 구현한 공간정보 관리 웹 애플리케이션",
        description:
            "조사 관리 기능을 구현한 공간정보 관리 웹 애플리케이션",
        points: [
            "주소·시설물 검색 과정을 지도 중심 UI로 구성",
            "서버 선택 화면 UI 구현 및 초기 진입 동선 정리",
            "상세 주소 검색 및 위치 조회 기능 구현",
            "대시보드 통계 화면 컴포넌트 기반 UI 설계·구현"
        ],
        techStack: "React · TypeScript · MobX · StoryBook"
    }
];
