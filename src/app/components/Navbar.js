"use client";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Asegúrate de tener importado motion
import { useLanguage } from "../context/LanguageContext"; 

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("inicio");
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["inicio", "about", "herramientas", "projects", "contact"];
            const scrollPosition = window.scrollY + 100;

            for (const id of sections) {
                const element = document.getElementById(id);
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "inicio", label: t.nav.home },
        { id: "about", label: t.nav.about },
        { id: "herramientas", label: t.nav.tech },
        { id: "projects", label: t.nav.projects },
        { id: "contact", label: t.nav.contact }
    ];

    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-black/20 fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 h-16">
            
            {/* 1. Extremo Izquierdo: Título/Logo */}
            <div className="w-1/4 flex justify-start">
                <h1 className="text-xl font-bold tracking-widest text-white select-none">PORTAFOLIO</h1>
            </div>

            {/* 2. Centro Absolute con el efecto de la Línea Azul Animada */}
            <div className="hidden md:flex w-2/4 justify-center">
                <ul className="flex gap-2 items-center bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-full backdrop-blur-xs relative">
                    {navItems.map((item) => {
                        const isSelected = activeSection === item.id;
                        return (
                            <li key={item.id} className="relative">
                                <a 
                                    href={`#${item.id}`} 
                                    className={`relative px-4 py-2 rounded-full text-xs font-bold transition-colors duration-300 inline-block z-10 ${
                                        isSelected ? "text-white" : "text-gray-400 hover:text-white/80"
                                    }`}
                                >
                                    {item.label}

                                    {/* LÍNEA AZUL ANIMADA MÁGICA: Viaja entre botones gracias a layoutId */}
                                    {isSelected && (
                                        <motion.div
                                            layoutId="activeBorder"
                                            className="absolute bottom-0 left-2 right-2 h-[2px] bg-blue-500 rounded-full shadow-[0_1px_8px_rgba(59,130,246,0.6)]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* 3. Extremo Derecho: Selector de Idiomas */}
            <div className="w-1/4 flex justify-end">
                <div className="flex bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-sm">
                    <button 
                        onClick={() => toggleLanguage('es')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300 cursor-pointer ${language === 'es' ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                    >
                        ES
                    </button>
                    <button 
                        onClick={() => toggleLanguage('en')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300 cursor-pointer ${language === 'en' ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                    >
                        EN
                    </button>
                </div>
            </div>

        </nav>
    );
}