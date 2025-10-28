import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import blurData from "@/public/img/blur-data.json";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="relative py-20 -mt-16"
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
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10 pt-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/img/0.png"
          alt="Hénoc AMAVIGAN"
          width={400}
          height={400}
          placeholder="blur"
          priority
          blurDataURL={blurData["0.png"]}
          className="rounded-full shadow-lg"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Bienvenue</h1>
        <div className="mb-6">
          <Quote className="w-8 h-8 text-[#FFAA00] mb-2" />
          <p className="text-xl italic text-[#FFAA00] font-semibold">
            "Transformer des données complexes en solutions élégantes"
          </p>
        </div>
        <p className="text-lg mb-8 text-gray-200">
          Je suis ravi de vous accueillir sur mon portfolio professionnel. 
          Ce document présente mon parcours, mes compétences et mes réalisations 
          dans le domaine du développement fullstack et de la science des données.
        </p>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-white">Recommandations au lecteur :</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Consultez d'abord la section "Qui suis-je ?" pour une vue d'ensemble</li>
            <li>• Explorez mes réalisations significatives pour comprendre mon expertise</li>
            <li>• N'hésitez pas à me contacter pour toute question</li>
          </ul>
        </div>
        <a
          href="#about"
          className="inline-flex items-center bg-[#FFAA00] text-[#11101D] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200"
        >
          Découvrir mon profil
          <ArrowRight className="ml-2" size={20} />
        </a>
        </div>
      </div>
    </section>
  );
}
