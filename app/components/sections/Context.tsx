import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import blurData from "@/public/img/blur-data.json";

export default function Context() {
  return (
    <section id="context" className="relative py-20 -mt-16"
    >
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/img/1.png"
          alt="Background"
          fill
          placeholder="blur"
          priority
          blurDataURL={blurData["1.png"]}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contexte et enjeux</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
              <Target className="w-5 h-5 mr-2 text-[#FFAA00]" />
              Types de projets qui m'intéressent
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Applications web modernes et performantes</li>
              <li>• Solutions d'analyse de données et d'IA</li>
              <li>• Plateformes e-commerce innovantes</li>
              <li>• Systèmes de gestion de données complexes</li>
              <li>• Applications mobiles cross-platform</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-[#FFAA00]" />
              Problèmes que je résous
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Optimisation des performances web</li>
              <li>• Extraction d'insights à partir de données</li>
              <li>• Automatisation de processus métier</li>
              <li>• Amélioration de l'expérience utilisateur</li>
              <li>• Intégration de systèmes complexes</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#11101D] text-white rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-[#FFAA00]" />
            Secteurs d'activité
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#FFAA00]">Technologie</h4>
              <p className="text-gray-300">Développement d'applications, solutions SaaS, plateformes digitales</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#FFAA00]">E-commerce</h4>
              <p className="text-gray-300">Solutions de vente en ligne, optimisation des conversions, analytics</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#FFAA00]">Data & Analytics</h4>
              <p className="text-gray-300">Business intelligence, machine learning, visualisation de données</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#FFAA00] to-[#FFB84D] text-[#11101D] rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Users className="w-6 h-6 mr-3" />
            Mes objectifs professionnels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3">Court terme</h4>
              <ul className="space-y-1">
                <li>• Contribuer à des projets innovants</li>
                <li>• Développer mes compétences en IA/ML</li>
                <li>• Améliorer l'expérience utilisateur</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Long terme</h4>
              <ul className="space-y-1">
                <li>• Devenir expert technique senior</li>
                <li>• Diriger des équipes de développement</li>
                <li>• Créer des solutions d'impact</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg">
            <p className="text-lg font-semibold text-center">
              "Développeur fullstack passionné par l'innovation technologique et l'excellence technique"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
