import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onSetActive: () => void;
}

const rolesES = [
  "Desarrollador Web",
  "Diseñador UI/UX",
  "Mantenimiento Electrónico"
];
const rolesEN = [
  "Web Developer",
  "UI/UX Designer",
  "Electronic Maintenance"
];

const Hero = ({ onSetActive }: HeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.5 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [prevRoleIndex, setPrevRoleIndex] = useState<number | null>(null);
  const { language } = useLanguage();

  const roles = language === 'es' ? rolesES : rolesEN;

  useEffect(() => {
    if (isInView) {
      onSetActive();
    }
  }, [isInView, onSetActive]);

  useEffect(() => {
    setFadeIn(false);
    const fadeInTimeout = setTimeout(() => setFadeIn(true), 50);
    const fadeOut = setTimeout(() => setFadeIn(false), 2000);
    const nextRole = setTimeout(() => {
      setPrevRoleIndex(roleIndex);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(fadeOut);
      clearTimeout(nextRole);
    };
  }, [roleIndex, roles.length]);

  return (
    <div 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-100 dark:bg-amber-900/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5 text-center md:text-left" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              <span className="block text-gray-600 dark:text-gray-400 text-xl md:text-2xl font-normal mb-2">
                {language === 'es' ? 'Hola, me llamo' : 'Hi, my name is'}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                Simón Lavdorenko Shyn
              </span>
            </h1>
            
            <div className="h-24 md:h-28 flex items-center justify-center md:justify-start relative">
              <p
                key={roleIndex}
                className={`text-2xl md:text-3xl text-amber-600 dark:text-amber-400 font-bold absolute w-full text-center md:text-left transition-opacity duration-500 ${
                  fadeIn ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {roles[roleIndex]}
              </p>
              {prevRoleIndex !== null && !fadeIn && (
                <p
                  key={prevRoleIndex}
                  className="text-2xl md:text-3xl text-amber-600 dark:text-amber-400 font-bold absolute w-full text-center md:text-left opacity-0 transition-opacity duration-500"
                >
                  {roles[prevRoleIndex]}
                </p>
              )}
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0">
              {language === 'es'
                ? 'Creando experiencias web intuitivas y soluciones digitales con pasión por el código limpio y el diseño centrado en el usuario.'
                : 'Crafting intuitive web experiences and digital solutions with a passion for clean code and user-centered design.'}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-medium transition-transform hover:scale-105 w-full sm:w-auto text-center"
              >
                {language === 'es' ? 'Contáctame' : 'Contact Me'}
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg text-lg font-medium transition-transform hover:scale-105 w-full sm:w-auto text-center"
              >
                {language === 'es' ? 'Ver mi trabajo' : 'View My Work'}
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center md:justify-end" data-aos="fade-left">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 animate-rotate-slow"></div>
              <div className="absolute inset-1.5 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <img 
                  src="public/img/yo.png" 
                  alt="Developer profile" 
                  className="rounded-full w-full h-full object-cover object-center mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-sm mb-1">
              {language === 'es' ? 'Desplazar hacia abajo' : 'Scroll Down'}
            </span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;