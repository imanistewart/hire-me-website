import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="mt-2 text-gray-400">
            Creating exceptional solutions to analytical problems.
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} {name}. All rights reserved. </p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            {' • '}
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;