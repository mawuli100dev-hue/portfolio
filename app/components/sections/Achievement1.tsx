import { Target, Calendar, Users, Award, ExternalLink, TrendingUp } from "lucide-react";
import Image from "next/image";
import blurData from "@/public/img/blur-data.json";

export default function Achievement1() {
  return (
    <section id="achievement1" className="relative py-20 -mt-16"
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
        <h2 className="text-3xl font-bold mb-8 text-center">Réalisation 1 : Plateforme E-commerce High-Performance</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                  <Target className="w-5 h-5 mr-2 text-[#FFAA00]" />
                  Contexte et enjeux
                </h3>
                <p className="text-gray-700 mb-4">
                  Développement d'une plateforme e-commerce pour une entreprise de 500+ employés, 
                  nécessitant une architecture scalable pour supporter 100k+ utilisateurs simultanés 
                  et traiter plus de 10k commandes par jour.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-[#11101D] mb-2">Enjeux économiques :</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Augmentation du chiffre d'affaires de 40%</li>
                    <li>• Réduction des coûts opérationnels de 25%</li>
                    <li>• Amélioration de l'expérience client</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                  <Target className="w-5 h-5 mr-2 text-[#FFAA00]" />
                  Objectifs de la mission
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Créer une plateforme e-commerce moderne et performante</li>
                  <li>• Intégrer un système de paiement sécurisé</li>
                  <li>• Optimiser les performances pour 100k+ utilisateurs</li>
                  <li>• Mettre en place un système de gestion des stocks en temps réel</li>
                  <li>• Développer une interface d'administration complète</li>
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
                  <h4 className="font-semibold text-[#11101D] mb-2">Phase 1 - Architecture (2 mois)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Conception de l'architecture microservices</li>
                    <li>• Mise en place de l'infrastructure cloud AWS</li>
                    <li>• Configuration des bases de données PostgreSQL et Redis</li>
                    <li>• Budget : 50k€</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#11101D] mb-2">Phase 2 - Développement (4 mois)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Développement frontend avec React/TypeScript</li>
                    <li>• API REST avec Node.js et Express</li>
                    <li>• Intégration Stripe pour les paiements</li>
                    <li>• Budget : 120k€</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#11101D] mb-2">Phase 3 - Optimisation (1 mois)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Optimisation des performances (CDN, cache)</li>
                    <li>• Tests de charge et sécurité</li>
                    <li>• Formation des équipes</li>
                    <li>• Budget : 30k€</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#11101D] mb-2">Phase 4 - Déploiement (2 semaines)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Déploiement en production</li>
                    <li>• Migration des données existantes</li>
                    <li>• Monitoring et support</li>
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
                  <h4 className="font-semibold text-green-800 mb-2">Performance</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Temps de chargement : 1.2s (vs 4.5s avant)</li>
                    <li>• 99.9% de disponibilité</li>
                    <li>• Support de 150k utilisateurs simultanés</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Business</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• +45% de conversions</li>
                    <li>• +60% de revenus en ligne</li>
                    <li>• -30% de coûts d'infrastructure</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Technique</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Architecture microservices scalable</li>
                    <li>• CI/CD automatisé</li>
                    <li>• Monitoring en temps réel</li>
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
                      <li>• ROI de 300% en 12 mois</li>
                      <li>• Économies de 200k€/an</li>
                      <li>• +2M€ de CA supplémentaire</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Reconnaissance :</h4>
                    <ul className="space-y-1">
                      <li>• Prix "Innovation Digitale" 2023</li>
                      <li>• Référence client pour 5 nouveaux projets</li>
                      <li>• Promotion au poste de Lead Developer</li>
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
                <p className="text-gray-700">7 mois (Janvier - Juillet 2023)</p>
                <p className="text-sm text-gray-600">Budget total : 215k€</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#11101D] flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[#FFAA00]" />
                  Contacts et recommandations
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    <strong>Directeur Technique :</strong> Jean Dupont<br/>
                    <strong>Email :</strong> j.dupont@techcorp.com<br/>
                    <strong>Téléphone :</strong> +33 1 23 45 67 89
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    "Hénoc a livré un projet exceptionnel qui a transformé notre business. 
                    Son expertise technique et sa gestion de projet sont remarquables."
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
