import type { ReactNode } from "react";

type SectionProps = {
    id?: string;
    children: ReactNode;
};

export default function Section({ id, children }: SectionProps) {
    return (
        <section
            id={id}
            className="min-h-screen flex items-center justify-center px-6"
        >
            <div className="w-full max-w-5xl mx-auto">
                {children}
            </div>
        </section>
    );
}