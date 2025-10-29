import {
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  Shield,
  Brain,
  Rocket,
  Navigation,
  Layers,
} from "lucide-react";

export default function Context() {
  return (
    <section id="context" className="relative py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Contexte et enjeux
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
              <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                <Target className="w-6 h-6 text-[#F5F5F5]" />
              </span>
              Missions qui m'intéressent
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Développement d'applications web modernes
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Contribution à des projets data science et machine learning
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Création d'APIs RESTful et interfaces utilisateur
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Analyse et visualisation de données business
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Optimisation de performances et résolution de bugs
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Projets innovants en intelligence artificielle
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
              <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                <Lightbulb className="w-6 h-6 text-[#F5F5F5]" />
              </span>
              Problèmes que je veux résoudre
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Développer des interfaces utilisateur intuitives et réactives
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Structurer et analyser des données pour en extraire des insights
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Créer des APIs robustes qui connectent efficacement frontend et
                backend
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Nettoyer et préparer des datasets pour l'analyse et le machine
                learning
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Développer des modèles prédictifs pour anticiper les tendances
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Créer des dashboards interactifs pour visualiser les données
                métier
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Automatiser des processus d'analyse de données récurrents
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Optimiser l'expérience utilisateur grâce à un code propre et
                maintenable
              </li>
              <li className="flex items-start">
                <span className="text-[#FFAA00] mr-2">•</span>
                Transformer des concepts techniques en solutions concrètes et
                utilisables
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-8 mb-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 flex items-center text-[#11101D]">
            <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
              <TrendingUp className="w-6 h-6 text-[#F5F5F5]" />
            </span>
            Secteurs qui m'attirent
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 border border-blue-100 transform transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-3">
                <span className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-full p-2 mr-3 shadow-lg border border-blue-200">
                  <Rocket className="w-5 h-5 text-blue-600" />
                </span>
                <h4 className="text-lg font-semibold text-blue-600">
                  Startups & Scale-ups Tech
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Environnements dynamiques où je peux contribuer à des produits
                innovants et apprendre le développement fullstack ou la science
                des données sur des cas concrets.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-4 border border-red-100 transform transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-3">
                <span className="bg-gradient-to-br from-red-100 to-red-50 rounded-full p-2 mr-3 shadow-lg border border-red-200">
                  <Shield className="w-5 h-5 text-red-600" />
                </span>
                <h4 className="text-lg font-semibold text-red-600">
                  Cybersécurité & Data Protection
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Développement de solutions de sécurité utilisant l'IA pour
                détecter les menaces et protéger les données sensibles.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-4 border border-purple-100 transform transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-3">
                <span className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-full p-2 mr-3 shadow-lg border border-purple-200">
                  <Brain className="w-5 h-5 text-purple-600" />
                </span>
                <h4 className="text-lg font-semibold text-purple-600">
                  IA Appliquée & Data Science
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Entreprises qui utilisent le machine learning pour résoudre des
                problèmes complexes et créer de l'intelligence à partir des
                données.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 flex items-center text-[#11101D]">
            <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
              <Target className="w-6 h-6 text-[#F5F5F5]" />
            </span>
            Mon parcours ambitionné
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 border border-blue-100 transform transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-3">
                <span className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-full p-2 mr-3 shadow-lg border border-blue-200">
                  <Layers className="w-5 h-5 text-blue-600" />
                </span>
                <h4 className="text-lg font-semibold text-blue-600">
                  Construction de ma base technique
                </h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-500 mr-2">•</span>
                  Maîtriser le développement fullstack sur divers projets
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-500 mr-2">•</span>
                  Développer des solutions data science et machine learning
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-500 mr-2">•</span>
                  Créer des applications intelligentes et des APIs robustes
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-500 mr-2">•</span>
                  Approfondir mes connaissances en architecture logicielle
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-4 border border-purple-100 transform transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-3">
                <span className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-full p-2 mr-3 shadow-lg border border-purple-200">
                  <Shield className="w-5 h-5 text-purple-600" />
                </span>
                <h4 className="text-lg font-semibold text-purple-600">
                  Spécialisation avancée
                </h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-700">
                  <span className="text-purple-500 mr-2">•</span>
                  Expert en IA appliquée à la cybersécurité
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-purple-500 mr-2">•</span>
                  Développer des systèmes intelligents de détection de menaces
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-purple-500 mr-2">•</span>
                  Contribuer à la protection d'infrastructures critiques
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-purple-500 mr-2">•</span>
                  Travailler sur des enjeux de sécurité à échelle internationale
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-gradient-to-br from-[#11101D] to-[#1a1835] rounded-lg p-6 text-white transform transition-all duration-300 hover:shadow-lg">
            <p className="text-lg font-semibold text-center text-white">
              "Je construis aujourd'hui une base solide en fullstack et data
              science pour me spécialiser demain en cybersécurité intelligente"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
