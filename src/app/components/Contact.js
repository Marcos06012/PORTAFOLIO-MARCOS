"use client";
import { useState } from "react";
import { FaGithub, FaWhatsapp, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "alasmarcos60@gmail.com";
    const { t } = useLanguage();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-20 px-6 min-h-screen flex flex-col items-center justify-center scroll-mt-10" id="contact">
            {/* Indicador de Disponibilidad Senior */}
            <div className="mb-8 flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">
                    {/* Texto dinámico */}
                    {t.contact.title}
                </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tighter">
                {/* Texto dinámico */}
                {t.contact.title2}
            </h2>
            <p className="text-gray-400 mb-12 max-w-md text-center">
                {/* Texto dinámico */}
                {t.contact.p1}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl px-4 md:px-0">

                {/* Tarjeta de Email con Copiado Automático */}
                <div
                    onClick={copyToClipboard}
                    className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 hover:scale-[1.02] transform transition-all duration-500 cursor-pointer overflow-hidden shadow-xl"
                >
                    {/* Capa de iluminación interna interactiva */}
                    <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative flex flex-col items-start gap-4 z-10">
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                            <FaEnvelope size={24} />
                        </div>
                        <div className="w-full">
                            {/* Texto dinámico */}
                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] mb-1">
                                {t.contact.card1}
                            </p>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-sm md:text-lg text-white font-medium truncate mr-2 select-all">
                                    {email}
                                </p>
                                <div className="flex-shrink-0">
                                    {copied ? (
                                        <FaCheck className="text-green-500 scale-110 transition-transform" />
                                    ) : (
                                        <FaCopy className="text-gray-500 group-hover:text-white transition-colors duration-300" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tarjeta de GitHub */}
                <a
                    href="https://github.com/Marcos06012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 hover:scale-[1.02] transform transition-all duration-500 overflow-hidden shadow-xl"
                >
                    {/* Capa de iluminación interna interactiva */}
                    <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative flex flex-col items-start gap-4 z-10 w-full">
                        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-500">
                            <FaGithub size={24} />
                        </div>
                        <div className="w-full">
                            {/* Texto dinámico */}
                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] mb-1">
                                {t.contact.card2}
                            </p>
                            <p className="text-sm md:text-lg text-white font-medium truncate group-hover:text-purple-300 transition-colors duration-300">
                                github.com/Marcos06012
                            </p>
                        </div>
                    </div>
                </a>

                {/* Tarjeta de WhatsApp */}
                <a
                    href="https://wa.me/78056674"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-500/30 hover:scale-[1.02] transform transition-all duration-500 overflow-hidden shadow-xl"
                >
                    {/* CORRECCIÓN: Iluminación verde temática para WhatsApp */}
                    <div className="absolute -inset-px bg-linear-to-r from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative flex flex-col items-start gap-4 z-10 w-full">
                        {/* CORRECCIÓN: Estilo de fondo del icono en verde */}
                        <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                            <FaWhatsapp size={24} />
                        </div>
                        <div className="w-full">
                            {/* Texto dinámico */}
                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] mb-1">
                                {t.contact.card3}
                            </p>
                            <p className="text-sm md:text-lg text-white font-medium truncate group-hover:text-emerald-300 transition-colors duration-300">
                                +503 78056674
                            </p>
                        </div>
                    </div>
                </a>

            </div>


        </section>
    );
}