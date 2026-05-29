"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { useLanguage } from "../context/LanguageContext"; 
// Importamos un par de iconos limpios para el botón responsive
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("inicio");
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú móvil
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
        <>
            <nav className="flex justify-between items-center px-6 md:px-8 bg-black/20 fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 h-16">
                
                {/* 1. Extremo Izquierdo: Título/Logo */}
                <div className="w-1/2 md:w-1/4 flex justify-start">
                    <h1 className="text-lg md:text-xl font-bold tracking-widest text-white select-none">PORTAFOLIO</h1>
                </div>

                {/* 2. Centro Absoluto: Lista de Navegación (Solo Escritorio) */}
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

                                        {/* Línea azul deslizante de escritorio */}
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

                {/* 3. Extremo Derecho: Selector de Idiomas + Botón de Menú Móvil */}
                <div className="w-1/2 md:w-1/4 flex justify-end items-center gap-4">
                    {/* Idiomas */}
                    <div className="flex bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-sm">
                        <button 
                            onClick={() => toggleLanguage('es')}
                            className={`px-2 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-bold rounded-full transition-all duration-300 cursor-pointer ${language === 'es' ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            ES
                        </button>
                        <button 
                            onClick={() => toggleLanguage('en')}
                            className={`px-2 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-bold rounded-full transition-all duration-300 cursor-pointer ${language === 'en' ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            EN
                        </button>
                    </div>

                    {/* Botón de Menú para Celulares */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex md:hidden text-gray-400 hover:text-white text-xl p-2 rounded-xl bg-white/5 border border-white/10 cursor-pointer transition-colors"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* 4. Menú Desplegable Móvil (Cortina Lateral de alta calidad) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-y-0 right-0 w-64 bg-gray-950/95 backdrop-blur-xl border-l border-white/10 z-40 flex flex-col pt-24 px-6 md:hidden shadow-2xl"
                    >
                        <ul className="flex flex-col gap-3">
                            {navItems.map((item) => {
                                const isSelected = activeSection === item.id;
                                return (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en un enlace
                                            className={`w-full px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 block relative overflow-hidden border ${
                                                isSelected
                                                    ? "text-white bg-blue-500/20 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                                                    : "text-gray-400 border-transparent hover:bg-white/5 hover:text-white"
                                            }`}
                                        >
                                            {item.label}
                                            {/* Indicador de sección activa para móvil */}
                                            {isSelected && (
                                                <div className="absolute left-0 top-1/4 h-1/2 w-1 bg-blue-500 rounded-r-full" />
                                            )}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}