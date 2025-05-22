import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ExperienceProps {
  onSetActive: () => void;
}

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
}

const Experience = ({ onSetActive }: ExperienceProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.3 });
  const { language } = useLanguage();

  useEffect(() => {
    if (isInView) {
      onSetActive();
    }
  }, [isInView, onSetActive]);

  // Textos en ambos idiomas
  const sectionTitle = language === 'es' ? 'Experiencia Profesional' : 'Professional Experience';
  const sectionDesc = language === 'es'
    ? 'Un resumen cronológico de mi trayectoria profesional y logros en mi carrera.'
    : 'A chronological overview of my professional journey and career milestones.';

  const jobs: Job[] = language === 'es'
    ? [
        {
          title: "Desarrollador Junior",
          company: "Autónomo (Independiente)",
          location: "Granada, España",
          period: "Feb 2024 - Presente",
          description: "Desarrollo de proyectos web y aplicaciones para mi mismo y clientes locales.",
          responsibilities: [
            "Construcción y mantenimiento de componentes frontend usando JavaScript puro",
            "Desarrollo de aplicaciones web responsivas y accesibles",
            "Implementación de soluciones de comercio electrónico",
            "Implementación de pruebas unitarias para asegurar la calidad del código"
          ]
        }
      ]
    : [
        {
          title: "Junior Developer",
          company: "Freelance",
          location: "Granada, Spain",
          period: "Feb 2024 - Present",
          description: "Developing web projects and applications for myself and local clients.",
          responsibilities: [
            "Building and maintaining frontend components using pure JavaScript",
            "Developing responsive and accessible web applications",
            "Implementing e-commerce solutions",
            "Implementing unit tests to ensure code quality"
          ]
        }
      ];

  return (
    <div 
      ref={ref}
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{sectionTitle}</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            {sectionDesc}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
          
          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              >
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full">
                    <div className="absolute md:hidden top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
                      <Briefcase className="text-white w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{job.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{job.company} | {job.location}</p>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{job.period}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
                    <ul className="space-y-2">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="hidden md:flex w-1/2 justify-center">
                  <div className="bg-blue-600 dark:bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Briefcase className="text-white w-7 h-7" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;