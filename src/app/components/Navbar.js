export default function Navbar() {
    return (
        <nav className=" flex justify-between items-center p-6 bg-black/20 fixed top-0 w-full z-50 backdrop-blur-md border-b border-black/20">
            <h1 className="text-xl font-bold">BIENVENIDO</h1>

            <ul className="flex gap-6 items-center text-sm font-medium">

                <li>
                    <a href="#inicio">
                        <button className="px-5 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-white">
                        INICIO
                    </button>
                    </a>
                </li>

                <li>
                    <a href="#about">
                    <button className="px-5 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-white">
                        SOBRE MI
                    </button>
                    </a>
                </li>

                <li>
                    <button className="px-5 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-white">
                        PROYECTOS
                    </button>
                </li>

                <li>
                    <button className="px-5 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-white">
                        TECNOLOGÍAS
                    </button>
                </li>

                <li>
                    <button className="px-5 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-white">
                        CONTACTO
                    </button>
                </li>

            </ul>
        </nav>
    );
}