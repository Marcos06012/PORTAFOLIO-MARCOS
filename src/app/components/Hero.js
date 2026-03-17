"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const RedesSociales = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com' },
]


export default function Hero() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen">
            <section id="inicio" className="text-center scroll-mt-80 py-70">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100
                    }}
                    className="text-8xl font-bold mb-6 bg-clip-text"
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
                    Estudiante Ingeniería de Desarrollo de Software | Apasionado por la tecnología y el desarrollo web
                </motion.p>


                <motion.div className=" flex items-center justify-center w-full py-9">
                    <a href="https://linkedin.com/in/marcos-alas" target="_blank">
                        <FaLinkedin className="text-4xl text-white hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://github.com/Marcos06012" target="_blank" className="ml-6">
                        <FaGithub className="text-4xl text-white hover:scale-110 transition-transform" />
                    </a>
                </motion.div>



            </section>
        </div>
    );
}