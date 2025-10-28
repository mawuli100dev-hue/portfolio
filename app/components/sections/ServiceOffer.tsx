import { Wrench, Target, Award, Users, Clock, CheckCircle, ExternalLink } from "lucide-react";
import Image from "next/image";
import blurData from "@/public/img/blur-data.json";

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
      technologies: ["React, Vue, Angular", "Node.js, Python, Java", "PostgreSQL, MongoDB", "AWS, Docker"]
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
      technologies: ["Python, R", "TensorFlow, PyTorch", "Pandas, NumPy", "Tableau, Power BI"]
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
      technologies: ["Microservices", "Cloud Architecture", "Performance Optimization", "DevOps, CI/CD"]
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
      technologies: ["Formation sur mesure", "Workshops pratiques", "Code reviews", "Best practices"]
    }
  ];

  const methodologies = [
    {
      title: "Approche agile",
      description: "Méthodologie Scrum avec sprints de 2 semaines",
      benefits: ["Transparence totale", "Adaptabilité aux changements", "Livraisons régulières"]
    },
    {
      title: "Développement test-driven",
      description: "Tests automatisés dès le début du développement",
      benefits: ["Qualité garantie", "Maintenabilité", "Documentation vivante"]
    },
    {
      title: "Collaboration étroite",
      description: "Communication régulière et feedback continu",
      benefits: ["Alignement parfait", "Résolution rapide des problèmes", "Satisfaction client"]
    }
  ];

  const tools = [
    {
      category: "Développement",
      tools: ["VS Code, IntelliJ IDEA", "Git, GitHub, GitLab", "Docker, Kubernetes", "Postman, Insomnia"]
    },
    {
      category: "Tests et qualité",
      tools: ["Jest, Cypress, Playwright", "SonarQube, ESLint", "Jest, Mocha, Chai", "Selenium, TestCafe"]
    },
    {
      category: "Déploiement et monitoring",
      tools: ["AWS, Azure, GCP", "Jenkins, GitHub Actions", "Datadog, New Relic", "Grafana, Prometheus"]
    },
    {
      category: "Collaboration",
      tools: ["Slack, Microsoft Teams", "Jira, Trello, Linear", "Notion, Confluence", "Figma, Sketch"]
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

  return (
    <section id="service-offer" className="relative py-20 -mt-16"
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
        <h2 className="text-3xl font-bold mb-8 text-center">Mon offre d'intervention</h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Services principaux */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Mes services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-[#11101D]">{service.title}</h4>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{service.duration}</p>
                      <p className="text-[#FFAA00] font-semibold">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-[#11101D] mb-2">Livrables :</h5>
                    <ul className="space-y-1">
                      {service.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#FFAA00] mr-2 mt-0.5 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-[#11101D] mb-2">Technologies :</h5>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-[#FFAA00] text-[#11101D] px-2 py-1 rounded text-xs font-medium">
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
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Mes démarches et méthodes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {methodologies.map((method, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#FFAA00] rounded-full p-3 mr-4">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#11101D]">{method.title}</h4>
                  </div>
                  <p className="text-gray-700 mb-4">{method.description}</p>
                  <ul className="space-y-2">
                    {method.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-[#FFAA00] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Outils */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Mes outils de travail</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-semibold mb-4 text-[#11101D]">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.tools.map((tool, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#FFAA00] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Produits d'intervention */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Mes produits d'intervention</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-[#11101D]">{product.title}</h4>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {product.duration}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <ul className="space-y-1">
                    {product.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <CheckCircle className="w-4 h-4 text-[#FFAA00] mr-2 mt-0.5 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Processus de collaboration */}
          <div className="bg-[#11101D] text-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Mon processus de collaboration</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-[#FFAA00] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#11101D] font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Découverte</h4>
                <p className="text-sm text-gray-300">Analyse de vos besoins et objectifs</p>
              </div>
              <div className="text-center">
                <div className="bg-[#FFAA00] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#11101D] font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Proposition</h4>
                <p className="text-sm text-gray-300">Plan détaillé et estimation</p>
              </div>
              <div className="text-center">
                <div className="bg-[#FFAA00] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#11101D] font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Réalisation</h4>
                <p className="text-sm text-gray-300">Développement avec suivi régulier</p>
              </div>
              <div className="text-center">
                <div className="bg-[#FFAA00] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#11101D] font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">Livraison</h4>
                <p className="text-sm text-gray-300">Formation et support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
