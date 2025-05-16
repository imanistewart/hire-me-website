import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface AwardItem {
  period: string;
  title: string;
  description: string;
  link?: string;
  achievements?: string[];
}

interface InstitutionAwards {
  institution: string;
  awards: AwardItem[];
}

interface AwardsSectionProps {
  awards: InstitutionAwards[];
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => {
  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Awards & Honors</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Recognition of academic excellence and community impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {awards.map((institutionAward, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-indigo-600" />
                {institutionAward.institution}
              </h3>

              <div className="space-y-8">
                {institutionAward.awards.map((award, awardIndex) => (
                  <div
                    key={awardIndex}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <h4 className="text-xl font-semibold text-gray-900">{award.title}</h4>
                      <span className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                        {award.period}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-4">{award.description}</p>

                    {award.achievements && (
                      <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                        {award.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}

                    {award.link && (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                      >
                        Learn More
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;