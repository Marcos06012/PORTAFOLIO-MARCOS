"use client";
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    // Animaciones fluidas para los bloques de la cuadrícula Bento
    const cardVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: delay, ease: "easeOut" }
        })
    };

    return (
        <section
            id="about"
            className="w-full min-h-screen flex flex-col justify-center items-center py-24 md:py-0 px-4 md:px-8 relative overflow-hidden"
        >
            {/* Luces ambientales de fondo */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl w-full z-10">

                {/* Título de la Sección Descentralizado */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-left flex flex-col items-start px-2"
                >
                    {/* Etiqueta dinámica con soporte multiidioma */}
                    <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 inline-flex items-center select-none">
                        {t.nav.about ? `01 . ${t.nav.about}` : "01 . BIO"}
                    </span>

                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-4">
                        {t.about.title}
                    </h2>
                </motion.div>

                {/* CUADRÍCULA ESTILO BENTO BOX RESPONSIVE */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto md:auto-rows-[220px]">

                    {/* BLOQUE 1: EL AVATAR DESTACADO (Ocupa 1 col, 2 filas de alto en escritorio) */}
                    <motion.div
                        custom={0.1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={cardVariants}
                        className="md:row-span-2 bg-gradient-to-br from-gray-950 to-gray-900/90 border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between items-center relative overflow-hidden group shadow-2xl hover:border-emerald-500/30 transition-all duration-500 min-h-[320px] md:min-h-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* Indicador de estado flotante */}
                        <div className="w-full flex justify-start items-center gap-2 z-10 select-none">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                            <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                                {t.cardAboutMe.openToWork}
                            </span>
                        </div>

                        {/* Inicial / Avatar Concept */}
                        <div className="w-32 h-32 rounded-3xl bg-white/[0.02] border border-white/10 flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 shadow-inner relative select-none">
                            <span className="text-6xl font-black text-transparent bg-gradient-to-b from-white to-gray-500 bg-clip-text">
                                M
                            </span>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-purple-500 rounded-full blur-xs animate-ping opacity-60" />
                        </div>

                        {/* Detalle inferior de ubicación */}
                        <div className="text-center z-10 select-none">
                            <p className="text-sm font-bold text-white tracking-wide">{t.cardAboutMe.title}</p>
                            <p className="text-xs text-gray-500 mt-1 font-light">{t.cardAboutMe.location}</p>
                        </div>
                    </motion.div>

                    {/* BLOQUE 2: PRIMER PÁRRAFO (Ocupa 2 col de ancho en escritorio) */}
                    <motion.div
                        custom={0.2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={cardVariants}
                        className="md:col-span-2 bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 flex items-center shadow-2xl hover:border-white/10 hover:bg-gray-950/40 transition-all duration-500 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/3 blur-3xl rounded-full pointer-events-none" />
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify font-light">
                            {t.about.p1}
                        </p>
                    </motion.div>

                    {/* BLOQUE 3: SEGUNDO PÁRRAFO - EL DESTACADO (Ocupa 1 col) */}
                    <motion.div
                        custom={0.3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={cardVariants}
                        className="bg-gradient-to-tr from-blue-950/30 to-gray-900/40 backdrop-blur-md border border-blue-500/20 rounded-[2.5rem] p-8 flex flex-col justify-center shadow-2xl relative group overflow-hidden hover:border-blue-500/40 transition-colors duration-500"
                    >
                        {/* Comillas decorativas gigantes de fondo */}
                        <span className="absolute -bottom-6 -right-2 text-9xl font-serif text-blue-500/10 select-none pointer-events-none">“</span>
                        <p className="text-blue-300 text-xs md:text-sm leading-relaxed text-left font-medium italic border-l-2 border-blue-500 pl-4 z-10">
                            {t.about.p2}
                        </p>
                    </motion.div>

                    {/* BLOQUE 4: TERCER PÁRRAFO (Ocupa 1 col) */}
                    <motion.div
                        custom={0.4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={cardVariants}
                        className="bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 flex items-center shadow-2xl hover:border-white/10 hover:bg-gray-950/40 transition-all duration-500"
                    >
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed text-justify font-light">
                            {t.about.p3}
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}