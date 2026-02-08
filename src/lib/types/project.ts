export interface ProjectPoint {
    problem: string;
    action: string;
    result: string;
}

export interface ProjectLink {
    label: string;
    href: string;
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
