import React from 'react';
import { Award } from 'lucide-react';

interface Certification {
  title: string;
  organization: string;
  dateGranted: string;
  status: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Industry-recognized credentials that validate my expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 mb-6 last:mb-0 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-700 mb-2">{cert.organization}</p>
                  <div className="flex flex-wrap gap-4">
                    <span className="text-sm text-gray-600">
                      Granted: {cert.dateGranted}
                    </span>
                    <span className="text-sm font-medium text-green-600">
                      Status: {cert.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;