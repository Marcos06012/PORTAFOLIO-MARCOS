"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "alasmarcos60@gmail.com";

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
                    Disponible para nuevos proyectos
                </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tighter">
                ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-gray-400 mb-12 max-w-md text-center">
                Hablemos sobre cómo puedo ayudarte a construir soluciones digitales eficientes y modernas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                
                {/* Tarjeta de Email con Copiado Automático */}
                <div 
                    onClick={copyToClipboard}
                    className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                    <div className="absolute -inset-px bg-linear-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative flex flex-col items-start gap-4">
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                            <FaEnvelope size={24} />
                        </div>
                        <div className="w-full">
                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] mb-1">Escríbeme</p>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-sm md:text-lg text-white font-medium truncate mr-2">{email}</p>
                                {copied ? <FaCheck className="text-green-500" /> : <FaCopy className="text-gray-600 group-hover:text-white transition-colors" />}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tarjeta de GitHub */}
                <a 
                    href="https://github.com/Marcos06012" 
                    target="_blank"
                    className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                >
                    <div className="absolute -inset-px bg-linear-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative flex flex-col items-start gap-4">
                        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-500">
                            <FaGithub size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] mb-1">Mira mi código</p>
                            <p className="text-lg text-white font-medium">github.com/Marcos06012</p>
                        </div>
                    </div>
                </a>

            </div>

            {/* LinkedIn u otra red (Opcional, centrado abajo) */}
            <div className="mt-12 flex gap-8">
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">LinkedIn</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">Instagram</a>
            </div>
        </section>
    );
}