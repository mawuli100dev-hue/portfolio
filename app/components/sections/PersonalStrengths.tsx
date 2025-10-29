import {
  Heart,
  Users,
  Camera,
  Dumbbell,
  Puzzle,
  ChefHat,
  Music,
} from "lucide-react";

export default function PersonalStrengths() {
  const passions = [
    {
      title: "Musique Instrumentale",
      description: "Pratique du baryton, tuba et saxophone en ensemble musical",
      icon: Music,
      impact: "Développe la discipline, l'écoute active et le travail d'équipe",
      examples: [
        "Répétitions régulières avec un ensemble de cuivres local",
        "Apprentissage de partitions classiques et contemporaines",
        "Participation à des concerts et événements culturels",
      ],
    },
    {
      title: "Cuisine du Monde",
      description:
        "Découverte et recréation de spécialités culinaires internationales",
      icon: ChefHat,
      impact: "Stimule la créativité et l'ouverture d'esprit interculturelle",
      examples: [
        "Masterclass de plats africains, asiatiques et européens",
        "Expérimentation avec des épices et techniques variées",
        "Création d'un carnet de recettes personnalisées",
      ],
    },
  ];

  return (
    <section id="personal-strengths" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">
          Mes atouts personnels
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Passions et activités */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#11101D] flex items-center justify-center">
              <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                <Heart className="w-6 h-6 text-[#F5F5F5]" />
              </span>
              Mes passions et activités
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {passions.map((passion, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                      <passion.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#11101D]">
                        {passion.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {passion.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-3 font-medium">
                    {passion.impact}
                  </p>
                  <ul className="space-y-2">
                    {passion.examples.map((example, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-[#FFAA00] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
