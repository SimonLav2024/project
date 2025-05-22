import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Code, Layout, Database, Server, Settings, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SkillsProps {
  onSetActive: () => void;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; proficiency: number }[];
}

const Skills = ({ onSetActive }: SkillsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.3 });
  const { language } = useLanguage();

  useEffect(() => {
    if (isInView) {
      onSetActive();
    }
  }, [isInView, onSetActive]);

  const skillCategories: SkillCategory[] = language === 'es'
    ? [
        {
          title: "Desarrollo Frontend",
          icon: <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
          skills: [
            { name: "HTML/CSS", proficiency: 75 },
            { name: "JavaScript/TypeScript", proficiency: 70 },
            { name: "React", proficiency: 60 }
          ]
        },
        {
          title: "Diseño UI/UX",
          icon: <Layout className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
          skills: [
            { name: "Figma", proficiency: 80 },
            { name: "Diseño Responsivo", proficiency: 95 },
            { name: "Prototipado UI", proficiency: 85 }
          ]
        },
        {
          title: "Desarrollo Backend",
          icon: <Server className="h-8 w-8 text-green-600 dark:text-green-400" />,
          skills: [
            { name: "Node.js", proficiency: 65 },
            { name: "Python", proficiency: 65 },
            { name: "PHP", proficiency: 80}
          ]
        },
        {
          title: "Bases de Datos",
          icon: <Database className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
          skills: [
            { name: "MySQL", proficiency: 85 },
            { name: "FireBird", proficiency: 60 },
            { name: "Firebase", proficiency: 50 }
          ]
        },
        {
          title: "DevOps",
          icon: <Settings className="h-8 w-8 text-red-600 dark:text-red-400" />,
          skills: [
            { name: "Git/GitHub", proficiency: 70 },
            { name: "CI/CD", proficiency: 70 },
            { name: "AWS", proficiency: 50 }
          ]
        },
        {
          title: "Herramientas y Otros",
          icon: <Wrench className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />,
          skills: [
            { name: "VS Code", proficiency: 80 },
            { name: "Tailwind CSS", proficiency: 65 },
            { name: "Bootstrap", proficiency: 70 },
            { name: "Postman", proficiency: 70 },
            { name: "Inglés", proficiency: 75 },
            { name: "Ruso", proficiency: 100 }
          ]
        }
      ]
    : [
        {
          title: "Frontend Development",
          icon: <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
          skills: [
            { name: "HTML/CSS", proficiency: 75 },
            { name: "JavaScript/TypeScript", proficiency: 70 },
            { name: "React", proficiency: 60 }
          ]
        },
        {
          title: "UI/UX Design",
          icon: <Layout className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
          skills: [
            { name: "Figma", proficiency: 80 },
            { name: "Responsive Design", proficiency: 95 },
            { name: "UI Prototyping", proficiency: 85 }
          ]
        },
        {
          title: "Backend Development",
          icon: <Server className="h-8 w-8 text-green-600 dark:text-green-400" />,
          skills: [
            { name: "Node.js", proficiency: 65 },
            { name: "Python", proficiency: 65 },
            { name: "PHP", proficiency: 80 }
          ]
        },
        {
          title: "Database",
          icon: <Database className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
          skills: [
            { name: "MySQL", proficiency: 85 },
            { name: "FireBird", proficiency: 60 },
            { name: "Firebase", proficiency: 50 }
          ]
        },
        {
          title: "DevOps",
          icon: <Settings className="h-8 w-8 text-red-600 dark:text-red-400" />,
          skills: [
            { name: "Git/GitHub", proficiency: 70 },
            { name: "CI/CD", proficiency: 70 },
            { name: "AWS", proficiency: 50 }
          ]
        },
        {
          title: "Tools & Others",
          icon: <Wrench className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />,
          skills: [
            { name: "VS Code", proficiency: 80 },
            { name: "Tailwind CSS", proficiency: 65 },
            { name: "Bootstrap", proficiency: 70 },
            { name: "Postman", proficiency: 70 },
            { name: "English", proficiency: 75 },
            { name: "Russian", proficiency: 100 }
          ]
        }
      ];

  const sectionTitle = language === 'es' ? 'Mis Habilidades' : 'My Skills';
  const sectionDesc = language === 'es'
    ? 'Un resumen completo de mis habilidades técnicas y niveles de dominio en diversas tecnologías y herramientas.'
    : 'A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;