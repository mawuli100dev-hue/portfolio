import {
  Target,
  Calendar,
  Users,
  Award,
  TrendingUp,
  Brain,
  Zap,
  BarChart3,
  DollarSign,
  Mail,
} from "lucide-react";
import React from "react";

// Jeu de données unique pour toutes les réalisations
export const achievementsData = [
  {
    id: 1,
    title: "Plateforme E-commerce High-Performance",
    icon: <Zap className="w-6 h-6" />,
    contexte:
      "Développement d'une plateforme e-commerce pour une entreprise de 500+ employés, nécessitant une architecture scalable pour supporter 100k+ utilisateurs simultanés et traiter plus de 10k commandes par jour.",
    enjeuxEconomiques: [
      "Augmentation du chiffre d'affaires de 40%",
      "Réduction des coûts opérationnels de 25%",
      "Amélioration de l'expérience client",
    ],
    objectifs: [
      "Créer une plateforme e-commerce moderne et performante",
      "Intégrer un système de paiement sécurisé",
      "Optimiser les performances pour 100k+ utilisateurs",
      "Mettre en place un système de gestion des stocks en temps réel",
      "Développer une interface d'administration complète",
    ],
    phases: [
      {
        nom: "Architecture",
        duree: "2 mois",
        budget: "50k€",
        couleur: "blue",
        taches: [
          "Conception de l'architecture microservices",
          "Mise en place de l'infrastructure cloud AWS",
          "Configuration des bases de données PostgreSQL et Redis",
        ],
      },
      {
        nom: "Développement",
        duree: "4 mois",
        budget: "120k€",
        couleur: "green",
        taches: [
          "Développement frontend avec React/TypeScript",
          "API REST avec Node.js et Express",
          "Intégration Stripe pour les paiements",
        ],
      },
      {
        nom: "Optimisation",
        duree: "1 mois",
        budget: "30k€",
        couleur: "purple",
        taches: [
          "Optimisation des performances (CDN, cache)",
          "Tests de charge et sécurité",
          "Formation des équipes",
        ],
      },
      {
        nom: "Déploiement",
        duree: "2 semaines",
        budget: "15k€",
        couleur: "orange",
        taches: [
          "Déploiement en production",
          "Migration des données existantes",
          "Monitoring et support",
        ],
      },
    ],
    resultats: {
      performance: [
        "Temps de chargement : 1.2s (vs 4.5s avant)",
        "99.9% de disponibilité",
        "Support de 150k utilisateurs simultanés",
      ],
      business: [
        "+45% de conversions",
        "+60% de revenus en ligne",
        "-30% de coûts d'infrastructure",
      ],
      technique: [
        "Architecture microservices scalable",
        "CI/CD automatisé",
        "Monitoring en temps réel",
      ],
    },
    impacts: {
      quantifies: [
        "ROI de 300% en 12 mois",
        "Économies de 200k€/an",
        "+2M€ de CA supplémentaire",
      ],
      reconnaissance: [
        "Prix 'Innovation Digitale' 2023",
        "Référence client pour 5 nouveaux projets",
        "Promotion au poste de Lead Developer",
      ],
    },
    duree: "7 mois (Janvier - Juillet 2023)",
    budgetTotal: "215k€",
    contact: {
      nom: "Jean Dupont",
      poste: "Directeur Technique",
      email: "j.dupont@techcorp.com",
      telephone: "+33 1 23 45 67 89",
      recommandation:
        "Hénoc a livré un projet exceptionnel qui a transformé notre business. Son expertise technique et sa gestion de projet sont remarquables.",
    },
  },
  {
    id: 2,
    title: "Système d'IA Prédictive pour l'Optimisation des Ventes",
    icon: <Brain className="w-6 h-6" />,
    contexte:
      "Développement d'un système d'intelligence artificielle pour prédire les tendances de vente et optimiser les stratégies marketing d'une entreprise retail avec 200+ points de vente et un chiffre d'affaires de 50M€.",
    enjeuxEconomiques: [
      "Optimisation des stocks (-30% de surstockage)",
      "Augmentation des ventes (+25% de CA)",
      "Réduction des coûts marketing (-40%)",
    ],
    objectifs: [
      "Créer un modèle prédictif de 90%+ de précision",
      "Analyser 5+ années de données historiques",
      "Développer une interface de visualisation intuitive",
      "Intégrer le système aux outils existants",
      "Former les équipes à l'utilisation",
    ],
    phases: [
      {
        nom: "Analyse des données",
        duree: "1.5 mois",
        budget: "25k€",
        couleur: "blue",
        taches: [
          "Collecte et nettoyage de 10M+ enregistrements",
          "Analyse exploratoire des données (EDA)",
          "Identification des patterns et corrélations",
        ],
      },
      {
        nom: "Développement ML",
        duree: "2.5 mois",
        budget: "60k€",
        couleur: "green",
        taches: [
          "Tests de 15+ algorithmes (Random Forest, XGBoost, LSTM)",
          "Feature engineering avancé",
          "Validation croisée et optimisation hyperparamètres",
        ],
      },
      {
        nom: "Interface utilisateur",
        duree: "1 mois",
        budget: "30k€",
        couleur: "purple",
        taches: [
          "Dashboard interactif avec React et D3.js",
          "API REST pour l'intégration",
          "Tests utilisateurs et itérations",
        ],
      },
      {
        nom: "Déploiement",
        duree: "2 semaines",
        budget: "15k€",
        couleur: "orange",
        taches: [
          "Mise en production sur AWS",
          "Formation des équipes (40 personnes)",
          "Monitoring et maintenance",
        ],
      },
    ],
    resultats: {
      performance: [
        "Précision du modèle : 94.2%",
        "Temps de prédiction : < 100ms",
        "Prédictions quotidiennes : 50k+",
      ],
      business: [
        "+28% de précision des prévisions",
        "-35% de gaspillage de stock",
        "+22% d'efficacité marketing",
      ],
      technique: [
        "Premier système IA de l'entreprise",
        "Architecture scalable et maintenable",
        "Documentation technique complète",
      ],
    },
    impacts: {
      quantifies: [
        "ROI de 450% en 18 mois",
        "Économies de 1.2M€/an",
        "+3.5M€ de CA supplémentaire",
      ],
      reconnaissance: [
        "Publication dans 'Data Science Journal'",
        "Conférence 'AI in Retail' 2023",
        "Promotion au poste de Data Science Lead",
      ],
    },
    duree: "5 mois (Mars - Juillet 2023)",
    budgetTotal: "130k€",
    contact: {
      nom: "Marie Martin",
      poste: "Directeur Data",
      email: "m.martin@datainsights.com",
      telephone: "+33 4 56 78 90 12",
      recommandation:
        "Hénoc a révolutionné notre approche de la data science. Son système d'IA a transformé notre business et nous a donné un avantage concurrentiel majeur.",
    },
  },
];

