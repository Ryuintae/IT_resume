import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        id: "flood-alert",
        title: "도시침수 위험 알림 시스템",
        client: "ICT 전북 TP",
        summary: "전북 군산시 문화동 과거 데이터를 기반으로 침수 예측 및 알림 시스템 구현",
        description:
            "전북 군산시 문화동을 테스트 지역으로 과거 데이터를 기반으로 침수 예측 및 알림 메시지 전송 UI를 구현한 프로젝트입니다.",
        points: [
            "사내 공통 라이브러리 기반 프론트엔드 환경 구축",
            "디지털 트윈 요소 기술 설계 및 주제도 데이터 지도 표출",
            "우수관망 표출 처리 속도 671% 개선 (54초 → 7초)"
        ],
        techStack: "React · TypeScript · Cesium · GeoServer · PostgreSQL"
    },
    {
        id: "hyundai-ev-map",
        title: "차세대 공간정보 관리 지도 웹 애플리케이션",
        client: "현대오토에버(외주)",
        summary: "차세대 공간정보 관리 시스템의 지도 검색/조회 UX 구현",
        description:
            "차세대 공간정보 관리 시스템 내 지도 웹 애플리케이션에서 검색 및 조회 기능을 중심으로 지도 기반 UX를 구현했습니다.",
        points: [
            "Routo Map API 연계로 주변 시설물 검색 기능 설계·구현",
            "Routo Map API 연계로 주소/우편번호 검색 기능 개발",
            "지도 중심 검색 UX 플로우 및 에러/로딩 상태 처리"
        ],
        techStack: "React · TypeScript · Map API · REST API"
    }
];