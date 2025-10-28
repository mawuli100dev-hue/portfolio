import Image from "next/image";
import { User, MapPin, Calendar, Award } from "lucide-react";
import blurData from "@/public/img/blur-data.json";

export default function About() {
  return (
    <section id="about" className="relative py-20 -mt-16"
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
        <h2 className="text-3xl font-bold mb-8 text-center">Qui suis-je ?</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#11101D]">Synthèse biographique</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Je suis Hénoc AMAVIGAN, développeur fullstack et data scientist passionné par l'innovation technologique. 
                Avec une formation solide en informatique et une expérience diversifiée dans le développement d'applications web 
                et l'analyse de données, je me spécialise dans la création de solutions digitales performantes et intuitives.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Mon parcours m'a permis de développer une expertise technique polyvalente, alliant compétences en développement 
                frontend/backend et en science des données. Je suis particulièrement attiré par les projets qui combinent 
                innovation technologique et impact business, avec une approche centrée sur l'utilisateur.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ma philosophie professionnelle repose sur l'apprentissage continu, la collaboration et l'excellence technique. 
                Je crois fermement au pouvoir de la technologie pour résoudre des problèmes complexes et améliorer 
                l'expérience utilisateur.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                <User className="w-5 h-5 mr-2 text-[#FFAA00]" />
                Profil professionnel
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-700">Développeur Fullstack & Data Scientist</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-700">+5 ans d'expérience</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-700">Expertise technique polyvalente</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-4 text-[#11101D]">Schéma biographique</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#FFAA00] rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Formation en informatique</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#FFAA00] rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Développement d'applications web</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#FFAA00] rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Spécialisation en science des données</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#FFAA00] rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Projets d'innovation technologique</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
