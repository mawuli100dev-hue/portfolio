import { Wrench, Target, Award, Users, Clock, CheckCircle, ExternalLink, Zap, TrendingUp, Star, Shield, Rocket } from "lucide-react";

export default function ServiceOffer() {
  const services = [
    {
      title: "Développement d'applications web",
      description: "Création d'applications web modernes et performantes",
      duration: "2-6 mois",
      price: "À partir de 80€/h",
      deliverables: [
        "Application web responsive et accessible",
        "API REST documentée et sécurisée",
        "Tests automatisés et documentation",
        "Formation des équipes"
      ],
      technologies: ["React, Vue, Angular", "Node.js, Python, Java", "PostgreSQL, MongoDB", "AWS, Docker"],
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Solutions de Data Science",
      description: "Analyse de données et modèles d'intelligence artificielle",
      duration: "1-4 mois",
      price: "À partir de 100€/h",
      deliverables: [
        "Modèles de machine learning optimisés",
        "Dashboards interactifs et rapports",
        "Pipeline de données automatisé",
        "Documentation technique complète"
      ],
      technologies: ["Python, R", "TensorFlow, PyTorch", "Pandas, NumPy", "Tableau, Power BI"],
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Architecture et optimisation",
      description: "Audit technique et optimisation de systèmes existants",
      duration: "1-3 mois",
      price: "À partir de 90€/h",
      deliverables: [
        "Audit technique complet",
        "Plan d'optimisation détaillé",
        "Implémentation des améliorations",
        "Monitoring et métriques"
      ],
      technologies: ["Microservices", "Cloud Architecture", "Performance Optimization", "DevOps, CI/CD"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Formation et mentorat",
      description: "Formation technique et accompagnement d'équipes",
      duration: "1-12 mois",
      price: "À partir de 120€/h",
      deliverables: [
        "Programme de formation personnalisé",
        "Sessions pratiques et projets",
        "Mentorat individuel et collectif",
        "Ressources et documentation"
      ],
      technologies: ["Formation sur mesure", "Workshops pratiques", "Code reviews", "Best practices"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  const methodologies = [
    {
      title: "Approche agile",
      description: "Méthodologie Scrum avec sprints de 2 semaines",
      benefits: ["Transparence totale", "Adaptabilité aux changements", "Livraisons régulières"],
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Développement test-driven",
      description: "Tests automatisés dès le début du développement",
      benefits: ["Qualité garantie", "Maintenabilité", "Documentation vivante"],
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Collaboration étroite",
      description: "Communication régulière et feedback continu",
      benefits: ["Alignement parfait", "Résolution rapide des problèmes", "Satisfaction client"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  const tools = [
    {
      category: "Développement",
      tools: ["VS Code, IntelliJ IDEA", "Git, GitHub, GitLab", "Docker, Kubernetes", "Postman, Insomnia"],
      color: "blue"
    },
    {
      category: "Tests et qualité",
      tools: ["Jest, Cypress, Playwright", "SonarQube, ESLint", "Jest, Mocha, Chai", "Selenium, TestCafe"],
      color: "green"
    },
    {
      category: "Déploiement et monitoring",
      tools: ["AWS, Azure, GCP", "Jenkins, GitHub Actions", "Datadog, New Relic", "Grafana, Prometheus"],
      color: "purple"
    },
    {
      category: "Collaboration",
      tools: ["Slack, Microsoft Teams", "Jira, Trello, Linear", "Notion, Confluence", "Figma, Sketch"],
      color: "orange"
    }
  ];

  const products = [
    {
      title: "Audit technique complet",
      description: "Analyse approfondie de votre système existant",
      duration: "1-2 semaines",
      deliverables: [
        "Rapport d'audit détaillé",
        "Recommandations prioritaires",
        "Plan d'action personnalisé",
        "Estimation des coûts et délais"
      ]
    },
    {
      title: "Architecture technique",
      description: "Conception d'architecture scalable et maintenable",
      duration: "2-4 semaines",
      deliverables: [
        "Diagrammes d'architecture",
        "Spécifications techniques",
        "Guide d'implémentation",
        "Formation des équipes"
      ]
    },
    {
      title: "Formation intensive",
      description: "Programme de formation sur mesure pour vos équipes",
      duration: "1-4 semaines",
      deliverables: [
        "Programme personnalisé",
        "Sessions pratiques",
        "Projets concrets",
        "Certification interne"
      ]
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return { bg: "from-blue-50 to-white", border: "border-blue-100", text: "text-blue-700" };
      case "green":
        return { bg: "from-green-50 to-white", border: "border-green-100", text: "text-green-700" };
      case "purple":
        return { bg: "from-purple-50 to-white", border: "border-purple-100", text: "text-purple-700" };
      case "orange":
        return { bg: "from-orange-50 to-white", border: "border-orange-100", text: "text-orange-700" };
      default:
        return { bg: "from-gray-50 to-white", border: "border-gray-100", text: "text-gray-700" };
    }
  };

  return (
    <section id="service-offer" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">Mon offre d'intervention</h2>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Services principaux */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#11101D] flex items-center justify-center">
            <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><Rocket className="w-6 h-6 text-[#F5F5F5]" /></span>
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
                      <h4 className="text-xl font-semibold text-[#11101D]">{service.title}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{service.duration}</p>
                      <p className="text-[#FFAA00] font-bold text-lg">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-[#11101D] mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#FFAA00] mr-2" />
                      Livrables inclus :
                    </h5>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start">
                          <span className="w-2 h-2 bg-[#FFAA00] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-[#11101D] mb-3">Technologies utilisées :</h5>
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
            <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><Target className="w-6 h-6 text-[#F5F5F5]" /></span>
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
                    <h4 className="text-lg font-semibold text-[#11101D]">{method.title}</h4>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{method.description}</p>
                  <ul className="space-y-2">
                    {method.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-[#FFAA00] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Outils */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#11101D] flex items-center justify-center">
            <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><Wrench className="w-6 h-6 text-[#F5F5F5]" /></span>
              Mes outils de travail
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((category, index) => {
                const colorClass = getColorClass(category.color);
                return (
                  <div 
                    key={index} 
                    className={`bg-gradient-to-br ${colorClass.bg} rounded-2xl shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border ${colorClass.border}`}
                  >
                    <h4 className="text-lg font-semibold mb-4 text-[#11101D]">{category.category}</h4>
                    <ul className="space-y-2">
                      {category.tools.map((tool, idx) => (
                        <li key={idx} className={`text-sm ${colorClass.text} flex items-start`}>
                          <span className={`w-1.5 h-1.5 ${colorClass.text} rounded-full mr-3 mt-2 flex-shrink-0`}></span>
                          <span className="leading-relaxed">{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Produits d'intervention */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#11101D] flex items-center justify-center">
            <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><Star className="w-6 h-6 text-[#F5F5F5]" /></span>
              Mes produits d'intervention
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-[#11101D]">{product.title}</h4>
                    <span className="bg-gradient-to-r from-[#FFAA00] to-[#FFB84D] text-[#11101D] px-3 py-1 rounded-full text-xs font-bold">
                      {product.duration}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2">
                    {product.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <CheckCircle className="w-4 h-4 text-[#FFAA00] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{deliverable}</span>
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
                { step: "1", title: "Découverte", description: "Analyse de vos besoins et objectifs" },
                { step: "2", title: "Proposition", description: "Plan détaillé et estimation" },
                { step: "3", title: "Réalisation", description: "Développement avec suivi régulier" },
                { step: "4", title: "Livraison", description: "Formation et support" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-[#11101D] font-bold text-xl">{step.step}</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}