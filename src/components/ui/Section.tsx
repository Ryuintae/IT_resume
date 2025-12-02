import type { ReactNode } from "react";

type SectionProps = {
    id?: string;
    children: ReactNode;
    className?: string;
};

export default function Section({ id, className, children }: SectionProps) {
    return (
        <section
            id={id}
            className={["w-full", className].filter(Boolean).join(" ")}
        >
            {children}
        </section>
    );
}