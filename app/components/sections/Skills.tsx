import { Code, Database, TrendingUp, Palette, Cpu, Globe } from "lucide-react";

export default function Skills() {
  // Données en dur pour les compétences
  const skills = [
    {
      id: 1,
      name: "Compétences Fullstack Avancées",
      category: "Développement",
      elements: [
        "Next.js & React Ecosystem",
        "Node.js & Nest.js Backend",
        "TypeScript Professional",
        "RESTful & GraphQL APIs",
        "PostgreSQL & MongoDB",
        "Docker & Containerization",
        "Git & GitHub Mastery",
      ],
    },
    {
      id: 2,
      name: "Expertise Data Science",
      category: "Data Science",
      elements: [
        "Machine Learning Algorithms",
        "Deep Learning (TensorFlow, Keras)",
        "Data Analysis with Python",
        "Statistical Modeling",
        "Data Visualization",
        "Feature Engineering",
        "Model Deployment",
      ],
    },
    {
      id: 3,
      name: "Outils & Méthodologies",
      category: "Productivité",
      elements: [
        "GitHub Actions CI/CD",
        "AWS Cloud Services",
        "Agile/Scrum Methodology",
        "Jupyter for Data Analysis",
        "Postman API Testing",
        "Linux Environment",
        "VS Code Advanced Usage",
      ],
    },
    {
      id: 4,
      name: "Compétences Émergentes",
      category: "En Développement",
      elements: [
        "Apache Kafka Streaming",
        "Microservices Architecture",
        "Big Data Technologies",
        "Cloud Native Development",
        "MLOps Fundamentals",
        "Data Pipeline Design",
        "Cybersecurity Basics",
      ],
    },
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
        return {
          bg: "from-blue-50 to-white",
          border: "border-blue-100",
          text: "text-blue-700",
        };
      case "Backends":
        return {
          bg: "from-green-50 to-white",
          border: "border-green-100",
          text: "text-green-700",
        };
      case "Données/IA":
        return {
          bg: "from-purple-50 to-white",
          border: "border-purple-100",
          text: "text-purple-700",
        };
      case "Langages":
        return {
          bg: "from-orange-50 to-white",
          border: "border-orange-100",
          text: "text-orange-700",
        };
      default:
        return {
          bg: "from-gray-50 to-white",
          border: "border-gray-100",
          text: "text-gray-700",
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">
          Compétences Techniques
        </h2>

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
                    <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                      {getCategoryIcon(skill.category)}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-[#11101D]">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">
                        {skill.category}
                      </p>
                    </div>
                  </div>

                  {/* Liste des compétences avec grille adaptative */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {skill.elements.map((element, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100 transform transition-all duration-200 hover:shadow-md hover:scale-105"
                      >
                        <div className="w-2 h-2 bg-[#FFAA00] rounded-full mr-3 flex-shrink-0"></div>
                        <span
                          className={`font-medium ${colorClass.text} text-sm leading-tight`}
                        >
                          {element}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section de synthèse des compétences MAJ */}
          <div className="mt-12 bg-gradient-to-br from-[#11101D] to-[#1a1835] rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center text-white flex items-center justify-center">
              <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                <Globe className="w-6 h-6 text-[#F5F5F5]" />
              </span>
              Vue d'ensemble de mes expertises
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-[#FFAA00] mb-2">
                  {skills.reduce(
                    (total, skill) =>
                      ["Frontends", "Backends", "Cloud", "DevOps"].includes(
                        skill.category
                      )
                        ? total + skill.elements.length
                        : total,
                    0
                  )}
                </div>
                <p className="text-white text-sm font-medium">Développement</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-[#FFAA00] mb-2">
                  {skills.reduce(
                    (total, skill) =>
                      ["Données/IA", "Data Engineering", "Langages"].includes(
                        skill.category
                      )
                        ? total + skill.elements.length
                        : total,
                    0
                  )}
                </div>
                <p className="text-white text-sm font-medium">Data Science</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-[#FFAA00] mb-2">
                  {skills.reduce(
                    (total, skill) => total + skill.elements.length,
                    0
                  )}
                </div>
                <p className="text-white text-sm font-medium">
                  Compétences Total
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-[#FFAA00] mb-2">
                  {skills.length}
                </div>
                <p className="text-white text-sm font-medium">Domaines</p>
              </div>
            </div>

            {/* Nouvelle section de répartition */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4 text-center">
                Répartition par domaine
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    name: "Développement",
                    count: skills.filter((s) =>
                      ["Frontends", "Backends", "Cloud", "DevOps"].includes(
                        s.category
                      )
                    ).length,
                  },
                  {
                    name: "Data Science",
                    count: skills.filter((s) =>
                      ["Données/IA", "Data Engineering"].includes(s.category)
                    ).length,
                  },
                  {
                    name: "Langages",
                    count: skills.filter((s) => s.category === "Langages")
                      .length,
                  },
                  {
                    name: "Bases de données",
                    count: skills.filter(
                      (s) => s.category === "Base de données"
                    ).length,
                  },
                ].map((domain, index) => (
                  <div key={index} className="text-center">
                    <div className="text-white font-bold text-lg mb-1">
                      {domain.count}
                    </div>
                    <div className="text-gray-300 text-xs">{domain.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-300 text-sm">
                Profil fullstack enrichi d'expertise data science - Prêt pour
                les défis technologiques modernes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
