export interface ProjectPoint {
    problem: string;
    action: string;
    result: string;
}

export interface ProjectLink {
    label: string;
    // 일반 링크일 때
    href?: string;
    // 모달 트리거일 때
    kind?: "url" | "video";
    videoSrc?: string;
    videoPoster?: string;
}

export interface Project {
    id: string;
    title: string;
    client: string;
    summary: string;
    description?: string;
    points: ProjectPoint[];
    techStack: string;
    links?: ProjectLink[];
}
