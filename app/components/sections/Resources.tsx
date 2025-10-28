import { BookOpen, Lightbulb, Wrench, Award, Globe, Users, Target, Zap, TrendingUp } from "lucide-react";

export default function Resources() {
  const learningResources = [
    {
      category: "Apprenance",
      items: [
        "Formation continue en technologies émergentes (React 18, Next.js 13, TypeScript 5)",
        "Certifications cloud (AWS, Azure, GCP) renouvelées annuellement",
        "Participation à 20+ conférences tech par an (React Conf, AWS Summit, PyData)",
        "Mentorat de 5+ développeurs juniors et étudiants",
        "Création de contenu éducatif (tutoriels, articles techniques)"
      ]
    },
    {
      category: "Méthodes et outils",
      items: [
        "Maîtrise des méthodologies agiles (Scrum, Kanban, SAFe)",
        "Outils de développement : VS Code, IntelliJ, Docker, Kubernetes",
        "CI/CD : GitHub Actions, Jenkins, GitLab CI",
        "Monitoring : Datadog, New Relic, Grafana",
        "Gestion de projet : Jira, Trello, Notion, Linear"
      ]
    },
    {
      category: "Expertises spécialisées",
      items: [
        "Architecture microservices et serverless",
        "Optimisation des performances web et mobile",
        "Sécurité des applications (OWASP, penetration testing)",
        "Accessibilité web (WCAG 2.1, ARIA)",
        "Internationalisation et localisation d'applications"
      ]
    }
  ];

  const personalStrengths = [
    {
      title: "Apprentissage continu",
      description: "Passion pour l'innovation technologique et l'auto-formation constante",
      icon: BookOpen,
      examples: ["Formation de 200h/an en nouvelles technologies", "Veille technologique quotidienne", "Expérimentation de 10+ nouvelles technologies par an"]
    },
    {
      title: "Résolution de problèmes",
      description: "Approche analytique et créative pour résoudre des défis complexes",
      icon: Lightbulb,
      examples: ["Résolution de 50+ bugs critiques", "Optimisation de 15+ systèmes legacy", "Innovation sur 5+ projets R&D"]
    },
    {
      title: "Collaboration",
      description: "Leadership technique et travail d'équipe dans des environnements diversifiés",
      icon: Users,
      examples: ["Management de 3 équipes techniques", "Collaboration avec 20+ équipes cross-fonctionnelles", "Formation de 15+ développeurs"]
    }
  ];

  const uniqueSkills = [
    {
      skill: "Polyvalence technique",
      level: "Expert",
      description: "Maîtrise complète du stack technologique moderne",
      technologies: ["Frontend: React, Vue, Angular", "Backend: Node.js, Python, Java", "Mobile: React Native, Flutter", "Data: Python, R, SQL, NoSQL"]
    },
    {
      skill: "Vision produit",
      level: "Avancé",
      description: "Capacité à traduire les besoins business en solutions techniques",
      technologies: ["UX/UI Design", "Product Management", "Business Analysis", "Stakeholder Management"]
    },
    {
      skill: "Innovation",
      level: "Expert",
      description: "Création de solutions disruptives et adoption de technologies émergentes",
      technologies: ["AI/ML Integration", "Blockchain", "IoT", "AR/VR", "Edge Computing"]
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">Synthèse de mes autres ressources</h2>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Ressources professionnelles */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#11101D] flex items-center justify-center">
            <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><Wrench className="w-6 h-6 text-[#F5F5F5]" /></span>
              Mes ressources professionnelles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningResources.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
                >
                  <h4 className="text-lg font-semibold mb-4 text-[#11101D] flex items-center">
                    <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><Target className="w-6 h-6 text-[#F5F5F5]" /></span>
                    {category.category}
                  </h4>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-[#FFAA00] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Points forts personnels */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#11101D] flex items-center justify-center">
            <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><Award className="w-6 h-6 text-[#F5F5F5]" /></span>
              Mes atouts personnels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {personalStrengths.map((strength, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                      <strength.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#11101D]">{strength.title}</h4>
                      <p className="text-sm text-gray-600">{strength.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {strength.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#FFAA00] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Compétences singulières */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#11101D] flex items-center justify-center">
            <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><Zap className="w-6 h-6 text-[#F5F5F5]" /></span>
              Mes compétences singulières
            </h3>
            <div className="space-y-6">
              {uniqueSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-[#11101D]">{skill.skill}</h4>
                    <span className="bg-gradient-to-r from-[#FFAA00] to-[#FFB84D] text-[#11101D] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{skill.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skill.technologies.map((tech, idx) => (
                      <div 
                        key={idx} 
                        className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-200 transform transition-all duration-200 hover:shadow-md"
                      >
                        <p className="text-sm font-medium text-[#11101D] text-center">{tech}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophie de travail */}
          <div className="bg-gradient-to-br from-[#11101D] to-[#1a1835] rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white flex items-center justify-center">
            <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><Globe className="w-6 h-6 text-[#F5F5F5]" /></span>
              Ma philosophie de travail
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#FFAA00] flex items-center">
                <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><TrendingUp className="w-6 h-6 text-[#F5F5F5]" /></span>
                  Valeurs professionnelles
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Excellence technique et qualité du code
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Collaboration et partage de connaissances
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Innovation et adoption de nouvelles technologies
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Impact positif sur les utilisateurs et l'entreprise
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#FFAA00] flex items-center">
                <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg"><Target className="w-6 h-6 text-[#F5F5F5]" /></span>
                  Approche de travail
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Méthode agile et itérative
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Tests et qualité dès le début
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Documentation et maintenabilité
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFAA00] mr-3">•</span>
                    Apprentissage continu et veille technologique
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-lg italic text-center text-white leading-relaxed">
                "Je crois que la technologie doit servir l'humain. Mon objectif est de créer des solutions 
                qui améliorent la vie des utilisateurs tout en respectant les meilleures pratiques techniques."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}