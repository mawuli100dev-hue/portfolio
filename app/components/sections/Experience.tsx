import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  TrendingUp,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      poste: "Tuteur en informatique",
      entreprise: "IUT de Perpignan, Antenne de Carcassonne",
      periode: "Depuis 09/2026",
      lieu: "Carcassonne, France",
      description:
        "Tutorat étudiant en programmation auprès des étudiants de BUT Science des Données",
      valeur:
        "Transmission des bases de la programmation et capacité à vulgariser des notions techniques",
      lien: "https://formations.univ-perp.fr/diplome/but/but-science-des-donnees",
      details: [
        "Accompagnement pédagogique en programmation Python, R et autres langages",
      ],
    },
    {
      poste: "Projets personnels en IA, NLP et télédétection",
      entreprise: "Développement indépendant",
      periode: "08/2026 - 10/2026",
      lieu: "France",
      description:
        "Conception de deux systèmes complémentaires d'analyse du renseignement : God's Eye sur l'imagerie satellite et Spirit Digger sur les textes en sources ouvertes",
      valeur:
        "Une boucle texte / image complète : une alerte textuelle génère une demande d'observation satellite, qui confirme ou infirme l'événement",
      lien: "/achievement/14",
      details: [
        "God's Eye : détection d'objets YOLOv8 sur DOTA et xView (22 classes, mAP50 de 0,583) et suivi spatio-temporel T0 / T1 avec matrice de pondération des alertes",
        "God's Eye v2 : analyse spatiale des transformations par appariement des objets, testée sur le barrage de Kakhovka à partir d'images Google Earth",
        "Spirit Digger : chaîne NLP sur 382 000 messages Telegram et 2 236 articles de presse, alerte précoce non supervisée détectant 17 des 21 événements majeurs sans mot-clé",
        "Spirit Digger : extraction d'entités (spaCy), graphe de relations (NetworkX), évaluation critique d'un détecteur de propagande et cotation des sources selon le code de l'Amirauté (OTAN)",
      ],
    },
    {
      poste: "Développeur Fullstack Junior",
      entreprise: "Freelance & Projets Personnels",
      periode: "2023 - 2025",
      lieu: "Lomé, Togo",
      description:
        "Conception et développement d'applications web fullstack pour divers clients et projets personnels",
      valeur:
        "Acquisition d'une solide expérience pratique en développement fullstack et gestion de projet",
      lien: "#",
      details: [
        "API e-commerce multi-tenant avec architecture modulaire",
        "API RESTful pour application de lecture biblique avec gestion de contenus et marque-pages",
        "Plateforme web de tournois de football avec système d'inscription et gestion des équipes",
        "Application de gestion locative avec messagerie, partage de documents et suivi des paiements",
      ],
    },
    // {
    //   poste: "Data Scientist",
    //   entreprise: "DataInsights Ltd",
    //   periode: "2021 - 2022",
    //   lieu: "Lyon, France",
    //   description: "Analyse de données et développement de modèles prédictifs",
    //   valeur: "Création de modèles ML améliorant la précision prédictive de 25%",
    //   lien: "https://datainsights.com",
    //   details: [
    //     "Développement de modèles de machine learning en Python",
    //     "Analyse de datasets de plus de 10 millions d'enregistrements",
    //     "Création de dashboards interactifs avec Tableau et Power BI",
    //     "Collaboration avec les équipes métier pour l'interprétation des résultats"
    //   ]
    // },
  ];

  return (
    <section id="experience" className="relative py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Parcours d'expériences
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-[#FFAA00] rounded-full p-3 mr-4 shadow-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#11101D]">
                        {exp.poste}
                      </h3>
                      <p className="text-[#FFAA00] font-medium">
                        {exp.entreprise}
                      </p>
                      <div className="flex items-center text-gray-600 text-sm mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">{exp.periode}</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.lieu}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={exp.lien}
                    target={exp.lien.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-[#FFAA00] hover:text-[#11101D] transition-colors duration-200 transform hover:scale-110"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 mb-4 border border-orange-100 transform transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-[#FFAA00] mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#11101D] mb-1">
                          Valeur ajoutée :
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {exp.valeur}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#11101D] mb-3 flex items-center">
                      Principales réalisations :
                    </h4>
                    <ul className="space-y-2">
                      {exp.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-gray-700 text-sm flex items-start leading-relaxed"
                        >
                          <span className="w-2 h-2 bg-[#FFAA00] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-12 bg-white rounded-lg shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#11101D]">
              Synthèse de mon parcours
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border border-orange-100 transform transition-all duration-300 hover:shadow-lg">
                <div className="text-3xl font-bold text-[#FFAA00] mb-3">4+</div>
                <p className="text-gray-700 font-semibold">
                  Années d'expérience
                </p>
              </div>
              <div className="text-center bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border border-orange-100 transform transition-all duration-300 hover:shadow-lg">
                <div className="text-3xl font-bold text-[#FFAA00] mb-3">
                  50+
                </div>
                <p className="text-gray-700 font-semibold">Projets réalisés</p>
              </div>
              <div className="text-center bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border border-orange-100 transform transition-all duration-300 hover:shadow-lg">
                <div className="text-3xl font-bold text-[#FFAA00] mb-3">
                  15+
                </div>
                <p className="text-gray-700 font-semibold">
                  Technologies maîtrisées
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
