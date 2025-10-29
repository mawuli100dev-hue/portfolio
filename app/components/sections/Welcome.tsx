import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import blurData from "@/public/img/blur-data.json";

export default function Welcome() {
  return (
    <section id="welcome" className="relative py-20 -mt-16">
      {/* Container pour l'image et le dégradé */}
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

        {/* Overlay noir pour la lisibilité */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Dégradé blanc TRÈS PROGRESSIF en bas seulement */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{
            background: `linear-gradient(to top, 
              white 0%,
              rgba(255, 255, 255, 1) 20%,
              
              transparent 100%
            )`,
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10 pt-16">
        <div className="md:w-1/2 mb-8 md:mb-0 relative">
          <Image
            src="/img/0.png"
            alt="Hénoc AMAVIGAN"
            width={400}
            height={400}
            placeholder="blur"
            priority
            blurDataURL={blurData["0.png"]}
            className="rounded-full shadow-lg relative z-20"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Bienvenue
          </h1>
          <div className="mb-6">
            <Quote className="w-8 h-8 text-[#FFAA00] mb-2" />
            <p className="text-xl italic text-[#FFAA00] font-semibold">
              "Donner du sens aux données complexes pour créer l'innovation de
              demain"
            </p>
          </div>
          <p className="text-lg mb-8 text-gray-200">
            Je suis ravi de vous accueillir dans mon univers digital. Je suis
            Hénoc, développeur fullstack junior et data scientist en formation.
            Animé par la passion des technologies, je crée des solutions qui
            allient performance technique et expérience utilisateur remarquable.
          </p>
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
