import type { ReactNode } from "react";

type SectionProps = {
    id?: string;
    children: ReactNode;
};

export default function Section({ id, children }: SectionProps) {
    return (
        <section
            id={id}
            className="px-6 py-20 md:py-28"
        >
            <div className="w-full max-w-5xl mx-auto">
                {children}
            </div>
        </section>
    );
}