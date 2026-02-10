import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        id: "security-starter",
        title: "사내 공통 로그인 템플릿 개발 (Security Starter)",
        client: "JBT (사내 공통 템플릿)",
        summary: "페이지 이동 없이 인증 흐름을 처리하는 공통 로그인/회원 UI 템플릿",
        description:
            "Spring Security 기반 프로젝트에서 재사용 가능한 인증 템플릿을 만들기 위해, 단일 페이지에서 로그인/회원가입/비밀번호 변경/아이디 찾기를 모달로 처리하는 UI와 API 연동 구조를 설계·구현했습니다.",
        points: [
            {
                problem: "인증 기능이 페이지마다 흩어져 UX가 끊기고, 프로젝트마다 재구현 비용이 컸습니다.",
                action: "단일 페이지에서 인증 흐름을 모달로 통합해 ‘페이지 이동 없는 인증 UX’를 설계했습니다.",
                result: "사용자 흐름이 단순해졌고, 템플릿으로 재사용하기 쉬운 구조가 됐습니다.",
            },
            {
                problem: "UI 코드에 서버 통신 로직이 섞이면 유지보수가 어려웠습니다.",
                action: "UI(auth.js)와 API(auth_fetch.js)를 분리하고, UI에서는 정해진 API 인터페이스만 사용하도록 구조를 고정했습니다.",
                result: "UI/통신 변경이 분리되어 유지보수와 재사용성이 좋아졌습니다.",
            },
            {
                problem: "Spring Security 기본 흐름을 깨지 않으면서 커스텀 인증을 연결해야 했습니다.",
                action: "커스텀 로그인 필터에서 RSA 암호문 복호화 후 기존 인증 흐름으로 넘기는 구조로 연결했습니다.",
                result: "보안 요구사항을 만족하면서도 표준 인증 흐름을 유지할 수 있었습니다.",
            },
        ],
        techStack: "JavaScript · JSP · Spring · Spring Security · RSA",
        links: [
            { label: "회고 글", href: "https://dlsxo.tistory.com/4" },
        ],
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
                problem: "검색 결과가 텍스트 목록으로만 보여 위치를 직접 확인하기 어려웠습니다.",
                action: "검색 결과를 지도 중심으로 보여주고, 목록과 상세 화면을 자연스럽게 연결했습니다.",
                result: "지도를 보며 원하는 위치와 정보를 빠르게 확인할 수 있게 됐습니다.",
            },
            {
                problem: "처음 접속했을 때 서버 선택과 설정 단계가 많아 바로 사용하기 어려웠습니다.",
                action: "초기 화면에서 필요한 선택만 남기고 진입 흐름을 단순화했습니다.",
                result: "사용자가 더 빠르게 메인 기능을 사용할 수 있게 됐습니다.",
            },
            {
                problem: "화면마다 UI 구현 방식이 달라 유지보수와 확장이 어려웠습니다.",
                action: "Storybook을 활용해 UI 컴포넌트를 설계하고, Atomic Design 개념으로 화면 요소를 단계적으로 분리했습니다.",
                result: "중복 UI 코드가 줄고, 컴포넌트 재사용성과 신규 화면 개발 생산성이 개선됐습니다.",
            },
        ],
        techStack: "React · TypeScript · MobX · Storybook",
    },
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
        links: [
            {
                label: "시연 영상",
                kind: "video",
                videoSrc: "/videos/flood-demo.mp4",
            },
        ],
    },
];
