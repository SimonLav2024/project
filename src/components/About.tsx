import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { User, Briefcase, Calendar, Award, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutProps {
  onSetActive: () => void;
}

const About = ({ onSetActive }: AboutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      onSetActive();
    }
  }, [isInView, onSetActive]);

  const { language } = useLanguage();

  const texts = {
    title: language === 'es' ? 'Sobre mí' : 'About Me',
    subtitle: language === 'es'
      ? 'Desarrollador Web & Diseñador UI/UX'
      : 'Web Developer & UI/UX Designer',
    years: language === 'es'
      ? ''
      : '',
    intro1: language === 'es'
      ? ' Soy un apasionado del desarrollo y diseño web tanto en front-end como en back-end. He dedicado muchas horas a aprender y perfeccionar mis habilidades en la creación de experiencias digitales atractivas y funcionales. Mi enfoque combina la experiencia técnica con la resolución creativa de problemas para ofrecer soluciones que no solo se ven bien, sino que también brindan experiencias excepcionales al usuario.'
      : 'I am a passionate web developer and designer with a focus on both front-end and back-end. I have dedicated many hours to learning and improve my skills in creating engaging and functional digital experiences. My approach combines technical expertise with creative problem-solving to deliver solutions that not only look good but also provide exceptional user experiences.',
    intro2: language === 'es'
      ? 'Tengo un marcado enfoque en código limpio, diseño responsivo y optimización de rendimiento, busco construir sitios y aplicaciones que destaquen en el competitivo entorno digital actual no solo por su diseño atractivo sino por su faciliad de cara al usuario. Creo en el aprendizaje continuo y en mantenerme actualizado con las últimas tecnologías y tendencias de diseño y desarrollo web.'
      : "I have a strong focus on clean code, responsive design, and performance optimization. I try to build websites and applications that stand out in today's competitive digital landscape not only for their attractive design but also for their user-friendliness. I believe in continuous learning and staying updated with the latest technologies and trends in web design and development.",
    name: language === 'es' ? 'Nombre:' : 'Name:',
    role: language === 'es' ? 'Rol:' : 'Role:',
    roleValue: language === 'es'
      ? 'Desarrollador Web & Diseñador (Full Stack)'
      : 'Web Developer & Designer (Full Stack)',
    experience: language === 'es' ? 'Experiencia:' : 'Experience:',
    experienceValue: language === 'es' ? '1 año' : '1 Year',
    freelance: language === 'es' ? 'Autónomo (Independiente)' : 'Freelance',
    location: language === 'es' ? 'Ubicación:' : 'Location:',
    locationValue: language === 'es' ? 'Granada, España' : 'Granada, Spain',
    contact: language === 'es' ? 'Contáctame' : 'Contact Me',
    intro: language === 'es'
      ? 'Conoce más sobre mí, mi trayectoria y qué impulsa mi pasión por crear experiencias digitales.'
      : 'Get to know more about me, my background, and what drives my passion for creating digital experiences.'
  };

  return (
    <div 
      ref={ref}
      className="py-24 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{texts.title}</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            {texts.intro}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-2/5" data-aos="fade-right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-600 dark:border-blue-500 rounded-xl"></div>
              <img 
                src="img/foto-m.jpeg" 
                alt="About me" 
                className="rounded-xl shadow-xl w-full h-auto relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-tr from-blue-600 to-cyan-500 p-4 rounded-lg shadow-xl text-white z-20">
                <p className="font-bold">{texts.years}</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{texts.subtitle}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {texts.intro1}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {texts.intro2}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-200">
                  <strong>{texts.name}</strong> Simón Lavdorenko Shyn
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-200">
                  <strong>{texts.role}</strong> {texts.roleValue}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-200">
                  <strong>{texts.experience}</strong> {texts.experienceValue}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-200">
                  <strong>{texts.freelance}</strong>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-200">
                  <strong>{texts.location}</strong> {texts.locationValue}
                </span>
              </div>
            </div>

            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-transform hover:scale-105 inline-block"
            >
              {texts.contact}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;