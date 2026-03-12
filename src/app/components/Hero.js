"use client";
import { motion } from 'framer-motion';

export default function Hero() {
    return (

        <div className=" flex items-center justify-center rounded-lg w-full h-screen">
        <section id="inicio" className="text-center scroll-mt-100">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold mb-4"
            >
                Hola, soy Marcos
            </motion.h1>
        </section>
        </div>


    );


}