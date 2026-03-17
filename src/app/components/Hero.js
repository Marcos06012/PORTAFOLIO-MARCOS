"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function Hero() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen px-6 overflow-hidden">
            <section id="inicio" className="text-center scroll-mt-45 max-w-5xl">
                
                {/* Nombre con Gradiente - Cambiado a whileInView */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }} // once: false permite que repita
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-black mb-6 tracking-tighter py-7"
                >
                    Hola, soy <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">Marcos</span>
                </motion.h1>

                {/* Rol Profesional */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="space-y-4"
                >
                    <p className="text-lg md:text-2xl text-gray-300 font-medium">
                        Ingeniero de Software en formación
                    </p>
                    <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Especializado en crear experiencias web modernas, escalables y centradas en el usuario desde El Salvador.
                    </p>
                </motion.div>

                {/* Botones de Acción */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10"
                >
                    <a 
                        href="#projects" 
                        className="group flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold transition-all hover:bg-blue-500 hover:text-white"
                    >
                        Ver Proyectos
                        <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <div className="flex gap-4 items-center px-4">
                        <a href="https://linkedin.com/in/marcos-alas" target="_blank" className="text-2xl text-gray-400 hover:text-white transition-colors">
                            <FaLinkedin />
                        </a>
                        <div className="h-4 w-px bg-gray-800" />
                        <a href="https://github.com/Marcos06012" target="_blank" className="text-2xl text-gray-400 hover:text-white transition-colors">
                            <FaGithub />
                        </a>
                    </div>
                </motion.div>

                {/* Indicador de Scroll */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.5 }}
                    viewport={{ once: false }}
                    transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block py-10"
                >
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center py-1">
                        <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
                    </div>
                </motion.div>

            </section>
        </div>
    );
}