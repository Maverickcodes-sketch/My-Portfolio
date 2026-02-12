import React from "react";
import BentoCard from "./BentoCard";
import { SiReact, SiNextdotjs, SiPython, SiRedis, SiApachekafka, SiSpringboot, SiPostgresql, SiMariadb, SiExpress, SiDocker } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const TechStackCard = () => {
    // Slugs for skillicons.dev
    const skills = [
        { name: 'React', slug: 'react' },
        { name: 'Next.js', slug: 'nextjs' },
        { name: 'Python', slug: 'python' },
        { name: 'Java', slug: 'java' },
        { name: 'Redis', slug: 'redis' },
        { name: 'Kafka', slug: 'kafka' },
        { name: 'Spring Boot', slug: 'spring' },
        { name: 'PostgreSQL', slug: 'postgres' }, // 'postgresql' works too, but 'postgres' is shorter
        { name: 'Docker', slug: 'docker' },
        {name:'MongoDB', slug:'mongodb'},
        { name: 'Express', slug: 'express' }
    ];

    return (
        <BentoCard className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 flex flex-col" title="stack.json">
            <div className="w-full h-full flex flex-col">
                <h2 className="text-xl font-bold text-white mb-6 text-center">Tech Stack</h2>

                <div className="flex flex-wrap gap-4 justify-center content-center flex-1">
                    {skills.map((tech) => (
                        <span
                            key={tech.name}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-black border border-white/10 text-sm text-gray-300 font-mono hover:border-white/30 transition-all duration-300 cursor-default hover:bg-white/5"
                        >
                            <img
                                src={`https://skillicons.dev/icons?i=${tech.slug}&theme=dark`}
                                alt={tech.name}
                                className="w-6 h-6" // Increased size
                            />
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>
        </BentoCard>
    );
};


export default TechStackCard;
