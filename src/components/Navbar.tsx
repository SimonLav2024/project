import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeSection: string;
  language?: string;
  toggleLanguage?: () => void;
}

const Navbar = ({ activeSection, language = 'es', toggleLanguage = () => {} }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = language === 'es'
    ? [
        { id: 'home', label: 'Inicio' },
        { id: 'about', label: 'Sobre mi' },
        { id: 'skills', label: 'Habilidades' },
        { id: 'projects', label: 'Proyectos' },
        { id: 'experience', label: 'Experiencia' },
        { id: 'education', label: 'Educación' },
        { id: 'contact', label: 'Contacto' }
      ]
    : [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' }
      ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center"
          onClick={closeMenu}
        ></a>

        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    activeSection === link.id 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-800 dark:text-gray-300'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Cambiar idioma"
            >
              <span
                className={`text-xs font-semibold uppercase transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-300 group-hover:text-blue-400'
                    : 'text-gray-800 group-hover:text-blue-600'
                }`}
              >
                {language === 'es' ? 'ES' : 'EN'}
              </span>
            </button>
            
            <a 
              href={language === 'es' 
                ? '/cv/Curriculum_Simon_WD.pdf' 
                : '/cv/CV Simon E_WD.pdf'
              }
              className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4" />
              <span>{language === 'es' ? 'Curriculum' : 'Resume'}</span>
            </a>
          </div>
        </nav>
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-amber-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Cambiar idioma"
          >
            <span
              className={`text-xs font-semibold uppercase transition-colors ${
                theme === 'dark'
                  ? 'text-gray-300 group-hover:text-blue-400'
                  : 'text-gray-800 group-hover:text-blue-600'
              }`}
            >
              {language === 'es' ? 'ES' : 'EN'}
            </span>
          </button>
          
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 animate-fadeDown">
          <nav className="container mx-auto px-6 py-6">
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`block py-2 text-base font-medium transition-colors ${
                      activeSection === link.id 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-800 dark:text-gray-300'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a 
                  href={language === 'es' 
                    ? '/cv/Curriculum_Simon_WD.pdf' 
                    : '/cv/CV Simon E_WD.pdf'
                  }
                  className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md transition-colors text-base font-medium w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <Download className="h-5 w-5" />
                  <span>{language === 'es' ? 'Descargar Curriculum' : 'Download Resume'}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;