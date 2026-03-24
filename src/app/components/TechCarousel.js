"use client";

import { motion } from "framer-motion";

import {
    FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaJava, FaPython
} from "react-icons/fa";
import {
    SiJavascript, SiNextdotjs, SiTailwindcss, SiNodedotjs
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { useLanguage } from '../context/LanguageContext';


function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Marquee = ({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}) => {
    return (
        <div
            {...props}
            className={cn(
                "group flex overflow-hidden p-2 [--gap:1rem] flex-row",
                vertical && "flex-col",
                className,
            )}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            "flex shrink-0 justify-around gap-(--gap)", 
                            vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
                            reverse && "[animation-direction:reverse]",
                            pauseOnHover && "group-hover:[animation-play-state:paused]",
                        )}
                    >
                        {children}
                    </div>
                ))}
        </div>
    );
};

const technologies = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "C#", icon: <TbBrandCSharp className="text-purple-500" /> },
    { name: "SQL Server", icon: <DiMsqlServer className="text-red-600" /> },
];

const TechCard = ({ name, icon }) => {
    return (
        <figure
            className={cn(
                "relative w-52 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-50/10 hover:bg-gray-50/15 transition-all duration-300"
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div className="text-3xl">{icon}</div>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-semibold text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-white/40">Tecnología</p>
                </div>
            </div>
        </figure>
    );
};

export default function TechCarousel() {
    const firstRow = technologies.slice(0, technologies.length / 2);
    const secondRow = technologies.slice(technologies.length / 2);

    const { t } = useLanguage();

    return (
        <section
            id="herramientas"
            className="relative w-full overflow-hidden py-20 scroll-mt-24 px-6"
        >
            <div className="flex flex-col items-center justify-center min-h-100">
                
                {/* Título Animado */}
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold mb-10 text-white tracking-tight"
                >
                    {t.tech.title}

                </motion.h2>

                <Marquee pauseOnHover className="[--duration:30s]">
                    {firstRow.map((tech) => (
                        <TechCard key={tech.name} {...tech} />
                    ))}
                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:25s] mt-4">
                    {secondRow.map((tech) => (
                        <TechCard key={tech.name} {...tech} />
                    ))}
                </Marquee>

            </div>
        </section>
    );
}