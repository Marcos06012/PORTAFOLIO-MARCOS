"use client";
import { useState, useEffect } from "react";
// 1. Importamos el hook mágico que creamos en el paso anterior
// (Asegúrate de que la ruta coincida con donde guardaste la carpeta 'context')
import { useLanguage } from "../context/LanguageContext"; 

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("inicio");
    
    // 2. Extraemos las herramientas de idioma
    const { language, toggleLanguage, t } = useLanguage();

    // Lógica para detectar la sección activa (Se mantiene intacta)
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

    // 3. Creamos un arreglo con los IDs y sus traducciones dinámicas
    const navItems = [
        { id: "inicio", label: t.nav.home },
        { id: "about", label: t.nav.about },
        { id: "herramientas", label: t.nav.tech },
        { id: "projects", label: t.nav.projects },
        { id: "contact", label: t.nav.contact }
    ];

    return (
        <nav className="flex justify-between items-center p-6 bg-black/20 fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10">
            <h1 className="text-xl font-bold tracking-widest text-white">PORTAFOLIO</h1>

            {/* Agrupamos la lista y el botón de idiomas para que queden juntos a la derecha */}
            <div className="flex items-center gap-6">
                
                {/* Lista de Navegación Mapeada */}
                <ul className="flex gap-4 items-center hidden md:flex">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a 
                                href={`#${item.id}`} 
                                className={`relative px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-120 inline-block ${activeSection === item.id ? "text-white" : "text-gray-300"}`}
                            >
                                {item.label}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${activeSection === item.id ? "w-full" : "w-0"}`} />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* 4. Selector de Idiomas (Botones ES / EN) */}
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