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
        }
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
        }
    }
};

// 2. CREAMOS EL CONTEXTO
const LanguageContext = createContext();

// 3. EL PROVEEDOR: Este componente envolverá tu aplicación
export const LanguageProvider = ({ children }) => {
    // Iniciamos en español por defecto
    const [language, setLanguage] = useState('es');

    // 't' será la variable mágica que usaremos en todos lados para sacar el texto
    const t = translations[language];

    // Función para cambiar de idioma
    const toggleLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// 4. UN HOOK PERSONALIZADO: Para no tener que escribir mucho código en cada componente
export const useLanguage = () => useContext(LanguageContext);