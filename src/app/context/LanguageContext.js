"use client";
import React, { createContext, useState, useContext } from 'react';

// 1. EL DICCIONARIO: Aquí guardamos todos los textos del portafolio
const translations = {
    es: {
        nav: {
            home: "INICIO",
            about: "SOBRE MÍ",
            tech: "TECNOLOGÍAS",
            projects: "PROYECTOS",
            contact: "CONTACTO"
        },
        hero: {
            greeting: "Hola, soy",
            role: "Ingeniero de Software en formación",
            description: "Especializado en crear experiencias web modernas, escalables y centradas en el usuario desde El Salvador.",
            btn: "Ver Proyectos"
        },
        about: {
            title: "Descripción Personal",
            p1: "Soy un desarrollador frontend apasionado por crear experiencias web modernas, intuitivas y visualmente atractivas. Me gusta transformar ideas en interfaces funcionales que ofrezcan una excelente experiencia de usuario.",
            p2: "Trabajo principalmente con HTML, CSS y JavaScript, y estoy ampliando mis conocimientos en tecnologías modernas del ecosistema frontend.",
            p3: "Siempre estoy aprendiendo nuevas herramientas, explorando tendencias del desarrollo web y buscando mejorar mis habilidades para construir productos cada vez mejores."
        },
        tech: {
            title: "Habilidades Técnicas",
            subtitle: "Tecnología"
        },
        projects: {
            title: "Proyectos Destacados",
            demo: "Proyecto"
        },

        contact: {
            title: "Disponible para nuevos proyectos",
            title2: "¿Tienes un proyecto en mente?",
            p1: "Hablemos sobre cómo puedo ayudarte a construir soluciones digitales eficientes y modernas.",
            card1: "Escríbeme",
            card2: "Mira mi código",
            card3: "Escríbeme por WhatsApp"
        },

        cardAboutMe: {
            openToWork: "Disponible para trabajar",
            title: "Desarrollador Web",
            location: "Basado en El Salvador"
        },

        projects: {
            title: "Proyectos Destacados",
            items: [
                {
                    title: "StarFly",
                    tags: ["React", "Tailwind CSS", "Framer Motion"],
                    description: "Plataforma interactiva de reserva de vuelos, hoteles y transporte. Enfocada en una arquitectura UI modular, navegación fluida entre páginas y validaciones estrictas de formularios para una UX impecable.",
                    index: "/01",
                    demo:"https://proyecto-final-diseno-web.vercel.app/",
                    image: "StarFly.png"
                },
                {
                    title: "Gestor de Tareas",
                    tags: ["Next.js", "Node.js", "Express", "REST API"],
                    description: "Aplicación Full-Stack para la gestión de productividad. Implementa una arquitectura cliente-servidor con APIs RESTful optimizadas, control de estados y persistencia de datos en una base de datos centralizada.",
                    index: "/02",
                    demo: "https://gestor-de-tareas-frontend-xi.vercel.app/",
                    image: "GestorDeTareas.png"
                }
            ]
        },

    },
    en: {
        nav: {
            home: "HOME",
            about: "ABOUT ME",
            tech: "SKILLS",
            projects: "PROJECTS",
            contact: "CONTACT"
        },
        hero: {
            greeting: "Hi, I'm",
            role: "Software Engineer in training",
            description: "Specialized in creating modern, scalable, and user-centered web experiences from El Salvador.",
            btn: "View Projects"
        },
        about: {
            title: "About Me",
            p1: "I am a frontend developer passionate about creating modern, intuitive, and visually appealing web experiences. I love transforming ideas into functional interfaces that offer an excellent user experience.",
            p2: "I work mainly with HTML, CSS, and JavaScript, and I am expanding my knowledge in modern technologies within the frontend ecosystem.",
            p3: "I am always learning new tools, exploring web development trends, and seeking to improve my skills to build increasingly better products."
        },
        tech: {
            title: "Technical Skills",
            subtitle: "Technology"
        },
        projects: {
            title: "Featured Projects",
            demo: "Project"
        },

        contact: {
            title: "Available for new projects",
            title2: "Do you have a project in mind?",
            p1: "Let's talk about how I can help you build efficient and modern digital solutions.",
            card1: "Write me",
            card2: "View my code",
            card3: "Write me on WhatsApp"
        },

        cardAboutMe: {
            openToWork: "Available for work",
            title: "Web Developer",
            location: "Based in El Salvador"
        },

        projects: {
            title: "Featured Projects",
            items: [
                {
                    title: "StarFly",
                    tags: ["React", "Tailwind CSS", "Framer Motion"],
                    description: "Interactive flight, hotel, and transport booking platform. Focused on a modular UI architecture, fluid multi-page navigation, and strict form validation for an impeccable UX.",
                    index: "/01",
                    demo:"https://proyecto-final-diseno-web.vercel.app/",
                    image: "StarFly.png"
                },
                {
                    title: "Task Manager",
                    tags: ["Next.js", "Node.js", "Express", "REST API"],
                    description: "Full-Stack application for productivity management. Features a client-server architecture with optimized RESTful APIs, state management, and data persistence in a centralized database.",
                    index: "/02",
                    demo: "https://gestor-de-tareas-frontend-xi.vercel.app/",
                    image: "GestorDeTareas.png"
                }
            ]
        }
    }

};

// 2. CREAMOS EL CONTEXTO
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const t = translations[language];

    const toggleLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);