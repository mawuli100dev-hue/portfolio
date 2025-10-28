import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";

export default function Context() {
  return (
    <section id="context" className="relative py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Contexte et enjeux</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
            <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><Target className="w-6 h-6 text-[#F5F5F5]" /></span>
              Types de projets qui m'intéressent
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Applications web modernes et performantes
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Solutions d'analyse de données et d'IA
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Plateformes e-commerce innovantes
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Systèmes de gestion de données complexes
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Applications mobiles cross-platform
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
            <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><Lightbulb className="w-6 h-6 text-[#F5F5F5]" /></span>
              Problèmes que je résous
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Optimisation des performances web
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Extraction d'insights à partir de données
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Automatisation de processus métier
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Amélioration de l'expérience utilisateur
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Intégration de systèmes complexes
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-8 mb-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 flex items-center text-[#11101D]">
          <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><TrendingUp className="w-6 h-6 text-[#F5F5F5]" /></span>
            Secteurs d'activité
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4 transform transition-all duration-300 hover:bg-gray-100">
              <h4 className="text-lg font-semibold mb-3 text-[#FFAA00]">Technologie</h4>
              <p className="text-gray-700">Développement d'applications, solutions SaaS, plateformes digitales</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 transform transition-all duration-300 hover:bg-gray-100">
              <h4 className="text-lg font-semibold mb-3 text-[#FFAA00]">E-commerce</h4>
              <p className="text-gray-700">Solutions de vente en ligne, optimisation des conversions, analytics</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 transform transition-all duration-300 hover:bg-gray-100">
              <h4 className="text-lg font-semibold mb-3 text-[#FFAA00]">Data & Analytics</h4>
              <p className="text-gray-700">Business intelligence, machine learning, visualisation de données</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 flex items-center text-[#11101D]">
          <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><Users className="w-6 h-6 text-[#F5F5F5]" /></span>
            Mes objectifs professionnels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 border border-orange-100">
              <h4 className="text-lg font-semibold mb-3 text-[#11101D]">Court terme</h4>
              <ul className="space-y-1">
                <li className="flex items-start text-gray-700">
                  <span className="text-[#FFAA00] mr-2">•</span>
                  Contribuer à des projets innovants
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-[#FFAA00] mr-2">•</span>
                  Développer mes compétences en IA/ML
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-[#FFAA00] mr-2">•</span>
                  Améliorer l'expérience utilisateur
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 border border-orange-100">
              <h4 className="text-lg font-semibold mb-3 text-[#11101D]">Long terme</h4>
              <ul className="space-y-1">
                <li className="flex items-start text-gray-700">
                  <span className="text-[#FFAA00] mr-2">•</span>
                  Devenir expert technique senior
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-[#FFAA00] mr-2">•</span>
                  Diriger des équipes de développement
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-[#FFAA00] mr-2">•</span>
                  Créer des solutions d'impact
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-[#FFAA00] to-[#FFB84D] rounded-lg transform transition-all duration-300 hover:shadow-lg">
            <p className="text-lg font-semibold text-center text-[#11101D]">
              "Développeur fullstack passionné par l'innovation technologique et l'excellence technique"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}