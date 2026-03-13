"use client";
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen">
            <section id="inicio" className="text-center scroll-mt-80">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ 
                        duration: 0.8, 
                        type: "spring", 
                        stiffness: 100 
                    }}
                    className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-purple-600"
                >
                    Hola, soy Marcos
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-xl text-gray-400"
                >
                    Desarrollador Frontend & Estudiante de Ingeniería
                </motion.p>
            </section>
        </div>
    );
}