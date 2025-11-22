import {
  Target,
  CheckCircle,
  Star,
  Rocket,
  Globe,
  Settings,
  BarChart3,
  Laptop,
  Palette,
  Link2,
  TrendingUp,
  Wrench,
  Users,
} from "lucide-react";

export default function ServiceOffer() {
  const services = [
    {
      title: "Site Vitrine ou Portfolio",
      description:
        "Création d'un site web simple et moderne pour présenter votre activité ou vos travaux",
      duration: "1-3 semaines",
      // price: "15-25€/h",
      price: "",
      deliverables: [
        "Site web responsive (s'adapte aux mobiles)",
        "Formulaire de contact fonctionnel",
        "Hébergement et nom de domaine inclus",
        "Formation simple pour modifier le contenu",
      ],
      technologies: [
        "Next.js/React",
        "HTML/CSS",
        "TypeScript",
        "Vercel",
        "Hostinger",
        "Render",
      ],
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Script d'Automatisation",
      description:
        "Automatisation de tâches répétitives: traitement de fichiers, données, rapports",
      duration: "1-2 semaines",
      // price: "15-20€/h",
      price: "",
      deliverables: [
        "Script Python/Node.js fonctionnel",
        "Documentation d'utilisation",
        "Testé et validé avec vous",
        "Explication du fonctionnement",
      ],
      technologies: ["Python", "Node.js", "Excel/CSV", "API simples"],
      icon: <Settings className="w-6 h-6" />,
    },
    {
      title: "Analyse de Données Simple",
      description:
        "Nettoyage, analyse et visualisation de vos données pour en extraire des insights",
      duration: "1-4 semaines",
      // price: "20-25€/h",
      price: "",
      deliverables: [
        "Données nettoyées et organisées",
        "Rapport d'analyse avec graphiques",
        "Visualisations interactives simples",
        "Recommandations basées sur les données",
      ],
      technologies: [
        "Python (Pandas)",
        "R",
        "Excel",
        "Visualisation simple",
        "Jupyter",
      ],
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Application Web Simple",
      description:
        "Développement d'une application web avec fonctionnalités basiques",
      duration: "2-6 semaines",
      // price: "20-30€/h",
      price: "",
      deliverables: [
        "Application web fonctionnelle",
        "Interface utilisateur simple",
        "Base de données",
        "Hébergement inclus",
        "Documentation technique",
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "SQLite/PostgreSQL",
        "Docker",
        "Vercel/Render/Hostinger",
      ],
      icon: <Laptop className="w-6 h-6" />,
    },
    {
      title: "Refonte de Site Web",
      description:
        "Modernisation d'un site web existant: design et performances",
      duration: "2-4 semaines",
      // price: "20-25€/h",
      price: "",
      deliverables: [
        "Site modernisé et responsive",
        "Meilleures performances",
        "Design actualisé",
        "Maintenance facilitée",
      ],
      technologies: ["React/Next.js", "CSS moderne", "Optimisation"],
      icon: <Palette className="w-6 h-6" />,
    },
    {
      title: "Création d'API REST",
      description: "Développement d'une API  pour connecter vos applications",
      duration: "1-3 semaines",
      // price: "20-28€/h",
      price: "",
      deliverables: [
        "API REST fonctionnelle",
        "Documentation des endpoints",
        "Tests",
        "Déploiement inclus",
      ],
      technologies: [
        "TypeScript/Node.js/Express.js/Nest.js",
        "Python/Flask/FastAPI",
        "PostgreSQL/MySQL",
        "Hostinger",
        "Render",
      ],
      icon: <Link2 className="w-6 h-6" />,
    },
    {
      title: "Dashboard de Visualisation",
      description:
        "Création d'un tableau de bord simple pour suivre vos métriques",
      duration: "2-5 semaines",
      // price: "22-30€/h",
      price: "",
      deliverables: [
        "Dashboard interactif",
        "Connexion à vos données",
        "Graphiques et indicateurs",
        "Interface utilisateur intuitive",
      ],
      technologies: ["React", "Python", "Chart.js", "API REST"],
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Support au Développement",
      description:
        "Aide ponctuelle sur vos projets techniques: debug, fonctionnalités",
      duration: "À la mission",
      // price: "15-20€/h",
      price: "",
      deliverables: [
        "Résolution de problèmes techniques",
        "Ajout de fonctionnalités simples",
        "Optimisation de code",
        "Conseils techniques",
      ],
      technologies: ["Votre stack technique", "Debugging", "Code review"],
      icon: <Wrench className="w-6 h-6" />,
    },
  ];

  const methodologies = [
    {
      title: "Approche agile",
      description: "Méthodologie Scrum avec sprints de 1-2 semaines",
      benefits: [
        "Transparence totale",
        "Adaptabilité aux changements",
        "Livraisons régulières",
      ],
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Développement test-driven",
      description: "Tests automatisés dès le début du développement",
      benefits: ["Qualité garantie", "Maintenabilité", "Documentation vivante"],
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Collaboration étroite",
      description: "Communication régulière et feedback continu",
      benefits: [
        "Alignement parfait",
        "Résolution rapide des problèmes",
        "Satisfaction client",
      ],
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section id="service-offer" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">
          Mon offre d'intervention
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Services principaux */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#11101D] flex items-center justify-center">
              <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                <Rocket className="w-6 h-6 text-[#F5F5F5]" />
              </span>
              Mes services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-[#11101D]">
                        {service.title}
                      </h4>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">
                        {service.duration}
                      </p>
                      <p className="text-[#FFAA00] font-bold text-lg">
                        {service.price}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-[#11101D] mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#FFAA00] mr-2" />
                      Livrables inclus :
                    </h5>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-700 flex items-start"
                        >
                          <span className="w-2 h-2 bg-[#FFAA00] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-[#11101D] mb-3">
                      Technologies utilisées :
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-[#FFAA00] to-[#FFB84D] text-[#11101D] px-3 py-1 rounded-full text-xs font-bold shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Méthodologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#11101D] flex items-center justify-center">
              <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                <Target className="w-6 h-6 text-[#F5F5F5]" />
              </span>
              Mes démarches et méthodes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {methodologies.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                      {method.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-[#11101D]">
                      {method.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <ul className="space-y-2">
                    {method.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 flex items-start"
                      >
                        <span className="w-2 h-2 bg-[#FFAA00] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Processus de collaboration */}
          <div className="bg-gradient-to-br from-[#11101D] to-[#1a1835] rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white flex items-center justify-center">
              <Users className="w-6 h-6 text-[#FFAA00] mr-3" />
              Mon processus de collaboration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Découverte",
                  description: "Analyse de vos besoins et objectifs",
                },
                {
                  step: "2",
                  title: "Proposition",
                  description: "Plan détaillé et estimation",
                },
                {
                  step: "3",
                  title: "Réalisation",
                  description: "Développement avec suivi régulier",
                },
                {
                  step: "4",
                  title: "Livraison",
                  description: "Formation et support",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-[#11101D] font-bold text-xl">
                      {step.step}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
