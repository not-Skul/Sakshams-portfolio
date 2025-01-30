import { Code, Database, Globe, Terminal,BrainCircuit } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      items: ["JavaScript", "Python", "Java"]
    },
    {
      category: "Web Technologies",
      icon: <Globe className="h-6 w-6" />,
      items: ["React", "HTML5", "CSS3", "Node.js"]
    },
    {
      category: "Databases",
      icon: <Database className="h-6 w-6" />,
      items: ["MongoDB", "PostgreSQL"]
    },
    {
      category: "Tools & Others",
      icon: <Terminal className="h-6 w-6" />,
      items: ["Git", "Docker", "Linux", "VS Code"]
    },
    {
      category: "AI & ML",
      icon: <BrainCircuit className="h-6 w-6" />,
      items: ["TensorFlow", "Scikit-learn"]
    }
    
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4 text-indigo-600">
                {skill.icon}
                <h3 className="ml-2 text-xl font-semibold text-gray-800">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;