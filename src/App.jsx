import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, Globe } from 'lucide-react';

// Traducciones
const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto"
    },
    hero: {
      greeting: "¡Hola! Soy ",
      role: "Ingeniero de Inteligencia Artificial y Científico de Datos"
    },
    about: {
      title: "Sobre mí",
      description: "Soy un ingeniero en inteligencia artificial apasionado por el aprendizaje automático, el deep learning y el desarrollo de soluciones innovadoras en ciencia de datos. Me especializo en crear modelos de machine learning y deep learning que resuelvan problemas complejos y generen un impacto significativo. Me encanta aprender nuevas tecnologías y aplicar mis conocimientos para crear soluciones efectivas que mejoren la toma de decisiones y la eficiencia de los procesos empresariales."
    },
    projects: {
      title: "Proyectos",
      viewMore: "Ver más"
    },
    contact: {
      title: "Contacto"
    },
    footer: {
      rights: "Todos los derechos reservados"
    }
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi! I'm ",
      role: "AI Engineer & Data Scientist"
    },
    about: {
      title: "About me",
      description: "I am an artificial intelligence engineer passionate about machine learning, deep learning, and developing innovative solutions in data science. I specialize in creating machine learning and deep learning models that solve complex problems and generate significant impact. I love learning new technologies and applying my knowledge to create effective solutions that enhance decision-making and process efficiency in businesses."
    },
    projects: {
      title: "Projects",
      viewMore: "View more"
    },
    contact: {
      title: "Contact",
    },
    footer: {
      rights: "All rights reserved"
    }
  }
};

// Componente del Toggle de Tema
const ThemeToggle = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="fixed bottom-4 right-24 p-2 rounded-full bg-gray-800/50 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 z-50"
    >
      <div className="relative w-14 h-7 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-1 transition-colors duration-500">
        <div
          className={`absolute top-1 left-1 w-5 h-5 rounded-full transform transition-transform duration-500 flex items-center justify-center
            ${isDark ? 'translate-x-7 bg-gray-900' : 'translate-x-0 bg-yellow-100'}`}
        >
          {isDark ? (
            <Moon size={12} className="text-white" />
          ) : (
            <Sun size={12} className="text-orange-400" />
          )}
        </div>
      </div>
    </button>
  );
};

// Componente del Toggle de Idioma
const LanguageToggle = ({ language, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="fixed bottom-4 right-6 p-2 rounded-full bg-gray-800/50 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 z-50 text-white flex items-center gap-2"
    >
      <Globe size={20} />
      <span className="text-sm font-medium uppercase">{language}</span>
    </button>
  );
};

