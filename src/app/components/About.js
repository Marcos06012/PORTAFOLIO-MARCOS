"use client";
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    // Animaciones para los bloques de la cuadrícula
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: delay, ease: "easeOut" }
        })
    };

    return (
        <section
            id="about"
            className="w-full min-h-screen flex flex-col justify-center items-center py-25 md:px-8 relative overflow-hidden"
        >
            {/* Luces ambientales de fondo */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/70 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-5xl w-full">

                {/* Título de la Sección Descentralizado */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    className="mb-10 text-left flex flex-col items-start"
                >
                    {/* Etiqueta dinámica con soporte multiidioma */}
                    <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 inline-flex items-center select-none">
                        {t.nav.about ? `01 . ${t.nav.about}` : "01 . BIO"}
                    </span>

                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3">
                        {t.about.title}
                    </h2>
                </motion.div>

                {/* CUADRÍCULA ESTILO BENTO BOX */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">

                    {/* BLOQUE 1: EL AVATAR DESTACADO (Ocupa 1 col, 2 filas de alto) */}
                    <motion.div
                        custom={0.1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        variants={cardVariants}
                        className="md:row-span-2 bg-linear-to-br from-gray-900 to-gray-950 border border-white/5 rounded-3xl p-6 flex flex-col justify-between items-center relative overflow-hidden group shadow-xl"
                    >
                        <div className="absolute inset-0 bg-linear-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Indicador de estado */}
                        <div className="w-full flex justify-start items-center gap-2 z-10">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">{t.cardAboutMe.openToWork}</span>
                        </div>

                        {/* Inicial / Avatar 3D Concept */}
                        <div className="w-32 h-32 rounded-2xl bg-white/2 border border-white/10 flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 shadow-inner relative">
                            <span className="text-6xl font-black text-transparent bg-linear-to-b from-white to-gray-600">
                                M
                            </span>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-purple-500 rounded-full blur-xs animate-ping opacity-70" />
                        </div>

                        {/* Detalle inferior */}
                        <div className="text-center z-10">
                            <p className="text-sm font-bold text-white tracking-wide">{t.cardAboutMe.title}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{t.cardAboutMe.location}</p>
                        </div>
                    </motion.div>

                    {/* BLOQUE 2: PRIMER PÁRRAFO (Ocupa 2 col de ancho, 1 fila de alto) */}
                    <motion.div
                        custom={0.2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        variants={cardVariants}
                        className="md:col-span-2 bg-gray-900/60 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 flex items-center shadow-xl hover:border-white/1 transition-colors duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full" />
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed text-left font-light">
                            {t.about.p1}
                        </p>
                    </motion.div>

                    {/* BLOQUE 3: SEGUNDO PÁRRAFO - EL DESTACADO (Ocupa 1 col, 1 fila de alto) */}
                    <motion.div
                        custom={0.3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        variants={cardVariants}
                        className="bg-linear-to-tr from-blue-950/40 to-gray-900/60 backdrop-blur-md border border-blue-500/20 rounded-3xl p-6 flex flex-col justify-center shadow-xl relative group overflow-hidden"
                    >
                        {/* Comillas decorativas gigantes de fondo */}
                        <span className="absolute -bottom-5 -right-2 text-8xl font-serif text-blue-500/10 select-none pointer-events-none">“</span>
                        <p className="text-blue-300 text-xs md:text-sm leading-relaxed text-left font-medium italic border-l-2 border-blue-500 pl-3">
                            {t.about.p2}
                        </p>
                    </motion.div>

                    {/* BLOQUE 4: TERCER PÁRRAFO (Ocupa 1 col, 1 fila de alto) */}
                    <motion.div
                        custom={0.4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        variants={cardVariants}
                        className="bg-gray-900/60 backdrop-blur-md border border-white/5 rounded-3xl p-6 flex items-center shadow-xl hover:border-white/1 transition-colors duration-300"
                    >
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed text-left font-light">
                            {t.about.p3}
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}