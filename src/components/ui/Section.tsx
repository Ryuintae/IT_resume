import type { ReactNode } from "react";

type SectionProps = {
    id?: string;
    children: ReactNode;
};

export default function Section({ id, children }: SectionProps) {
    return (
        <section
            id={id}
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 24px",
            }}
        >
            <div style={{ width: "100%", maxWidth: "960px" }}>
                {children}
            </div>
        </section>
    );
}