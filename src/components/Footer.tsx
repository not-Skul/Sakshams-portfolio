import React from 'react';
import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-indigo-400" />
            <span className="text-xl font-bold">Saksham's Portfolio</span>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Saksham Kulshrestha.. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;