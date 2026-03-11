export default function Hero() {
    return (
        <section className="text-center py-32">
            <h1 className="text-5xl font-bold mb-4">
                Hola, soy Marcos
            </h1>

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