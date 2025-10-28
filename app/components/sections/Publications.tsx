import { BookOpen, Mic, Award, ExternalLink, Calendar, Users } from "lucide-react";
import Image from "next/image";
import blurData from "@/public/img/blur-data.json";

export default function Publications() {
  const publications = [
    {
      type: "Article scientifique",
      title: "Optimisation des performances web avec React et Next.js : une approche comparative",
      journal: "Journal of Web Technologies",
      year: "2023",
      authors: "Hénoc AMAVIGAN, Dr. Sarah Johnson",
      doi: "10.1000/182",
      link: "https://jwt.example.com/article/182",
      impact: "15 citations, impact factor: 3.2"
    },
    {
      type: "Conférence",
      title: "Machine Learning pour l'optimisation des e-commerce : cas d'étude et résultats",
      conference: "International Conference on Data Science",
      year: "2023",
      location: "Paris, France",
      link: "https://icds2023.example.com/presentation/ml-ecommerce",
      impact: "200+ participants, 4.8/5 évaluation"
    },
    {
      type: "Blog technique",
      title: "Architecture microservices : bonnes pratiques et pièges à éviter",
      platform: "Medium - Tech Blog",
      year: "2023",
      views: "15k+ vues",
      link: "https://medium.com/@henoc-amavigan/microservices-architecture",
      impact: "500+ claps, 50+ commentaires"
    }
  ];

  const communications = [
    {
      title: "React 18 et les nouvelles fonctionnalités concurrentes",
      event: "React Paris Meetup",
      date: "Mars 2023",
      audience: "150 développeurs",
      type: "Présentation technique",
      link: "https://meetup.com/react-paris/react-18-features"
    },
    {
      title: "Data Science en entreprise : de la théorie à la pratique",
      event: "PyData Paris",
      date: "Juin 2023",
      audience: "300 data scientists",
      type: "Workshop",
      link: "https://pydata.org/paris2023/workshop-data-science"
    },
    {
      title: "L'avenir du développement web : tendances et technologies émergentes",
      event: "Web Summit 2023",
      date: "Septembre 2023",
      audience: "1000+ participants",
      type: "Keynote",
      link: "https://websummit.com/2023/keynote-future-web-dev"
    }
  ];

  const awards = [
    {
      title: "Prix Innovation Digitale 2023",
      organization: "Tech Awards France",
      category: "Meilleure solution e-commerce",
      year: "2023",
      description: "Reconnaissance pour la plateforme e-commerce high-performance développée",
      link: "https://techawards.fr/2023/innovation-digitale"
    },
    {
      title: "App of the Year 2023",
      organization: "Mobile Tech Awards",
      category: "Application mobile cross-platform",
      year: "2023",
      description: "Application mobile de fitness avec 500k+ téléchargements",
      link: "https://mobiletechawards.com/2023/app-of-year"
    },
    {
      title: "Data Science Excellence Award",
      organization: "AI & Data Conference",
      category: "Meilleur projet d'IA prédictive",
      year: "2023",
      description: "Système d'IA pour l'optimisation des ventes avec 94% de précision",
      link: "https://aiconference.com/2023/data-science-excellence"
    }
  ];

  const distinctions = [
    {
      category: "Études",
      items: [
        "Mention Très Bien - Master Informatique (2022)",
        "Prix du meilleur projet de fin d'études (2022)",
        "Bourse d'excellence académique (2020-2022)"
      ]
    },
    {
      category: "Professionnel",
      items: [
        "Top 1% des développeurs GitHub (2023)",
        "Certification AWS Solutions Architect (2023)",
        "Speaker reconnu dans la communauté tech française"
      ]
    },
    {
      category: "Citoyen",
      items: [
        "Mentor bénévole pour 10+ étudiants en informatique",
        "Organisateur de 5+ événements tech communautaires",
        "Contributeur open-source sur 20+ projets"
      ]
    }
  ];

  return (
    <section id="publications" className="relative py-20 -mt-16"
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
        <h2 className="text-3xl font-bold mb-8 text-center">Publications, communications, prix et distinctions</h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Publications */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-[#FFAA00]" />
              Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-[#FFAA00] text-[#11101D] px-3 py-1 rounded-full text-sm font-semibold mr-3">
                          {pub.type}
                        </span>
                        <span className="text-gray-600 text-sm">{pub.year}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-[#11101D] mb-2">{pub.title}</h4>
                      <p className="text-gray-700 mb-2">
                        {pub.journal || pub.conference || pub.platform}
                        {pub.authors && ` - ${pub.authors}`}
                        {pub.location && ` - ${pub.location}`}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">{pub.impact}</p>
                      {pub.doi && <p className="text-sm text-gray-500">DOI: {pub.doi}</p>}
                    </div>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FFAA00] hover:text-[#11101D] transition-colors duration-200 ml-4"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Communications */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Mic className="w-6 h-6 mr-3 text-[#FFAA00]" />
              Communications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communications.map((comm, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-4 h-4 mr-2 text-[#FFAA00]" />
                    <span className="text-sm text-gray-600">{comm.date}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-[#11101D] mb-2">{comm.title}</h4>
                  <p className="text-gray-700 mb-2">{comm.event}</p>
                  <p className="text-sm text-gray-600 mb-2">{comm.audience}</p>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {comm.type}
                  </span>
                  <div className="mt-4">
                    <a
                      href={comm.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FFAA00] hover:text-[#11101D] transition-colors duration-200 text-sm flex items-center"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Voir la présentation
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prix et distinctions */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-3 text-[#FFAA00]" />
              Prix et distinctions
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-gradient-to-r from-[#FFAA00] to-[#FFB84D] text-[#11101D] rounded-lg p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{award.title}</h4>
                      <p className="text-sm mb-1">{award.organization} - {award.category}</p>
                      <p className="text-sm mb-2">{award.year}</p>
                      <p className="text-sm opacity-90">{award.description}</p>
                    </div>
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#11101D] hover:opacity-75 transition-opacity duration-200 ml-4"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Distinctions par catégorie */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Distinctions et reconnaissances</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {distinctions.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-semibold mb-4 text-[#11101D] flex items-center">
                    <Award className="w-5 h-5 mr-2 text-[#FFAA00]" />
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

          {/* Statistiques d'impact */}
          <div className="bg-[#11101D] text-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Impact de mes contributions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFAA00] mb-2">3</div>
                <p className="text-sm text-gray-300">Publications scientifiques</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFAA00] mb-2">15+</div>
                <p className="text-sm text-gray-300">Communications</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFAA00] mb-2">5</div>
                <p className="text-sm text-gray-300">Prix et distinctions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFAA00] mb-2">1000+</div>
                <p className="text-sm text-gray-300">Audience totale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
