import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        id: "flood-alert",
        title: "도시침수 위험 알림 시스템",
        client: "ICT 전북 TP",
        summary: "침수 분석·예측 결과를 지도/3D로 확인하는 분석 UI",
        description:
            "군산시 문화동을 대상으로 침수 분석·예측 결과를 지도와 3D 화면에서 확인하고, 조건에 따라 알림을 확인하는 UI를 구현했습니다.",
        points: [
            {
                problem: "분석 결과가 화면마다 흩어져 전체 흐름 파악이 어려웠습니다.",
                action: "지형·건물·관망·레이더 데이터를 한 화면 흐름으로 묶어 UI 구조를 재정리했습니다.",
                result: "사용자가 분석 순서를 따라가며 빠르게 이해할 수 있게 됐습니다.",
            },
            {
                problem: "대용량 ASC/CSV 표시 시 지도 반응이 느렸습니다.",
                action: "로딩/렌더링 흐름을 분리하고 불필요한 재렌더링을 줄였습니다.",
                result: "줌/이동 등 지도 상호작용 체감 성능이 개선됐습니다.",
            },
            {
                problem: "3D 우수관망 초기 로딩이 과도했습니다.",
                action: "렌더링 로직과 객체 생성 흐름을 점검해 처리 방식을 개선했습니다.",
                result: "초기 로딩 시간을 54초 → 7초로 단축했습니다.",
            },
        ],
        techStack: "JavaScript · Cesium · GeoServer · PostgreSQL",
    },

    {
        id: "hyundai-ev-map",
        title: "차세대 공간정보 관리 지도 웹 애플리케이션",
        client: "현대오토에버(외주)",
        summary: "지도 기반 검색·조사 관리 업무 UI",
        description:
            "주소·시설물 정보를 지도 중심으로 검색하고 조사 관리 업무를 수행하는 웹 애플리케이션의 주요 화면을 구현했습니다.",
        points: [
            {
                problem: "검색 결과가 텍스트 위주라 위치 파악이 번거로웠습니다.",
                action: "‘지도 → 목록 → 상세’ 흐름으로 검색 UI를 구성했습니다.",
                result: "위치 기반 탐색이 더 빠르게 이어지도록 개선됐습니다.",
            },
            {
                problem: "초기 진입 시 선택 과정이 길어 사용자 이탈이 있었습니다.",
                action: "서버 선택 화면과 진입 흐름을 단순하게 정리했습니다.",
                result: "메인 기능까지 도달하는 단계가 줄었습니다.",
            },
        ],
        techStack: "React · TypeScript · MobX · StoryBook",
    },
];
