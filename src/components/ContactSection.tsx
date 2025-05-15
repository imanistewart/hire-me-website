import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => {
  return (
    <section id="contact" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-accent-green mx-auto mb-8 rounded-full"></div>
          <p className="text-dark-brown-light text-lg">
            Interested in working together? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Mail className="w-10 h-10 mx-auto text-accent-green mb-4" />
              <h3 className="text-lg font-semibold text-dark-brown mb-2">Email</h3>
              <p className="text-dark-brown-light">
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent-green transition-colors duration-300">
                  {contactInfo.email}
                </a>
              </p>
            </div>
            
            <div className="bg-cream rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Phone className="w-10 h-10 mx-auto text-accent-green mb-4" />
              <h3 className="text-lg font-semibold text-dark-brown mb-2">Phone</h3>
              <p className="text-dark-brown-light">
                <a href={`tel:${contactInfo.phone}`} className="hover:text-accent-green transition-colors duration-300">
                  {contactInfo.phone}
                </a>
              </p>
            </div>
            
            <div className="bg-cream rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <MapPin className="w-10 h-10 mx-auto text-accent-green mb-4" />
              <h3 className="text-lg font-semibold text-dark-brown mb-2">Location</h3>
              <p className="text-dark-brown-light">{contactInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;