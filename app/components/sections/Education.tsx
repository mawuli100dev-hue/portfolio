import {
  GraduationCap,
  Award,
  BookOpen,
  ExternalLink,
  Mail,
  Lightbulb,
  TrendingUp,
  Code,
  Brain,
} from "lucide-react";

export default function Education() {
  const formations = [
    {
      diplome: "BUT en Science des Données",
      ecole: "Université Perpignan Via Domitia - Campus de Carcassonne",
      annee: "2025-...",
      description:
        "Formation spécialisée en intelligence artificielle, machine learning et analyse de données avancées. Acquisition d'expertise en traitement de données massives et développement de solutions data-driven.",
      valeur:
        "Maîtrise des algorithmes d'IA, deep learning, data mining et visualisation de données. Capacité à concevoir des systèmes intelligents pour résoudre des problèmes complexes.",
      lien: "https://formations.univ-perp.fr/diplome/but/but-science-des-donnees",
    },
    {
      diplome: "Licence Professionnelle en Génie Logiciel",
      ecole: "Ecole Polytechnique de Lomé",
      annee: "2022-2025",
      description:
        "Formation complète en développement logiciel, architecture des systèmes et ingénierie informatique. Approche pratique des méthodologies de développement modernes.",
      valeur:
        "Expertise en développement fullstack, bases de données relationnelles, APIs REST et architectures microservices. Solide foundation en algorithmique et bonnes pratiques de code.",
      lien: "https://univ-lome.tg/",
    },
    {
      diplome: "Certification Goethe-Zertifikat B2",
      ecole: "Goethe Institut",
      annee: "2025",
      description:
        "Certification attestant d'un niveau intermédiaire avancé en allemand, permettant une communication fluide dans des contextes professionnels et académiques.",
      valeur:
        "Compétence linguistique stratégique pour collaborer dans des environnements internationaux et accéder à des opportunités en Europe germanophone.",
      lien: "https://www.goethe.de/en/index.html",
    },
  ];

  return (
    <section id="education" className="relative py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">
          Parcours Académique & Formation Continue
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {formations.map((formation, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                      {formation.diplome.includes("Certification") ? (
                        <Award className="w-6 h-6 text-white" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#11101D]">
                        {formation.diplome}
                      </h3>
                      <p className="text-[#FFAA00] font-medium">
                        {formation.ecole}
                      </p>
                      <p className="text-gray-600 text-sm">{formation.annee}</p>
                    </div>
                  </div>
                  <a
                    href={formation.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFAA00] hover:text-[#11101D] transition-colors duration-200 transform hover:scale-110"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    {formation.description}
                  </p>
                  <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 border border-orange-100 transform transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start">
                      <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                        <BookOpen className="w-6 h-6 text-[#F5F5F5]" />
                      </span>
                      <div>
                        <h4 className="font-semibold text-[#11101D] mb-1">
                          Apprentissages clés :
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {formation.valeur}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* NOUVELLE SYNTHÈSE AMÉLIORÉE */}
          <div className="mt-12 bg-white rounded-lg shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#11101D] flex items-center justify-center">
              <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                <Brain className="w-6 h-6 text-[#F5F5F5]" />
              </span>
              Ma double compétence unique
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-100 transform transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-full p-3 mr-4 shadow-lg border border-blue-200">
                    <Code className="w-6 h-6 text-blue-600" />
                  </span>
                  <h4 className="text-lg font-semibold text-blue-600">
                    Expertise Génie Logiciel
                  </h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Architecture logicielle scalable et maintenable
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Développement fullstack (frontend + backend)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Conception d'APIs RESTful et microservices
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Gestion de bases de données et optimisation
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 border border-purple-100 transform transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-full p-3 mr-4 shadow-lg border border-purple-200">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </span>
                  <h4 className="text-lg font-semibold text-purple-600">
                    Spécialisation Data Science
                  </h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Machine Learning et Deep Learning avancé
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Analyse prédictive et exploration de données
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Data mining et feature engineering
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Visualisation de données et business intelligence
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#11101D] to-[#1a1835] rounded-lg p-6 text-white">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                  <Lightbulb className="w-6 h-6 text-[#F5F5F5]" />
                </span>
                <h4 className="text-lg font-semibold text-white">
                  Mon avantage différenciant
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Cette double compétence me permet de{" "}
                <span className="text-[#FFAA00] font-semibold">
                  concevoir des solutions complètes
                </span>{" "}
                qui vont de la collecte des données à l'interface utilisateur.
                Je comprends autant les enjeux techniques du développement que
                les défis analytiques de la data science, créant ainsi des
                systèmes cohérents et performants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
