import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => {
  return (
    <section id="contact\" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Interested in working together? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Mail className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href={`mailto:${contactInfo.email}`} className="hover:text-indigo-600 transition-colors duration-300">
                  {contactInfo.email}
                </a>
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Phone className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href={`tel:${contactInfo.phone}`} className="hover:text-indigo-600 transition-colors duration-300">
                  {contactInfo.phone}
                </a>
              </p>
            </div>

            {contactInfo.linkedin && (
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Linkedin className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-gray-600">
                  <a 
                    href={contactInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-indigo-600 transition-colors duration-300">
                    View Profile
                  </a>
                </p>
              </div>
            )}
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <MapPin className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">{contactInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;