// Fonctions pour harmoniser les couleurs des icônes
const getIconBgColor = (color: string) => {
  switch (color) {
    case "blue":
      return "from-blue-100 to-blue-50";
    case "green":
      return "from-green-100 to-green-50";
    case "purple":
      return "from-purple-100 to-purple-50";
    case "orange":
      return "from-orange-100 to-orange-50";
    default:
      return "from-gray-100 to-gray-50";
  }
};

const getIconBorderColor = (color: string) => {
  switch (color) {
    case "blue":
      return "border-blue-200";
    case "green":
      return "border-green-200";
    case "purple":
      return "border-purple-200";
    case "orange":
      return "border-orange-200";
    default:
      return "border-gray-200";
  }
};

const getIconTextColor = (color: string) => {
  switch (color) {
    case "blue":
      return "text-blue-600";
    case "green":
      return "text-green-600";
    case "purple":
      return "text-purple-600";
    case "orange":
      return "text-orange-600";
    default:
      return "text-gray-600";
  }
};

// Composant réutilisable
export default function Achievement({
  achievementId,
}: {
  achievementId: number;
}) {
  const achievement = achievementsData.find((a) => a.id === achievementId);

  if (!achievement) {
    return <div>Réalisation non trouvée</div>;
  }

  const colorClasses = {
    blue: {
      bg: "from-blue-50 to-white",
      border: "border-blue-100",
      text: "text-blue-500",
    },
    green: {
      bg: "from-green-50 to-white",
      border: "border-green-100",
      text: "text-green-500",
    },
    purple: {
      bg: "from-purple-50 to-white",
      border: "border-purple-100",
      text: "text-purple-500",
    },
    orange: {
      bg: "from-orange-50 to-white",
      border: "border-orange-100",
      text: "text-orange-500",
    },
  };

  return (
    <section id="achievements" className="relative py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">
          Réalisation {achievement.id} : {achievement.title}
        </h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Cartes Contexte et Objectifs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                {/* Icône LARGE pour titre principal */}
                <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </span>
                Contexte et enjeux
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {achievement.contexte}
              </p>
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 border border-orange-100 transform transition-all duration-300 hover:shadow-lg">
                <h4 className="font-semibold text-[#11101D] mb-2">
                  Enjeux économiques :
                </h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  {achievement.enjeuxEconomiques.map((enjeu, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#FFAA00] mr-2">•</span>
                      {enjeu}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                {/* Icône LARGE pour titre principal */}
                <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                  {React.cloneElement(achievement.icon, {
                    className: "w-6 h-6 text-white",
                  })}
                </span>
                Objectifs de la mission
              </h3>
              <ul className="space-y-3 text-gray-700">
                {achievement.objectifs.map((objectif, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#FFAA00] mr-2">•</span>
                    {objectif}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Carte Déroulement du projet */}
          <div className="bg-white rounded-lg shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-[#11101D] flex items-center">
              {/* Icône MOYENNE pour sous-titre */}
              <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-2 mr-3 shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </span>
              Déroulement du projet
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievement.phases.map((phase, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${
                    colorClasses[phase.couleur as keyof typeof colorClasses].bg
                  } rounded-lg p-4 border ${
                    colorClasses[phase.couleur as keyof typeof colorClasses]
                      .border
                  } transform transition-all duration-300 hover:shadow-lg`}
                >
                  <h4 className="font-semibold text-[#11101D] mb-3 flex items-center">
                    {/* Icône PETITE pour titre de carte */}
                    <span
                      className={`bg-gradient-to-br ${getIconBgColor(
                        phase.couleur
                      )} rounded-full p-2 mr-3 shadow-lg border ${getIconBorderColor(
                        phase.couleur
                      )}`}
                    >
                      <Zap
                        className={`w-4 h-4 ${getIconTextColor(phase.couleur)}`}
                      />
                    </span>
                    {phase.nom}
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {phase.taches.map((tache, idx) => (
                      <li key={idx} className="flex items-start">
                        <span
                          className={`${
                            colorClasses[
                              phase.couleur as keyof typeof colorClasses
                            ].text
                          } mr-2`}
                        >
                          •
                        </span>
                        {tache}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-600 font-semibold">
                      {phase.duree} • {phase.budget}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cartes Résultats */}
          <div className="bg-white rounded-lg shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-[#11101D] flex items-center">
              {/* Icône LARGE pour titre principal */}
              <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </span>
              Résultats obtenus
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Carte Performance - Vert */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-6 border border-green-100 transform transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-3">
                  {/* Icône MOYENNE pour sous-titre de carte */}
                  <span className="bg-gradient-to-br from-green-100 to-green-50 rounded-full p-3 mr-3 shadow-lg border border-green-200">
                    <Zap className="w-4 h-4 text-green-600" />
                  </span>
                  <h4 className="font-semibold text-green-800">Performance</h4>
                </div>
                <ul className="text-sm text-green-700 space-y-2">
                  {achievement.resultats.performance.map((resultat, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {resultat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Carte Business - Bleu */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-100 transform transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-3">
                  {/* Icône MOYENNE pour sous-titre de carte */}
                  <span className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-full p-3 mr-3 shadow-lg border border-blue-200">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                  </span>
                  <h4 className="font-semibold text-blue-800">Business</h4>
                </div>
                <ul className="text-sm text-blue-700 space-y-2">
                  {achievement.resultats.business.map((resultat, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resultat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Carte Technique - Violet */}
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 border border-purple-100 transform transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-3">
                  {/* Icône MOYENNE pour sous-titre de carte */}
                  <span className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-full p-3 mr-3 shadow-lg border border-purple-200">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </span>
                  <h4 className="font-semibold text-purple-800">Technique</h4>
                </div>
                <ul className="text-sm text-purple-700 space-y-2">
                  {achievement.resultats.technique.map((resultat, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      {resultat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Cartes Impacts et Contacts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-[#11101D]">
                Impacts et valeur ajoutée
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h4 className="font-semibold text-[#11101D] mb-2">
                    Impacts quantifiés :
                  </h4>
                  <ul className="text-[#11101D] space-y-2">
                    {achievement.impacts.quantifies.map((impact, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#11101D] mr-2">•</span>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#11101D] mb-2">
                    Reconnaissance :
                  </h4>
                  <ul className="text-[#11101D] space-y-2">
                    {achievement.impacts.reconnaissance.map(
                      (reconnaissance, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#11101D] mr-2">•</span>
                          {reconnaissance}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                {/* Icône LARGE pour titre principal */}
                <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </span>
                Contacts et recommandations
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-[#11101D] mb-2">
                    {achievement.contact.poste} : {achievement.contact.nom}
                  </h4>
                  <p className="text-sm text-gray-700">
                    Email : {achievement.contact.email}
                  </p>
                  <p className="text-sm text-gray-700">
                    Téléphone : {achievement.contact.telephone}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 border border-orange-100">
                  <p className="text-sm text-gray-700 italic leading-relaxed">
                    "{achievement.contact.recommandation}"
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{achievement.duree}</span>
                  <span className="font-semibold">
                    Budget : {achievement.budgetTotal}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
