import { Heart, Users, Lightbulb, Target, Award, Coffee, Camera, Dumbbell } from "lucide-react";
import Image from "next/image";
import blurData from "@/public/img/blur-data.json";

export default function PersonalStrengths() {
  const personalQualities = [
    {
      title: "Passion pour l'innovation",
      description: "Toujours à l'affût des dernières technologies et tendances du marché",
      icon: Lightbulb,
      examples: ["Veille technologique quotidienne", "Expérimentation de nouvelles technologies", "Participation à des hackathons"]
    },
    {
      title: "Collaboration et leadership",
      description: "Capacité à travailler en équipe et à inspirer les autres",
      icon: Users,
      examples: ["Mentorat de développeurs juniors", "Animation d'équipes techniques", "Organisation d'événements communautaires"]
    },
    {
      title: "Résolution de problèmes",
      description: "Approche analytique et créative pour résoudre des défis complexes",
      icon: Target,
      examples: ["Résolution de 50+ bugs critiques", "Optimisation de systèmes legacy", "Innovation sur des projets R&D"]
    },
    {
      title: "Apprentissage continu",
      description: "Curiosité intellectuelle et volonté d'apprendre constamment",
      icon: Award,
      examples: ["Formation de 200h/an", "Certifications techniques", "Participation à des conférences"]
    }
  ];

  const uniqueSkills = [
    {
      skill: "Polyvalence technique",
      description: "Maîtrise complète du stack technologique moderne",
      level: "Expert",
      details: ["Frontend, Backend, Mobile, Data Science", "15+ langages de programmation", "Architecture de systèmes complexes"]
    },
    {
      skill: "Vision produit",
      description: "Capacité à traduire les besoins business en solutions techniques",
      level: "Avancé",
      details: ["UX/UI Design", "Product Management", "Business Analysis", "Stakeholder Management"]
    },
    {
      skill: "Communication technique",
      description: "Facilité à expliquer des concepts complexes à différents publics",
      level: "Expert",
      details: ["Formation d'équipes", "Présentations techniques", "Documentation", "Mentorat"]
    }
  ];

  const passions = [
    {
      title: "Photographie",
      description: "Passion pour la photographie de paysage et urbaine",
      icon: Camera,
      impact: "Développement de la créativité et de l'œil artistique",
      examples: ["Expositions personnelles", "Participation à des concours", "Enseignement de la photographie"]
    },
    {
      title: "Sport et fitness",
      description: "Pratique régulière du sport pour maintenir l'équilibre vie pro/perso",
      icon: Dumbbell,
      impact: "Développement de la discipline et de la persévérance",
      examples: ["Course à pied (10km)", "Musculation", "Yoga et méditation"]
    },
    {
      title: "Communauté tech",
      description: "Engagement dans la communauté des développeurs",
      icon: Users,
      impact: "Partage de connaissances et développement du réseau",
      examples: ["Organisation de meetups", "Mentorat bénévole", "Contribution open-source"]
    }
  ];

  const workPhilosophy = [
    {
      principle: "Excellence technique",
      description: "Toujours viser la meilleure qualité possible dans le code et les solutions",
      quote: "Le code est un art, chaque ligne compte."
    },
    {
      principle: "Collaboration",
      description: "Croire en la force du travail d'équipe et du partage de connaissances",
      quote: "Ensemble, nous allons plus loin."
    },
    {
      principle: "Innovation",
      description: "Chercher constamment à améliorer et innover",
      quote: "L'innovation naît de la curiosité et de l'expérimentation."
    },
    {
      principle: "Impact positif",
      description: "Créer des solutions qui améliorent la vie des utilisateurs",
      quote: "La technologie doit servir l'humain."
    }
  ];

  return (
    <section id="personal-strengths" className="relative py-20 -mt-16"
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
        <h2 className="text-3xl font-bold mb-8 text-center">Mes atouts personnels</h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Qualités personnelles */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Mes qualités personnelles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {personalQualities.map((quality, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#FFAA00] rounded-full p-3 mr-4">
                      <quality.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#11101D]">{quality.title}</h4>
                      <p className="text-sm text-gray-600">{quality.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {quality.examples.map((example, idx) => (
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {skill.details.map((detail, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm font-medium text-[#11101D]">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Passions et activités */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Mes passions et activités</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {passions.map((passion, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#FFAA00] rounded-full p-3 mr-4">
                      <passion.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#11101D]">{passion.title}</h4>
                      <p className="text-sm text-gray-600">{passion.description}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">{passion.impact}</p>
                  <ul className="space-y-1">
                    {passion.examples.map((example, idx) => (
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

          {/* Philosophie de travail */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Ma philosophie de travail</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workPhilosophy.map((principle, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-semibold text-[#11101D] mb-3">{principle.principle}</h4>
                  <p className="text-gray-700 mb-4">{principle.description}</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm italic text-gray-600">"{principle.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Synthèse personnelle */}
          <div className="bg-[#11101D] text-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Ma synthèse personnelle</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#FFAA00]">Ce qui me motive</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Résoudre des problèmes complexes et créer des solutions innovantes</li>
                  <li>• Apprendre constamment et évoluer techniquement</li>
                  <li>• Collaborer avec des équipes talentueuses</li>
                  <li>• Créer un impact positif sur les utilisateurs</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#FFAA00]">Mon approche</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Méthode agile et itérative</li>
                  <li>• Tests et qualité dès le début</li>
                  <li>• Documentation et maintenabilité</li>
                  <li>• Communication transparente et feedback continu</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg">
              <p className="text-lg italic text-center">
                "Je suis passionné par la technologie et convaincu qu'elle peut transformer le monde. 
                Mon objectif est de créer des solutions qui améliorent la vie des gens tout en respectant 
                les meilleures pratiques techniques et éthiques."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
