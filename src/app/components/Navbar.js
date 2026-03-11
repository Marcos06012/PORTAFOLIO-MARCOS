export default function Navbar() {
    return (
        <nav className=" flex justify-between items-center p-6">
            <h1 className="text-xl font-bold">Marcos</h1>

            <ul className="flex gap-6">
                <li>INICIO</li>
                <li>SOBRE MI</li>
                <li>PROYECTOS</li>
                <li>CONTACTO</li>
            </ul>
        </nav>
    );
}