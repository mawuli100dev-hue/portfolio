import {
  BookOpen,
  Lightbulb,
  Award,
  Globe,
  Users,
  Target,
  Zap,
  TrendingUp,
} from "lucide-react";

export default function Resources() {
  const personalStrengths = [
    {
      title: "Apprentissage continu",
      description:
        "Curiosité intellectuelle et volonté constante d'amélioration",
      icon: BookOpen,
      examples: [
        "Formation quotidienne sur des plateformes comme Youtube et Udemy",
        "Veille technologique sur les frameworks et outils émergents",
        "Expérimentation régulière sur des projets personnels innovants",
      ],
    },
    {
      title: "Résolution de problèmes",
      description: "Approche méthodique et créative face aux défis techniques",
      icon: Lightbulb,
      examples: [
        "Analyse systématique avec debugging et recherche documentée",
        "Prototypage rapide pour tester différentes solutions",
        "Optimisation itérative basée sur les retours et métriques",
      ],
    },
    {
      title: "Collaboration",
      description: "Communication efficace et esprit d'équipe dans les projets",
      icon: Users,
      examples: [
        "Contributions actives via Git avec commits clairs et documentés",
        "Participation aux revues de code et rétrospectives d'équipe",
        "Partage régulier des apprentissages et bonnes pratiques",
      ],
    },
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">
          Synthèse de mes autres ressources
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Points forts personnels */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#11101D] flex items-center justify-center">
              <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                <Award className="w-6 h-6 text-[#F5F5F5]" />
              </span>
              Mes atouts personnels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {personalStrengths.map((strength, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                      <strength.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#11101D]">
                        {strength.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {strength.examples.map((example, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-[#FFAA00] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophie de travail */}
          <div className="bg-gradient-to-br from-[#11101D] to-[#1a1835] rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white flex items-center justify-center">
              <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                <Globe className="w-6 h-6 text-[#F5F5F5]" />
              </span>
              Ma philosophie de travail
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#FFAA00] flex items-center">
                  <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                    <TrendingUp className="w-6 h-6 text-[#F5F5F5]" />
                  </span>
                  Valeurs professionnelles
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Excellence technique et qualité du code
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Collaboration et partage de connaissances
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Innovation et adoption de nouvelles technologies
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Impact positif sur les utilisateurs et l'entreprise
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#FFAA00] flex items-center">
                  <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                    <Target className="w-6 h-6 text-[#F5F5F5]" />
                  </span>
                  Approche de travail
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Méthode agile et itérative
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Tests et qualité dès le début
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Documentation et maintenabilité
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Apprentissage continu et veille technologique
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-lg italic text-center text-white leading-relaxed">
                "Je crois que la technologie doit servir l'humain. Mon objectif
                est de créer des solutions qui améliorent la vie des
                utilisateurs tout en respectant les meilleures pratiques
                techniques."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
