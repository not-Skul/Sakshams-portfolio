import React from 'react';
import { Mail, MapPin, Phone,Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Mail className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600 text-center">Sakshamkul224@gmail.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Phone className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 text-center">+91 7618468856</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600 text-center">Agra,India</p>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Contact;