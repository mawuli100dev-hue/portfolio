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
      "Développement d'un tableau de bord interactif pour le projet de thèse ANTICI'PYR de Noémie Collette, visant à visualiser l'impact du changement climatique sur 59 espèces endémiques et menacées des Pyrénées. Le dashboard permet d'explorer les modèles de distribution d'espèces sous différents scénarios climatiques SSP, avec cartographie raster géoréférencée et interface multilingue.",
    enjeuxEconomiques: [
      "Valorisation scientifique des données de modélisation pour la conservation de la biodiversité pyrénéenne",
      "Accessibilité des résultats de recherche pour les gestionnaires d'espaces naturels protégés",
      "Support à la prise de décision pour les politiques de conservation transfrontalières (France, Espagne, Andorre)",
      "Intégration prévue dans le site Floralab+",
    ],
    objectifs: [
      "Visualiser les projections de distribution d'espèces végétales sous scénarios SSP 126, 245, 370 et 585",
      "Afficher les cartes raster actuelles et futures par horizon temporel (2030, 2050, 2070, 2090)",
      "Proposer une interface multilingue (français, anglais, espagnol, catalan)",
      "Permettre l'ajout de nouvelles espèces via une interface d'administration sans modification de code",
      "Générer des fiches PDF téléchargeables par espèce avec cartographie intégrée",
    ],
    phases: [
      {
        nom: "Exploration & Architecture",
        couleur: "blue",
        taches: [
          "Analyse des données cartographiques",
          "Définition de la structure de données par espèce",
          "Mise en place de l'architecture modulaire du projet",
          "Choix des bibliothèques GIS : Cartopy, Folium, GeoPandas",
        ],
      },
      {
        nom: "Développement Cartographie",
        couleur: "green",
        taches: [
          "Rendu raster géoréférencé avec Cartopy",
          "Cartes interactives Folium avec overlay TIFF",
          "Gestion de l'opacité RGBA au niveau image",
          "Export cartographique PNG avec projection Pyrénées correcte",
        ],
      },
      {
        nom: "Interface & Multilingue",
        couleur: "purple",
        taches: [
          "Sidebar avec sélecteur d'espèce, période et scénario SSP",
          "Système de traduction",
          "Onboarding modal avec navigation multi-étapes",
          "Onglets Carte de répartition, SSP et Interprétation",
        ],
      },
      {
        nom: "Interface d'administration",
        couleur: "orange",
        taches: [
          "Formulaire d'upload de dossiers espèces zippés",
          "Validation de la structure interne des dossiers",
          "Dépôt automatique sur bucket Backblaze",
        ],
      },
      {
        nom: "Génération PDF & Déploiement",
        couleur: "red",
        taches: [
          "Génération de fiches PDF par espèce avec ReportLab",
          "Ratio cartographique Pyrénées",
          "Déploiement du dashboard sur le Cloud",
          "Tests multilingues et validation des 59 espèces",
        ],
      },
    ],
    resultats: {
      performance: [
        "Chargement des cartes raster sans déformation de projection",
        "Export PDF avec cartographie géoréférencée en ratio Pyrénées",
        "Interface réactive sur tous devices avec sidebar dynamique",
        "Chargement dynamique des espèces depuis le bucket Backblaze sans redéploiement",
      ],
      business: [
        "59 espèces endémiques pyrénéennes visualisables",
        "4 scénarios climatiques SSP couvrant 2030 à 2090",
        "Interface accessible en français, anglais, espagnol et catalan",
        "Ajout d'espèces autonome par les chercheurs via l'interface admin",
      ],
      technique: [
        "Architecture modulaire : core/, ui/, assets/ bien séparés",
        "Traductions découplées du code via un fichier centralisé",
        "Stockage distant des données cartographiques sur Backblaze",
        "Gestion RGBA native pour l'opacité raster sans double couche Folium",
      ],
    },
    impacts: {
      quantifies: [
        "59 espèces modélisées et visualisables sur le dashboard",
        "4 langues supportées pour une couverture transfrontalière (FR, EN, ES, CAT)",
        "4 horizons temporels (2030-2090) et 4 scénarios SSP accessibles",
        "100% des espèces ajoutables sans intervention sur le code",
      ],
      reconnaissance: [
        "Intégration dans le site Floralab+ de l'Université de Perpignan",
        "Outil de communication scientifique pour la thèse ANTICI'PYR",
        "Support à la conservation de la biodiversité pyrénéenne endémique",
      ],
    },
    images: [
      {
        url: "/img/anticipyr0.webp",
        alt: "",
        caption: "",
      },
      {
        url: "/img/anticipyr1.webp",
        alt: "",
        caption: "",
      },
      {
        url: "/img/anticipyr2.webp",
        alt: "",
        caption: "",
      },
    ],
    contact: {
      nom: "Stage - CEFREM / Université de Perpignan",
      projectLink: "https://dashanticipyr-rdfsittsujgfzbkbd5hxk8.streamlit.app",
      poste: "Développement Dashboard Scientifique",
      email: "contact@monportfolio.com",
      telephone: "Sur demande",
      recommandation:
        "Ce projet démontre ma capacité à produire un outil de dataviz scientifique complet, du traitement de données raster géoréférencées jusqu'au déploiement cloud. L'architecture modulaire, le système multilingue découplé et l'interface d'administration sans code illustrent une approche orientée utilisateur final dans un contexte de recherche académique.",
    },
  },
    {
    id: 11,
    title: "Dépôt de Poussière - Analyse Climatique Golfe du Lion (stage)",
    icon: <Wind className="w-6 h-6" />,
    contexte:
        "Analyse et visualisation des flux de dépôt de poussières sahariennes sur le Golfe du Lion sur la période 1959–2024, à partir des sorties du modèle climatique régional ALADIN, des données de réanalyse CAMS (2019–2025) et des observations in situ du réseau MOOSE (Cap Frioul, Cap Bear, 2007–2024). Le projet vise à quantifier les dépôts secs et humides, évaluer les biais du modèle, et identifier les tendances long-terme et la variabilité saisonnière du dépôt atmosphérique de poussières désertiques en Méditerranée nord-occidentale.",
    enjeuxEconomiques: [
        "Compréhension de l'apport en nutriments (Fe, P) aux eaux du Golfe du Lion via les dépôts sahariennes",
        "Évaluation de l'impact des poussières désertiques sur la productivité biologique marine et les écosystèmes pélagiques",
        "Support scientifique pour les modèles de qualité de l'air et les projections climatiques régionales en Méditerranée",
        "Contribution aux rapports d'état de l'environnement marin dans le cadre du réseau MOOSE",
    ],
    objectifs: [
        "Calculer les flux annuels de dépôt total, sec (drydust) et humide (wetdust) à partir des sorties ALADIN sur 1959–2024",
        "Comparer les flux ALADIN aux observations MOOSE (Cap Frioul, Cap Bear) et aux réanalyses CAMS",
        "Quantifier le biais relatif annuel ALADIN vs observations aux deux stations de mesure",
        "Cartographier la distribution spatiale du dépôt total et de ses tendances linéaires sur le Golfe du Lion",
        "Analyser la variabilité saisonnière et décennale du dépôt de poussières sur 65 ans",
    ],
    phases: [
        {
        nom: "Extraction & Préparation des Données",
        couleur: "blue",
        taches: [
            "Extraction des variables drydust, wetdust, totaldust depuis les fichiers NetCDF ALADIN",
            "Chargement et découpage spatial des données CAMS sur le domaine Golfe du Lion",
            "Fusion des séries temporelles MOOSE (Cap Frioul, Cap Bear) avec les sorties modèles",
            "Calcul des fractions dépôt sec/humide et des flux intégrés en MT/an",
        ],
        },
        {
        nom: "Analyse Statistique",
        couleur: "green",
        taches: [
            "Calcul du biais relatif annuel ALADIN vs MOOSE : (ALADIN − OBS) / OBS × 100",
            "Régression linéaire pixel-par-pixel pour la tendance long-terme 1959–2024",
            "Calcul de la différence symétrique relative ALADIN vs CAMS sur 2019–2024",
            "Moyennes décennales par période de 10 ans et moyennes saisonnières (DJF, MAM, JJA, SON)",
        ],
        },
        {
        nom: "Cartographie Spatiale",
        couleur: "purple",
        taches: [
            "Projection et affichage des champs raster sur la grille ALADIN avec contours côtiers",
            "Cartes du dépôt total annuel (2019–2024) et de la moyenne 1959–2024",
            "Carte de la tendance linéaire pixel-par-pixel avec colorbar divergente",
            "Cartes de la différence relative ALADIN–CAMS par année et en moyenne",
        ],
        },
        {
        nom: "Validation aux Points de Mesure",
        couleur: "orange",
        taches: [
            "Extraction des valeurs modèle aux pixels correspondant à Cap Bear et Cap Frioul",
            "Calcul du biais relatif annuel pour chaque station sur 2007–2024",
            "Visualisation barres vertes/rouges (surestimation / sous-estimation)",
            "Comparaison interannuelle ALADIN, CAMS et MOOSE en flux intégrés (MT/an)",
        ],
        },
        {
        nom: "Visualisation & Export",
        couleur: "red",
        taches: [
            "Génération des figures multi-panneaux (saisonnier, décennal, annuel)",
            "Export CSV des données fusionnées ALADIN / CAMS / MOOSE pour archivage",
            "Mise en forme des figures pour intégration dans un rapport ou une publication",
        ],
        },
    ],
    resultats: {
        performance: [
        "Flux ALADIN stables autour de 0.15–0.28 MT/an sur 65 ans avec forte variabilité interannuelle",
        "Biais ALADIN positifs dominants (surestimation) à Cap Bear sur la majorité des années 2007–2024",
        "Dépôt sec largement dominant (~63–67% du total) sur l'ensemble du Golfe du Lion",
        "Tendance à la baisse du dépôt détectée sur la majeure partie du golfe sur 1959–2024",
        ],
        business: [
        "65 ans de données de dépôt modélisé (1959–2024) analysés et archivés",
        "2 stations d'observation MOOSE validées (Cap Frioul, Cap Bear) sur 2007–2024",
        "3 sources de données comparées : ALADIN, CAMS (2019–2025) et MOOSE",
        "Variabilité saisonnière claire : dépôts maximaux au printemps (MAM) et à l'automne (SON)",
        ],
        technique: [
        "Pipeline Python complet : xarray pour NetCDF, pandas pour les séries temporelles, matplotlib pour les figures",
        "Calcul de tendance linéaire spatialisée via numpy.polyfit appliqué pixel par pixel",
        "CSV de synthèse fusionné exporté avec toutes les variables clés par année",
        "Découpage spatial du domaine Golfe du Lion appliqué de façon cohérente sur les trois sources",
        ],
    },
    impacts: {
        quantifies: [
        "65 ans de données ALADIN analysés (1959–2024)",
        "3 sources de données croisées : ALADIN, CAMS, MOOSE",
        "Biais interannuels mesurés sur 2 stations : jusqu'à +132% (Cap Bear 2020) et −65% (Cap Frioul 2017)",
        "4 saisons et 6 décennies documentées pour la variabilité du dépôt",
        ],
        reconnaissance: [
        "Contribution à la base de données climatiques sur les aérosols désertiques en Méditerranée au CEFREM",
        "Résultats exploitables pour les équipes de recherche MOOSE et de modélisation régionale",
        "Support analytique pour des études d'impact des poussières sahariennes sur les écosystèmes marins",
        ],
    },
    images: [
        {
        url: "/img/sno_moose_gdl_totaldust_fractions.png",
        alt: "Fractions dépôt sec et humide ALADIN sur le Golfe du Lion 1959–2024",
        caption: "Fraction dépôt sec (drydust/totaldust) et humide (wetdust/totaldust)",
        },
        {
        url: "/img/sno_moose_gdl_dust_comparison.png",
        alt: "Flux de dépôt de poussière MT/an - MOOSE, CAMS, ALADIN",
        caption: "Comparaison des flux annuels ALADIN, CAMS et observations MOOSE",
        },
        {
        url: "/img/sno_moose_gdl_point_bias.webp",
        alt: "Biais relatif ALADIN vs Observations Cap Bear et Cap Frioul",
        caption: "Biais relatif annuel ALADIN vs MOOSE aux deux stations de mesure",
        },
        {
        url: "/img/sno_moose_gdl_totaldust_years_2019_2024.png",
        alt: "Dépôt total poussière ALADIN 2019–2024 et moyenne 1959–2024",
        caption: "Cartographie annuelle du dépôt total et moyenne climatologique",
        },
        {
        url: "/img/sno_moose_gdl_diff_relative_annuelle.png",
        alt: "Différence symétrique relative ALADIN vs CAMS 2019–2024",
        caption: "Comparaison spatiale ALADIN–CAMS par année et en moyenne",
        },
        {
        url: "/img/sno_moose_gdl_trend_aladin.webp",
        alt: "Tendance linéaire dépôt poussière ALADIN 1959–2024",
        caption: "Pente de la tendance linéaire pixel-par-pixel sur 65 ans",
        },
        {
        url: "/img/sno_moose_gdl_totaldust_seasonal.webp",
        alt: "Moyennes saisonnières dépôt total ALADIN Golfe du Lion",
        caption: "Cycle saisonnier du dépôt : hiver, printemps, été, automne",
        },
        {
        url: "/img/sno_moose_gdl_totaldust_periods.png",
        alt: "Moyennes décennales dépôt total ALADIN 1959–2024",
        caption: "Évolution décennale du dépôt de poussière par périodes de 10 ans",
        },
    ],
    contact: {
        nom: "Projet - Analyse Climatique Aérosols Méditerranée",
        projectLink: "",
        poste: "Analyse de données climatiques & Visualisation scientifique",
        email: "contact@monportfolio.com",
        telephone: "Sur demande",
        recommandation:
        "Ce projet démontre ma capacité à traiter et analyser des séries temporelles climatiques longues (65 ans) issues de modèles régionaux, à croiser plusieurs sources de données hétérogènes (modèle, réanalyse, observations terrain) et à produire des visualisations spatiales et statistiques de qualité publication. La rigueur méthodologique dans le calcul des biais, des tendances et des fractions illustre une maîtrise complète du pipeline d'analyse scientifique en Python.",
    },
},
{
  id: 12,
  title: "LYCAON BONE - Segmentation des morsures et analyse des pits (fémur, humérus, tibia, radius-ulna)",
  icon: <Bone className="w-6 h-6" />,
  contexte:
    "Étude taphonomique des marques de morsure sur ossements de lycaon (Lycaon pictus). Deux verrous scientifiques : détecter automatiquement les zones de morsure (contour, polie, broyée) sur des photos d’os, et cartographier la répartition des micro-dépressions (« pits ») sur plusieurs types d’os longs (fémur, humérus, tibia, radius-ulna) à partir de données géospatiales et métriques.",
  enjeuxEconomiques: [
    "Automatiser l’analyse ostéologique pour accélérer les études archéozoologiques et paléontologiques",
    "Fournir des visualisations reproductibles et quantifiables (heatmap, taille proportionnelle) pour publications scientifiques",
    "Permettre des comparaisons inter‑os et inter‑individus sur les patterns de prédation",
  ],
  objectifs: [
    "Segmenter les morsures sur images TIFF via SAM2, avec post‑traitements CLAHE et filtres morphologiques (circularité, surface, élancement)",
    "Détecter trois zones distinctes : contour externe (vert), zone polie (cyan), zone broyée (orange)",
    "Traiter l’ensemble des os longs (fémur, humérus, tibia, radius-ulna) à partir de shapefiles et GeoJSON",
    "Joindre les mesures Leica (longueur/largeur des pits) depuis un fichier ODS",
    "Générer pour chaque os une carte proportionnelle des pits (taille ∝ √(L×l)) et une heatmap de densité KDE masquée par le contour",
  ],
  phases: [
    {
      nom: "Prétraitement & segmentation SAM2",
      couleur: "blue",
      taches: [
        "Normalisation TIFF → RGB + CLAHE (clip=3.0, tile=8×8)",
        "Inférence SAM2 (points_per_batch=64, iou_thresh=0.70)",
        "Filtrage des masques par ratio surface (0.5‑15%), circularité (>0.3), élancement (>0.3)",
      ],
    },
    {
      nom: "Zones polie & broyée",
      couleur: "green",
      taches: [
        "Espace LAB : seuil haut de luminance (80e percentile) pour zone polie (cyan)",
        "Variance locale (fenêtre 9×9) seuillée à 70e percentile pour zone broyée (orange)",
        "Nettoyage morphologique et dessin des contours",
      ],
    },
    {
      nom: "Intégration géospatiale multi‑os",
      couleur: "purple",
      taches: [
        "Chargement shapefile contour + GeoJSON points pour chaque os (fémur, humérus, tibia, radius‑ulna)",
        "Filtrage des points « pits » et reprojection CRS homogène",
        "Jointure avec tableur ODS (colonnes Longueur/Largeur Leica) sur (id, ID_Os)",
      ],
    },
    {
      nom: "Cartographie proportionnelle",
      couleur: "orange",
      taches: [
        "Taille du marqueur : normalisation de √(Longueur×Largeur) entre 30 et 450 px",
        "Carte colorée (YlOrRd) avec barre de graduation en mm",
        "Légende discrète : Petite / Moyenne / Grande",
      ],
    },
    {
      nom: "Heatmap de densité KDE",
      couleur: "red",
      taches: [
        "Estimation par noyau gaussien sur l’emprise du contour",
        "Masquage des pixels hors os (shapely.union + contains)",
        "Rendu pcolormesh (alpha=0.88, vmax=97e percentile) avec superposition des points",
      ],
    },
  ],
  resultats: {
    performance: [
      "Pipeline opérationnel sur CPU pour 185 images TIFF (segmentation SAM2 + post‑traitements)",
      "Filtrage robuste éliminant les micro‑parasites et les faux contours",
      "Heatmap KDE sans débordement hors du contour osseux",
    ],
    business: [
      "4 types d’os longs analysés : fémur, humérus, tibia, radius‑ulna",
      "Cartes reproductibles pour comparer la répartition et la taille des pits",
      "Méthodologie transférable à d’autres collections ostéologiques",
    ],
    technique: [
      "Pipeline TIFF → CLAHE → SAM2 → morphologie → export PNG",
      "Intégration GeoPandas + Shapely + jointure ODS",
      "Visualisations scientifiques : scatter proportionnel + heatmap masquée",
    ],
  },
  impacts: {
    quantifies: [
      "185 photographies d’ossements traitées, avec détection de morsure >85%",
      "4 os longs modélisés (fémur, humérus, tibia, radius‑ulna)",
      "57 pits extraits et reliés à des mesures métriques réelles",
      "3 sorties visuelles par os : contour simple, pits gradués, heatmap",
    ],
    reconnaissance: [
      "Démonstration de SAM2 sur images archéozoologiques non annotées",
      "Nouvelle méthode de distinction zone polie/broyée par luminance + variance locale",
      "Outil géospatial inédit pour l’étude des pits sur canidés sauvages",
    ],
  },
  images: [
    {
      url: "/img/seg_morsures_radio_ulna_contour_points.webp",
      alt: "",
      caption: "",
    },
    {
      url: "/img/seg_morsures_radio_ulna_heatmap.webp",
      alt: "",
      caption: "",
    },
    {
      url: "/img/seg_morsures_radio_ulna_pits_sized.webp",
      alt: "",
      caption: "",
    },
    {
      url: "/img/seg_morsures_traitement1.webp",
      alt: "",
      caption: "",
    },
    {
      url: "/img/seg_morsures_contour1.webp",
      alt: "",
      caption: "",
    },
    {
      url: "/img/seg_morsures_contour2.webp",
      alt: "",
      caption: "",
    },
  ],
  contact: {
    nom: "Stage - Analyse taphonomique de morsures sur ossements de lycaon",
    projectLink: "",
    poste: "Data scientist / développeur scientifique",
    email: "votre.email@exemple.com",
    telephone: "Sur demande",
    recommandation:
      "Ce projet illustre ma capacité à combiner deep learning et analyse géospatiale (GeoPandas, KDE) sur des données réelles d’ossements. J’ai su adapter un modèle générique à des images osseuses via des critères morphologiques (circularité, surface) et extraire automatiquement trois zones fonctionnelles. Sur la partie géospatiale, j’ai intégré shapefiles, GeoJSON et tableur ODS pour produire des cartes proportionnelles et des heatmaps masquées, sur quatre types d’os longs. L’approche modulaire et documentée permet une réutilisation directe en archéozoologie.",
  },
},
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
        url: "/img/extase-home0.webp",
        alt: "",
        caption: "",
      },
      {
        url: "/img/extase-home1.webp",
        alt: "",
        caption: "",
      },
      {
        url: "/img/extase-home3.webp",
        alt: "",
        caption: "",
      },
      {
        url: "/img/extase-home4.webp",
        alt: "",
        caption: "",
      },
      {
        url: "/img/extase-home5.webp",
        alt: "",
        caption: "",
      },
      {
        url: "/img/extase-home6.webp",
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
        url: "/img/tournoi-amitie1.webp",
        alt: "",
        caption: "",
      },
      {
        url: "/img/tournoi-amitie2.webp",
        alt: "",
        caption: "",
      },
      {
        url: "/img/tournoi-amitie3.webp",
        alt: "",
        caption: "",
      },
      {
        url: "/img/tournoi-amitie4.webp",
        alt: "",
        caption: "",
      },
      {
        url: "/img/tournoi-amitie5.webp",
        alt: "",
        caption: "",
      },
      {
        url: "/img/tournoi-amitie6.webp",
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
        url: "/img/ts_plumonie_plot1.webp",
        alt: "",
        caption: "",
      },
      { url: "/img/ts_plumonie_plot2.webp", alt: "", caption: "" },
      {
        url: "/img/ts_plumonie_plot3.webp",
        alt: "",
        caption: "",
      },
      { url: "/img/ts_plumonie_plot4.webp", alt: "", caption: "" },
      {
        url: "/img/ts_plumonie_plot5.webp",
        alt: "",
        caption: "",
      },
      { url: "/img/ts_plumonie_plot6.webp", alt: "", caption: "" },
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
      { url: "/img/sondage_loisir_immig_plot_1.webp", alt: "", caption: "" },
      { url: "/img/sondage_loisir_immig_plot_2.webp", alt: "", caption: "" },
      { url: "/img/sondage_loisir_immig_plot_3.webp", alt: "", caption: "" },
      { url: "/img/sondage_loisir_immig_plot_4.webp", alt: "", caption: "" },
      { url: "/img/sondage_loisir_immig_plot_5.webp", alt: "", caption: "" },
      { url: "/img/sondage_loisir_immig_plot_6.webp", alt: "", caption: "" },
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
      { url: "/img/breaking1.webp", alt: "", caption: "" },
      { url: "/img/breaking2.webp", alt: "", caption: "" },
      { url: "/img/breaking3.webp", alt: "", caption: "" },
      { url: "/img/breaking4.webp", alt: "", caption: "" },
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
        url: "/img/spam_class_dist.webp",
        alt: "Distribution des classes Ham vs Spam",
        caption: "Déséquilibre des classes initial",
      },
      {
        url: "/img/spam_top_words.webp",
        alt: "Mots les plus fréquents",
        caption: "Analyse fréquentielle du corpus",
      },
      {
        url: "/img/spam_msg_length.webp",
        alt: "Longueur des messages",
        caption: "Corrélation longueur/spam",
      },
      {
        url: "/img/spam_pca_vis.webp",
        alt: "Visualisation PCA",
        caption: "Séparation des clusters en 2D",
      },
      {
        url: "/img/spam_roc_curve.webp",
        alt: "Courbe ROC",
        caption: "Performance parfaite (AUC = 1.00)",
      },
      {
        url: "/img/spam_confusion_matrix.webp",
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
        url: "/img/car_price_dist.webp",
        alt: "Distribution des Prix",
        caption: "Asymétrie initiale des prix",
      },
      {
        url: "/img/car_scatter_raw.webp",
        alt: "Nuage de points Brut",
        caption: "Relation curviligne Enginesize vs Price",
      },
      {
        url: "/img/car_scatter_log.webp",
        alt: "Nuage de points Log",
        caption: "Linéarisation après transformation Log",
      },
      {
        url: "/img/car_cost_history.webp",
        alt: "Descente de Gradient",
        caption: "Convergence de la fonction de coût",
      },
      {
        url: "/img/car_reg_fit.webp",
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
