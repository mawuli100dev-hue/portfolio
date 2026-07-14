import {
  BarChart3,
  Bone,
  BookOpen,
  Brain,
  Database,
  Home,
  Leaf,
  ShieldAlert,
  ShoppingCart,
  TrendingUp,
  Trophy,
  Wind,
} from "lucide-react";

export const achievementsData = [
    {
        id: 10,
        title: "ANTICI'PYR - Dashboard Botanique Pyrénéen (stage)",
        icon: <Leaf className="w-6 h-6" />,
        contexte:
            "59 espèces végétales endémiques des Pyrénées, menacées par le changement climatique. Des années de modélisation scientifique - mais aucun outil pour les rendre lisibles. Ma mission : transformer ces données en un dashboard interactif, capable de projeter l'avenir de chaque espèce sous quatre scénarios climatiques (SSP 126 à 585), de 2030 à 2090. Un outil pensé autant pour les chercheurs que pour les gestionnaires d'espaces naturels protégés des trois pays concernés.",

        enjeuxEconomiques: [
            "Rendre les données de conservation exploitables pour les décideurs transfrontaliers (France, Espagne, Andorre)",
            "Automatiser l'accès aux résultats sans passer par un développeur",
            "Intégration prévue dans le site Floralab+ de l'Université de Perpignan",
        ],

        objectifs: [
            "Visualiser les projections de distribution d'espèces sous scénarios SSP 126, 245, 370 et 585",
            "Afficher les cartes raster géoréférencées par horizon temporel (2030, 2050, 2070, 2090)",
            "Proposer une interface multilingue (français, anglais, espagnol, catalan)",
            "Permettre l'ajout autonome d'espèces via une interface d'administration - sans toucher au code",
            "Générer des fiches PDF téléchargeables par espèce avec cartographie intégrée",
        ],

        phases: [
            {
                nom: "Exploration & Architecture",
                couleur: "blue",
                taches: [
                    "Analyse des données cartographiques et définition de la structure par espèce",
                    "Mise en place de l'architecture modulaire",
                    "Sélection des bibliothèques GIS : Cartopy, Folium, GeoPandas",
                ],
            },
            {
                nom: "Cartographie",
                couleur: "green",
                taches: [
                    "Rendu raster géoréférencé avec projection correcte sur les Pyrénées",
                    "Cartes interactives Folium avec overlay TIFF et gestion de l'opacité RGBA",
                    "Export PNG sans déformation",
                ],
            },
            {
                nom: "Interface & Multilingue",
                couleur: "purple",
                taches: [
                    "Sidebar avec sélecteur d'espèce, période et scénario SSP",
                    "Système de traduction découplé du code (fichier centralisé)",
                    "Onboarding modal multi-étapes pour les nouveaux utilisateurs",
                ],
            },
            {
                nom: "Administration",
                couleur: "orange",
                taches: [
                    "Formulaire d'upload de dossiers espèces zippés",
                    "Validation de la structure et dépôt automatique sur Backblaze",
                ],
            },
            {
                nom: "PDF & Déploiement",
                couleur: "red",
                taches: [
                    "Génération de fiches PDF par espèce via ReportLab",
                    "Déploiement cloud et validation des 59 espèces en multilingue",
                ],
            },
        ],

        resultats: {
            performance: [
                "Cartes raster sans déformation de projection, ratio Pyrénées respecté",
                "Interface réactive sur tous devices",
                "Chargement dynamique depuis Backblaze - aucun redéploiement nécessaire pour ajouter une espèce",
            ],
            business: [
                "59 espèces visualisables, 4 scénarios SSP, 4 horizons temporels",
                "4 langues couvertes pour une portée transfrontalière réelle",
                "Chercheurs autonomes pour enrichir le dashboard via l'interface admin",
            ],
            technique: [
                "Architecture modulaire core / ui / assets bien séparée",
                "Traductions découplées, stockage distant sur Backblaze",
                "Gestion RGBA native pour l'opacité raster",
            ],
        },

        impacts: {
            quantifies: [
                "59 espèces modélisées et visualisables",
                "4 langues, 4 horizons temporels, 4 scénarios climatiques",
                "100% des espèces ajoutables sans intervention technique",
            ],
            reconnaissance: [
                "Intégration prévue dans le site Floralab+ de l'Université de Perpignan",
                "Outil de communication scientifique pour la thèse ANTICI'PYR",
            ],
        },

        images: [
            { url: "/img/anticipyr0.png", alt: "", caption: "" },
            { url: "/img/anticipyr1.png", alt: "", caption: "" },
            { url: "/img/anticipyr2.png", alt: "", caption: "" },
        ],

        contact: {
            nom: "Stage - CEFREM / Université de Perpignan",
            projectLink: "https://dashanticipyr-rdfsittsujgfzbkbd5hxk8.streamlit.app",
            poste: "Développement Dashboard Scientifique",
            email: "contact@monportfolio.com",
            telephone: "Sur demande",
            recommandation:
                "Ce projet m'a appris à penser l'outil autant que la donnée. Traiter des rasters géoréférencés, gérer un système multilingue découplé et concevoir une interface d'administration pour des non-développeurs - c'est exactement ce que j'aime : quand la rigueur technique sert directement un usage concret.",
        },
    },

    {
        id: 11,
        title: "Dépôt de Poussières Sahariennes - Analyse Climatique (stage)",
        icon: <Wind className="w-6 h-6" />,

        contexte:
            "À partir de 65 ans de données climatiques issues du modèle régional ALADIN, des réanalyses CAMS et des observations du réseau MOOSE, l'objectif était d'évaluer les dépôts de poussières sahariennes sur plusieurs emprises d'étude (Golfe du Lion, bassin méditerranéen et bassin versant). J'ai développé un pipeline complet permettant d'harmoniser ces sources, de quantifier les biais, d'analyser la variabilité saisonnière, de cartographier les tendances à long terme et de comparer les comportements spatiaux des dépôts atmosphériques.",

        enjeuxEconomiques: [
            "Mieux comprendre l'apport en nutriments (Fe, P) aux écosystèmes marins via les poussières sahariennes",
            "Améliorer l'évaluation des modèles régionaux utilisés pour les études climatiques et de qualité de l'air",
            "Contribuer aux travaux scientifiques du CEFREM et du réseau MOOSE sur l'évolution des dépôts atmosphériques",
        ],

        objectifs: [
            "Calculer les flux annuels de dépôt sec, humide et total sur les différentes zones d'étude",
            "Comparer les simulations ALADIN aux observations MOOSE et aux réanalyses CAMS",
            "Cartographier les distributions spatiales, les moyennes climatologiques et les tendances sur 1959–2024",
            "Analyser la variabilité saisonnière et décennale des dépôts atmosphériques",
            "Évaluer la contribution relative des dépôts secs et humides selon les différentes emprises géographiques",
        ],

        phases: [
            {
                nom: "Extraction & Préparation",
                couleur: "blue",
                taches: [
                    "Extraction des variables drydust, wetdust et totaldust depuis les fichiers NetCDF ALADIN",
                    "Préparation des jeux de données sur le Golfe du Lion, le bassin méditerranéen et le bassin versant",
                    "Fusion des observations MOOSE avec les sorties ALADIN et CAMS",
                ],
            },
            {
                nom: "Analyse Statistique",
                couleur: "green",
                taches: [
                    "Calcul du biais relatif entre ALADIN et les observations MOOSE",
                    "Régression linéaire pixel par pixel sur 65 ans (numpy.polyfit)",
                    "Calcul des moyennes annuelles, saisonnières et décennales",
                ],
            },
            {
                nom: "Cartographie Spatiale",
                couleur: "purple",
                taches: [
                    "Production des cartes de flux moyens et des dépôts annuels sur les différentes zones d'étude",
                    "Cartographie des tendances climatiques pixel par pixel",
                    "Analyse spatiale des fractions de dépôt sec et humide",
                ],
            },
            {
                nom: "Validation & Export",
                couleur: "orange",
                taches: [
                    "Comparaison interannuelle ALADIN, CAMS et MOOSE",
                    "Visualisation des biais et des écarts entre les différentes sources",
                    "Export automatisé des figures et des tableaux de synthèse (CSV)",
                ],
            },
        ],

        resultats: {
            performance: [
                "Analyses réalisées sur trois emprises géographiques complémentaires",
                "Flux ALADIN compris entre 0.15 et 0.28 MT/an selon les années",
                "Dominance du dépôt sec sur l'ensemble des domaines étudiés",
                "Tendance générale à la baisse des dépôts sur une grande partie des zones analysées",
            ],

            business: [
                "65 années de données climatiques analysées",
                "3 sources de données harmonisées (ALADIN, CAMS, MOOSE)",
                "Analyses reproductibles sur plusieurs domaines géographiques",
            ],

            technique: [
                "Pipeline Python automatisé (xarray, pandas, matplotlib)",
                "Traitement multi-domaines avec analyses reproductibles",
                "Calcul de tendances spatiales pixel par pixel",
                "Export automatisé des cartes, graphiques et synthèses CSV",
            ],
        },

        impacts: {
            quantifies: [
                "65 ans de données ALADIN traitées",
                "3 domaines géographiques étudiés",
                "2 stations MOOSE utilisées pour la validation",
                "4 saisons et 6 décennies analysées",
            ],

            reconnaissance: [
                "Contribution aux travaux scientifiques du CEFREM",
                "Résultats exploitables pour les équipes MOOSE et de modélisation climatique régionale",
            ],
        },

        images: [
            {
                url: "/img/sno_moose_flux_moyen_krige_1959_2024.png",
                alt: "Flux annuel moyen krigé - Golfe du Lion",
                caption: "Flux annuel moyen (Golfe du Lion)",
            },
            {
                url: "/img/sno_moose_gdl_point_bias.png",
                alt: "Comparaison ALADIN vs MOOSE",
                caption: "Biais ALADIN / MOOSE",
            },
            {
                url: "/img/sno_moose_gdl_totaldust_seasonal.png",
                alt: "Variabilité saisonnière - Golfe du Lion",
                caption: "Saisonnalité des dépôts (Golfe du Lion)",
            },
            {
                url: "/img/sno_moose_gdl_trend_aladin.png",
                alt: "Tendance ALADIN - Golfe du Lion",
                caption: "Tendance des dépôts (Golfe du Lion)",
            },
            {
                url: "/img/sno_moose_tendance_flux_annuelle.png",
                alt: "Évolution annuelle des flux",
                caption: "Évolution annuelle des flux",
            },
            {
                url: "/img/sno_moose_totaldust_bassin_mediterraneen_fractions.png",
                alt: "Fractions de dépôt - Bassin méditerranéen",
                caption: "Dépôt sec / humide (Bassin méditerranéen)",
            },
            {
                url: "/img/sno_moose_trend_aladin_bassin_mediterraneen.png",
                alt: "Tendance ALADIN - Bassin méditerranéen",
                caption: "Tendance des dépôts (Bassin méditerranéen)",
            },
        ],

        contact: {
            nom: "Analyse Climatique Aérosols - CEFREM",
            projectLink: "",
            poste: "Analyse de données climatiques & Visualisation scientifique",
            email: "contact@monportfolio.com",
            telephone: "Sur demande",
            recommandation:
                "Ce projet m'a permis de développer un pipeline scientifique robuste pour analyser et comparer des données climatiques issues de modèles numériques, de réanalyses et d'observations terrain. Au-delà des traitements, il m'a appris à interpréter des résultats multi-sources, à documenter les incertitudes et à produire des visualisations reproductibles adaptées aux besoins de la recherche environnementale.",
        },
    },

  {
    id: 12,
    title: "LYCAON BONE - Segmentation des morsures et analyse des pits",
    icon: <Bone className="w-6 h-6" />,
    contexte:
      "Comment automatiser la détection de zones de morsure sur des photos d'os de lycaon, et cartographier la répartition de micro-dépressions (les « pits ») sur quatre types d'os longs ? C'est le double défi de ce projet taphonomique. En combinant le modèle de segmentation SAM2 avec une analyse géospatiale complète (GeoPandas, KDE), j'ai construit un pipeline qui traite 185 images TIFF et produit des cartes proportionnelles et heatmaps directement exploitables pour une publication scientifique.",

    enjeuxEconomiques: [
      "Automatiser l'analyse ostéologique pour accélérer les études archéozoologiques",
      "Produire des visualisations quantifiables et reproductibles pour publication",
      "Permettre des comparaisons inter-os et inter-individus sur les patterns de prédation",
    ],

    objectifs: [
      "Segmenter les morsures via SAM2 avec post-traitements CLAHE et filtres morphologiques",
      "Identifier trois zones distinctes : contour externe, zone polie, zone broyée",
      "Traiter fémur, humérus, tibia et radius-ulna à partir de shapefiles et GeoJSON",
      "Joindre les mesures Leica (longueur/largeur des pits) depuis un fichier ODS",
      "Produire pour chaque os une carte proportionnelle et une heatmap KDE masquée",
    ],

    phases: [
      {
        nom: "Segmentation SAM2",
        couleur: "blue",
        taches: [
          "Normalisation TIFF → RGB + CLAHE (clip=3.0, tile=8×8)",
          "Inférence SAM2 (iou_thresh=0.70) et filtrage des masques (circularité, surface, élancement)",
        ],
      },
      {
        nom: "Zones polie & broyée",
        couleur: "green",
        taches: [
          "Espace LAB : seuil de luminance (80e percentile) pour la zone polie",
          "Variance locale (fenêtre 9×9, 70e percentile) pour la zone broyée",
        ],
      },
      {
        nom: "Intégration géospatiale",
        couleur: "purple",
        taches: [
          "Chargement shapefile + GeoJSON pour chaque os, reprojection CRS homogène",
          "Jointure avec tableur ODS sur (id, ID_Os) pour les mesures métriques",
        ],
      },
      {
        nom: "Cartographie & Heatmap",
        couleur: "orange",
        taches: [
          "Taille de marqueur normalisée : √(Longueur × Largeur) entre 30 et 450 px",
          "Heatmap KDE masquée par le contour osseux (Shapely), rendu pcolormesh",
        ],
      },
    ],

    resultats: {
      performance: [
        "Pipeline opérationnel sur CPU pour 185 images TIFF",
        "Filtrage robuste des micro-parasites et faux contours",
        "Heatmap KDE sans débordement hors du contour osseux",
      ],
      business: [
        "4 types d'os longs analysés, cartes reproductibles pour chaque",
        "Méthodologie directement transférable à d'autres collections ostéologiques",
      ],
      technique: [
        "Pipeline TIFF → CLAHE → SAM2 → morphologie → export PNG",
        "Intégration GeoPandas + Shapely + jointure ODS",
        "Visualisations : scatter proportionnel + heatmap masquée",
      ],
    },

    impacts: {
      quantifies: [
        "185 photographies traitées, détection de morsure >85%",
        "4 os longs modélisés, pits extraits et reliés à des mesures réelles",
        "3 sorties visuelles par os : contour, pits gradués, heatmap",
      ],
      reconnaissance: [
        "Première application de SAM2 sur images archéozoologiques non annotées",
        "Méthode inédite de distinction zone polie/broyée par luminance + variance locale",
      ],
    },

    images: [
      { url: "/img/seg_morsures_radio_ulna_contour_points.png", alt: "", caption: "" },
      { url: "/img/seg_morsures_radio_ulna_heatmap.png", alt: "", caption: "" },
      { url: "/img/seg_morsures_radio_ulna_pits_sized.png", alt: "", caption: "" },
      { url: "/img/seg_morsures_traitement1.png", alt: "", caption: "" },
      { url: "/img/seg_morsures_contour1.png", alt: "", caption: "" },
      { url: "/img/seg_morsures_contour2.png", alt: "", caption: "" },
    ],

    contact: {
      nom: "Stage - Analyse taphonomique, ossements de lycaon",
      projectLink: "",
      poste: "Data scientist / Développeur scientifique",
      email: "votre.email@exemple.com",
      telephone: "Sur demande",
      recommandation:
        "Ce qui m'a le plus marqué ici, c'est l'adaptation : SAM2 n'est pas fait pour les os. Il a fallu définir des critères morphologiques spécifiques, inventer une méthode pour distinguer zones polies et broyées, et intégrer des formats de données très hétérogènes. C'est ce genre de problème - sans solution toute faite - qui me motive vraiment.",
    },
  },

  {
    id: 1,
    title: "Extase-Home - Plateforme de Gestion Locative (freelance)",
    icon: <Home className="w-6 h-6" />,
    contexte:
      "Un propriétaire, 25 propriétés, et une gestion quotidienne qui lui prenait un temps fou - relances manuelles, documents éparpillés, reçus à rédiger un par un. Il m'a contacté pour digitaliser tout ça. J'ai conçu et développé une plateforme double interface - propriétaire et locataire - qui centralise paiements, documents, messagerie et génération de reçus en un seul outil.",

    enjeuxEconomiques: [
      "Réduire le temps de gestion administrative de 70%",
      "Diminuer les impayés grâce aux rappels automatiques",
      "Éliminer les intermédiaires coûteux",
    ],

    objectifs: [
      "Créer une double interface : tableau de bord propriétaire + espace locataire",
      "Automatiser le suivi des paiements et la génération de reçus",
      "Centraliser documents, messagerie et historique en un seul endroit",
    ],

    phases: [
      {
        nom: "Conception & Design",
        couleur: "blue",
        taches: [
          "Design UI sur Figma, architecture MVC, schéma de base de données",
        ],
      },
      {
        nom: "Développement Frontend",
        couleur: "green",
        taches: [
          "Interface propriétaire (dashboard complet), espace locataire avec messagerie, design responsive",
        ],
      },
      {
        nom: "Développement Backend",
        couleur: "purple",
        taches: [
          "API REST, messagerie temps réel, génération automatique de reçus, sécurisation des données",
        ],
      },
      {
        nom: "Tests & Déploiement",
        couleur: "red",
        taches: [
          "Déploiement sur Render, monitoring, formation du propriétaire",
        ],
      },
    ],

    resultats: {
      performance: [
        "Traitement d'un paiement en 2 min (vs 1h+ avant)",
        "Génération de reçu en 30 secondes",
        "Interface responsive sur tous appareils",
      ],
      business: [
        "25+ propriétés gérées depuis une seule interface",
        "Réduction des impayés de 60%",
        "Communication fluidifiée propriétaire-locataire",
      ],
      technique: [
        "Architecture MVC robuste, CI/CD automatisé sur Render",
        "Base de données sécurisée, monitoring en temps réel",
      ],
    },

    impacts: {
      quantifies: [
        "2h+ économisées par semaine sur la gestion administrative",
        "60% de réduction des impayés",
        "95% de satisfaction côté locataires",
      ],
      reconnaissance: [
        "Recommandation directe du client auprès d'autres propriétaires",
        "Validation du concept de digitalisation immobilière en contexte réel",
      ],
    },

    images: [
      { url: "/img/extase-home0.png", alt: "", caption: "" },
      { url: "/img/extase-home1.png", alt: "", caption: "" },
      { url: "/img/extase-home3.png", alt: "", caption: "" },
      { url: "/img/extase-home4.png", alt: "", caption: "" },
      { url: "/img/extase-home5.png", alt: "", caption: "" },
      { url: "/img/extase-home6.png", alt: "", caption: "" },
    ],

    contact: {
      nom: "Projet freelance",
      projectLink: "",
      poste: "Développement Full-Stack",
      email: "contact@monportfolio.com",
      telephone: "Sur demande",
      recommandation:
        "Ce projet m'a appris la vraie valeur du développement freelance : comprendre un problème métier réel avant d'écrire la moindre ligne de code. Le propriétaire ne voulait pas un logiciel - il voulait du temps retrouvé. C'est avec cet objectif en tête que j'ai conçu chaque fonctionnalité.",
    },
  },

  {
    id: 2,
    title: "Tournoi de l'Amitié - Plateforme de Gestion de Tournoi (freelance)",
    icon: <Trophy className="w-6 h-6" />,
    contexte:
      "Un tournoi de football annuel, des organisateurs débordés de coups de fil, et des spectateurs qui ne savaient jamais où en étaient les scores. L'idée : créer une plateforme qui centralise tout - inscriptions, résultats en temps réel, classements - et libère les organisateurs des tâches répétitives. J'ai développé l'interface publique et l'espace d'administration, en pensant autant à l'expérience des spectateurs sur le terrain qu'à celle des gestionnaires derrière leur écran.",

    enjeuxEconomiques: [
      "Professionnaliser l'image du tournoi pour attirer sponsors et équipes",
      "Réduire la charge organisationnelle grâce à la gestion automatisée",
      "Augmenter la visibilité et l'attractivité de l'événement",
    ],

    objectifs: [
      "Créer une plateforme centralisée avec scores en temps réel",
      "Développer un système d'inscription en ligne des équipes",
      "Offrir un panel d'administration complet pour les organisateurs",
    ],

    phases: [
      {
        nom: "Conception & Architecture",
        couleur: "blue",
        taches: [
          "Architecture hexagonale adaptée, modélisation BDD équipes/matchs",
        ],
      },
      {
        nom: "Développement",
        couleur: "green",
        taches: [
          "Interface publique temps réel, espace inscription, classements automatiques, panel admin",
        ],
      },
      {
        nom: "Déploiement & Formation",
        couleur: "red",
        taches: [
          "Déploiement sur Vercel, formation des organisateurs, support pendant le tournoi",
        ],
      },
    ],

    resultats: {
      performance: [
        "Scores mis à jour en temps réel pendant les matchs",
        "Interface fluide sur mobile pour les spectateurs sur le terrain",
        "Gestion simplifiée de 16 équipes et 30+ matchs",
      ],
      business: [
        "−80% d'appels téléphoniques pour informations",
        "500+ utilisateurs réguliers, adoption immédiate",
        "Demandes de réutilisation pour les éditions suivantes",
      ],
      technique: [
        "Architecture hexagonale maintenable, déploiement continu sur Vercel",
        "Interface admin pensée pour des non-techniciens",
      ],
    },

    impacts: {
      quantifies: [
        "80% de réduction des demandes d'information auprès des organisateurs",
        "500+ utilisateurs réguliers, 100% de satisfaction organisateurs",
      ],
      reconnaissance: [
        "Réutilisation demandée pour les éditions futures",
        "Référence pour d'autres organisateurs de tournois locaux",
      ],
    },

    images: [
      { url: "/img/tournoi-amitie1.png", alt: "", caption: "" },
      { url: "/img/tournoi-amitie2.png", alt: "", caption: "" },
      { url: "/img/tournoi-amitie3.png", alt: "", caption: "" },
      { url: "/img/tournoi-amitie4.png", alt: "", caption: "" },
      { url: "/img/tournoi-amitie5.png", alt: "", caption: "" },
      { url: "/img/tournoi-amitie6.png", alt: "", caption: "" },
    ],

    contact: {
      nom: "Projet freelance",
      projectLink: "https://tournoi-amitie.vercel.app/",
      poste: "Développement Full-Stack",
      email: "contact@monportfolio.com",
      telephone: "Sur demande",
      recommandation:
        "Sur ce projet, j'ai surtout appris à concevoir pour des usages très concrets : des organisateurs qui saisissent un score depuis un téléphone en plein soleil, des spectateurs qui veulent l'info en deux secondes. La tech n'est qu'un moyen - l'expérience utilisateur est le vrai livrable.",
    },
  },

  {
    id: 3,
    title: "API Bible Digital - Plateforme de Lecture Biblique (freelance)",
    icon: <BookOpen className="w-6 h-6" />,
    contexte:
      "Des calendriers papier, une recherche laborieuse dans les textes, et une communauté qui attendait mieux. J'ai développé une API RESTful complète pour remplacer ces supports obsolètes : recherche full-text dans 31 000+ versets, rappels automatiques de lecture, plans personnalisables et gestion des marque-pages. L'architecture hexagonale garantit une maintenabilité à long terme, quelle que soit l'évolution des besoins.",

    enjeuxEconomiques: [
      "Remplacer les supports papier et réduire les coûts d'impression",
      "Augmenter l'engagement des utilisateurs grâce aux rappels et à la personnalisation",
    ],

    objectifs: [
      "Créer une API robuste pour la gestion des contenus bibliques",
      "Implémenter la recherche full-text et les rappels automatiques",
      "Gérer marque-pages, notes personnelles et plans de lecture",
    ],

    phases: [
      {
        nom: "Architecture & Core Domain",
        couleur: "blue",
        taches: [
          "Architecture hexagonale (Ports & Adapters), modélisation du domaine",
          "Services de recherche biblique et logique métier",
        ],
      },
      {
        nom: "Infrastructure & Fonctionnalités",
        couleur: "purple",
        taches: [
          "Adapters BDD, contrôleurs REST, JWT, rappels automatiques",
          "Recherche full-text, plans de lecture, statistiques personnelles",
        ],
      },
      {
        nom: "Tests & Déploiement",
        couleur: "red",
        taches: [
          "Déploiement sur Render, CI/CD, documentation Swagger complète",
        ],
      },
    ],

    resultats: {
      performance: [
        "Recherche en < 500ms sur 31 000+ versets",
        "API < 100ms sur les endpoints critiques, 100+ utilisateurs simultanés",
      ],
      business: [
        "Accès instantané à l'ensemble des textes, plans de lecture personnalisables",
        "Adoption immédiate par la communauté cible",
      ],
      technique: [
        "Architecture hexagonale testable et maintenable",
        "API RESTful documentée Swagger, cache pour les requêtes fréquentes",
      ],
    },

    impacts: {
      quantifies: [
        "Recherche 10x plus rapide qu'avec les supports papier",
        "100% des contenus accessibles numériquement",
      ],
      reconnaissance: [
        "Validation de l'architecture hexagonale sur un projet métier réel",
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
        "Ce projet m'a convaincu de l'importance de l'architecture hexagonale : quand le client a voulu ajouter des fonctionnalités en cours de route, aucune refonte n'a été nécessaire. La séparation du domaine et de l'infrastructure a tenu ses promesses dès les premiers changements.",
    },
  },

  {
    id: 4,
    title: "API E-commerce Multi-Tenant (projet personnel)",
    icon: <ShoppingCart className="w-6 h-6" />,
    contexte:
      "Et si plusieurs commerçants pouvaient partager une même infrastructure sans jamais voir les données des autres ? C'est le problème que j'ai voulu résoudre avec cette API multi-tenant : une plateforme où chaque boutique est isolée mais partage les coûts d'infrastructure. Un défi technique autant qu'une réflexion sur les modèles économiques du commerce en ligne mutualisé.",

    enjeuxEconomiques: [
      "Mutualiser l'infrastructure pour réduire les coûts des petits commerçants",
      "Modèle scalable avec commission sur les ventes",
    ],

    objectifs: [
      "Développer une architecture multi-tenant sécurisée avec isolation stricte des données",
      "Créer un système modulaire pour la gestion des boutiques, produits et commandes",
      "Implémenter un système de paiement unifié",
    ],

    phases: [
      {
        nom: "Architecture & Core",
        couleur: "blue",
        taches: [
          "Architecture hexagonale modulaire, schéma PostgreSQL multi-tenant",
          "Modules : tenants, catalogue, commandes, authentification JWT",
        ],
      },
      {
        nom: "Sécurité & Performance",
        couleur: "orange",
        taches: [
          "Isolation stricte des données entre tenants",
          "Optimisation des requêtes, tests de charge et sécurité",
        ],
      },
      {
        nom: "Déploiement & Documentation",
        couleur: "red",
        taches: [
          "Déploiement sur Render, documentation API complète pour développeurs",
        ],
      },
    ],

    resultats: {
      performance: [
        "Temps de réponse API < 200ms, 50+ boutiques simultanées supportées",
        "Gestion de 10 000+ produits sans perte de performance",
      ],
      business: [
        "Isolation des données validée par tests unitaires",
        "Architecture extensible pour de futurs modules",
      ],
      technique: [
        "Architecture hexagonale avec modules indépendants",
        "PostgreSQL multi-tenant, API RESTful documentée",
      ],
    },

    impacts: {
      quantifies: [
        "50+ boutiques simultanées supportées",
        "Réponse API moyenne de 200ms en environnement de test",
      ],
      reconnaissance: [
        "Validation technique par des pairs développeurs",
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
        "Ce projet est né d'une curiosité simple : comment les grandes plateformes gèrent-elles l'isolation des données ? En le construisant moi-même, j'ai compris les compromis réels - performance, sécurité, complexité de schéma - plutôt que de les lire dans un article.",
    },
  },

  {
    id: 5,
    title: "Analyse et Prévision de Séries Temporelles de Santé (IUT)",
    icon: <TrendingUp className="w-6 h-6" />,
    contexte:
      "Des décès mensuels dus à des maladies pulmonaires au Royaume-Uni, de 1974 à 1979. Six ans de données, une saisonnalité marquée, et la mission de comprendre - puis anticiper. Ce projet universitaire m'a fait parcourir toute la chaîne de l'analyse temporelle : exploration, tests de stationnarité, décomposition, puis modélisation prédictive avec ARIMA et SARIMA.",

    enjeuxEconomiques: [
      "Maîtriser les techniques de prévision appliquées aux données épidémiologiques",
      "Acquérir une méthodologie reproductible pour d'autres séries médicales",
    ],

    objectifs: [
      "Tester la stationnarité et identifier les composantes saisonnières",
      "Décomposer la série en tendance, saisonnalité et résidus",
      "Développer et comparer des modèles ARIMA, SARIMA et lissage exponentiel",
    ],

    phases: [
      {
        nom: "Exploration & Tests Statistiques",
        couleur: "blue",
        taches: [
          "Statistiques descriptives, visualisations multi-échelles",
          "Test ADF de stationnarité, ACF/PACF, test de Pettit",
        ],
      },
      {
        nom: "Décomposition & Modélisation",
        couleur: "purple",
        taches: [
          "Décomposition additif/multiplicatif, coefficients saisonniers",
          "ARIMA, SARIMA, lissage exponentiel - comparaison des performances",
        ],
      },
    ],

    resultats: {
      performance: [
        "Saisonnalité annuelle des décès identifiée clairement",
        "Modèle SARIMA optimal avec faible erreur de prédiction",
      ],
      business: [
        "Prévisions à 6 mois avec erreur moyenne de 8.2%",
        "Méthodologie reproductible pour d'autres séries médicales",
      ],
      technique: [
        "Maîtrise des librairies R : forecast, tseries, ggplot2",
        "Tests de stationnarité et validation croisée des modèles",
      ],
    },

    impacts: {
      quantifies: [
        "Prévisions à 6 mois, erreur moyenne 8.2%",
        "3 composantes saisonnières identifiées, modèle validé sur 72 points",
      ],
      reconnaissance: [
        "Badge universitaire obtenu, reconnaissance de la qualité analytique",
      ],
    },

    images: [
      { url: "/img/ts_plumonie_plot1.png", alt: "", caption: "" },
      { url: "/img/ts_plumonie_plot2.png", alt: "", caption: "" },
      { url: "/img/ts_plumonie_plot3.png", alt: "", caption: "" },
      { url: "/img/ts_plumonie_plot4.png", alt: "", caption: "" },
      { url: "/img/ts_plumonie_plot5.png", alt: "", caption: "" },
      { url: "/img/ts_plumonie_plot6.png", alt: "", caption: "" },
    ],

    contact: {
      nom: "Projet Universitaire - IUT Science des Données",
      projectLink: "",
      poste: "Étudiant en Data Science",
      email: "formation@iut-univ.fr",
      telephone: "Établissement universitaire",
      recommandation:
        "Ce projet m'a montré que l'analyse temporelle, c'est autant une question de méthode que d'intuition. Avant de modéliser, il faut vraiment regarder les données - les pics de décès en hiver, la régularité du cycle annuel. La rigueur statistique vient après, pour confirmer ce qu'on pressent.",
    },
  },

  {
    id: 6,
    title: "Analyse par Échantillonnage et Plans d'Expérience (IUT)",
    icon: <BarChart3 className="w-6 h-6" />,
    contexte:
      "L'enquête « Histoire de vie » (hdv2003) porte sur la construction des identités sociales en France. Mais derrière les données, c'est la question du comment qu'on a creusé : comment échantillonner correctement ? Comment mesurer la précision d'un estimateur ? Comment redresser un échantillon biaisé ? Ce projet couvre toute la chaîne - du plan d'échantillonnage à la simulation Monte Carlo, jusqu'à la collecte de données originales sur 50 personnes.",

    enjeuxEconomiques: [
      "Maîtriser les méthodes d'échantillonnage statistique utilisées en études de marché et en recherche sociale",
    ],

    objectifs: [
      "Implémenter des plans d'échantillonnage PESR et stratifié",
      "Évaluer la précision des estimateurs par simulations Monte Carlo",
      "Comparer les méthodes de redressement d'échantillon",
      "Concevoir et déployer un questionnaire original sur 50 répondants",
    ],

    phases: [
      {
        nom: "Exploration & Nettoyage",
        couleur: "blue",
        taches: [
          "Analyse hdv2003 : tris à plat, tris croisés, analyses multifactorielles",
        ],
      },
      {
        nom: "Échantillonnage & Simulations",
        couleur: "purple",
        taches: [
          "Plans PESR et stratifié, intervalles de confiance à 80%",
          "1000 simulations Monte Carlo, redressement par ratio et post-stratification",
        ],
      },
      {
        nom: "Collecte & Synthèse",
        couleur: "red",
        taches: [
          "Questionnaire de 10 questions, collecte sur 50 personnes, rapport final",
        ],
      },
    ],

    resultats: {
      performance: [
        "Variance réduite de 40% avec l'échantillonnage stratifié",
        "Intervalles de confiance validés sur 1000 simulations",
        "Taux de réponse au questionnaire : 92%",
      ],
      business: [
        "Précision des estimateurs améliorée de 35% après redressement",
        "Méthodologie reproductible pour les études d'opinion",
      ],
      technique: [
        "Maîtrise avancée de R : échantillonnage complexe, simulation, visualisation",
      ],
    },

    impacts: {
      quantifies: [
        "50 questionnaires collectés, précision améliorée de 35%",
        "Badge universitaire SAE 3.EMS.01 obtenu avec mention",
      ],
      reconnaissance: [
        "Cité comme exemple de bonne pratique d'échantillonnage",
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
      nom: "Projet Universitaire - IUT Science des Données",
      projectLink: "",
      poste: "Étudiant en Data Science",
      email: "formation@iut-univ.fr",
      telephone: "Établissement universitaire",
      recommandation:
        "Ce projet m'a appris que derrière chaque statistique, il y a un choix de méthode - et que ce choix a des conséquences réelles sur ce qu'on conclut. Comprendre pourquoi un estimateur est biaisé, et comment le corriger, c'est ce qui m'a donné envie d'aller plus loin dans l'inférence statistique.",
    },
  },

  {
    id: 7,
    title: "Base de Données Série TV - Breaking Bad (IUT)",
    icon: <Database className="w-6 h-6" />,
    contexte:
      "Concevoir une base de données sur Breaking Bad, c'est d'abord résoudre un problème de modélisation : comment représenter des personnages, des épisodes, des récompenses et des relations dans un schéma cohérent ? Ce projet universitaire couvre tout - du MCD au déploiement PostgreSQL - en passant par un pipeline ETL avec FME et Python pour extraire, nettoyer et charger les données réelles de la série.",

    enjeuxEconomiques: [
      "Maîtriser les outils ETL professionnels (FME) et la modélisation dimensionnelle",
      "Développer une méthodologie réutilisable pour d'autres projets de données culturelles",
    ],

    objectifs: [
      "Concevoir le MCD avec Looping et le modèle en flocons avec dimension temporelle",
      "Extraire et nettoyer les données depuis le web via Python",
      "Implémenter les processus ETL avec FME et charger la BDD PostgreSQL",
    ],

    phases: [
      {
        nom: "Modélisation",
        couleur: "blue",
        taches: [
          "MCD avec Looping, modèle en flocons avec dimension temporelle",
        ],
      },
      {
        nom: "Extraction & Transformation",
        couleur: "green",
        taches: [
          "Scraping Python, transformation FME, nettoyage Power BI",
        ],
      },
      {
        nom: "Implémentation & Documentation",
        couleur: "red",
        taches: [
          "BDD PostgreSQL, tests d'intégrité, documentation technique complète",
        ],
      },
    ],

    resultats: {
      performance: [
        "15+ tables relationnelles normalisées, ETL automatisé avec FME",
        "5 saisons et 62 épisodes structurés, 98% des données nettoyées",
      ],
      business: [
        "Modèle réutilisable pour d'autres séries ou projets multimédias",
      ],
      technique: [
        "Maîtrise de PostgreSQL, FME, Python et modélisation dimensionnelle",
      ],
    },

    impacts: {
      quantifies: [
        "500+ données extraites sur personnages et épisodes",
        "10+ entités modélisées, 98% de taux de nettoyage",
      ],
      reconnaissance: [
        "Badge universitaire en gestion de données obtenu",
        "Documentation technique saluée pour sa qualité",
      ],
    },

    images: [
      { url: "/img/breaking1.png", alt: "", caption: "" },
      { url: "/img/breaking2.png", alt: "", caption: "" },
      { url: "/img/breaking3.png", alt: "", caption: "" },
      { url: "/img/breaking4.png", alt: "", caption: "" },
    ],

    contact: {
      nom: "Projet Universitaire - IUT Science des Données",
      projectLink: "",
      poste: "Étudiant en Data Science",
      email: "formation@iut-univ.fr",
      telephone: "Établissement universitaire",
      recommandation:
        "Ce projet m'a montré que la modélisation de données, c'est avant tout une question de décisions. Chaque entité, chaque relation, chaque clé étrangère est un choix - avec des conséquences sur la performance, la maintenabilité et l'évolutivité. Travailler sur une série que j'apprécie n'a pas nui à la rigueur, bien au contraire.",
    },
  },

  {
    id: 8,
    title: "Détection de Spam - NLP & Régression Logistique from scratch",
    icon: <ShieldAlert className="w-6 h-6" />,
    contexte:
      "Je voulais comprendre ce qu'il se passe vraiment à l'intérieur d'un classifieur. Pas utiliser scikit-learn et regarder le score monter - construire chaque brique à la main : le nettoyage du texte, la vectorisation Bag of Words, la fonction sigmoïde, la descente de gradient. Sur 5700+ emails, ce pipeline 100% NumPy atteint 99.09% de précision. Le chiffre compte moins que ce qu'il a fallu comprendre pour y arriver.",

    enjeuxEconomiques: [
      "Comprendre les fondements mathématiques des algorithmes de classification binaire",
      "Acquérir la capacité d'auditer et d'interpréter des modèles de décision IA",
    ],

    objectifs: [
      "Implémenter un nettoyeur de texte performant (Regex, tokenisation)",
      "Coder une vectorisation Bag of Words manuelle",
      "Programmer sigmoïde, log-loss et descente de gradient en NumPy",
      "Optimiser le learning rate via validation croisée K-Fold personnalisée",
      "Visualiser les données en 2D via réduction PCA",
    ],

    phases: [
      {
        nom: "NLP & Vectorisation",
        couleur: "blue",
        taches: [
          "Regex, tokenisation, normalisation sur 5700+ emails",
          "Construction du vocabulaire, encodage binaire (sparse matrix)",
        ],
      },
      {
        nom: "Mathématiques & Optimisation",
        couleur: "purple",
        taches: [
          "Sigmoïde, log-loss, descente de gradient vectorisée",
          "K-Fold cross-validation, grid search (alpha optimal : 5.8)",
        ],
      },
      {
        nom: "Évaluation & Visualisation",
        couleur: "green",
        taches: [
          "F1-Score, ROC AUC, matrice de confusion",
          "PCA 2D pour visualiser la séparation des clusters",
        ],
      },
    ],

    resultats: {
      performance: [
        "F1-Score moyen de 97.99% en validation croisée",
        "Accuracy globale de 99.09%, ROC AUC parfaite de 1.00",
        "Convergence stable de la fonction de coût validée graphiquement",
      ],
      business: [
        "Algorithme de filtrage prêt au déploiement, totalement transparent",
        "Code modulaire et réutilisable pour d'autres tâches de classification",
      ],
      technique: [
        "Pipeline 100% Python/NumPy, matrices 5000×3000+",
        "Aucune dépendance scikit-learn pour l'entraînement",
      ],
    },

    impacts: {
      quantifies: [
        "97.59% de rappel sur les spams, 98.42% de précision",
        "~9 min d'entraînement pour la validation complète",
      ],
      reconnaissance: [
        "Preuve concrète de maîtrise de l'algèbre linéaire appliquée",
        "Autonomie complète démontrée en Data Science",
      ],
    },

    images: [
      { url: "/img/spam_class_dist.png", alt: "Distribution Ham vs Spam", caption: "Déséquilibre des classes initial" },
      { url: "/img/spam_top_words.png", alt: "Mots fréquents", caption: "Analyse fréquentielle du corpus" },
      { url: "/img/spam_msg_length.png", alt: "Longueur des messages", caption: "Corrélation longueur/spam" },
      { url: "/img/spam_pca_vis.png", alt: "Visualisation PCA", caption: "Séparation des clusters en 2D" },
      { url: "/img/spam_roc_curve.png", alt: "Courbe ROC", caption: "Performance (AUC = 1.00)" },
      { url: "/img/spam_confusion_matrix.png", alt: "Matrice de confusion", caption: "Analyse fine des erreurs" },
    ],

    contact: {
      nom: "Projet Personnel - R&D",
      projectLink: "https://github.com/mawuli100dev-hue/henoc-learnia/tree/main/logistic_regression_data_treatment_email",
      poste: "Étudiant en Data Science",
      email: "ton.email@etudiant.univ-perp.fr",
      telephone: "Portfolio Personnel",
      recommandation:
        "Recoder la descente de gradient à la main, c'est inconfortable - et c'est exactement pour ça que je l'ai fait. À partir du moment où tu comprends pourquoi le learning rate de 5.8 converge mieux que 0.01, tu débogues différemment. Tu ne subis plus le modèle, tu le comprends.",
    },
  },

  {
    id: 9,
    title: "Prédiction de Prix Automobile - Régression Linéaire from scratch",
    icon: <TrendingUp className="w-6 h-6" />,
    contexte:
      "Sur le dataset CarPrice, la relation entre cylindrée et prix n'est pas linéaire - elle est exponentielle. Avant de modéliser quoi que ce soit, il faut le voir, le transformer, et comprendre pourquoi. Ce projet m'a fait construire intégralement la descente de gradient en NumPy, appliquer une transformation log-log pour linéariser la relation, et mesurer l'impact concret du prétraitement : le R² passe de médiocre à 0.715 - non pas grâce à un algorithme plus sophistiqué, mais grâce à une meilleure compréhension des données.",

    enjeuxEconomiques: [
      "Maîtriser les transformations non-linéaires et leur impact sur la modélisation",
      "Comprendre les fondements de l'économétrie appliquée aux données automobiles",
    ],

    objectifs: [
      "Explorer les corrélations entre caractéristiques techniques et prix",
      "Traiter les outliers via Z-score et linéariser via transformation logarithmique",
      "Programmer MSE et descente de gradient from scratch",
      "Comparer les performances dans l'espace log vs réel",
    ],

    phases: [
      {
        nom: "EDA & Feature Engineering",
        couleur: "blue",
        taches: [
          "Détection de l'asymétrie, visualisation des outliers",
          "Transformation log-log, Z-score (réduction à 199 observations)",
        ],
      },
      {
        nom: "Modélisation & Validation",
        couleur: "orange",
        taches: [
          "MSE et descente de gradient vectorisée, 1000 itérations, lr=0.01",
          "R² manuel, transformation inverse, comparaison log vs réel",
        ],
      },
    ],

    resultats: {
      performance: [
        "R² de 0.715 en échelle réelle après transformation",
        "Convergence stable de la fonction de coût",
      ],
      business: [
        "Démonstration concrète : la qualité des données prévaut sur la complexité de l'algorithme",
      ],
      technique: [
        "NumPy pur, gestion avancée des transformations log-log",
        "Visualisation comparative des espaces de projection",
      ],
    },

    impacts: {
      quantifies: [
        "71.5% de la variance du prix expliquée par la cylindrée",
        "205 fiches techniques automobiles traitées",
      ],
      reconnaissance: [
        "Illustration parfaite du compromis biais-variance",
        "Preuve de compétence en prétraitement statistique avancé",
      ],
    },

    images: [
      { url: "/img/car_price_dist.png", alt: "Distribution des prix", caption: "Asymétrie initiale" },
      { url: "/img/car_scatter_raw.png", alt: "Nuage brut", caption: "Relation curviligne Enginesize / Price" },
      { url: "/img/car_scatter_log.png", alt: "Nuage log", caption: "Linéarisation après transformation" },
      { url: "/img/car_cost_history.png", alt: "Descente de gradient", caption: "Convergence de la fonction de coût" },
      { url: "/img/car_reg_fit.png", alt: "Régression finale", caption: "Ajustement du modèle" },
    ],

    contact: {
      nom: "Projet Personnel - R&D",
      projectLink: "https://github.com/mawuli100dev-hue/henoc-learnia/tree/main/car_price_reg",
      poste: "Étudiant en Data Science",
      email: "ton.email@etudiant.univ-perp.fr",
      telephone: "Portfolio Personnel",
      recommandation:
        "La leçon de ce projet tient en une phrase : un bon nettoyage vaut souvent mieux qu'un bon algorithme. Passer d'un R² de 0.4 à 0.715 sans changer de modèle - juste en transformant les données - c'est une leçon qu'on ne lit pas dans les cours théoriques. On la comprend en la vivant.",
    },
  },
];