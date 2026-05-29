"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-8 border-t border-white/10 bg-black/50 backdrop-blur-md mt-20">
            <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-gray-500 text-sm font-medium">
                    © {currentYear} Marcos. Todos los derechos reservados.
                </p>
                <p className="text-gray-600 text-xs tracking-widest uppercase">
                    El Salvador
                </p>
            </div>

            {/* LinkedIn u otra red */}
            <div className="mt-12 flex gap-8 flex-wrap justify-center">
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">LinkedIn</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">Instagram</a>
            </div>
        </footer>
    );
}