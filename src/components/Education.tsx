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

  // Textos en ambos idiomas
  const sectionTitle = language === 'es' ? 'Educación y Certificaciones' : 'Education & Certifications';
  const sectionDesc = language === 'es'
    ? 'Mi formación académica y certificaciones profesionales que han forjado mi experiencia.'
    : 'My academic background and professional certifications that have shaped my expertise.';

  const education: EducationItem[] = language === 'es'
    ? [
        {
          degree: "Grado en Ciencias Políticas y de la Administración",
          institution: "Universidad de Granada",
          location: "Granada, España",
          period: "2014 - 2019",
          description: ""
        }
      ]
    : [
        {
          degree: "Bachelor's Degree in Political Science and Public Administration",
          institution: "University of Granada",
          location: "Granada, Spain",
          period: "2014 - 2019",
          description: ""
        }
      ];

  const certifications: CertificationItem[] = language === 'es'
    ? [
        {
          name: "Desarrollo Web Full Stack",
          issuer: "Atlántida Formación",
          date: "Junio 2024"
        },
        {
          name: "Programación con lenguaje de guiones",
          issuer: "Vertice Training",
          date: "Abril 2025",
        },
        {
          name: "Pruebas de Funcionalidades y Optimización de Páginas Web",
          issuer: "Vertice Training",
          date: "Mayo 2025",
        }
      ]
    : [
        {
          name: "Full Stack Web Development",
          issuer: "Atlántida Formación",
          date: "June 2024"
        },
        {
          name: "Scripting Language Programming",
          issuer: "Vertice Training",
          date: "April 2025",
        },
        {
          name: "Web Functionality Testing and Optimization",
          issuer: "Vertice Training",
          date: "May 2025",
        }
      ];

  const educationTitle = language === 'es' ? 'Educación' : 'Education';
  const certificationsTitle = language === 'es' ? 'Certificaciones' : 'Certifications';
  

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