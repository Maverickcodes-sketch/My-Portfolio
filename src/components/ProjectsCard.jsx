import React from "react";
import BentoCard from "./BentoCard";
import { Github } from "lucide-react";

const ProjectsCard = () => {
    const projects = [
        {
            title: "OrgBrain",
            desc: "Full-stack web app for HR professionals to manage teams using AI.",
            tags: ["React", "Node", "AI"],
            gradient: "from-gray-900 to-cyan-900/50",
            github: "https://github.com/Maverickcodes-sketch/OrgBrain"
        },
        {
            title: "JanSeva Infra",
            desc: "Offline-first infrastructure reporting system for low-connectivity regions.",
            tags: ["PWA", "IndexedDB"],
            gradient: "from-gray-900 to-sky-900/50",
            github: "https://github.com/Maverickcodes-sketch/JanSeva-Infra"
        },
    ];

    return (
        <BentoCard className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 group" title="projects.jsx">
            <div className="flex flex-col h-full relative">
                <div className="mb-4 z-10 bg-inherit flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">Selected Works</h2>
                </div>
                <div className="flex-1 flex flex-col gap-3 min-h-0 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 pr-1">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`flex-1 p-3 rounded-xl border border-white/5 bg-gradient-to-br ${project.gradient} hover:border-white/20 transition-colors group/item shrink-0 flex flex-col justify-center`}
                        >
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="text-base font-bold text-white">{project.title}</h3>
                                <div className="flex gap-2">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <Github size={16} />
                                    </a>
                                </div>
                            </div>
                            <p className="text-gray-400 text-[10px] line-clamp-1 mb-1">
                                {project.desc}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#DFFF00]/10 text-[#DFFF00] border border-[#DFFF00]/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BentoCard>
    );
};

export default ProjectsCard;
