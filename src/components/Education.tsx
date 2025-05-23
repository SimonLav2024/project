import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface EducationProps {
  onSetActive: () => void;
}

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

const Education = ({ onSetActive }: EducationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.3 });
  const { language } = useLanguage();

  useEffect(() => {
    if (isInView) {
      onSetActive();
    }
  }, [isInView, onSetActive]);

  const sectionTitle = language === 'es' ? 'Educación y Certificaciones' : 'Education & Certifications';
  const sectionDesc = language === 'es'
    ? 'Mi formación académica y certificaciones profesionales que han forjado mi experiencia.'
    : 'My academic background and professional certifications that have shaped my expertise.';

  const education: EducationItem[] = language === 'es'
    ? [
        {
          degree: "Desarrollo de Aplicaciones con Tecnologías Web",
          institution: "Atlántida Formación",
          location: "Granada, España",
          period: " 580 horas | 2024",
          description: "Certificado de Profesionalidad"
        },
        {
          degree: "Grado en Ciencias Políticas y de la Administración",
          institution: "Universidad de Granada",
          location: "Granada, España",
          period: "2020",
          description: ""
        }
      ]
    : [
        {
          degree: "Web Application Development with Web Technologies",
          institution: "Atlántida Formación",
          location: "Granada, Spain",
          period: "580 hours | 2024",
          description: "Professional Certificate"
        },
        {
          degree: "Bachelor's Degree in Political Science and Public Administration",
          institution: "University of Granada",
          location: "Granada, Spain",
          period: "2020",
          description: ""
        }
      ];

  const certifications: CertificationItem[] = language === 'es'
    ? [
        {
          name: "Prácticas de Desarrollo de Bases de Datos",
          issuer: "CyberCordoba",
          date: "80 horas | Febrero 2025"
        },
        {
          name: "Programación con lenguajes de Guión de Páginas Web",
          issuer: "Vertice Training",
          date: "60 horas | Abril 2025",
        },
        {
          name: "Pruebas de Funcionalidades y Optimización de Páginas Web",
          issuer: "Vertice Training",
          date: "60 horas | Mayo 2025",
        }
      ]
    : [
        {
          name: "Database Development Practices",
          issuer: "CyberCordoba",
          date: "80 hours | February 2025"
        },
        {
          name: "Programming with Web Page Scripting Languages",
          issuer: "Vertice Training",
          date: "60 hours | April 2025",
        },
        {
          name: "Web Functionality Testing and Optimization",
          issuer: "Vertice Training",
          date: "60 hours | May 2025",
        }
      ];

  const educationTitle = language === 'es' ? 'Educación' : 'Education';
  const certificationsTitle = language === 'es' ? 'Formacion Complementaria' : 'Additional Training';
  

  return (
    <div 
      ref={ref}
      className="py-24 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{sectionTitle}</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            {sectionDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{educationTitle}</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className="relative bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-blue-600 dark:border-blue-500"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.degree}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{item.institution} | {item.location}</p>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div data-aos="fade-left">
            <div className="flex items-center space-x-3 mb-8">
              <Award className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{certificationsTitle}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{cert.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;