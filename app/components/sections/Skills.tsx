import { Code, Database, TrendingUp, Palette, Cpu, Globe } from "lucide-react";

export default function Skills() {
  // Données en dur pour les compétences
  const skills = [
    {
      id: 1,
      name: "Frontends",
      category: "Frontends",
      elements: ["Next.js", "Flutter"]
    },
    {
      id: 2,
      name: "Backends", 
      category: "Backends",
      elements: ["Node.js", "Nest.js", "Kafka", "API Rest & GraphQL"]
    },
    {
      id: 3,
      name: "Données/IA",
      category: "Données/IA", 
      elements: ["Machine Learning", "Deep Learning", "Tensorflow", "Keras"]
    },
    {
      id: 4,
      name: "Langages",
      category: "Langages",
      elements: ["TypeScript", "Python", "Java"]
    }
  ];

  // Fonction pour obtenir l'icône appropriée selon la catégorie
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontends":
        return <Palette className="w-6 h-6 text-[#F5F5F5]" />;
      case "Backends":
        return <Code className="w-6 h-6 text-[#F5F5F5]" />;
      case "Données/IA":
        return <Database className="w-6 h-6 text-[#F5F5F5]" />;
      case "Langages":
        return <Cpu className="w-6 h-6 text-[#F5F5F5]" />;
      default:
        return <TrendingUp className="w-6 h-6 text-[#F5F5F5]" />;
    }
  };

  // Fonction pour obtenir la couleur de la catégorie
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Frontends":
        return { bg: "from-blue-50 to-white", border: "border-blue-100", text: "text-blue-700" };
      case "Backends":
        return { bg: "from-green-50 to-white", border: "border-green-100", text: "text-green-700" };
      case "Données/IA":
        return { bg: "from-purple-50 to-white", border: "border-purple-100", text: "text-purple-700" };
      case "Langages":
        return { bg: "from-orange-50 to-white", border: "border-orange-100", text: "text-orange-700" };
      default:
        return { bg: "from-gray-50 to-white", border: "border-gray-100", text: "text-gray-700" };
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">Compétences Techniques</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((skill) => {
              const colorClass = getCategoryColor(skill.category);
              
              return (
                <div
                  key={skill.id}
                  className={`bg-gradient-to-br ${colorClass.bg} rounded-2xl shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border ${colorClass.border}`}
                >
                  {/* En-tête de la carte */}
                  <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
                  <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">{getCategoryIcon(skill.category)}</span>
                      
                    <div>
                      <h3 className="text-xl font-bold text-[#11101D]">{skill.name}</h3>
                      <p className="text-sm text-gray-500 font-medium">{skill.category}</p>
                    </div>
                  </div>

                  {/* Liste des compétences */}
                  <div className="space-y-3">
                    {skill.elements.map((element, index) => (
                      <div 
                        key={index}
                        className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100 transform transition-all duration-200 hover:shadow-md hover:scale-105"
                      >
                        <div className="w-2 h-2 bg-[#FFAA00] rounded-full mr-3"></div>
                        <span className={`font-medium ${colorClass.text}`}>{element}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section de synthèse des compétences */}
          <div className="mt-12 bg-gradient-to-br from-[#11101D] to-[#1a1835] rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-white flex items-center justify-center">
            <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><Globe className="w-6 h-6 text-[#F5F5F5]" /></span>
              Synthèse des Expertises
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-[#FFAA00] mb-2">
                  {skills.filter(skill => skill.category === "Frontends")[0].elements.length}
                </div>
                <p className="text-white text-sm font-medium">Technologies Frontend</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-[#FFAA00] mb-2">
                  {skills.filter(skill => skill.category === "Backends")[0].elements.length}
                </div>
                <p className="text-white text-sm font-medium">Technologies Backend</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-[#FFAA00] mb-2">
                  {skills.filter(skill => skill.category === "Données/IA")[0].elements.length}
                </div>
                <p className="text-white text-sm font-medium">Outils Data & IA</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-[#FFAA00] mb-2">
                  {skills.filter(skill => skill.category === "Langages")[0].elements.length}
                </div>
                <p className="text-white text-sm font-medium">Langages Maîtrisés</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-300 text-sm">
                Polyvalent et passionné par l'innovation technologique
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}