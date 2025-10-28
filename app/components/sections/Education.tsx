import { GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react";
import Image from "next/image";
import blurData from "@/public/img/blur-data.json";

export default function Education() {
  const formations = [
    {
      diplome: "Master en Informatique",
      ecole: "Université de Technologie",
      annee: "2020-2022",
      description: "Spécialisation en développement web et science des données",
      valeur: "Acquisition de compétences avancées en programmation, algorithmique et gestion de projets informatiques",
      lien: "https://example-university.com"
    },
    {
      diplome: "Licence en Informatique",
      ecole: "Institut Supérieur de Technologie",
      annee: "2017-2020",
      description: "Formation générale en informatique et mathématiques appliquées",
      valeur: "Base solide en programmation, bases de données et architecture des systèmes",
      lien: "https://example-institute.com"
    },
    {
      diplome: "Certification AWS Solutions Architect",
      ecole: "Amazon Web Services",
      annee: "2023",
      description: "Architecture de solutions cloud sur AWS",
      valeur: "Expertise en déploiement et gestion d'infrastructures cloud scalables",
      lien: "https://aws.amazon.com"
    },
    {
      diplome: "Certification Data Science",
      ecole: "Coursera - Stanford University",
      annee: "2022",
      description: "Machine Learning et analyse de données",
      valeur: "Maîtrise des techniques d'apprentissage automatique et de visualisation de données",
      lien: "https://coursera.org"
    }
  ];

  return (
    <section id="education" className="relative py-20 -mt-16"
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
        <h2 className="text-3xl font-bold mb-8 text-center">Parcours universitaire / Formation</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {formations.map((formation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-[#FFAA00] rounded-full p-3 mr-4">
                      {formation.diplome.includes("Certification") ? (
                        <Award className="w-6 h-6 text-white" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#11101D]">{formation.diplome}</h3>
                      <p className="text-[#FFAA00] font-medium">{formation.ecole}</p>
                      <p className="text-gray-600 text-sm">{formation.annee}</p>
                    </div>
                  </div>
                  <a
                    href={formation.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFAA00] hover:text-[#11101D] transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-700 mb-3">{formation.description}</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <BookOpen className="w-5 h-5 text-[#FFAA00] mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#11101D] mb-1">Valeur ajoutée :</h4>
                        <p className="text-gray-700 text-sm">{formation.valeur}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-[#11101D] text-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Synthèse de mes atouts formation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-[#FFAA00]">Compétences techniques</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Programmation multi-langages</li>
                  <li>• Architecture de systèmes</li>
                  <li>• Gestion de bases de données</li>
                  <li>• Développement web fullstack</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-[#FFAA00]">Compétences transversales</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Gestion de projet</li>
                  <li>• Analyse et résolution de problèmes</li>
                  <li>• Communication technique</li>
                  <li>• Apprentissage continu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
