import Section from "../ui/Section";
import { projects } from "../../lib/data/projects";
import { motion } from "framer-motion";

export default function ProjectsSection() {
    return (
        <Section id="projects">
            <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Projects
                </h2>

                <div className="grid gap-6 md:gap-8">
                    {projects.map((project) => (
                        <motion.article
                            key={project.id}
                            className="rounded-2xl border border-neutral-200 bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow dark:bg-neutral-900 dark:border-neutral-700"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            whileHover={{scale: 1.02}}
                            transition={{duration: 0.4}}
                            viewport={{once: true}}
                        >
                            <div className="flex items-center justify-between gap-4 mb-2">
                                <h3 className="text-lg md:text-xl font-semibold">
                                    {project.title}
                                </h3>
                                <span
                                    className="text-xs md:text-sm px-2 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                  {project.client}
                </span>
                            </div>

                            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 mb-2">
                                {project.description}
                            </p>

                            <ul className="text-sm md:text-base text-neutral-700 dark:text-neutral-200 list-disc list-inside space-y-1 mb-3">
                                {project.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.techStack.split("·").map((raw) => {
                                    const tech = raw.trim();
                                    return (
                                        <span
                                            key={tech}
                                            className="
                                            px-3 py-1 text-xs md:text-sm font-medium rounded-full
                                            bg-white/70 dark:bg-neutral-900/70
                                            border border-[#2F80ED]/30 backdrop-blur-sm
                                            shadow-[0_2px_6px_rgba(47,128,237,0.12)]
                                            hover:shadow-[0_0_12px_rgba(47,128,237,0.25)]
                                            hover:border-[#2F80ED]/60
                                            transition-all duration-300">
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </Section>
    );
}