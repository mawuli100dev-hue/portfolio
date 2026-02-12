"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

function CV() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const experiences = [
    {
      title:
        'DÉVELOPPEMENT D\'UN MOTEUR DE CLASSIFICATION NLP "FROM SCRATCH" : DÉTECTION DE SPAM',
      tasks: [
        "Implémenter le nettoyage et la vectorisation textuelle (NLP)",
        "Programmer la régression logistique via NumPy",
        "Optimiser par validation croisée",
        "Analyser les performances via PCA et courbes ROC",
      ],
    },
    {
      title:
        "ANALYSE ET PRÉVISION DE DONNÉES TEMPORELLES DE SANTÉ: MALADIES PULMONAIRES",
      tasks: [
        "Analyser et visualiser les séries temporelles de décès pulmonaires",
        "Tester la stationnarité et identifier les composantes saisonnières",
        "Développer des modèles de prévision: ARIMA, SARIMA, lissage exponentiel",
        "Évaluer la performance des modèles prédictifs",
      ],
    },
    {
      title: "INTÉGRATION ET GESTION DES DONNÉES: SÉRIE TV - BREAKING BAD",
      tasks: [
        "Concevoir le MCD avec Looping et le modèle en flocons",
        "Extraire et nettoyer les données sur Breaking Bad depuis le web",
        "Implémenter les processus ETL avec FME et Python",
        "Créer la base de données PostgreSQL avec dimension temporelle",
      ],
    },
    {
      title:
        "ANALYSE STATISTIQUE SUR LA CONSTRUCTION DES IDENTITÉS ET L'INTÉGRATION SOCIALE EN FRANCE",
      tasks: [
        'Analyser et nettoyer le jeu de données "Histoire de vie"',
        "Implémenter divers plans d'échantillonnage: PESR, stratifié",
        "Concevoir et déployer un questionnaire de collecte de données",
        "Évaluer la précision des estimateurs par simulations Monte Carlo",
        "Comparer les méthodes de redressement d'échantillon",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-3 gap-0">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 md:col-span-1">
              <div className="mb-8 flex justify-center">
                <img
                  src="/img/profil.png"
                  alt="Profil"
                  className="w-48 h-48 rounded-full object-cover border-4 border-slate-600 shadow-xl"
                />
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b-2 border-slate-600 pb-2">
                  CONTACT
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-sm break-all">
                      amaviganhenoc@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">+33 7 74 74 98 25</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Carcassonne, 11000</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 mt-1 flex-shrink-0" />
                    <a
                      href="https://portfolioamavigan.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-blue-300 transition-colors break-all"
                    >
                      portfolioamavigan.vercel.app
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b-2 border-slate-600 pb-2">
                  ÉDUCATION
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-slate-300 mb-1">
                      2025 - en cours
                    </p>
                    <h3 className="font-bold text-base mb-2">
                      UNIVERSITÉ PERPIGNAN VIA DOMITIA ANTENNE CARCASSONNE
                    </h3>
                    <p className="text-sm text-slate-200">
                      Bachelor Universitaire de Technologie 2e année de Science
                      de données spécialité Exploration et Modélisation
                      Statistique
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-300 mb-1">2022-2025</p>
                    <h3 className="font-bold text-base mb-2">
                      ÉCOLE POLYTECHNIQUE DE LOMÉ
                    </h3>
                    <p className="text-sm text-slate-200">
                      3 ans de licence professionnelle en ingénierie logicielle
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b-2 border-slate-600 pb-2">
                  COMPÉTENCES
                </h2>
                <ul className="space-y-2">
                  {[
                    "Esprit analytique",
                    "Créativité technique",
                    "Leadership collaboratif",
                    "Travail d'équipe",
                    "Communication claire",
                    "Permis de conduire B",
                    "Goethe Zertifikat B2",
                  ].map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b-2 border-slate-600 pb-2">
                  LANGUES
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Anglais: niveau B2
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Allemand: niveau B2
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b-2 border-slate-600 pb-2">
                  PROGRAMMATION
                </h2>
                <p className="text-sm">Python, R, Java, Typescript, C, C++</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 border-b-2 border-slate-600 pb-2">
                  AUTOMATISATION
                </h2>
                <p className="text-sm">N8N</p>
              </div>
            </div>

            <div className="p-8 md:col-span-2">
              <div className="mb-8">
                <h1 className="text-5xl font-bold text-slate-800 mb-2">
                  HÉNOC AMAVIGAN
                </h1>
                <p className="text-xl text-slate-600 mb-1">21 ans</p>
                <p className="text-lg text-slate-700 font-semibold">
                  CANDIDATURE POUR UN STAGE EN SCIENCE DES DONNÉES
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-300 pb-2">
                  EXPÉRIENCES
                </h2>
                <div className="space-y-6">
                  {experiences.map((exp, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-blue-500 pl-4 hover:border-blue-700 transition-all cursor-pointer"
                      onMouseEnter={() => setActiveSection(`exp-${idx}`)}
                      onMouseLeave={() => setActiveSection(null)}
                    >
                      <h3 className="font-bold text-slate-800 mb-3">
                        {exp.title}
                      </h3>
                      <ul className="space-y-2">
                        {exp.tasks.map((task, taskIdx) => (
                          <li
                            key={taskIdx}
                            className={`flex items-start gap-2 text-sm text-slate-600 transition-all ${
                              activeSection === `exp-${idx}`
                                ? "text-slate-800"
                                : ""
                            }`}
                          >
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4 border-b-2 border-slate-300 pb-2">
                  BASE DE DONNÉES
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "MySQL", "Oracle"].map((db, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors"
                    >
                      {db}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4 border-b-2 border-slate-300 pb-2">
                  OUTILS
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "github",
                    "GitHub Actions",
                    "Docker",
                    "Linux",
                    "Power BI",
                    "Nest.js",
                    "Next.js",
                    "Flask",
                    "NumPy",
                    "Pandas",
                    "Scikit-learn",
                    "Seaborn",
                  ].map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-slate-200 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-300 pb-2">
                  RÉALISATIONS
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <p className="text-sm font-bold text-blue-800 mb-2">2025</p>
                    <h3 className="font-bold text-slate-800 mb-2">
                      <a
                        href="https://tournoi-amitie.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-blue-300 transition-colors break-all"
                      >
                        Tournoi de l'Amitié
                      </a>
                    </h3>
                    <p className="text-sm text-slate-600">
                      Une plateforme web pour digitaliser un tournoi de Football
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <p className="text-sm font-bold text-slate-700 mb-2">
                      2024
                    </p>
                    <h3 className="font-bold text-slate-800 mb-2">
                      <a
                        href="https://house-hiring.onrender.com/owner/sign-log/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-blue-300 transition-colors break-all"
                      >
                        Extase-Home
                      </a>
                    </h3>
                    <p className="text-sm text-slate-600">
                      Une plateforme de Gestion Locative complète pour un
                      propriétaire immobilier
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
