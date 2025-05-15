import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  name: string;
  title: string;
  photoUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, title, photoUrl }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-10 right-0 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
              Hi, I'm <span className="text-indigo-300">{name}</span>
            </h1>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-medium text-white/90 animate-fade-in-up animation-delay-300">
              {title}
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-lg mx-auto md:mx-0 animate-fade-in-up animation-delay-600">
              I connect data, compliance, and strategy to create actionable insights that serve people and platforms.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-900">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-800 bg-white hover:bg-gray-100 transition-colors duration-300"
              >
                Hire Me
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in-up animation-delay-1200">
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative overflow-hidden rounded-full border-4 border-white/20 shadow-2xl">
              <img 
                src={photoUrl} 
                alt={name} 
                className="absolute -top-[3px] w-[calc(100%+10px)] h-[calc(100%+8px)] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center animate-bounce">
        <a href="#about" className="inline-block text-white/70 hover:text-white transition-colors duration-300">
          <span className="sr-only">Scroll down</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;