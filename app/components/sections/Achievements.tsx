import AchievementCard from "./AchievementCard";
import { achievementsData } from "../../achievement/Achiv.data";

export default function Achievements() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#11101D] mb-4">
            Mes Réalisations
          </h2>
        </div>

        {/* Grille avec hauteurs égales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...achievementsData].reverse().map((achievement) => (
            <div key={achievement.id} className="h-full">
              <AchievementCard achievement={achievement} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
