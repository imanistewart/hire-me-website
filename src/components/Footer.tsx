import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-forest-green-900 text-cream py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold text-cream">{name}</h3>
          <p className="mt-2 text-forest-green-200">
            Creating exceptional solutions to analytical problems.
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-forest-green-700 text-center text-forest-green-200 text-sm">
          <p>© {currentYear} {name}. All rights reserved. </p>
          <p className="mt-2">
            <a href="#" className="hover:text-cream transition-colors duration-300">Privacy Policy</a>
            {' • '}
            <a href="#" className="hover:text-cream transition-colors duration-300">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;