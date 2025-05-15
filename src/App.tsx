import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Mock data (replace with your own)
const yourName = "John Doe";
const yourTitle = "Full Stack Developer";
const yourPhotoUrl = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const yourBio = "I'm a passionate Full Stack Developer with 5+ years of experience crafting beautiful, functional websites and applications. I specialize in React, Node.js, and modern JavaScript frameworks. I believe in clean code, intuitive user experiences, and solving complex problems with elegant solutions. When I'm not coding, you can find me hiking, reading, or experimenting with new technologies.";

const yourSkills = [
  // Technical skills
  { name: "React.js", level: 95, category: "technical" },
  { name: "JavaScript/TypeScript", level: 90, category: "technical" },
  { name: "Node.js", level: 85, category: "technical" },
  { name: "HTML/CSS", level: 90, category: "technical" },
  { name: "SQL & NoSQL", level: 80, category: "technical" },
  { name: "GraphQL", level: 75, category: "technical" },
  // Soft skills
  { name: "Problem Solving", level: 90, category: "soft" },
  { name: "Communication", level: 85, category: "soft" },
  { name: "Teamwork", level: 90, category: "soft" },
  { name: "Time Management", level: 80, category: "soft" },
  { name: "Adaptability", level: 85, category: "soft" },
  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 80, category: "tools" },
  { name: "AWS", level: 75, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "Jest", level: 80, category: "tools" },
];

const yourExperience = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Lead developer for enterprise web applications focusing on React and TypeScript.",
    achievements: [
      "Reduced load times by 40% through code optimization",
      "Mentored 5 junior developers and implemented code review workflows",
      "Introduced Storybook, improving component development efficiency by 30%",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: "Developed full-stack applications using React, Node.js, and MongoDB.",
    achievements: [
      "Built and launched 3 major client projects ahead of schedule",
      "Implemented CI/CD pipelines that reduced deployment time by 50%",
      "Designed and implemented RESTful APIs serving 10K+ daily users",
    ],
  },
  {
    title: "Web Developer",
    company: "Creative Agency",
    period: "2016 - 2018",
    description: "Created responsive websites for clients across various industries.",
    achievements: [
      "Developed 20+ client websites with modern, responsive designs",
      "Increased mobile conversion rates by 25% through UI/UX improvements",
      "Integrated payment systems and e-commerce functionality",
    ],
  },
];

const yourEducation = [
  {
    degree: "Master of Computer Science",
    institution: "Tech University",
    period: "2014 - 2016",
    description: "Specialized in Software Engineering with a focus on web technologies and distributed systems.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "State College",
    period: "2010 - 2014",
    description: "Graduated with honors. Relevant coursework included database design, algorithms, and web development.",
  },
];

const yourContactInfo = {
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
};

function App() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <HeroSection name={yourName} title={yourTitle} photoUrl={yourPhotoUrl} />
      <AboutSection bio={yourBio} />
      <SkillsSection skills={yourSkills} />
      <ExperienceSection workExperience={yourExperience} education={yourEducation} />
      <ContactSection contactInfo={yourContactInfo} />
      <Footer name={yourName} />
    </div>
  );
}

export default App;