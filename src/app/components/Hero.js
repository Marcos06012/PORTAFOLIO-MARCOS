"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

// Importamos nuestro hook de idioma
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <div className="flex items-center justify-center w-full min-h-screen px-4 md:px-6 overflow-hidden relative">
            
            {/* Luces sutiles de fondo para dar atmósfera futurista desde el inicio */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <section id="inicio" className="text-center scroll-mt-20 max-w-5xl py-12 md:py-20 z-10">
                
                {/* Nombre con Gradiente Responsivo */}
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 md:mb-6 tracking-tighter py-4 md:py-6 text-white"
                >
                    {t.hero.greeting} <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent inline-block">Marcos</span>
                </motion.h1>

                {/* Rol Profesional y Descripción */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="space-y-4 px-2"
                >
                    <p className="text-base sm:text-lg md:text-2xl text-gray-300 font-medium tracking-wide">
                        {t.hero.role}
                    </p>
                    <p className="text-xs sm:text-sm md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light text-center">
                        {t.hero.description}
                    </p>
                </motion.div>

                {/* Botones de Acción Adaptables */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-12 w-full px-4 sm:px-0"
                >
                    {/* Botón Principal (Ancho completo en móvil, auto en escritorio) */}
                    <a 
                        href="#projects" 
                        className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105 active:scale-95 shadow-lg"
                    >
                        {t.hero.btn}
                        <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-base" />
                    </a>
                    
                    {/* Contenedor de Redes Sociales */}
                    <div className="flex gap-4 items-center justify-center px-4 py-2 bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-transparent rounded-full w-full sm:w-auto">
                        <a 
                            href="https://linkedin.com/in/marcos-alas" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-2xl text-gray-400 hover:text-white transition-colors duration-300 p-1"
                        >
                            <FaLinkedin />
                        </a>
                        <div className="h-4 w-px bg-gray-800 hidden sm:block" />
                        <a 
                            href="https://github.com/Marcos06012" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-2xl text-gray-400 hover:text-white transition-colors duration-300 p-1"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </motion.div>

                {/* Indicador de Scroll Animado (Oculto en móviles para evitar ruidos visuales) */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
                >
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center py-1.5 backdrop-blur-xs">
                        <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" />
                    </div>
                </motion.div>

            </section>
        </div>
    );
}