import {
  User,
  MapPin,
  Calendar,
  Award,
  Lightbulb,
  Sparkles,
  Puzzle,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-20 mt-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Qui suis-je ?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-lg shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-[#11101D]">
                Du code aux données : mon évolution
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ma passion pour la technologie est née très tôt, mais c'est lors
                de ma première année en génie logiciel que j'ai découvert une
                véritable vocation : la data science. Fasciné par un tutoriel
                sur le machine learning, j'ai passé mes trois années de licence
                à approfondir constamment ces concepts, revisitant chaque année
                les fondamentaux avec une soif d'apprentissage insatiable.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Fort de cette base solide en développement logiciel et animé par
                cette passion pour l'intelligence artificielle, j'ai
                naturellement évolué vers le développement fullstack.
                Aujourd'hui en formation data scientist, je combine ces deux
                expertises pour créer des solutions digitales qui transforment
                la complexité des données en opportunités concrètes et
                innovantes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mon approche allie la rigueur technique acquise en génie
                logiciel à la curiosité intellectuelle qui m'anime depuis mes
                premières découvertes en machine learning. Je vois chaque projet
                comme une occasion d'apprendre, d'innover et de repousser les
                limites de ce que la technologie peut accomplir.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
              <h4 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                <User className="w-5 h-5 mr-2 text-[#FFAA00]" />
                Profil professionnel
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-700">
                    Développeur Fullstack junior & Data Scientist en formation
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-700">
                    +3 ans d'apprentissage technologique
                  </span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-700">
                    Expertise technique polyvalente
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
              <h4 className="text-xl font-semibold mb-4 text-[#11101D]">
                Schéma biographique
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#FFAA00] rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    Formation en informatique
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#FFAA00] rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    Développement d'applications web
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#FFAA00] rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    Spécialisation en science des données
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#FFAA00] rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    Projets d'innovation technologique
                  </span>
                </div>
                <div className="bg-gradient-to-br from-[#11101D] to-[#1a1835] rounded-lg p-6 text-white hover:shadow-lg hover:shadow-[#FFAA00]/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg hover:scale-110 transition-transform duration-200">
                      <Puzzle className="w-6 h-6 text-[#F5F5F5]" />
                    </span>
                    <h4 className="text-lg font-semibold text-white">Énigme</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Si l'ingénieur logiciel est plus{" "}
                    <span className="text-[#FFAA00] font-semibold">
                      code et programmation
                    </span>{" "}
                    que le data scientist, et que le data scientist est plus{" "}
                    <span className="text-[#FFAA00] font-semibold">
                      statistiques et analyse
                    </span>{" "}
                    que l'ingénieur logiciel, alors qui suis-je ?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
