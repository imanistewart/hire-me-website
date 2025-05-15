import React from 'react';

interface Skill {
  name: string;
  level: number; // Used for sorting only
  category: 'technical' | 'soft' | 'tools';
}

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  // Group skills by category
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      acc[skill.category].push(skill);
      return acc;
    },
    { technical: [], soft: [], tools: [] } as Record<string, Skill[]>
  );

  // Sort skills by level (highest first)
  Object.keys(groupedSkills).forEach((category) => {
    groupedSkills[category].sort((a, b) => b.level - a.level);
  });

  const categories = [
    { id: 'technical', name: 'Technical Skills' },
    { id: 'soft', name: 'Soft Skills' },
    { id: 'tools', name: 'Tools & Technologies' }
  ];

  const getSkillLevel = (level: number): string => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Proficient';
    return 'Intermediate';
  };

  return (
    <section id="skills" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-accent-green mx-auto mb-8 rounded-full"></div>
          <p className="text-dark-brown-light text-lg">
            Here are the key skills and technologies I've mastered over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-cream rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-brown mb-6">{category.name}</h3>
                <div className="grid gap-4">
                  {groupedSkills[category.id].map((skill) => (
                    <div 
                      key={skill.name} 
                      className={`p-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105
                        ${skill.level >= 90 ? 'bg-forest-green-50 hover:bg-forest-green-100' : 
                          skill.level >= 80 ? 'bg-accent-green/10 hover:bg-accent-green/20' : // Using accent-green with opacity
                          skill.level >= 70 ? 'bg-warm-beige hover:bg-warm-beige-light' : 
                          'bg-cream/60 hover:bg-warm-beige/60'}`} // Using cream/warm-beige with opacity
                    >
                      <div className="flex items-center justify-between flex-wrap">
                        <span className="text-dark-brown font-medium">{skill.name}</span>
                        <span className={`text-sm font-medium px-3 py-1 rounded-full
                          ${skill.level >= 90 ? 'bg-forest-green-100 text-forest-green-700' : 
                            skill.level >= 80 ? 'bg-accent-green/20 text-accent-green' :
                            skill.level >= 70 ? 'bg-warm-beige-light text-dark-brown-light' : 
                            'bg-warm-beige/60 text-dark-brown-light'}`}>
                          {getSkillLevel(skill.level)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;