import { BookOpen, Lightbulb, Wrench, Award, Globe, Users } from "lucide-react";
import Image from "next/image";
import blurData from "@/public/img/blur-data.json";

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
    <section id="resources" className="relative py-20 -mt-16"
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
        <h2 className="text-3xl font-bold mb-8 text-center">Synthèse de mes autres ressources</h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Ressources professionnelles */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Mes ressources professionnelles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningResources.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-semibold mb-4 text-[#11101D] flex items-center">
                    <Wrench className="w-5 h-5 mr-2 text-[#FFAA00]" />
                    {category.category}
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-[#FFAA00] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Points forts personnels */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Mes atouts personnels</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {personalStrengths.map((strength, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#FFAA00] rounded-full p-3 mr-4">
                      <strength.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#11101D]">{strength.title}</h4>
                      <p className="text-sm text-gray-600">{strength.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {strength.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#FFAA00] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Compétences singulières */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Mes compétences singulières</h3>
            <div className="space-y-6">
              {uniqueSkills.map((skill, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-[#11101D]">{skill.skill}</h4>
                    <span className="bg-[#FFAA00] text-[#11101D] px-3 py-1 rounded-full text-sm font-semibold">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{skill.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skill.technologies.map((tech, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm font-medium text-[#11101D]">{tech}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophie de travail */}
          <div className="bg-[#11101D] text-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Ma philosophie de travail</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#FFAA00]">Valeurs professionnelles</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Excellence technique et qualité du code</li>
                  <li>• Collaboration et partage de connaissances</li>
                  <li>• Innovation et adoption de nouvelles technologies</li>
                  <li>• Impact positif sur les utilisateurs et l'entreprise</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#FFAA00]">Approche de travail</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Méthode agile et itérative</li>
                  <li>• Tests et qualité dès le début</li>
                  <li>• Documentation et maintenabilité</li>
                  <li>• Apprentissage continu et veille technologique</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg">
              <p className="text-lg italic text-center">
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
