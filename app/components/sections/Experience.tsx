import { Briefcase, Calendar, MapPin, ExternalLink, TrendingUp } from "lucide-react";
import Image from "next/image";
import blurData from "@/public/img/blur-data.json";

export default function Experience() {
  const experiences = [
    {
      poste: "Développeur Fullstack Senior",
      entreprise: "TechCorp Solutions",
      periode: "2022 - Présent",
      lieu: "Paris, France",
      description: "Développement d'applications web complexes et optimisation des performances",
      valeur: "Leadership technique sur des projets critiques, amélioration de 40% des performances",
      lien: "https://techcorp-solutions.com",
      details: [
        "Développement d'une plateforme e-commerce avec React et Node.js",
        "Optimisation des requêtes SQL réduisant les temps de réponse de 60%",
        "Mentorat de 3 développeurs juniors",
        "Architecture de microservices pour une application de 100k+ utilisateurs"
      ]
    },
    {
      poste: "Data Scientist",
      entreprise: "DataInsights Ltd",
      periode: "2021 - 2022",
      lieu: "Lyon, France",
      description: "Analyse de données et développement de modèles prédictifs",
      valeur: "Création de modèles ML améliorant la précision prédictive de 25%",
      lien: "https://datainsights.com",
      details: [
        "Développement de modèles de machine learning en Python",
        "Analyse de datasets de plus de 10 millions d'enregistrements",
        "Création de dashboards interactifs avec Tableau et Power BI",
        "Collaboration avec les équipes métier pour l'interprétation des résultats"
      ]
    },
    {
      poste: "Développeur Web Junior",
      entreprise: "WebDev Agency",
      periode: "2020 - 2021",
      lieu: "Marseille, France",
      description: "Développement de sites web et applications mobiles",
      valeur: "Livraison de 15+ projets clients avec 95% de satisfaction",
      lien: "https://webdev-agency.com",
      details: [
        "Développement de sites web responsive avec HTML/CSS/JavaScript",
        "Intégration d'APIs REST et bases de données MySQL",
        "Développement d'applications React Native",
        "Maintenance et support technique pour les clients"
      ]
    },
    {
      poste: "Stagiaire Développeur",
      entreprise: "StartupTech",
      periode: "Été 2019",
      lieu: "Toulouse, France",
      description: "Stage de 3 mois en développement d'application web",
      valeur: "Première expérience professionnelle et découverte de l'environnement startup",
      lien: "https://startuptech.com",
      details: [
        "Participation au développement d'une application de gestion",
        "Apprentissage des méthodologies agiles",
        "Collaboration avec une équipe de 5 développeurs",
        "Découverte des outils de versioning (Git) et de déploiement"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20 -mt-16"
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
        <h2 className="text-3xl font-bold mb-8 text-center">Parcours d'expériences</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-[#FFAA00] rounded-full p-3 mr-4">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#11101D]">{exp.poste}</h3>
                      <p className="text-[#FFAA00] font-medium">{exp.entreprise}</p>
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFAA00] hover:text-[#11101D] transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-[#FFAA00] mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#11101D] mb-1">Valeur ajoutée :</h4>
                        <p className="text-gray-700 text-sm">{exp.valeur}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#11101D] mb-2">Principales réalisations :</h4>
                    <ul className="space-y-1">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-700 text-sm flex items-start">
                          <span className="w-2 h-2 bg-[#FFAA00] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-[#11101D] text-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Synthèse de mon parcours</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFAA00] mb-2">4+</div>
                <p className="text-gray-300">Années d'expérience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFAA00] mb-2">50+</div>
                <p className="text-gray-300">Projets réalisés</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFAA00] mb-2">15+</div>
                <p className="text-gray-300">Technologies maîtrisées</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
