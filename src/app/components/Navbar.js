export default function Navbar() {
    return (
        <nav className=" flex justify-between items-center p-6 bg-black/20 fixed top-0 w-full z-50 backdrop-blur-md border-b border-black/20">
            <h1 className="text-xl font-bold">BIENVENIDO</h1>

            <ul className="flex gap-6">
                <li>INICIO</li>
                <li>SOBRE MI</li>
                <li>PROYECTOS</li>
                <li>CONTACTO</li>
            </ul>
        </nav>
    );
}