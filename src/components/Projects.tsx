import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsProps {
  onSetActive: () => void;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl: string;
}

const Projects = ({ onSetActive }: ProjectsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.3 });
  const [filter, setFilter] = useState<string>('all');
  const { language } = useLanguage();

  useEffect(() => {
    if (isInView) {
      onSetActive();
    }
  }, [isInView, onSetActive]);

  const sectionTitle = language === 'es' ? 'Mis Proyectos' : 'My Projects';
  const sectionDesc = language === 'es'
    ? 'Explora algunos de mis trabajos y proyectos recientes que muestran mis habilidades y experiencia.'
    : 'Explore some of my recent work and projects that showcase my skills and expertise.';

  const projects: Project[] = language === 'es'
    ? [
        {
          title: "Talleres Moyano (E-commerce)",
          description: "Página web diseñada para un posible taller de vehiculos con una plataforma e-commerce integrada totalmente responsiva con filtrado de productos, carrito, etc.",
          image: "https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg",
          tags: ["PHP", "JavaScript", "HTML/CSS", "MySQL", "API", "Frontend", "Backend"],
          repoUrl: "https://github.com/SimonLav2024/taller"
        },
        {
          title: "Portfolio Personal",
          description: "Un portafolio personal para mostrar mis proyectos y habilidades.",
          image: "img/portf.png",
          tags: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Frontend", "Tailwind CSS"],
          repoUrl: "https://github.com/SimonLav2024/project"
        }
      ]
    : [
        {
          title: "Talleres Moyano (E-commerce)",
          description: "Website designed for a potential vehicle workshop with an integrated e-commerce platform, fully responsive with product filtering, cart and more.",
          image: "https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg",
          tags: ["PHP", "JavaScript", "HTML/CSS", "MySQL", "API", "Frontend", "Backend"],
          repoUrl: "https://github.com/SimonLav2024/taller"
        },
        {
          title: "Personal Portfolio",
          description: "A personal portfolio to showcase my projects and skills.",
          image: "img/portf.png",
          tags: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Frontend", "Tailwind CSS"],
          repoUrl: "https://github.com/SimonLav2024/project"
        }
      ];

  const tagTranslations: Record<string, string> = {
    "Frontend": language === 'es' ? "Frontend" : "Frontend",
    "Backend": language === 'es' ? "Backend" : "Backend",
    "React": "React",
    "Node.js": "Node.js",
    "MongoDB": "MongoDB",
    "Tailwind CSS": "Tailwind CSS",
    "Vue.js": "Vue.js",
    "Firebase": "Firebase",
    "D3.js": "D3.js",
    "API": "API",
    "PHP": "PHP",
    "MySQL": "MySQL",
    "JavaScript": "JavaScript",
  };

  const filters = [
    "all", 
    ...Array.from(new Set(projects.flatMap(project => project.tags)))
  ];

  const filterLabel = (item: string) => {
    if (item === "all") return language === 'es' ? "Todos" : "All";
    return tagTranslations[item] || item;
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

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

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filters.map((item, index) => (
            <button
              key={index}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === item
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {filterLabel(item)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tag}
                    </span>
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

export default Projects;