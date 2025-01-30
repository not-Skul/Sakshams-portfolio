import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">Saksham's PortFolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
              <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;