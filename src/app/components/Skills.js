export default function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Git",
        "Node.js",
        "Next.js",
    ];

    return (
        <section className="py-20 text-center">
            <h2 className="text-3xl font-bold mb-10">
                Tecnologías
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="border px-4 py-2 rounded"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section> 
        
    );
}