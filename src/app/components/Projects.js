"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import { useLanguage } from '../context/LanguageContext';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Projects() {
    const { t } = useLanguage();
    const projectItems = t?.projects?.items || [];

    return (
        <section
            className="w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden py-20 relative"
            id="projects"
        >
            <div className="max-w-7xl w-full flex flex-col items-center justify-center z-10 px-4 md:px-8">

                {/* Bloque de Título Centralizado */}
                <div className="text-center mb-16 flex flex-col items-center px-6">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 mb-4 inline-block select-none"
                    >
                        {t.nav.projects ? `03 . ${t.nav.projects}` : "03 . TRABAJOS"}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tight"
                    >
                        {t.projects.title}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "60px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 mt-4 rounded-full"
                    />
                </div>

                {/* MODO ESCRITORIO: Grid estático, gigante y centrado (Para 2 proyectos) */}
                <div className="hidden md:grid grid-cols-2 gap-8 w-full max-w-5xl justify-center">
                    {projectItems.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="group bg-gradient-to-b from-gray-950 to-gray-900/90 backdrop-blur-md border border-white/5 rounded-[2.8rem] h-140 flex flex-col justify-between p-10 text-left shadow-2xl hover:border-blue-500/40 hover:bg-gray-950 transition-all duration-500 relative overflow-hidden w-full"
                        >
                            {/* Capa de iluminación interna interactiva */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            {/* Cabecera de la Tarjeta */}
                            <div className="w-full flex justify-between items-start z-10 gap-4">
                                <div className="flex flex-col gap-1 max-w-[70%]">
                                    <span className="text-[11px] font-bold tracking-widest text-blue-400 uppercase truncate">
                                        {project.tags ? project.tags.join(" / ") : "Tech Stack"}
                                    </span>
                                    <h3 className="text-3xl font-black text-gray-200 group-hover:text-white transition-colors duration-300 tracking-tight mt-1 truncate">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Contenedor de Enlaces */}
                                <div className="flex items-center gap-3 z-20">
                                    {project.github && project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Ver Código Fuente"
                                            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 transform hover:scale-110 transition-all duration-300 shadow-md cursor-pointer"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                                <path d="M9 18c-4.51 2-5-2-7-2" />
                                            </svg>
                                        </a>
                                    )}

                                    {project.demo && project.demo !== "#" && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Visitar Sitio Web"
                                            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-500 hover:border-emerald-400 transform hover:scale-110 transition-all duration-300 shadow-md cursor-pointer"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="2" y1="12" x2="22" y2="12" />
                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Contenedor de la Imagen - Ahora más grande (h-56) */}
                            <div className="w-full h-56 bg-gray-950/60 border border-white/5 rounded-2xl flex items-center justify-center group-hover:border-blue-500/10 transition-colors duration-500 relative overflow-hidden">
                                <Image
                                    src={`/img/${project.image}`}
                                    alt={project.title}
                                    width={500}
                                    height={350}
                                    className="object-cover w-full h-full rounded-2xl opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-102"
                                />
                            </div>

                            {/* Pie de la tarjeta */}
                            <div className="w-full z-10 border-t border-white/5 pt-5 flex justify-between items-center gap-4">
                                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-light max-w-[88%] text-justify leading-relaxed line-clamp-4">
                                    {project.description}
                                </p>
                                <span className="text-sm font-mono font-bold text-gray-700 group-hover:text-gray-500 self-end mb-1">
                                    {project.index || `/0${idx + 1}`}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* MODO MÓVIL: Swiper interactivo para que no rompa la pantalla en celulares */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="w-full md:hidden flex"
                >
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={16}
                        slidesPerView={1}
                        pagination={{ clickable: true, el: '.custom-pagination' }}
                        className="mySwiper relative pb-16 w-full"
                    >
                        {projectItems.map((project, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="group bg-gradient-to-b from-gray-950 to-gray-900/90 border border-white/5 rounded-[2.2rem] h-116 flex flex-col justify-between p-6 text-left shadow-xl relative overflow-hidden">
                                    <div className="w-full flex justify-between items-start z-10 gap-2">
                                        <div className="flex flex-col gap-1 max-w-[60%]">
                                            <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase truncate">
                                                {project.tags ? project.tags.join(" / ") : "Tech Stack"}
                                            </span>
                                            <h3 className="text-xl font-black text-gray-200 mt-1 truncate">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-2 z-20">
                                            {project.github && project.github !== "#" && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                                </a>
                                            )}
                                            {project.demo && project.demo !== "#" && (
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="w-full h-36 bg-gray-950/60 border border-white/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                                        <Image src={`/img/${project.image}`} alt={project.title} width={350} height={220} className="object-cover w-full h-full rounded-xl opacity-90" />
                                    </div>
                                    <div className="w-full z-10 border-t border-white/5 pt-3 flex justify-between items-center">
                                        <p className="text-xs text-gray-400 font-light line-clamp-4 text-justify leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

            </div>
        </section>
    );
}