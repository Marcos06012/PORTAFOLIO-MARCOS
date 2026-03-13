"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="max-w-5xl mx-auto py-20 min-h-screen scroll-mt-10"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-900/70 backdrop-blur-md hover:bg-gray-800/80 transition-all duration-300 p-10 rounded-3xl shadow-lg border border-gray-700/50"
            >
                <h2 className="text-3xl font-bold mb-10 text-center">
                    Sobre Mí
                </h2>

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="w-80 h-80 rounded-full bg-linear-to-r from-purple-500 to-blue-500 p-1">
                            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center text-6xl font-bold">
                                M
                            </div>
                        </div>
                    </motion.div>

                    {/* Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg leading-relaxed text-gray-300"
                    >
                        <p>
                            Soy un desarrollador frontend apasionado por crear
                            experiencias web modernas, intuitivas y visualmente
                            atractivas. Me gusta transformar ideas en interfaces
                            funcionales que ofrezcan una excelente experiencia
                            de usuario.
                        </p>

                        <p className="mt-4">
                            Trabajo principalmente con HTML, CSS y JavaScript,
                            y estoy ampliando mis conocimientos en tecnologías
                            modernas del ecosistema frontend para seguir creciendo
                            como desarrollador.
                        </p>

                        <p className="mt-4">
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