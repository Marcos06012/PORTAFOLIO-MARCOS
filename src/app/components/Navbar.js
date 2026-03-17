"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("inicio");

    // Lógica para detectar la sección activa
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

    return (
        <nav className="flex justify-between items-center p-6 bg-black/20 fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10">
            <h1 className="text-xl font-bold tracking-widest text-white">PORTAFOLIO</h1>

            <ul className="flex gap-4 items-center">
                <li>
                    <a href="#inicio" className={`relative px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-120 inline-block ${activeSection === "inicio" ? "text-white" : "text-gray-300"}`}>
                        INICIO
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${activeSection === "inicio" ? "w-full" : "w-0"}`} />
                    </a>
                </li>
                <li>
                    <a href="#about" className={`relative px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-120 inline-block ${activeSection === "about" ? "text-white" : "text-gray-300"}`}>
                        SOBRE MI
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${activeSection === "about" ? "w-full" : "w-0"}`} />
                    </a>
                </li>
                <li>
                    <a href="#herramientas" className={`relative px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-120 inline-block ${activeSection === "herramientas" ? "text-white" : "text-gray-300"}`}>
                        TECNOLOGÍAS
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${activeSection === "herramientas" ? "w-full" : "w-0"}`} />
                    </a>
                </li>
                <li>
                    <a href="#projects" className={`relative px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-120 inline-block ${activeSection === "projects" ? "text-white" : "text-gray-300"}`}>
                        PROYECTOS
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${activeSection === "projects" ? "w-full" : "w-0"}`} />
                    </a>
                </li>
                <li>
                    <a href="#contact" className={`relative px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-120 inline-block ${activeSection === "contact" ? "text-white" : "text-gray-300"}`}>
                        CONTACTO
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${activeSection === "contact" ? "w-full" : "w-0"}`} />
                    </a>
                </li>
            </ul>
        </nav>
    );
}