import {
  Code,
  Database,
  TrendingUp,
  Palette,
  Cpu,
  Globe,
  Brain,
  Settings,
  FileCode,
  Cog,
  Workflow,
  Cloud,
} from "lucide-react";

export default function Skills() {
  // Données en dur pour les compétences
  const skills = [
    {
      id: 1,
      name: "Compétences Fullstack",
      category: "Développement",
      elements: [
        "Écosystème Next.js & React",
        "Backend Node.js & Nest.js",
        "TypeScript, Java, Python",
        "APIs RESTful & GraphQL",
        "PostgreSQL & MySQL",
        "Docker & Containerisation",
        "Git & GitHub",
        "Déploiement Cloud",
        "Architecture Microservices",
      ],
    },
    {
      id: 2,
      name: "Compétences Data Science",
      category: "Data Science",
      elements: [
        "Algorithmes de Machine Learning",
        "Deep Learning (TensorFlow, Keras)",
        "Analyse de données avec Python/R",
        "Modélisation statistique",
        "Visualisation de données",
        "Feature Engineering",
        "Déploiement de modèles",
        "Traitement de données massives",
        "Data Mining",
      ],
    },
    {
      id: 3,
      name: "Outils & Méthodologies",
      category: "Productivité",
      elements: [
        "CI/CD GitHub Actions",
        "Méthodologie Agile/Scrum",
        "Tests API avec Postman/Rested",
        "Environnement Linux",
        "Utilisation avancée VS Code",
        "Jupyter Notebook",
        "Optimisation des performances",
        "Documentation technique",
      ],
    },
    {
      id: 4,
      name: "Compétences Émergentes",
      category: "En Développement",
      elements: [
        "Streaming Apache Kafka",
        "Architecture Microservices",
        "Technologies Big Data",
        "Développement Cloud Native",
        "Fondamentaux MLOps",
        "Conception de pipelines de données",
        "Bases de la cybersécurité",
        "Intelligence Artificielle appliquée",
      ],
    },
    {
      id: 5,
      name: "Bases de Données",
      category: "Bases de données",
      elements: [
        "PostgreSQL & MySQL",
        "MongoDB (NoSQL)",
        "Conception de schémas",
        "Optimisation de requêtes",
        "ORM (Prisma, TypeORM)",
        "Migration de données",
        "Sécurité des bases de données",
      ],
    },
    {
      id: 6,
      name: "Langages & Technologies",
      category: "Langages",
      elements: [
        "TypeScript/JavaScript",
        "Python/R (Data Science)",
        "Java (Backend)",
        "SQL (Bases de données)",
        "HTML5/CSS3",
        "Bash/Powershell",
      ],
    },
    {
      id: 7,
      name: "Environnement Cloud",
      category: "Cloud",
      elements: [
        "Vercel, Hostinger & Render",
        "Déploiement continu",
        "Gestion de domaines",
        "Services serverless",
        "Monitoring d'applications",
      ],
    },
    {
      id: 8,
      name: "Data Engineering",
      category: "Data Engineering",
      elements: [
        "Processus ETL/ELT",
        "Pipelines de données",
        "Apache Kafka",
        "Data Warehousing",
        "Nettoyage de données",
        "Intégration d'APIs",
        "Qualité des données",
      ],
    },
  ];

  // Fonction pour obtenir l'icône appropriée selon la catégorie
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Développement":
        return <Code className="w-6 h-6 text-white" />;
      case "Data Science":
        return <Brain className="w-6 h-6 text-white" />;
      case "Productivité":
        return <Settings className="w-6 h-6 text-white" />;
      case "En Développement":
        return <TrendingUp className="w-6 h-6 text-white" />;
      case "Bases de données":
        return <Database className="w-6 h-6 text-white" />;
      case "Langages":
        return <FileCode className="w-6 h-6 text-white" />;
      case "Cloud":
        return <Cloud className="w-6 h-6 text-white" />;
      case "Data Engineering":
        return <Workflow className="w-6 h-6 text-white" />;
      default:
        return <Cog className="w-6 h-6 text-white" />;
    }
  };

  // Fonction pour obtenir la couleur de la catégorie
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Développement":
        return {
          bg: "from-blue-50 to-white",
          border: "border-blue-100",
          text: "text-blue-700",
        };
      case "Data Science":
        return {
          bg: "from-purple-50 to-white",
          border: "border-purple-100",
          text: "text-purple-700",
        };
      case "Productivité":
        return {
          bg: "from-green-50 to-white",
          border: "border-green-100",
          text: "text-green-700",
        };
      case "En Développement":
        return {
          bg: "from-orange-50 to-white",
          border: "border-orange-100",
          text: "text-orange-700",
        };
      case "Bases de données":
        return {
          bg: "from-red-50 to-white",
          border: "border-red-100",
          text: "text-red-700",
        };
      case "Langages":
        return {
          bg: "from-indigo-50 to-white",
          border: "border-indigo-100",
          text: "text-indigo-700",
        };
      case "Cloud":
        return {
          bg: "from-cyan-50 to-white",
          border: "border-cyan-100",
          text: "text-cyan-700",
        };
      case "Data Engineering":
        return {
          bg: "from-pink-50 to-white",
          border: "border-pink-100",
          text: "text-pink-700",
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
        </div>
      </div>
    </section>
  );
}
