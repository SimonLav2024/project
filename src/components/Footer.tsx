import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const texts = {
    about: language === 'es'
      ? 'Desarrollador web y diseñador apasionado creando experiencias digitales excepcionales con código limpio y soluciones creativas.'
      : 'A passionate web developer and designer creating exceptional digital experiences with clean code and creative solutions.',
    quickLinks: language === 'es' ? 'Enlaces Rápidos' : 'Quick Links',
    home: language === 'es' ? 'Inicio' : 'Home',
    aboutMe: language === 'es' ? 'Sobre mí' : 'About',
    skills: language === 'es' ? 'Habilidades' : 'Skills',
    projects: language === 'es' ? 'Mis Proyectos' : 'My Projects',
    contact: language === 'es' ? 'Contacto' : 'Contact',
    contactInfo: language === 'es' ? 'Información de Contacto' : 'Contact Info',
    location: language === 'es' ? 'Granada, Granada, España' : 'Granada, Granada, Spain',
    email: language === 'es' ? 'simonlav94@gmail.com' : 'simonlav94@gmail.com',
    phone: language === 'es' ? '+34 656 631 539' : '+34 656 631 539',
    copyright: language === 'es'
      ? `© ${currentYear} Portfolio de Simón Lavdorenko Shyn. Todos los derechos reservados.`
      : `© ${currentYear} Simón Lavdorenko Shyn's Portfolio. All rights reserved.`,
    madeWith: language === 'es'
      ? 'Diseñado y desarrollado por SLS'
      : 'Designed and developed by SLS',
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-bold text-white mb-4 flex items-center">
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              {texts.about}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/SimonLav2024" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 text-gray-400 hover:text-white rounded-full transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/simonlav-shyn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 text-gray-400 hover:text-white rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/simonlav1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 text-gray-400 hover:text-white rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:simonlav94@gmail.com" 
                className="p-2 bg-gray-800 text-gray-400 hover:text-white rounded-full transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{texts.quickLinks}</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">{texts.home}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{texts.aboutMe}</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">{texts.skills}</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">{texts.projects}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{texts.contact}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{texts.contactInfo}</h3>
            <ul className="space-y-3 text-gray-400">
              <li>{texts.location}</li>
              <li>{texts.email}</li>
              <li>{texts.phone}</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>{texts.copyright}</p>
          <p className="mt-2">{texts.madeWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;