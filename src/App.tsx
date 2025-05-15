import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Mock data (replace with your own)
const yourName = "Imani Stewart '24.5";
const yourTitle = "Research & Data Analyst";
const yourPhotoUrl = "https://emerald-urban-meadowlark-587.mypinata.cloud/ipfs/bafkreihtlfgvbyaba6p2cssw7k6yldjmdb7sdojrdpuir2ru2rjhn2iopq";

const yourBio = "I'm a multidisciplinary Research & Data Analyst with a passion for translating complex systems into actionable strategies. I specialize in regulatory insights and turning data into decision-ready insights across healthcare, venture capital, and higher education. I believe in clear communication, thoughtful program design, and building infrastructure that empowers both users and organizations. When I’m not improving the efficacy of workflows or supporting innovative and engaging student activities, you’ll find me crocheting, doing home workouts, or hanging out with my cat, Mama.";

export type SkillCategory = "technical" | "soft" | "tools";
export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

const yourSkills: Skill[] = [
  // Technical skills
  { name: "Data Analysis", level: 95, category: "technical" },
  { name: "Mixed-Method Data Collection", level: 95, category: "technical" },
  { name: "User-Centered Research", level: 95, category: "technical" },
  { name: "Healthcare Compliance Frameworks", level: 80, category: "technical" },
  { name: "Financial Modeling", level: 80, category: "technical" },
  { name: "HTML/CSS/JS", level: 80, category: "technical" },
  // Soft skills
  { name: "Verbal & Written Communication", level: 100, category: "soft" },
  { name: "Adaptability & Iterative Mindset", level: 100, category: "soft" },
  { name: "Critical Thinking & Problem-Solving", level: 100, category: "soft" },
  { name: "Presentation", level: 95, category: "soft" }, 
  { name: "Cross-Functional Collaboration", level: 95, category: "soft" }, 
  { name: "Training & Mentorship", level: 95, category: "soft" }, 
  // Tools
  { name: "Adobe Photoshop", level: 100, category: "tools" }, 
  { name: "Google Workspace", level: 95, category: "tools" }, 
  { name: "Microsoft Office Suite", level: 95, category: "tools" }, 
  { name: "Slack", level: 95, category: "tools" }, 
  { name: "Python", level: 80, category: "tools" },
  { name: "Git/GitHub", level: 80, category: "tools" },
];

const yourExperience = [
  {
    title: "Community Engagement Specialist",
    company: "College Year in Athens, Athens, Greece",
    period: "Jun. 2024 - Apr. 2025",
    description: "Renowned study-abroad program fostering academic and cultural exchange between North America and Greece.",
    achievements: [
      "Led the development of student programming and misconduct resolution.",
      "Designed scholarship pipelines, reducing tuition by 40% for underrepresented universities.",
      "Enhanced institutional conduct policies for student accessibility and procedural transparency.",
    ],
  },
  {
    title: "Analyst",
    company: "Van Wickle Ventures, Providence, RI",
    period: "Oct. 2022 - Dec. 2023",
    description: "Student-led venture firm investing in early-stage, Brown community-founded startups across various sectors.",
    achievements: [
      "Sourced, vetted, and presented 4–8 startup founders monthly for VC investment consideration.",
      "Conducted due diligence of startups and managed founder relationships post-pitch.",
      "Developed comprehensive financial models to support pitches and demonstrate growth potential for startup investments.",
    ],
  },
  {
    title: "Compliance Intern",
    company: "MediCircle, Providence, RI",
    period: "Jan. 2022 - May 2022",
    description: "Early-stage, venture-backed Brown student-founded startup focused on oral chemotherapy redistribution.",
    achievements: [
      "Assisted in developing regulatory compliance protocols to align with federal healthcare regulations.",
      "Collaborated with cross-functional teams to identify potential health data risks with web hosting services, proposing actionable solutions.",
      "Transformed complex health information into easily-consumable onboarding materials for pharmacy customers, utilizing data from 40+ states.",
    ],
  },
  {
    title: "Laboratory Technician",
    company: "Steep Hill, Columbia, MD & Harrisburg, PA",
    period: "Sep. 2018 - May 2019",
    description: "A pioneering medical cannabis testing laboratory which provides essential analytics and research services to the industry.",
    achievements: [
      "Maintained comprehensive records of laboratory activities and results, contributing to data transparency and facilitating audits by external agencies.",
      "Enhanced laboratory processes by implementing standardized documentation methods to improve traceability and compliance with industry regulations.",
      "Complied with all safety and quality assurance protocols during laboratory operations to maintain high standards across both facilities.",
    ],
  },
  {
    title: "Extractions Manager",
    company: "Temescal Wellness, Baltimore, MD & Manchester, NH",
    period: "Apr. 2017 - Sep. 2018",
    description: "Cannabis company providing innovative wellness solutions in compliance with local regulations.",
    achievements: [
      "Developed novel standard operating procedure documentation, ensuring regulatory alignment and seamless execution.",
      "Created structured training modules that enabled skill acquisition for extraction technicians, enhancing overall team productivity.",
      "Adapted complex operational models to Maryland's state-specific compliance requirements.",
    ],
  },
  {
    title: "Pharmacy Technician",
    company: "Johns Hopkins Hospital, Baltimore, MD",
    period: "Dec. 2015 - Apr. 2017",
    description: "Leading health care institution recognized for its advanced medical research and high-quality patient care in multiple specialties.",
    achievements: [
      "Conducted HIPAA-compliant medication preparation and distribution, ensuring regulatory compliance in an inpatient hospital setting.",
      "Responsible for the accurate delivery of medication for over 200 pediatric patient rooms, coordinating closely pharmacists and hospital administrators to support continuity of care.",
    ],
  },
];

const yourEducation = [
  {
    degree: "Bachelor of Arts",
    institution: "Brown University",
    period: "2021 - 2024",
    description: "2024 Midyear Completion Orator; 2023-24 Stone Inequality Initiative Fellow; Senior GNSS capstone project on 20th Century Black Female Entrepreneurs of Rhode Island.",
  },
  {
    degree: "Associate of Arts",
    institution: "The Community College of Baltimore County",
    period: "2019 - 2021",
    description: "Phi Theta Kappa Chapter Treasurer; Graduated summa cum laude, 4.0 GPA.",
  },
];

const yourContactInfo = {
  email: "imanistewart@gmail.com",
  phone: "+1 (301) 741-8581",
  location: "Providence, RI",
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