"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import { useLanguage } from '../context/LanguageContext';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Projects() {
    const slides = [1, 2, 3, 4, 5, 6];
    const { t } = useLanguage();

    return (
        // 1 & 2: Quitamos px-6 y añadimos overflow-hidden
        <section className="py-20 text-center min-h-screen scroll-mt-16 overflow-hidden" id="projects">
            
            {/* Título Animado */}
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                // 3: Añadimos px-6 solo al título
                className="text-3xl md:text-4xl font-bold mb-10 text-white tracking-tight px-6"
            >
                {t.projects.title}
            </motion.h2>

            {/* Contenedor del Carrusel Animado */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                // 4: w-full sin límites de max-w
                className="w-full"
            >
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    centeredSlides={true}
                    loop={true}
                    spaceBetween={30}
                    navigation={{
                        prevEl: '.prev-btn',
                        nextEl: '.next-btn',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        1920: { slidesPerView: 4, spaceBetween: 30 },
                        1028: { slidesPerView: 2, spaceBetween: 20 },
                        0: { slidesPerView: 1, spaceBetween: 10 }
                    }}
                    className="mySwiper relative pb-20 w-full"
                >
                    {slides.map((num) => (
                        <SwiperSlide key={num}>
                            {/* Tarjeta con efecto Hover Senior (Añadido mx-4 en móvil para que no se vea cortado bruscamente) */}
                            <div className="group bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-3xl h-96 flex justify-center items-center shadow-xl hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-500 cursor-grab active:cursor-grabbing mx-4 md:mx-0">
                                <span className="text-3xl font-semibold text-gray-500 group-hover:text-blue-400 transition-colors uppercase tracking-widest">
                                    {t.projects.demo} {num}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* CONTENEDOR DE CONTROLES (Flechas + Puntos) */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 py-2 z-20">

                        {/* Flecha Izquierda (<) */}
                        <button className="prev-btn text-gray-500 hover:text-blue-500 transition-colors cursor-pointer p-2 outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>

                        {/* Los Puntos (Pagination) - Sintaxis corregida para Tailwind */}
                        <div className="custom-pagination !static !w-auto flex items-center gap-2"></div>

                        {/* Flecha Derecha (>) */}
                        <button className="next-btn text-gray-500 hover:text-blue-500 transition-colors cursor-pointer p-2 outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div>
                </Swiper>
            </motion.div>
        </section>
    );
}