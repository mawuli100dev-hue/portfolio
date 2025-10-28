import { Target, Calendar, Users, Award, ExternalLink, TrendingUp, Brain } from "lucide-react";
import Image from "next/image";
import blurData from "@/public/img/blur-data.json";

export default function Achievement2() {
  return (
    <section id="achievement2" className="relative py-20 -mt-16"
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
        <h2 className="text-3xl font-bold mb-8 text-center">Réalisation 2 : Système d'IA Prédictive pour l'Optimisation des Ventes</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                  <Target className="w-5 h-5 mr-2 text-[#FFAA00]" />
                  Contexte et enjeux
                </h3>
                <p className="text-gray-700 mb-4">
                  Développement d'un système d'intelligence artificielle pour prédire les tendances de vente 
                  et optimiser les stratégies marketing d'une entreprise retail avec 200+ points de vente 
                  et un chiffre d'affaires de 50M€.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-[#11101D] mb-2">Enjeux économiques :</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Optimisation des stocks (-30% de surstockage)</li>
                    <li>• Augmentation des ventes (+25% de CA)</li>
                    <li>• Réduction des coûts marketing (-40%)</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-[#FFAA00]" />
                  Objectifs de la mission
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Créer un modèle prédictif de 90%+ de précision</li>
                  <li>• Analyser 5+ années de données historiques</li>
                  <li>• Développer une interface de visualisation intuitive</li>
                  <li>• Intégrer le système aux outils existants</li>
                  <li>• Former les équipes à l'utilisation</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-[#FFAA00]" />
                Déroulement du projet
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#11101D] mb-2">Phase 1 - Analyse des données (1.5 mois)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Collecte et nettoyage de 10M+ enregistrements</li>
                    <li>• Analyse exploratoire des données (EDA)</li>
                    <li>• Identification des patterns et corrélations</li>
                    <li>• Budget : 25k€</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#11101D] mb-2">Phase 2 - Développement ML (2.5 mois)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Tests de 15+ algorithmes (Random Forest, XGBoost, LSTM)</li>
                    <li>• Feature engineering avancé</li>
                    <li>• Validation croisée et optimisation hyperparamètres</li>
                    <li>• Budget : 60k€</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#11101D] mb-2">Phase 3 - Interface utilisateur (1 mois)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Dashboard interactif avec React et D3.js</li>
                    <li>• API REST pour l'intégration</li>
                    <li>• Tests utilisateurs et itérations</li>
                    <li>• Budget : 30k€</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#11101D] mb-2">Phase 4 - Déploiement (2 semaines)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Mise en production sur AWS</li>
                    <li>• Formation des équipes (40 personnes)</li>
                    <li>• Monitoring et maintenance</li>
                    <li>• Budget : 15k€</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                <Award className="w-5 h-5 mr-2 text-[#FFAA00]" />
                Résultats obtenus et preuves tangibles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Performance IA</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Précision du modèle : 94.2%</li>
                    <li>• Temps de prédiction : &lt; 100ms</li>
                    <li>• Prédictions quotidiennes : 50k+</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Impact Business</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• +28% de précision des prévisions</li>
                    <li>• -35% de gaspillage de stock</li>
                    <li>• +22% d'efficacité marketing</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Innovation</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Premier système IA de l'entreprise</li>
                    <li>• Architecture scalable et maintenable</li>
                    <li>• Documentation technique complète</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#11101D]">Impacts et valeur ajoutée</h3>
              <div className="bg-[#FFAA00] text-[#11101D] rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Impacts quantifiés :</h4>
                    <ul className="space-y-1">
                      <li>• ROI de 450% en 18 mois</li>
                      <li>• Économies de 1.2M€/an</li>
                      <li>• +3.5M€ de CA supplémentaire</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Reconnaissance :</h4>
                    <ul className="space-y-1">
                      <li>• Publication dans "Data Science Journal"</li>
                      <li>• Conférence "AI in Retail" 2023</li>
                      <li>• Promotion au poste de Data Science Lead</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#11101D] flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-[#FFAA00]" />
                  Durée et dates
                </h3>
                <p className="text-gray-700">5 mois (Mars - Juillet 2023)</p>
                <p className="text-sm text-gray-600">Budget total : 130k€</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#11101D] flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[#FFAA00]" />
                  Contacts et recommandations
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    <strong>Directeur Data :</strong> Marie Martin<br/>
                    <strong>Email :</strong> m.martin@datainsights.com<br/>
                    <strong>Téléphone :</strong> +33 4 56 78 90 12
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    "Hénoc a révolutionné notre approche de la data science. 
                    Son système d'IA a transformé notre business et nous a donné un avantage concurrentiel majeur."
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
