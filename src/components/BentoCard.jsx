import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const BentoCard = ({ children, className = '', title }) => {
    const cardRef = useRef(null);

    // Track scroll progress of this card
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start start", "end start"] // Fade as card exits from top
    });

    // Transform scroll progress to opacity (1 to 0 as it scrolls out)
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <motion.div
            ref={cardRef}
            style={{ opacity }}
            className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:border-white/20 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 ${className}`}
        >
            {title && (
                <div className="px-6 py-4 border-b border-white/5 bg-black/20 flex justify-between items-center">
                    <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{title}</span>
                </div>
            )}
            <div className="p-6 md:p-8 flex-1 relative flex flex-col">
                {children}
            </div>
            {/* Shinny corner effect */}
            <div className='absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-500'></div>
        </motion.div>
    );
};

export default BentoCard;
