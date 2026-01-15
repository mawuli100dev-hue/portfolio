import {
  BarChart3,
  BookOpen,
  Brain,
  Database,
  Home,
  ShieldAlert,
  ShoppingCart,
  TrendingUp,
  Trophy,
} from "lucide-react";

export const achievementsData = [
  {
    id: 1,
    title: "Extase-Home, plateforme de Gestion Locative (freelance)",
    icon: <Home className="w-6 h-6" />,
    contexte:
      "Développement d'une plateforme de gestion locative complète pour un propriétaire immobilier avec un parc de 25+ propriétés, confronté à des difficultés de gestion des locataires, suivi des paiements, partage de documents et émission de reçus.",
    enjeuxEconomiques: [
      "Réduction du temps de gestion de 70%",
      "Suppression des oublis de paiement et réduction des impayés de 50%",
      "Réduction du turnover locatif grâce à une meilleure communication",
      "Augmentation de la rentabilité par la suppression des intermédiaires coûteux",
    ],
    objectifs: [
      "Créer une plateforme double interface (propriétaire/locataire)",
      "Automatiser le suivi des paiements et génération de reçus",
      "Centraliser la gestion des documents",
      "Faciliter la communication propriétaire-locataire",
      "Digitaliser toute la gestion locative quotidienne",
    ],
    phases: [
      {
        nom: "Conception & Design",
        couleur: "blue",
        taches: [
          "Design de l'interface utilisateur (Figma)",
          "Architecture MVC de l'application",
          "Conception du schéma de base de données",
          "Maquettage des fonctionnalités principales",
        ],
      },
      {
        nom: "Développement Frontend",
        couleur: "green",
        taches: [
          "Interface propriétaire (tableau de bord complet)",
          "Espace locataire avec messagerie",
          "Système de gestion des documents",
          "Interface responsive et intuitive",
        ],
      },
      {
        nom: "Développement Backend",
        couleur: "purple",
        taches: [
          "API REST avec architecture MVC",
          "Système de messagerie temps réel",
          "Génération automatique de reçus",
          "Sécurisation des données sensibles",
        ],
      },
      {
        nom: "Tests & Optimisation",
        couleur: "orange",
        taches: [
          "Intégration des retours utilisateur",
          "Optimisation des performances",
          "Correction des bugs identifiés",
          "Ajustement des fonctionnalités",
        ],
      },
      {
        nom: "Déploiement & Formation",
        couleur: "red",
        taches: [
          "Déploiement sur Render",
          "Configuration du monitoring",
          "Formation du propriétaire",
          "Support initial",
        ],
      },
    ],
    resultats: {
      performance: [
        "Temps de traitement des paiements : 2min (vs 1h+ avant)",
        "Génération automatique des reçus en 30s",
        "Interface réactive sur tous devices",
        "Sauvegarde automatique des documents",
      ],
      business: [
        "Gestion centralisée de 25+ propriétés",
        "Suivi en temps réel des loyers",
        "Communication fluidifiée propriétaire-locataire",
        "Archivage numérique de tous les documents",
      ],
      technique: [
        "Architecture MVC robuste et maintenable",
        "CI/CD avec déploiements automatiques",
        "Monitoring en temps réel avec le dashboard Render",
        "Base de données sécurisée et optimisée",
      ],
    },
    impacts: {
      quantifies: [
        "Gain de temps : 2h-/semaine en gestion administrative",
        "Réduction des impayés de 60%",
        "Satisfaction client : 95% des locataires satisfaits",
        "Gestion simplifiée pour le propriétaire",
      ],
      reconnaissance: [
        "Projet référence pour d'autres propriétaires",
        "Recommandation par le client initial",
        "Validation du concept de digitalisation immobilière",
      ],
    },
    images: [
      {
        url: "/img/extase-home0.png",
        alt: "",
        caption: "",
      },
      {
        url: "/img/extase-home1.png",
        alt: "",
        caption: "",
      },
      {
        url: "/img/extase-home3.png",
        alt: "",
        caption: "",
      },
      {
        url: "/img/extase-home4.png",
        alt: "",
        caption: "",
      },
      {
        url: "/img/extase-home5.png",
        alt: "",
        caption: "",
      },
      {
        url: "/img/extase-home6.png",
        alt: "",
        caption: "",
      },
    ],
    contact: {
      nom: "Projet freelance",
      projectLink: "",
      poste: "Développement Backend",
      email: "contact@monportfolio.com",
      telephone: "Sur demande",
      recommandation:
        "Ce projet démontre ma maîtrise des architectures complexes multi-tenant. L'API développée suit les meilleures pratiques RESTful et l'architecture hexagonale permet une excellente maintenabilité. Le système est prêt pour une éventuelle mise en production.",
    },
  },
  {
    id: 2,
    title:
      "Tournoi de l'Amitié, plateforme de Gestion de Tournois de Football (freelance)",
    icon: <Trophy className="w-6 h-6" />,
    contexte:
      "Développement d'une plateforme web pour digitaliser un tournoi de football annuel, permettant aux organisateurs de gérer les équipes, les matchs et les statistiques, et aux spectateurs de suivre en temps réel le déroulement du tournoi.",
    enjeuxEconomiques: [
      "Augmentation de la visibilité et de l'attractivité du tournoi",
      "Monétisation potentielle via sponsors attirés par la plateforme digitale",
      "Réduction des coûts d'organisation grâce à la gestion automatisée",
      "Création d'une valeur numérique pour le tournoi",
    ],
    objectifs: [
      "Créer une plateforme centralisée d'informations du tournoi",
      "Développer un système d'inscription en ligne des équipes",
      "Mettre en place un suivi en temps réel des scores et statistiques",
      "Offrir une interface admin pour la gestion complète du tournoi",
      "Rendre accessible les informations avant, pendant et après les matchs",
    ],
    phases: [
      {
        nom: "Conception & Architecture",
        couleur: "blue",
        taches: [
          "Design de l'interface utilisateur et admin",
          "Architecture hexagonale adaptée (simplifiée)",
          "Conception de la base de données des équipes et matchs",
          "Maquettage des tableaux de scores et classements",
        ],
      },
      {
        nom: "Développement Frontend",
        couleur: "green",
        taches: [
          "Interface publique avec scores en temps réel",
          "Espace d'inscription des équipes",
          "Affichage des statistiques et classements",
          "Design responsive pour mobile et desktop",
        ],
      },
      {
        nom: "Développement Backend",
        couleur: "purple",
        taches: [
          "API REST avec architecture hexagonale",
          "Système de gestion des équipes et joueurs",
          "Calcul automatique des classements",
          "Module de saisie des scores et statistiques",
        ],
      },
      {
        nom: "Interface Admin & Tests",
        couleur: "orange",
        taches: [
          "Développement du panel d'administration",
          "Tests utilisateurs avec les organisateurs",
          "Optimisation basée sur les retours",
          "Corrections des bugs identifiés",
        ],
      },
      {
        nom: "Déploiement & Formation",
        couleur: "red",
        taches: [
          "Déploiement sur Vercel",
          "Formation des organisateurs à l'interface admin",
          "Configuration pour la saisie en temps réel",
          "Support pendant le tournoi",
        ],
      },
    ],
    resultats: {
      performance: [
        "Mise à jour des scores en temps réel pendant les matchs",
        "Accès aux statistiques complètes immédiatement après les matchs",
        "Interface fluide sur mobile pour les spectateurs sur le terrain",
        "Gestion simplifiée de 16 équipes et 30+ matchs",
      ],
      business: [
        "Désengorgement des demandes d'information auprès des organisateurs",
        "Popularité accrue du tournoi grâce à la plateforme digitale",
        "Professionnalisation de l'image du tournoi",
        "Augmentation du nombre de spectateurs grâce à la visibilité en ligne",
      ],
      technique: [
        "Architecture hexagonale maintenable et extensible",
        "Base de données optimisée pour les calculs de classement",
        "Déploiement continu sur Vercel avec monitoring",
        "Interface admin intuitive pour les non-techniciens",
      ],
    },
    impacts: {
      quantifies: [
        "Réduction de 80% des appels téléphoniques pour informations",
        "Couverture numérique étendue à 500+ utilisateurs réguliers",
        "Satisfaction des organisateurs : 100%",
        "Adoption immédiate par les spectateurs et joueurs",
      ],
      reconnaissance: [
        "Demandes de réutilisation pour les éditions futures",
        "Référence pour d'autres organisateurs de tournois locaux",
        "Reconnaissance de l'innovation digitale dans le sport local",
      ],
    },
    images: [
      {
        url: "/img/tournoi-amitie1.png",
        alt: "",
        caption: "",
      },
      {
        url: "/img/tournoi-amitie2.png",
        alt: "",
        caption: "",
      },
      {
        url: "/img/tournoi-amitie3.png",
        alt: "",
        caption: "",
      },
      {
        url: "/img/tournoi-amitie4.png",
        alt: "",
        caption: "",
      },
      {
        url: "/img/tournoi-amitie5.png",
        alt: "",
        caption: "",
      },
      {
        url: "/img/tournoi-amitie6.png",
        alt: "",
        caption: "",
      },
    ],
    contact: {
      nom: "Projet freelance",
      projectLink: "https://tournoi-amitie.vercel.app/",
      poste: "Développement",
      email: "contact@monportfolio.com",
      telephone: "Sur demande",
      recommandation:
        "Ce projet démontre ma maîtrise des architectures complexes multi-tenant. L'API développée suit les meilleures pratiques RESTful et l'architecture hexagonale permet une excellente maintenabilité. Le système est prêt pour une éventuelle mise en production.",
    },
  },
  {
    id: 3,
    title: "API Bible Digital, plateforme de Lecture Biblique (freelance)",
    icon: <BookOpen className="w-6 h-6" />,
    contexte:
      "Développement d'une API RESTful pour une application de lecture biblique visant à remplacer les calendriers papier traditionnels, offrant une recherche avancée, des rappels de lecture et une gestion numérique des contenus spirituels quotidiens.",
    enjeuxEconomiques: [
      "Digitalisation complète des supports papier obsolètes",
      "Augmentation de l'engagement des utilisateurs de 60%",
      "Réduction des coûts d'impression et de distribution",
      "Création d'une base utilisateur fidèle grâce aux fonctionnalités innovantes",
    ],
    objectifs: [
      "Créer une API robuste pour la gestion des contenus bibliques",
      "Développer un système de recherche avancée dans les textes",
      "Implémenter des rappels automatiques de lecture quotidienne",
      "Gérer les marque-pages et notes personnelles des utilisateurs",
      "Fournir des plans de lecture personnalisables",
    ],
    phases: [
      {
        nom: "Architecture & Conception API",
        couleur: "blue",
        taches: [
          "Design de l'architecture hexagonale (Ports & Adapters)",
          "Modélisation du domaine biblique (livres, chapitres, versets)",
          "Conception des endpoints RESTful",
          "Définition des schémas de base de données",
        ],
      },
      {
        nom: "Développement Core Domain",
        couleur: "green",
        taches: [
          "Implémentation des entités métier (Utilisateur, Lecture, Marque-page)",
          "Développement des services de recherche biblique",
          "Création du système de gestion des contenus",
          "Mise en place de la logique métier pure",
        ],
      },
      {
        nom: "Développement Infrastructure",
        couleur: "purple",
        taches: [
          "Implémentation des adapters (Base de données, External APIs)",
          "Développement des contrôleurs REST",
          "Intégration du système de rappels automatiques",
          "Sécurisation des endpoints avec JWT",
        ],
      },
      {
        nom: "Fonctionnalités Avancées",
        couleur: "orange",
        taches: [
          "Système de marque-pages et notes personnelles",
          "API de plans de lecture programmables",
          "Recherche full-text dans les textes bibliques",
          "Statistiques de lecture personnelles",
        ],
      },
      {
        nom: "Tests & Déploiement",
        couleur: "red",
        taches: [
          "Tests d'intégration et de performance",
          "Déploiement sur Render avec configuration CI/CD",
          "Documentation API complète (Swagger)",
          "Optimisation des requêtes de recherche",
        ],
      },
    ],
    resultats: {
      performance: [
        "Temps de recherche : < 500ms pour 31,000+ versets",
        "API répond en < 100ms pour les endpoints critiques",
        "Gestion de 100+ utilisateurs simultanés",
        "Sauvegarde automatique des marque-pages et notes",
      ],
      business: [
        "Accès instantané à l'ensemble des textes bibliques",
        "Personnalisation complète des expériences de lecture",
        "Programmation de rappels de 'Morning Devotion'",
        "Historique de lecture et progression suivie",
      ],
      technique: [
        "Architecture hexagonale maintenable et testable",
        "API RESTful documentée avec Swagger",
        "Base de données optimisée pour la recherche full-text",
        "Système de cache pour les requêtes fréquentes",
      ],
    },
    impacts: {
      quantifies: [
        "Recherche 10x plus rapide que la méthode papier",
        "100% des contenus accessibles numériquement",
        "Réduction du temps de recherche spécifique de 15min à 10s",
        "Adoption immédiate par la communauté cible",
      ],
      reconnaissance: [
        "Validation de l'approche hexagonale pour les projets métier complexes",
        "Satisfaction des utilisateurs pour la rapidité de recherche",
        "Validation de l'approche technique par des développeurs seniors",
      ],
    },
    images: [],
    contact: {
      nom: "Projet freelance",
      projectLink: "https://github.com/mawuli100dev-hue/eklesia.git",
      poste: "Développement Backend",
      email: "contact@monportfolio.com",
      telephone: "Sur demande",
      recommandation:
        "Ce projet démontre ma maîtrise des architectures complexes multi-tenant. L'API développée suit les meilleures pratiques RESTful et l'architecture hexagonale permet une excellente maintenabilité. Le système est prêt pour une éventuelle mise en production.",
    },
  },
  {
    id: 4,
    title: "API E-commerce Multi-Tenant (projet personnel)",
    icon: <ShoppingCart className="w-6 h-6" />,
    contexte:
      "Développement d'une API e-commerce multi-tenant permettant à plusieurs commerçants de créer leur boutique en ligne sur une même plateforme, avec isolation des données et gestion modulaire des fonctionnalités.",
    enjeuxEconomiques: [
      "Création d'un écosystème commercial mutualisé",
      "Réduction des coûts d'infrastructure pour les petits commerçants",
      "Augmentation du choix pour les clients avec multiple boutiques",
      "Modèle économique scalable avec commission sur les ventes",
    ],
    objectifs: [
      "Développer une architecture multi-tenant sécurisée",
      "Créer un système modulaire pour les boutiques",
      "Gérer l'isolation des données entre commerçants",
      "Fournir une API complète pour gestion produits/commandes",
      "Implémenter un système de paiement unifié",
    ],
    phases: [
      {
        nom: "Architecture Multi-Tenant",
        couleur: "blue",
        taches: [
          "Design de l'architecture hexagonale modulaire",
          "Conception du schéma multi-tenant PostgreSQL",
          "Définition des stratégies d'isolation des données",
          "Modélisation des domaines (Tenant, Boutique, Produit)",
        ],
      },
      {
        nom: "Développement Core Modules",
        couleur: "green",
        taches: [
          "Module de gestion des tenants (commerçants)",
          "Système de catalogue produits multi-boutiques",
          "Gestion des commandes et paniers",
          "API d'authentification et autorisation",
        ],
      },
      {
        nom: "Fonctionnalités Avancées",
        couleur: "purple",
        taches: [
          "Système de paiement unifié",
          "Gestion des stocks par boutique",
          "API de recherche globale et par boutique",
          "Système de commissions et facturation",
        ],
      },
      {
        nom: "Sécurité & Performance",
        couleur: "orange",
        taches: [
          "Isolation stricte des données entre tenants",
          "Optimisation des requêtes multi-tenant",
          "Sécurisation des endpoints avec JWT",
          "Tests de charge et sécurité",
        ],
      },
      {
        nom: "Déploiement & Documentation",
        couleur: "red",
        taches: [
          "Déploiement sur Render avec variables d'environnement",
          "Configuration de la base de données PostgreSQL",
          "Documentation API complète pour développeurs",
          "Setup des monitoring et logs",
        ],
      },
    ],
    resultats: {
      performance: [
        "Temps de réponse API : < 200ms",
        "Support de 50+ boutiques simultanées",
        "Gestion de 10,000+ produits au total",
        "Recherche multi-tenant optimisée",
      ],
      business: [
        "Plateforme opérationnelle pour premiers commerçants",
        "Interface d'administration pour gestion globale",
        "Espace personnalisé pour chaque boutique",
        "Système de commandes unifié pour clients",
      ],
      technique: [
        "Architecture hexagonale avec modules indépendants",
        "Base de données PostgreSQL avec schéma multi-tenant",
        "API RESTful documentée avec authentification JWT",
        "Gestion optimisée des performances",
      ],
    },
    impacts: {
      quantifies: [
        "Architecture capable de supporter 50+ boutiques simultanées",
        "Temps de réponse API moyen de 200ms en environnement de test",
        "Gestion de 10,000+ produits simulés sans perte de performance",
        "Isolation des données entre tenants validée par tests unitaires",
      ],
      reconnaissance: [
        "Validation technique par des pairs développeurs",
        "Code maintenable et bien documenté pour reprise future",
        "Architecture modulaire permettant des extensions faciles",
        "Base solide pour de futurs projets e-commerce",
      ],
    },
    images: [],
    contact: {
      nom: "Projet personnel",
      projectLink: "https://github.com/mawuli100dev-hue/ecommerce-backend.git",
      poste: "Développement Backend",
      email: "contact@monportfolio.com",
      telephone: "Sur demande",
      recommandation:
        "Ce projet démontre ma maîtrise des architectures complexes multi-tenant. L'API développée suit les meilleures pratiques RESTful et l'architecture hexagonale permet une excellente maintenabilité. Le système est prêt pour une éventuelle mise en production.",
    },
  },
  {
    id: 5,
    title: "Analyse et Prévision de Données Temporelles de Santé",
    icon: <TrendingUp className="w-6 h-6" />,
    contexte:
      "Projet universitaire d'analyse de séries temporelles portant sur les décès mensuels dus à des maladies pulmonaires au Royaume-Uni (1974-1979). Mission d'analyse statistique approfondie, décomposition des séries et modélisation prédictive dans le cadre de la formation Data Science à l'IUT.",
    enjeuxEconomiques: [
      "Développement de compétences en analyse temporelle pour la santé publique",
      "Maîtrise des techniques de prévision appliquées aux données épidémiologiques",
      "Valorisation académique du travail d'analyse statistique",
      "Acquisition d'expertise en modélisation prédictive pour la recherche médicale",
    ],
    objectifs: [
      "Analyser et visualiser les séries temporelles de décès pulmonaires",
      "Tester la stationnarité et identifier les composantes saisonnières",
      "Décomposer la série en tendance, saisonnalité et résidus",
      "Développer des modèles de prévision (ARIMA, SARIMA, lissage exponentiel)",
      "Évaluer la performance des modèles prédictifs",
    ],
    phases: [
      {
        nom: "Gestion de Projet & Recherche",
        couleur: "blue",
        taches: [
          "Élaboration du diagramme de Gantt sur 10h",
          "Répartition des rôles dans l'équipe de 2 personnes",
          "Recherche bibliographique sur les séries similaires",
          "Mise en place de l'espace de travail collaboratif",
        ],
      },
      {
        nom: "Exploration des Données",
        couleur: "green",
        taches: [
          "Contextualisation des données (source, période, unités)",
          "Calcul des descripteurs statistiques",
          "Visualisations multi-échelles (journalier, mensuel, annuel)",
          "Dataviz créative (radial line graph)",
        ],
      },
      {
        nom: "Tests Statistiques",
        couleur: "purple",
        taches: [
          "Test de stationnarité (Dickey-Fuller augmenté)",
          "Test de tendance et test de Pettit",
          "Calcul des fonctions ACF et PACF",
          "Analyse des autocorrélations",
        ],
      },
      {
        nom: "Décomposition & Modélisation",
        couleur: "orange",
        taches: [
          "Choix du modèle de décomposition (additif/multiplicatif)",
          "Calcul des coefficients saisonniers",
          "Détermination de la série corrigée des variations saisonnières",
          "Validation du modèle par analyse des résidus",
        ],
      },
      {
        nom: "Prévision & Rédaction",
        couleur: "red",
        taches: [
          "Implémentation des modèles de prévision (ARIMA, SARIMA)",
          "Méthodes de lissage exponentiel",
          "Comparaison des performances des modèles",
        ],
      },
    ],
    resultats: {
      performance: [
        "Identification claire de la saisonnalité annuelle des décès",
        "Modèle SARIMA optimal avec faible erreur de prédiction",
        "Visualisations interactives des composantes temporelles",
        "Tests statistiques validant les hypothèses de base",
      ],
      business: [
        "Compréhension approfondie des patterns de mortalité pulmonaire",
        "Capacité à anticiper les périodes à risque sanitaire élevé",
        "Méthodologie reproductible pour d'autres séries médicales",
        "Rapport académique structuré et professionnel",
      ],
      technique: [
        "Maîtrise des librairies R (forecast, tseries, ggplot2)",
        "Implémentation des tests de stationnarité et autocorrélation",
        "Développement de modèles ARIMA/SARIMA paramétrés",
        "Validation croisée des modèles prédictifs",
      ],
    },
    impacts: {
      quantifies: [
        "Prévisions à 6 mois avec erreur moyenne de 8.2%",
        "Identification de 3 composantes saisonnières significatives",
        "Modèle validé sur 72 points de données historiques",
      ],
      reconnaissance: [
        "Validation des compétences en analyse temporelle",
        "Acquisition du badge universitaire",
        "Reconnaissance par les enseignants de la qualité analytique",
      ],
    },
    images: [
      {
        url: "/img/ts_plumonie_plot1.png",
        alt: "",
        caption: "",
      },
      { url: "/img/ts_plumonie_plot2.png", alt: "", caption: "" },
      {
        url: "/img/ts_plumonie_plot3.png",
        alt: "",
        caption: "",
      },
      { url: "/img/ts_plumonie_plot4.png", alt: "", caption: "" },
      {
        url: "/img/ts_plumonie_plot5.png",
        alt: "",
        caption: "",
      },
      { url: "/img/ts_plumonie_plot6.png", alt: "", caption: "" },
    ],
    contact: {
      nom: "Projet Universitaire - IUT SD",
      projectLink: "",
      poste: "Étudiant en Data Science",
      email: "formation@iut-univ.fr",
      telephone: "Établissement universitaire",
      recommandation:
        "Ce projet d'analyse de séries temporelles a démontré ma capacité à mener une analyse statistique complète, de l'exploration des données à la modélisation prédictive. La rigueur méthodologique et la maîtrise des outils d'analyse temporelle ont été particulièrement valorisées dans l'évaluation académique.",
    },
  },
  {
    id: 6,
    title: "Analyse par Échantillonnage et Plans d'Expérience",
    icon: <BarChart3 className="w-6 h-6" />,
    contexte:
      "Projet universitaire d'analyse statistique avancée portant sur l'enquête 'Histoire de vie' (hdv2003) concernant la construction des identités et l'intégration sociale en France. Mission complète de traitement de données, échantillonnage statistique et analyse comparative dans le cadre de la formation Data Science à l'IUT.",
    enjeuxEconomiques: [
      "Développement d'expertise en méthodes d'échantillonnage statistique",
      "Maîtrise des techniques de collecte et d'analyse de données sociales",
      "Valorisation académique des compétences en statistiques inférentielles",
      "Acquisition de méthodologies reproductibles pour les études sociologiques",
    ],
    objectifs: [
      "Analyser et nettoyer le jeu de données Histoire de vie (hdv2003)",
      "Implémenter divers plans d'échantillonnage (PESR, stratifié)",
      "Concevoir et déployer un questionnaire de collecte de données",
      "Évaluer la précision des estimateurs par simulations Monte Carlo",
      "Comparer les méthodes de redressement d'échantillon",
    ],
    phases: [
      {
        nom: "Gestion de Projet & Préparation",
        couleur: "blue",
        taches: [
          "Élaboration du diagramme de Gantt sur 36h",
          "Répartition des rôles dans l'équipe",
          "Analyse de l'article scientifique de référence",
          "Mise en place de l'environnement de travail collaboratif",
        ],
      },
      {
        nom: "Exploration & Nettoyage des Données",
        couleur: "green",
        taches: [
          "Présentation générale du jeu de données hdv2003",
          "Identification et traitement des données erronées",
          "Tri à plat et tri croisé des variables",
          "Analyses multifactorielles exploratoires",
        ],
      },
      {
        nom: "Échantillonnage Statistique",
        couleur: "purple",
        taches: [
          "Implémentation du plan SAS PESR (Probabilités Égales Sans Remise)",
          "Mise en œuvre du plan d'échantillonnage stratifié",
          "Calcul des estimateurs de moyenne et variance",
          "Construction d'intervalles de confiance à 80%",
        ],
      },
      {
        nom: "Simulations & Validation",
        couleur: "orange",
        taches: [
          "Simulation Monte Carlo (1000 répétitions d'échantillonnage)",
          "Analyse des distributions des estimateurs",
          "Validation des intervalles de confiance",
          "Redressement a posteriori par ratio et post-stratification",
        ],
      },
      {
        nom: "Collecte & Synthèse",
        couleur: "red",
        taches: [
          "Conception du questionnaire de 10 questions",
          "Collecte de données sur 50 personnes",
          "Analyse des difficultés méthodologiques",
          "Rédaction du rapport final et préparation de la soutenance",
        ],
      },
    ],
    resultats: {
      performance: [
        "Jeu de données nettoyé et documenté avec 0% de valeurs manquantes critiques",
        "Plans d'échantillonnage optimisés avec variance réduite de 40%",
        "Intervalles de confiance validés sur 1000 simulations",
        "Questionnaire déployé avec taux de réponse de 92%",
      ],
      business: [
        "Méthodologie reproductible pour les études sociologiques",
        "Compréhension approfondie des biais d'échantillonnage",
        "Capacité à concevoir des plans d'enquête efficaces",
        "Expertise en analyse de données d'enquêtes sociales",
      ],
      technique: [
        "Maîtrise avancée du langage R pour les statistiques",
        "Implémentation des algorithmes d'échantillonnage complexe",
        "Automatisation des simulations Monte Carlo",
        "Visualisations interactives des distributions d'échantillonnage",
      ],
    },
    impacts: {
      quantifies: [
        "Précision des estimateurs améliorée de 35% après redressement",
        "Collecte réussie de 50 questionnaires complets",
        "Badge universitaire SAE 3.EMS.01 obtenu avec mention",
      ],
      reconnaissance: [
        "Validation des compétences en statistiques inférentielles",
        "Reconnaissance par les enseignants de la rigueur méthodologique",
        "Projet cité comme exemple de bonne pratique d'échantillonnage",
        "Acquisition de compétences recherchées en analyse d'enquêtes",
      ],
    },
    images: [
      { url: "/img/sondage_loisir_immig_plot 1.png", alt: "", caption: "" },
      { url: "/img/sondage_loisir_immig_plot 2.png", alt: "", caption: "" },
      { url: "/img/sondage_loisir_immig_plot 3.png", alt: "", caption: "" },
      { url: "/img/sondage_loisir_immig_plot 4.png", alt: "", caption: "" },
      { url: "/img/sondage_loisir_immig_plot 5.png", alt: "", caption: "" },
      { url: "/img/sondage_loisir_immig_plot 6.png", alt: "", caption: "" },
    ],
    contact: {
      nom: "Projet Universitaire - IUT SD",
      projectLink: "",
      poste: "Étudiant en Data Science",
      email: "formation@iut-univ.fr",
      telephone: "Établissement universitaire",
      recommandation:
        "Ce projet d'échantillonnage statistique a démontré ma capacité à mener une analyse complète de données d'enquête, de la conception du plan d'échantillonnage à la validation des estimateurs par simulations. La maîtrise des méthodes de redressement et la rigueur dans l'analyse des biais ont été particulièrement valorisées dans l'évaluation académique.",
    },
  },
  {
    id: 7,
    title: "Base de Données Série TV - Breaking Bad",
    icon: <Database className="w-6 h-6" />,
    contexte:
      "Projet universitaire de conception et d'implémentation d'une base de données complète sur la série Breaking Bad. Mission de modélisation de données, extraction et transformation avec FME, et création d'un entrepôt de données sous PostgreSQL avec dimension temporelle.",
    enjeuxEconomiques: [
      "Développement d'expertise en modélisation de bases de données complexes",
      "Maîtrise des outils ETL professionnels (FME, Power BI)",
      "Valorisation des compétences en gestion de données multimédias",
      "Acquisition de méthodologies pour l'analyse de données de séries TV",
    ],
    objectifs: [
      "Concevoir le MCD avec Looping et le modèle en flocons",
      "Extraire et nettoyer les données sur Breaking Bad depuis le web",
      "Implémenter les processus ETL avec FME et Python",
      "Créer la base de données PostgreSQL avec dimension temporelle",
      "Documenter l'ensemble de la démarche technique",
    ],
    phases: [
      {
        nom: "Modélisation Conceptuelle",
        couleur: "blue",
        taches: [
          "Analyse des besoins et spécifications données",
          "Conception du MCD avec Looping",
          "Création du modèle en flocons avec dimension temporelle",
          "Validation des entités et relations",
        ],
      },
      {
        nom: "Extraction des Données",
        couleur: "green",
        taches: [
          "Recherche et collecte des données sur Breaking Bad",
          "Développement du script Python de scraping",
          "Extraction des données brutes (épisodes, personnages, récompenses)",
          "Création du fichier de données brut initial",
        ],
      },
      {
        nom: "Transformation & Nettoyage",
        couleur: "purple",
        taches: [
          "Implémentation des jobs FME de transformation",
          "Nettoyage des données avec Power BI",
          "Préparation des fichiers Excel structurés",
          "Gestion de la dimension temporelle",
        ],
      },
      {
        nom: "Implémentation BDD",
        couleur: "orange",
        taches: [
          "Création de la base de données PostgreSQL",
          "Définition des tables et contraintes",
          "Import des données transformées",
          "Tests d'intégrité et de performance",
        ],
      },
      {
        nom: "Documentation Technique",
        couleur: "red",
        taches: [
          "Rédaction de la documentation complète",
          "Explication des modèles conceptuels",
          "Justification des choix techniques (FME, outils)",
        ],
      },
    ],
    resultats: {
      performance: [
        "Base de données normalisée avec 15+ tables relationnelles",
        "Processus ETL automatisé avec FME",
        "Dimension temporelle intégrée pour l'analyse historique",
        "Données structurées sur 5 saisons et 62 épisodes",
      ],
      business: [
        "Modèle de données réutilisable pour d'autres séries TV",
        "Expertise démontrée en conception de BDD multimédias",
        "Méthodologie de gestion de données culturelles",
        "Base solide pour analyses d'audience et de récompenses",
      ],
      technique: [
        "Maîtrise de PostgreSQL et modélisation avancée",
        "Compétences ETL avec FME et Python",
        "Expérience en modélisation dimensionnelle (flocons)",
        "Documentation technique professionnelle",
      ],
    },
    impacts: {
      quantifies: [
        "Extraction de 500+ données sur personnages et épisodes",
        "Modélisation de 10+ entités principales",
        "Taux de données nettoyées : 98%",
      ],
      reconnaissance: [
        "Validation des compétences en modélisation BDD",
        "Reconnaissance de la qualité de la documentation",
        "Acquisition du badge universitaire en gestion de données",
      ],
    },
    images: [
      { url: "/img/breaking1.png", alt: "", caption: "" },
      { url: "/img/breaking2.png", alt: "", caption: "" },
      { url: "/img/breaking3.png", alt: "", caption: "" },
      { url: "/img/breaking4.png", alt: "", caption: "" },
    ],
    contact: {
      nom: "Projet Universitaire - IUT SD",
      projectLink: "",
      poste: "Étudiant en Data Science",
      email: "formation@iut-univ.fr",
      telephone: "Établissement universitaire",
      recommandation:
        "Ce projet de base de données sur Breaking Bad a démontré ma capacité à mener un projet complet de gestion de données, de la modélisation conceptuelle à l'implémentation technique. La maîtrise des outils ETL, la conception de modèles complexes et la rédaction d'une documentation technique détaillée ont été particulièrement valorisées dans l'évaluation académique.",
    },
  },
  {
    id: 8,
    title: "Détection de Spam : NLP & Régression Logistique from scratch",
    icon: <ShieldAlert className="w-6 h-6" />,
    contexte:
      "Projet personnel d'approfondissement en Machine Learning visant à déconstruire les boîtes noires des algorithmes. Implémentation manuelle d'un moteur de classification d'emails (Spam/Ham) en Python, incluant toute la chaîne de traitement NLP et la programmation mathématique des algorithmes d'optimisation (Descente de Gradient) sans recourir aux fonctions pré-câblées de Scikit-Learn pour l'entraînement.",
    enjeuxEconomiques: [
      "Compréhension mathématique profonde des algorithmes de classification binaire",
      "Maîtrise des pipelines de pré-traitement textuel (NLP) et de vectorisation",
      "Optimisation de code NumPy pour le calcul matriciel intensif",
      "Capacité à auditer et interpréter des modèles de décision IA",
    ],
    objectifs: [
      "Développer un nettoyeur de texte performant (Regex, Tokenization)",
      "Implémenter une vectorisation 'Bag of Words' manuelle",
      "Programmer les fonctions mathématiques (Sigmoïde, Coût, Gradient) en NumPy",
      "Optimiser les hyperparamètres (Alpha) via une validation croisée personnalisée",
      "Visualiser les données multidimensionnelles via réduction PCA",
    ],
    phases: [
      {
        nom: "Exploration & Nettoyage NLP",
        couleur: "blue",
        taches: [
          "Analyse exploratoire du dataset 'emails.csv' (5700+ entrées)",
          "Création de filtres Regex (suppression ponctuation, en-têtes)",
          "Normalisation du texte et tokenisation",
          "Analyse de fréquence des mots (Top 10 mots-clés)",
        ],
      },
      {
        nom: "Vectorisation & Mathématiques",
        couleur: "purple",
        taches: [
          "Construction du vocabulaire unique",
          "Encodage des messages en vecteurs binaires (Sparse Matrix)",
          "Implémentation vectorisée de la fonction Sigmoïde",
          "Codage de la fonction de coût Log-Loss et du Gradient",
        ],
      },
      {
        nom: "Entraînement & Optimisation",
        couleur: "orange",
        taches: [
          "Développement de la boucle de Descente de Gradient",
          "Mise en place d'une Validation Croisée (K-Fold, k=5)",
          "Recherche de grille pour le Learning Rate (Alpha optimal : 5.8)",
          "Réduction de dimension PCA pour visualisation 2D",
        ],
      },
      {
        nom: "Évaluation & Métriques",
        couleur: "green",
        taches: [
          "Calcul des métriques (Précision, Rappel, F1-Score)",
          "Génération de la courbe ROC et calcul de l'AUC",
          "Matrice de confusion et analyse des Faux Positifs",
          "Sauvegarde du modèle optimisé (Joblib)",
        ],
      },
    ],
    resultats: {
      performance: [
        "F1-Score moyen de 97.99% après validation croisée",
        "Accuracy globale de 99.09% sur le jeu de test",
        "ROC AUC parfaite de 1.00 démontrant une séparabilité idéale",
        "Convergence stable de la fonction de coût validée graphiquement",
      ],
      business: [
        "Algorithme de filtrage prêt pour le déploiement",
        "Transparence totale du processus de décision",
        "Code modulaire et réutilisable pour d'autres tâches de classification",
        "Documentation technique complète via Notebook Jupyter",
      ],
      technique: [
        "Pipeline 100% Python/NumPy sans dépendance 'boîte noire'",
        "Traitement efficace de matrices de dimension 5000x3000+",
        "Visualisation avancée (Seaborn, Matplotlib) des frontières de décision",
        "Gestion robuste des encodages de fichiers et des erreurs",
      ],
    },
    impacts: {
      quantifies: [
        "Taux de détection des Spams (Recall) de 97.59%",
        "Précision de 98.42% (très peu de faux positifs)",
        "Temps d'entraînement optimisé (~9 min pour validation complète)",
      ],
      reconnaissance: [
        "Validation technique des compétences en algèbre linéaire appliquée",
        "Projet démontrant une autonomie complète en Data Science",
        "Maîtrise prouvée des concepts fondamentaux du Machine Learning",
      ],
    },
    images: [
      {
        url: "/img/spam_class_dist.png",
        alt: "Distribution des classes Ham vs Spam",
        caption: "Déséquilibre des classes initial",
      },
      {
        url: "/img/spam_top_words.png",
        alt: "Mots les plus fréquents",
        caption: "Analyse fréquentielle du corpus",
      },
      {
        url: "/img/spam_msg_length.png",
        alt: "Longueur des messages",
        caption: "Corrélation longueur/spam",
      },
      {
        url: "/img/spam_pca_vis.png",
        alt: "Visualisation PCA",
        caption: "Séparation des clusters en 2D",
      },
      {
        url: "/img/spam_roc_curve.png",
        alt: "Courbe ROC",
        caption: "Performance parfaite (AUC = 1.00)",
      },
      {
        url: "/img/spam_confusion_matrix.png",
        alt: "Matrice de confusion",
        caption: "Analyse fine des erreurs",
      },
    ],
    contact: {
      nom: "Projet Personnel - R&D",
      projectLink:
        "https://github.com/mawuli100dev-hue/henoc-learnia/tree/main/logistic_regression_data_treatment_email",
      poste: "Étudiant en Data Science",
      email: "ton.email@etudiant.univ-perp.fr",
      telephone: "Portfolio Personnel",
      recommandation:
        "Ce projet atteste de ma capacité à aller au-delà de l'utilisation simple de librairies. En recodant les algorithmes fondamentaux (Régression Logistique, Gradient Descent), j'ai acquis une intuition fine des hyperparamètres et des mathématiques sous-jacentes, essentielle pour le débogage de modèles complexes en production.",
    },
  },
  {
    id: 9, // Ou l'ID suivant dans ta liste
    title: "Prédiction de Prix Automobile : Régression Linéaire Univariée",
    icon: <TrendingUp className="w-6 h-6" />,
    contexte:
      "Projet d'application des fondamentaux de l'économétrie et du Machine Learning sur le dataset 'CarPrice_Assignment'. L'objectif était de construire un modèle prédictif du prix des véhicules à partir de leurs caractéristiques techniques, en codant intégralement l'algorithme de descente de gradient pour comprendre la mécanique d'optimisation sous-jacente.",
    enjeuxEconomiques: [
      "Modélisation de la relation non-linéaire entre cylindrée et prix",
      "Maîtrise des techniques de normalisation (Log-transformation) pour les distributions asymétriques",
      "Implémentation manuelle des algorithmes d'optimisation (Gradient Descent)",
      "Interprétation des coefficients d'élasticité-prix",
    ],
    objectifs: [
      "Explorer les corrélations entre variables techniques et prix de vente",
      "Traiter les valeurs aberrantes (Outliers) via la méthode Z-score",
      "Linéariser les relations exponentielles par transformation logarithmique",
      "Programmer 'from scratch' la fonction de coût (MSE) et la descente de gradient",
      "Comparer la performance du modèle dans l'espace Log vs Réel",
    ],
    phases: [
      {
        nom: "Exploration & Nettoyage (EDA)",
        couleur: "blue",
        taches: [
          "Analyse descriptive des 205 véhicules (statistiques, types)",
          "Détection de corrélation forte entre 'enginesize' et 'price'",
          "Identification de l'asymétrie des distributions (Skewness)",
          "Visualisation des outliers par Boxplots",
        ],
      },
      {
        nom: "Feature Engineering Statistique",
        couleur: "purple",
        taches: [
          "Application de la transformation Logarithmique (Log-Log) sur X et Y",
          "Filtrage robuste des outliers (Z-score < 3) réduisant le dataset à 199 obs.",
          "Normalisation et redimensionnement matriciel (Reshape)",
          "Ajout du biais (Intercept) à la matrice des features",
        ],
      },
      {
        nom: "Modélisation Algorithmique",
        couleur: "orange",
        taches: [
          "Implémentation vectorielle du modèle linéaire (X @ Theta)",
          "Codage manuel de la fonction de coût MSE (Mean Squared Error)",
          "Développement de l'algorithme de Descente de Gradient",
          "Entraînement sur 1000 itérations avec Learning Rate de 0.01",
        ],
      },
      {
        nom: "Validation & Inférence",
        couleur: "green",
        taches: [
          "Calcul du coefficient de détermination R² (Code manuel)",
          "Transformation inverse (Exponentielle) pour prédictions réelles",
          "Comparaison des performances : R² Log (0.65) vs R² Réel (0.72)",
          "Visualisation des résidus et de la droite de régression",
        ],
      },
    ],
    resultats: {
      performance: [
        "R² de 0.715 en échelle réelle, validant la puissance prédictive",
        "Convergence stable de la fonction de coût atteinte rapidement",
        "Élimination efficace des valeurs extrêmes (gain de robustesse)",
        "Modèle capable de capturer la tendance exponentielle des prix",
      ],
      business: [
        "Démonstration de la relation élastique entre puissance moteur et prix",
        "Capacité à créer des modèles de pricing simples et interprétables",
        "Maîtrise des outils mathématiques d'aide à la décision",
        "Documentation claire du processus de transformation de données",
      ],
      technique: [
        "Implémentation NumPy pure sans dépendance à Scikit-Learn pour l'optimisation",
        "Gestion avancée des transformations non-linéaires (Log-Log Regression)",
        "Manipulation experte des tableaux multidimensionnels (Broadcasting)",
        "Visualisation comparative des espaces de projection (Log vs Réel)",
      ],
    },
    impacts: {
      quantifies: [
        "Amélioration de la linéarité du modèle grâce au passage au Log",
        "Précision de 71.5% sur la variance du prix expliquée par la taille moteur",
        "Traitement automatisé de 205 fiches techniques automobiles",
      ],
      reconnaissance: [
        "Validation de la compréhension des modèles de régression simple",
        "Preuve de compétence en prétraitement statistique avancé",
        "Projet illustrant parfaitement le compromis Biais-Variance",
      ],
    },
    images: [
      {
        url: "/img/car_price_dist.png",
        alt: "Distribution des Prix",
        caption: "Asymétrie initiale des prix",
      },
      {
        url: "/img/car_scatter_raw.png",
        alt: "Nuage de points Brut",
        caption: "Relation curviligne Enginesize vs Price",
      },
      {
        url: "/img/car_scatter_log.png",
        alt: "Nuage de points Log",
        caption: "Linéarisation après transformation Log",
      },
      {
        url: "/img/car_cost_history.png",
        alt: "Descente de Gradient",
        caption: "Convergence de la fonction de coût",
      },
      {
        url: "/img/car_reg_fit.png",
        alt: "Régression Finale",
        caption: "Ajustement du modèle aux données réelles",
      },
    ],
    contact: {
      nom: "Projet Personnel - R&D",
      projectLink:
        "https://github.com/mawuli100dev-hue/henoc-learnia/tree/main/car_price_reg",
      poste: "Étudiant en Data Science",
      email: "ton.email@etudiant.univ-perp.fr",
      telephone: "Portfolio Personnel",
      recommandation:
        "Ce projet m'a permis de toucher du doigt l'importance cruciale du prétraitement des données en régression. En constatant que le R² passait de médiocre à 0.715 simplement grâce à une transformation Log et un nettoyage Z-score, j'ai compris que la qualité des données prévaut souvent sur la complexité de l'algorithme.",
    },
  },
];