// Componente TypewriterText
const TypewriterText = ({ text, speed = 30 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayText(''); // Reinicia el texto cuando cambian las props
    setCurrentIndex(0); // Reinicia el índice cuando cambia `text`
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="font-mono">
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState('en');

  const projects = [
    {
      title: "Desarrollo E-commerce",
      titleEn: "E-commerce Development",
      description: "Plataforma de comercio electrónico con pasarela de pagos y gestión de inventario",
      descriptionEn: "E-commerce platform with payment gateway and inventory management",
      image: "/api/placeholder/400/300",
      link: "/projects/1",
      tags: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "App de Gestión",
      titleEn: "Management App",
      description: "Sistema de gestión empresarial con dashboard analítico",
      descriptionEn: "Business management system with analytical dashboard",
      image: "/api/placeholder/400/300",
      link: "/projects/2",
      tags: ["Vue.js", "Firebase", "Tailwind", "Charts.js"]
    },
    {
      title: "Aplicación Móvil",
      titleEn: "Mobile Application",
      description: "App móvil para seguimiento de ejercicios y nutrición",
      descriptionEn: "Mobile app for exercise and nutrition tracking",
      image: "/api/placeholder/400/300",
      link: "/projects/3",
      tags: ["React Native", "Redux", "Express", "PostgreSQL"]
    },
    {
      title: "Portal Educativo",
      titleEn: "Educational Portal",
      description: "Plataforma de cursos online con sistema de videoconferencias",
      descriptionEn: "Online course platform with video conferencing system",
      image: "/api/placeholder/400/300",
      link: "/projects/4",
      tags: ["Next.js", "TypeScript", "AWS", "Socket.io"]
    }
  ];
 // Primero, agrega este array al inicio del archivo, después de las traducciones
const technologies = [
  {
    name: "React",
    icon: "⚛️",
    color: "bg-blue-500",
    level: 90 // Porcentaje de dominio
  },
  {
    name: "JavaScript",
    icon: "JS",
    color: "bg-yellow-500",
    level: 85
  },
  {
    name: "Node.js",
    icon: "🟢",
    color: "bg-green-600",
    level: 80
  },
  {
    name: "Python",
    icon: "🐍",
    color: "bg-blue-600",
    level: 75
  },
  {
    name: "MongoDB",
    icon: "🍃",
    color: "bg-green-500",
    level: 85
  },
  {
    name: "TypeScript",
    icon: "TS",
    color: "bg-blue-700",
    level: 70
  },
  {
    name: "Firebase",
    icon: "🔥",
    color: "bg-orange-500",
    level: 80
  },
  {
    name: "SQL",
    icon: "📊",
    color: "bg-purple-600",
    level: 85
  }
];

// Modifica el useEffect del idioma (cerca de la línea 280)
useEffect(() => {
  const browserLang = navigator.language.split('-')[0];
  setLanguage('en'); // Siempre iniciará en inglés
}, []);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setShowAbout(rect.top < window.innerHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLanguage = () => setLanguage(lang => lang === 'es' ? 'en' : 'es');

  const t = translations[language];

  const themeClasses = {
    main: isDark 
      ? "bg-dark-gradient"  // Clase para el gradiente oscuro
      : "bg-light-gradient", // Clase para el gradiente claro
    text: isDark ? "text-white" : "text-gray-900",
    textMuted: isDark ? "text-white/80" : "text-gray-600",
    card: isDark 
      ? "bg-white/10 backdrop-blur-lg" 
      : "bg-white/70 backdrop-blur-lg",
    cardHover: isDark 
      ? "hover:bg-white/20" 
      : "hover:bg-white/90",
  };
  

  return (
    <div className={`min-h-screen ${themeClasses.main} transition-colors duration-500`}>
      <ThemeToggle isDark={isDark} toggle={toggleTheme} />
      <LanguageToggle language={language} toggle={toggleLanguage} />

      <nav className={`fixed w-full ${themeClasses.card} shadow-lg z-40`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className={`text-xl font-bold ${themeClasses.text}`}>
              Luis Angel Cordova Gil
            </span>
            
            <button 
              className={`md:hidden ${themeClasses.text}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            <div className="hidden md:flex space-x-8">
              <a href="#about" className={`${themeClasses.textMuted} hover:text-white transition-colors`}>
                {t.nav.about}
              </a>
              <a href="#projects" className={`${themeClasses.textMuted} hover:text-white transition-colors`}>
                {t.nav.projects}
              </a>
              <a href="#contact" className={`${themeClasses.textMuted} hover:text-white transition-colors`}>
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${themeClasses.card} border-t border-white/20`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className={`block px-3 py-2 ${themeClasses.textMuted} hover:text-white ${themeClasses.cardHover}`}>
                {t.nav.about}
              </a>
              <a href="#projects" className={`block px-3 py-2 ${themeClasses.textMuted} hover:text-white ${themeClasses.cardHover}`}>
                {t.nav.projects}
              </a>
              <a href="#contact" className={`block px-3 py-2 ${themeClasses.textMuted} hover:text-white ${themeClasses.cardHover}`}>
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>

{/* Hero Section */}
<section className="pt-32 pb-16 px-4 relative overflow-hidden">
  {/* Elementos decorativos animados de fondo */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-1/2 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
    <div className="absolute -top-1/2 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-1/2 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col items-center justify-center relative z-10">
      {/* Contenedor de la foto con animaciones */}
      <div className="relative w-64 h-64 mb-8">
        {/* Círculos animados alrededor de la foto */}
        <div className="absolute inset-0 rounded-full animate-spin-slow">
          <div className="absolute top-0 left-1/2 w-4 h-4 -ml-2 bg-blue-500 rounded-full blur-sm"></div>
          <div className="absolute bottom-0 left-1/2 w-4 h-4 -ml-2 bg-purple-500 rounded-full blur-sm"></div>
        </div>
        <div className="absolute inset-0 rounded-full animate-spin-slow-reverse">
          <div className="absolute top-1/2 left-0 w-4 h-4 -mt-2 bg-pink-500 rounded-full blur-sm"></div>
          <div className="absolute top-1/2 right-0 w-4 h-4 -mt-2 bg-indigo-500 rounded-full blur-sm"></div>
        </div>

        {/* Marco de la foto con efecto de brillo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-border-pulse p-1">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-50 blur-md animate-border-pulse"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
            <img 
              src={`${import.meta.env.BASE_URL}me.jpg`}
              alt="Mi foto" 
              className="w-full h-full object-cover rounded-full transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Texto */}
      <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${themeClasses.text} text-center`}>
        {t.hero.greeting} 
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
          Luis Angel
        </span>
      </h1>
      <p className={`text-xl ${themeClasses.textMuted} mb-8 animate-fade-in-up`}>
        {t.hero.role}
      </p>
    </div>
  </div>
</section>

<section id="about" className={`py-16 px-4 ${themeClasses.card}`}>  
  <div className="max-w-7xl mx-auto">
    <h2 className={`text-3xl font-bold mb-12 text-center ${themeClasses.text}`}>
      {t.about.title}
    </h2>
    
    {/* Contenedor principal con mayor espacio para el contenido */}
    <div className="flex flex-col items-center gap-12 mt-20">
      {/* Columna derecha - Tecnologías */}
      <div className={`w-full mb-12 flex items-center justify-center text-4xl font-extrabold text-center tracking-wide ${isDark ? 'text-white' : 'text-black'}`}>          <TypewriterText           text={t.about.description}           speed={10}         />       </div>
      <div className="w-full md:w-2/3">
        <h3 className={`text-2xl font-bold mb-8 ${themeClasses.text}`}>
          {language === 'es' ? 'Tecnologías' : 'Technologies'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`${themeClasses.card} relative group p-6 rounded-xl shadow-lg 
                transform transition-all duration-500 hover:-translate-y-2
                hover:shadow-2xl overflow-hidden`}
            >
              {/* Fondo animado */}
              <div className={`absolute inset-0 ${tech.color} opacity-0 group-hover:opacity-10 
                transition-opacity duration-500 transform group-hover:scale-110`}
              ></div>
              
              {/* Contenido */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl transform group-hover:scale-110 
                    transition-transform duration-300">
                    {tech.icon}
                  </span>
                  <span className={`${themeClasses.text} font-medium
                    transform group-hover:scale-105 transition-all duration-300`}>
                    {tech.name}
                  </span>
                </div>
                
                {/* Barra de progreso moderna */}
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className={`${themeClasses.textMuted} text-xs font-semibold inline-block py-1`}>
                        {language === 'es' ? 'Nivel' : 'Skill Level'}
                      </span>
                    </div>
                    <div>
                      <span className={`${themeClasses.textMuted} text-xs font-semibold inline-block`}>
                        {tech.level}%
                      </span>
                    </div>
                  </div>
                  <div className="flex h-2 mb-4 overflow-hidden rounded-full bg-gray-200/20">
                    <div
                      style={{ width: `${tech.level}%` }}
                      className={`${tech.color} shadow-none flex flex-col text-center whitespace-nowrap 
                        text-white justify-center transform scale-x-0 group-hover:scale-x-100 
                        transition-transform duration-700 ease-out origin-left`}
                    ></div>
                  </div>
                  
                  {/* Etiqueta de nivel */}
                  <span className={`${themeClasses.textMuted} text-xs opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 delay-300`}>
                    {tech.level >= 90 ? (language === 'es' ? 'Experto' : 'Expert') :
                     tech.level >= 70 ? (language === 'es' ? 'Avanzado' : 'Advanced') :
                     tech.level >= 40 ? (language === 'es' ? 'Intermedio' : 'Intermediate') :
                     (language === 'es' ? 'Básico' : 'Basic')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>




      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 text-center ${themeClasses.text}`}>
            {t.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`${themeClasses.card} rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={language === 'es' ? project.title : project.titleEn}
                    className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${themeClasses.text}`}>
                    {language === 'es' ? project.title : project.titleEn}
                  </h3>
                  <p className={`${themeClasses.textMuted} mb-4`}>
                    {language === 'es' ? project.description : project.descriptionEn}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-3 py-1 ${themeClasses.card} text-white rounded-full text-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className={`inline-flex items-center ${themeClasses.text} hover:text-purple-300 font-medium group`}
                  >
                    {t.projects.viewMore}
                    <span className="transform transition-transform duration-300 group-hover:translate-x-2 ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={`py-16 ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-200 to-gray-300'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-8 text-center ${themeClasses.text}`}>
            {t.contact.title}
          </h2>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com" 
              className="transform transition-transform hover:scale-110 text-white hover:text-white/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              className="transform transition-transform hover:scale-110 text-white hover:text-white/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:tu@email.com" 
              className="transform transition-transform hover:scale-110 text-white hover:text-white/80"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      <footer className={`${isDark ? 'bg-black/30' : 'bg-gray-200/30'} backdrop-blur-lg ${themeClasses.text} py-8`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Tu Nombre. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}