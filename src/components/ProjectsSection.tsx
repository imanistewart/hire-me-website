import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  impact: string;
  link: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Initiatives I've developed to make a difference in the Brown University community
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <p className="text-gray-600 italic mb-4">{project.impact}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;