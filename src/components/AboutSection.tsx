import React from 'react';

interface AboutSectionProps {
  bio: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ bio }) => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent-green mx-auto mb-10 rounded-full"></div>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-dark-brown-light leading-relaxed">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;