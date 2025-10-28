import { Target, Calendar, Users, Award, ExternalLink, TrendingUp, Globe } from "lucide-react";
import Image from "next/image";
import blurData from "@/public/img/blur-data.json";

export default function Achievement3() {
  return (
    <section id="achievement3" className="relative py-20 -mt-16"
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
        <h2 className="text-3xl font-bold mb-8 text-center">Réalisation 3 : Application Mobile Cross-Platform avec 500k+ Téléchargements</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                  <Target className="w-5 h-5 mr-2 text-[#FFAA00]" />
                  Contexte et enjeux
                </h3>
                <p className="text-gray-700 mb-4">
                  Développement d'une application mobile de fitness et bien-être pour une startup 
                  en pleine croissance, nécessitant une solution cross-platform performante 
                  et une expérience utilisateur exceptionnelle.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-[#11101D] mb-2">Enjeux économiques :</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Croissance de 300% des utilisateurs actifs</li>
                    <li>• Génération de 2M€ de revenus annuels</li>
                    <li>• Expansion internationale (15 pays)</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-[#FFAA00]" />
                  Objectifs de la mission
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Créer une app native-like sur iOS et Android</li>
                  <li>• Intégrer des capteurs de santé (Apple Health, Google Fit)</li>
                  <li>• Développer un système de gamification</li>
                  <li>• Mettre en place des notifications push intelligentes</li>
                  <li>• Assurer une performance optimale sur tous les appareils</li>
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
                  <h4 className="font-semibold text-[#11101D] mb-2">Phase 1 - Conception UX/UI (1 mois)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Recherche utilisateur et personas</li>
                    <li>• Wireframes et prototypes interactifs</li>
                    <li>• Design system et guidelines</li>
                    <li>• Budget : 20k€</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#11101D] mb-2">Phase 2 - Développement (4 mois)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• React Native avec TypeScript</li>
                    <li>• Intégration APIs de santé</li>
                    <li>• Backend Node.js et MongoDB</li>
                    <li>• Budget : 80k€</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#11101D] mb-2">Phase 3 - Tests et optimisation (1 mois)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Tests sur 20+ appareils différents</li>
                    <li>• Optimisation des performances</li>
                    <li>• Tests de charge et sécurité</li>
                    <li>• Budget : 25k€</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#11101D] mb-2">Phase 4 - Lancement (2 semaines)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Publication sur App Store et Google Play</li>
                    <li>• Campagne de lancement marketing</li>
                    <li>• Support utilisateurs et monitoring</li>
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
                  <h4 className="font-semibold text-green-800 mb-2">Adoption</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 500k+ téléchargements en 6 mois</li>
                    <li>• 4.8/5 étoiles sur les stores</li>
                    <li>• 85% de rétention à 30 jours</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Performance</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Temps de lancement : &lt; 2s</li>
                    <li>• 60fps sur 95% des appareils</li>
                    <li>• Crash rate : &lt; 0.1%</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Business</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• 2M€ de revenus annuels</li>
                    <li>• 40% de conversion freemium</li>
                    <li>• Expansion dans 15 pays</li>
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
                      <li>• ROI de 600% en 12 mois</li>
                      <li>• Valorisation startup : +15M€</li>
                      <li>• +200k utilisateurs actifs mensuels</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Reconnaissance :</h4>
                    <ul className="space-y-1">
                      <li>• "App of the Year" - Tech Awards 2023</li>
                      <li>• Featured par Apple et Google</li>
                      <li>• Levée de fonds de 5M€ facilitée</li>
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
                <p className="text-gray-700">6 mois (Janvier - Juin 2023)</p>
                <p className="text-sm text-gray-600">Budget total : 140k€</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#11101D] flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[#FFAA00]" />
                  Contacts et recommandations
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    <strong>CEO :</strong> Sarah Johnson<br/>
                    <strong>Email :</strong> s.johnson@fitapp.com<br/>
                    <strong>Téléphone :</strong> +33 1 98 76 54 32
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    "Hénoc a créé une application exceptionnelle qui a propulsé notre startup. 
                    Son expertise technique et sa vision produit sont remarquables."
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
