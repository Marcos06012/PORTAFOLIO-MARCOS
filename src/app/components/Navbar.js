export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-6 bg-black/20 fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10">
            <h1 className="text-xl font-bold tracking-widest text-white">PORTAFOLIO</h1>

            <ul className="flex gap-4 items-center ">
                <li>
                    <a href="#inicio" className="px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-white/10 hover:text-white text-gray-300 hover:py-5">
                        INICIO
                    </a>
                </li>
                <li>
                    <a href="#about" className="px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-white/10 hover:text-white text-gray-300 hover:py-5">
                        SOBRE MI
                    </a>
                </li>
                <li>
                    <a href="#herramientas" className="px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-white/10 hover:text-white text-gray-300 hover:py-5">
                        TECNOLOGÍAS
                    </a>
                </li>
                <li>
                    <a href="#projects" className="px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-white/10 hover:text-white text-gray-300 hover:py-5">
                        PROYECTOS
                    </a>
                </li>
                <li>
                    <a href="#contact" className="px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-white/10 hover:text-white text-gray-300 hover:py-5">
                        CONTACTO
                    </a>
                </li>
            </ul>
        </nav>
    );
}