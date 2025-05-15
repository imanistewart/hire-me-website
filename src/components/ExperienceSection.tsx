import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface ExperienceSectionProps {
  workExperience: Experience[];
  education: Education[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ workExperience, education }) => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            My professional journey and educational background
          </p>
          <div className="mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-indigo-600" />
              Work Experience
            </h3>
            
            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 border-l-2 border-indigo-200 pb-8 group"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-sm"></div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {job.title}
                  </h4>
                  <div className="flex items-center mt-1 mb-3">
                    <span className="text-indigo-600 font-medium">{job.company}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {job.period}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education
            </h3>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 border-l-2 border-indigo-200 pb-8 group"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-sm"></div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {edu.degree}
                  </h4>
                  <div className="flex items-center mt-1 mb-3">
                    <span className="text-indigo-600 font-medium">{edu.institution}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;