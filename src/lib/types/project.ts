export type Project = {
    id: string;
    title: string;
    client: string;          // ICT 전북 TP, 현대오토에버(외주) 등
    summary: string;         // 한 줄 요약
    description: string;     // 본문 요약
    points: string[];        // bullet 포인트
    techStack: string;       // "React · TS · Cesium ..." 이런 문자열
};