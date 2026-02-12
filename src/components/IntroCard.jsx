import React from "react";
import { Mail, Github, Linkedin, Code2 } from "lucide-react";
import BentoCard from "./BentoCard";
import myportpic from "@/assets/myportpic.jpeg";

const IntroCard = () => {
    return (
        <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2" title="intro.js">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
                <div className="flex flex-col justify-center gap-6 order-2 md:order-1">
                    <div className="font-mono text-sm text-cyan-400 mb-2">Hello World, I'm</div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        Shaswat <br /> <span className="text-gray-500">Mishra</span>
                    </h1>
                    <div className="font-mono text-gray-400 text-lg md:text-xl">
                        Passionate Full-Stack Developer building scalable web apps with React, Node.js, and Spring Boot.
                    </div>

                    <div className="flex gap-4 mt-4">
                        <a href="mailto:mishrashaswat29@example.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all text-white"><Mail size={20} /></a>
                        <a href="https://github.com/Maverickcodes-sketch" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all text-white"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/shaswat-mishra-320863252/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all text-white"><Linkedin size={20} /></a>
                        <a href="https://leetcode.com/u/_Shaswat_Mishra" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all text-white"><Code2 size={20} /></a>
                    </div>
                </div>

                <div className="flex justify-center items-center order-1 md:order-2">
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                        <img
                            src={myportpic}
                            alt="Profile"
                            className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </div>
        </BentoCard>
    );
};

export default IntroCard;
