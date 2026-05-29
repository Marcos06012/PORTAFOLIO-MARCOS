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
                "group flex overflow-hidden p-3 flex-row w-full select-none gap-6", // Fijamos un gap base aquí
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
                            "flex shrink-0 justify-around gap-6", // CORRECCIÓN: Usamos la clase nativa gap-6 en lugar de gap-(--gap)
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
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, type: "Frontend" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, type: "Frontend" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, type: "Lenguaje" },
    { name: "React", icon: <FaReact className="text-cyan-400" />, type: "Framework" },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, type: "Framework" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" />, type: "CSS" },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" />, type: "Herramienta" },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, type: "Backend" },
    { name: "Java", icon: <FaJava className="text-red-500" />, type: "Lenguaje" },
    { name: "Python", icon: <FaPython className="text-blue-400" />, type: "Lenguaje" },
    { name: "C#", icon: <TbBrandCSharp className="text-purple-500" />, type: "Lenguaje" },
    { name: "SQL Server", icon: <DiMsqlServer className="text-red-600" />, type: "Database" },
];

const TechCard = ({ name, icon, type }) => {
    return (
        <figure
            className={cn(
                "relative w-56 cursor-pointer overflow-hidden rounded-2xl p-4 flex flex-col justify-between mr-6", // SOLUCIÓN: Agregamos mr-6 aquí
                "bg-gray-950/30 backdrop-blur-md border border-white/[0.04]",
                "hover:border-white/[0.15] hover:bg-white/[0.02] hover:scale-105",
                "transition-all duration-500 ease-out group/card shadow-lg"
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-center gap-4 z-10">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] group-hover/card:bg-white/[0.07] group-hover/card:border-white/[0.1] group-hover/card:scale-110 transition-all duration-500 text-3xl shadow-inner">
                    {icon}
                </div>

                <div className="flex flex-col">
                    <figcaption className="text-sm font-bold text-gray-200 group-hover/card:text-white transition-colors duration-300 tracking-wide">
                        {name}
                    </figcaption>
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mt-0.5">
                        {type}
                    </span>
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
            className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center py-24 md:py-0"
        >
            {/* Brillo de fondo detrás de los carruseles */}
            <div className="absolute w-[600px] h-[250px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

            {/* 1. SECCIÓN DE TÍTULO: Limitada al ancho estructurado del layout */}
            <div className="max-w-6xl w-full flex flex-col items-center justify-center z-10 px-6">
                <div className="text-center mb-16 flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 mb-4 inline-block select-none"
                    >
                        {t.nav.tech ? `02 . ${t.tech.subtitle || 'Tech'}` : "02 . BIO"}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tight"
                    >
                        {t.tech.title}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "60px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-[2px] bg-gradient-to-r from-blue-500 to-emerald-500 mt-4 rounded-full"
                    />
                </div>
            </div>

            {/* 2. CONTENEDOR DEL MARQUEE: Removido del max-w para ocupar el 100% de la pantalla de extremo a extremo */}
            <div className="w-screen flex flex-col gap-4 relative z-10 visual-bleed">
                
                {/* Primera Fila (Izquierda a Derecha) */}
                <Marquee pauseOnHover className="[--duration:35s] w-full">
                    {firstRow.map((tech) => (
                        <TechCard key={tech.name} {...tech} />
                    ))}
                </Marquee>

                {/* Segunda Fila (Derecha a Izquierda) */}
                <Marquee reverse pauseOnHover className="[--duration:30s] w-full">
                    {secondRow.map((tech) => (
                        <TechCard key={tech.name} {...tech} />
                    ))}
                </Marquee>
                
            </div>
        </section>
    );
}