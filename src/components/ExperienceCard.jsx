import React from "react";
import BentoCard from "./BentoCard";

const ExperienceCard = () => {
    return (
        <BentoCard className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1" title="experience.log">
            <div className="flex flex-col md:flex-row gap-6 h-full">
                <div className="flex-1 group">
                    <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">KIET-MUN</h3>
                        <span className="text-xs font-mono text-gray-500">2024- Present</span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed text-justify">
                        Managed brand partnerships and event logistics. Earned Honourable Mention at NSUT MUN ensuring smooth coordination and execution.
                    </p>
                </div>

                <div className="w-px bg-white/10 hidden md:block"></div>

                <div className="flex-1 group">
                    <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">E-CELL</h3>
                        <span className="text-xs font-mono text-gray-500">2024 - 2025</span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed text-justify">
                        Handled sponsorship management and brand collaborations. Strengthened negotiation and stakeholder management skills.
                    </p>
                </div>
            </div>
        </BentoCard>
    );
};

export default ExperienceCard;
