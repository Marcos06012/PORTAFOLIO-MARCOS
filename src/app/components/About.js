"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="max-w-5xl mx-auto py-20 min-h-screen scroll-mt-6 px-6 flex items-center"
        >
            {/* Contenedor principal: Solo hace un fade-in suave */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/70 backdrop-blur-md hover:bg-gray-800/80 transition-all duration-300 p-8 md:p-14 rounded-3xl shadow-lg border border-gray-700/50 w-full"
            >
                {/* Título - Entra de arriba hacia abajo */}
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold mb-10 text-center text-white tracking-tight"
                >
                    Descripción Personal
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Avatar - Entra desde la izquierda y crece */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex justify-center"
                    >
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-linear-to-r from-green-500 to-blue-500 p-1 shadow-2xl shadow-blue-500/20">
                            <div className="w-full h-full bg-gray-950 rounded-full flex items-center justify-center text-6xl font-bold text-white uppercase">
                                M
                            </div>
                        </div>
                    </motion.div>

                    {/* Texto - Entra desde la derecha */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-base md:text-lg leading-relaxed text-gray-300 text-justify space-y-4"
                    >
                        <p>
                            Soy un desarrollador frontend apasionado por crear
                            experiencias web modernas, intuitivas y visualmente
                            atractivas. Me gusta transformar ideas en interfaces
                            funcionales que ofrezcan una excelente experiencia
                            de usuario.
                        </p>

                        <p>
                            Trabajo principalmente con <span className="text-white font-medium italic">HTML, CSS y JavaScript</span>,
                            y estoy ampliando mis conocimientos en tecnologías
                            modernas del ecosistema frontend.
                        </p>

                        <p>
                            Siempre estoy aprendiendo nuevas herramientas,
                            explorando tendencias del desarrollo web y buscando
                            mejorar mis habilidades para construir productos
                            cada vez mejores.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}