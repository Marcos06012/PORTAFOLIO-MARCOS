"use client";
import {motion} from 'framer-motion';

export default function Hero() {
    return (
        <section className="text-center py-32">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold mb-4"
            >
                Hola, soy Marcos
            </motion.h1>

            <p className="text-xl text-gray-500">
                Frontend Developer
            </p>

            <div className="mt-6 flex justify-center gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-md">
                    Ver Proyectos
                </button>
            </div>

            <button className="border bg-blue-500 text-white px-6 py-3 rounded">
                Contactame
            </button>
        </section>
    );
}