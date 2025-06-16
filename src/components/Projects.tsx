import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "QuizFluence",
      description: "A full-stack web application built with Node.js which allows users to create and take quizzes powered by AI.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSagy0QT2o4dh5uEJjPouIEw919aeutKSAJpw&s",
      technologies: ["React", "Node.js", "MongoDB","AI"],
      github: "https://github.com/not-Skul/QuizFluence",
      demo: "#"
    },
    {
      title: "Dtox",
      description: "A website made with react and shadcn to help people find peace in this chaos",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRP7utbrkpAGEV9jTE1MZq6Vy1bDz4KctgQ&s",
      technologies: ["React.js", "Shadcn", "Tailwind CSS"],
      github: "https://github.com/not-Skul/Dtox",
      demo: "https://dtox.vercel.app/"
    },
    {
      title: "Blogify",
      description: "A Fully functional blog website with user management.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
      technologies: ["Python", "Flask","SQL"],
      github: "https://github.com/not-Skul/Blog_website",
      demo: "#"
    },
    {
      title: "Object classification model",
      description: "A model integrated into streamlit website for predicting object in the given image.Based on CIFAR-10 dataset",
      image: "https://www.shutterstock.com/shutterstock/photos/1120314500/display_1500/stock-photo-machine-learning-analytics-identify-person-and-object-technology-artificial-intelligence-concept-1120314500.jpg",
      technologies: ["Machine Learning", "Streamlit","Kaggle"],
      github: "https://github.com/not-Skul/ObjectClassifier",
      demo: "https://cifar10class.streamlit.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
