import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hi, I'm <br /><span className="text-indigo-600">Saksham Kulshrestha</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Computer Science Student & Aspiring Software Developer
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm passionate about creating elegant solutions to complex problems through code.
              Currently focusing on web development and artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/not-Skul" target="_blank" rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Github className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/in/saksham-kulshrestha-b69339275/" target="_blank" rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="mailto:Sakshamkul224@gmail.com"
                className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
              alt="Coding workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;