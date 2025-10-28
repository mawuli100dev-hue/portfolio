import { Linkedin, Github, Twitter, Mail, MapPin, Users, Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import blurData from "@/public/img/blur-data.json";

export default function Network() {
  const professionalNetwork = [
    {
      category: "Développement",
      connections: [
        { name: "Jean Dupont", role: "Lead Developer", company: "TechCorp", platform: "LinkedIn", link: "https://linkedin.com/in/jean-dupont" },
        { name: "Marie Martin", role: "CTO", company: "DataInsights", platform: "LinkedIn", link: "https://linkedin.com/in/marie-martin" },
        { name: "Pierre Durand", role: "Senior Developer", company: "WebDev Agency", platform: "GitHub", link: "https://github.com/pierre-durand" }
      ]
    },
    {
      category: "Data Science",
      connections: [
        { name: "Dr. Sarah Johnson", role: "Data Science Director", company: "AI Solutions", platform: "LinkedIn", link: "https://linkedin.com/in/sarah-johnson" },
        { name: "Alex Chen", role: "ML Engineer", company: "TechStartup", platform: "GitHub", link: "https://github.com/alex-chen" },
        { name: "Prof. David Wilson", role: "Research Director", company: "University", platform: "LinkedIn", link: "https://linkedin.com/in/david-wilson" }
      ]
    },
    {
      category: "Entrepreneuriat",
      connections: [
        { name: "Lisa Brown", role: "CEO", company: "FitApp", platform: "LinkedIn", link: "https://linkedin.com/in/lisa-brown" },
        { name: "Michael Davis", role: "Co-founder", company: "StartupTech", platform: "LinkedIn", link: "https://linkedin.com/in/michael-davis" },
        { name: "Emma Wilson", role: "Product Manager", company: "Innovation Lab", platform: "LinkedIn", link: "https://linkedin.com/in/emma-wilson" }
      ]
    }
  ];

  const socialLinks = [
    { platform: "LinkedIn", url: "https://linkedin.com/in/henoc-amavigan", icon: Linkedin, color: "text-blue-600" },
    { platform: "GitHub", url: "https://github.com/henoc-amavigan", icon: Github, color: "text-gray-800" },
    { platform: "Twitter", url: "https://twitter.com/henoc_amavigan", icon: Twitter, color: "text-blue-400" },
    { platform: "Email", url: "mailto:amaviganhenoc@gmail.com", icon: Mail, color: "text-red-500" }
  ];

  const recommendations = [
    {
      author: "Jean Dupont",
      role: "Directeur Technique, TechCorp",
      content: "Hénoc est un développeur exceptionnel qui a transformé notre plateforme e-commerce. Son expertise technique et sa capacité à livrer des projets complexes dans les délais sont remarquables.",
      rating: 5
    },
    {
      author: "Dr. Sarah Johnson",
      role: "Data Science Director, AI Solutions",
      content: "Collaborer avec Hénoc sur notre projet d'IA prédictive a été une expérience enrichissante. Sa maîtrise des technologies de machine learning et sa vision business sont impressionnantes.",
      rating: 5
    },
    {
      author: "Lisa Brown",
      role: "CEO, FitApp",
      content: "Hénoc a créé une application mobile qui a révolutionné notre business. Son approche centrée utilisateur et son expertise technique ont été déterminantes pour notre succès.",
      rating: 5
    }
  ];

  return (
    <section id="network" className="relative py-20 -mt-16"
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
        <h2 className="text-3xl font-bold mb-8 text-center">Mes réseaux professionnels</h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Schéma du réseau professionnel */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Ma communauté professionnelle</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {professionalNetwork.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-semibold mb-4 text-[#11101D] flex items-center">
                    <Users className="w-5 h-5 mr-2 text-[#FFAA00]" />
                    {category.category}
                  </h4>
                  <div className="space-y-3">
                    {category.connections.map((connection, idx) => (
                      <div key={idx} className="border-l-4 border-[#FFAA00] pl-3">
                        <p className="font-semibold text-[#11101D]">{connection.name}</p>
                        <p className="text-sm text-gray-600">{connection.role}</p>
                        <p className="text-sm text-gray-500">{connection.company}</p>
                        <a
                          href={connection.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#FFAA00] hover:text-[#11101D] transition-colors duration-200 flex items-center mt-1"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          {connection.platform}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Liens sociaux et profils */}
          <div className="bg-[#11101D] text-white rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Mes profils en ligne</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-10 rounded-lg p-4 text-center hover:bg-opacity-20 transition-all duration-200 group"
                >
                  <link.icon className={`w-8 h-8 mx-auto mb-2 ${link.color} group-hover:scale-110 transition-transform duration-200`} />
                  <p className="text-sm font-medium">{link.platform}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Recommandations */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Recommandations professionnelles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendations.map((rec, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-[#FFAA00]">
                      {[...Array(rec.rating)].map((_, i) => (
                        <Award key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{rec.content}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-[#11101D]">{rec.author}</p>
                    <p className="text-sm text-gray-600">{rec.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistiques du réseau */}
          <div className="bg-gradient-to-r from-[#FFAA00] to-[#FFB84D] text-[#11101D] rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Impact de mon réseau</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <p className="text-sm">Connexions LinkedIn</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <p className="text-sm">Projets collaboratifs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <p className="text-sm">Recommandations reçues</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <p className="text-sm">Conférences présentées</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
