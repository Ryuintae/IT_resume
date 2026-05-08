export type ProjectPoint = {
    problem: string;
    action: string;
    result: string;
};

export type ProjectLink = {
    label: string;
    href?: string;
    kind?: "url" | "video";
    videoSrc?: string;
    videoPoster?: string;
};

export type Project = {
    id: string;
    title: string;
    client: string;
    period: string; // 추가
    summary: string;
    description: string;
    points: ProjectPoint[];
    techStack: string;
    links?: ProjectLink[];
};