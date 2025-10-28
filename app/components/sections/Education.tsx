import { GraduationCap, Award, BookOpen, ExternalLink, Mail } from "lucide-react";

export default function Education() {
  const formations = [
    {
      diplome: "Master en Informatique",
      ecole: "Université de Technologie",
      annee: "2020-2022",
      description: "Spécialisation en développement web et science des données",
      valeur: "Acquisition de compétences avancées en programmation, algorithmique et gestion de projets informatiques",
      lien: "https://example-university.com"
    },
    {
      diplome: "Licence en Informatique",
      ecole: "Institut Supérieur de Technologie",
      annee: "2017-2020",
      description: "Formation générale en informatique et mathématiques appliquées",
      valeur: "Base solide en programmation, bases de données et architecture des systèmes",
      lien: "https://example-institute.com"
    },
    {
      diplome: "Certification AWS Solutions Architect",
      ecole: "Amazon Web Services",
      annee: "2023",
      description: "Architecture de solutions cloud sur AWS",
      valeur: "Expertise en déploiement et gestion d'infrastructures cloud scalables",
      lien: "https://aws.amazon.com"
    },
    {
      diplome: "Certification Data Science",
      ecole: "Coursera - Stanford University",
      annee: "2022",
      description: "Machine Learning et analyse de données",
      valeur: "Maîtrise des techniques d'apprentissage automatique et de visualisation de données",
      lien: "https://coursera.org"
    }
  ];

  return (
    <section id="education" className="relative py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Parcours universitaire / Formation</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {formations.map((formation, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-[#FFAA00] rounded-full p-3 mr-4 shadow-lg">
                      {formation.diplome.includes("Certification") ? (
                        <Award className="w-6 h-6 text-white" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#11101D]">{formation.diplome}</h3>
                      <p className="text-[#FFAA00] font-medium">{formation.ecole}</p>
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
                  <p className="text-gray-700 mb-3 leading-relaxed">{formation.description}</p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 transform transition-all duration-300 hover:bg-gray-100">
                    <div className="flex items-start">
                    <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><BookOpen className="w-6 h-6 text-[#F5F5F5]" /></span>
                      <div>
                        <h4 className="font-semibold text-[#11101D] mb-1">Valeur ajoutée :</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{formation.valeur}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-center text-[#11101D]">Synthèse de mes atouts formation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border border-orange-100 transform transition-all duration-300 hover:shadow-lg">
                <h4 className="text-lg font-semibold mb-4 text-[#11101D] flex items-center">
                  <div className="w-3 h-3 bg-[#FFAA00] rounded-full mr-3"></div>
                  Compétences techniques
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-2">•</span>
                    Programmation multi-langages
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-2">•</span>
                    Architecture de systèmes
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-2">•</span>
                    Gestion de bases de données
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-2">•</span>
                    Développement web fullstack
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border border-orange-100 transform transition-all duration-300 hover:shadow-lg">
                <h4 className="text-lg font-semibold mb-4 text-[#11101D] flex items-center">
                  <div className="w-3 h-3 bg-[#FFAA00] rounded-full mr-3"></div>
                  Compétences transversales
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-2">•</span>
                    Gestion de projet
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-2">•</span>
                    Analyse et résolution de problèmes
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-2">•</span>
                    Communication technique
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-2">•</span>
                    Apprentissage continu
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}