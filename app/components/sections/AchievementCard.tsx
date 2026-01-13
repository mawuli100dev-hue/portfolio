import Link from "next/link";
import {
  FileText,
  Target,
  ChevronRight,
  TrendingUp as TrendingUpIcon,
} from "lucide-react";

interface AchievementCardProps {
  achievement: {
    id: number;
    title: string;
    icon: JSX.Element;
    contexte: string;
    enjeuxEconomiques: string[];
  };
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const shortContext =
    achievement.contexte.length > 200
      ? achievement.contexte.substring(0, 200) + "..."
      : achievement.contexte;

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
      {/* En-tête avec icône et titre */}
      <div className="flex items-start mb-4">
        <div className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-xl p-3 mr-4 shadow-md flex-shrink-0">
          {achievement.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-[#11101D] mb-2 line-clamp-2">
            {achievement.title}
          </h3>
        </div>
      </div>

      {/* Contenu flexible */}
      <div className="flex-grow mb-4">
        {/* Contexte */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-2 mr-3 border border-blue-200 flex-shrink-0">
              <FileText className="w-4 h-4 text-blue-600" />
            </div>
            <h4 className="font-semibold text-[#11101D] truncate">Contexte</h4>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
            {shortContext}
          </p>
        </div>

        {/* Enjeux économiques */}
        {achievement.enjeuxEconomiques.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-2 mr-3 border border-green-200 flex-shrink-0">
                <TrendingUpIcon className="w-4 h-4 text-green-600" />
              </div>
              <h4 className="font-semibold text-[#11101D] truncate">
                Enjeux économiques
              </h4>
            </div>
            <ul className="space-y-2">
              {achievement.enjeuxEconomiques.slice(0, 2).map((enjeu, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm text-gray-700"
                >
                  <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-full p-1 mr-2 border border-orange-200 flex-shrink-0">
                    <Target className="w-3 h-3 text-orange-600" />
                  </div>
                  <span className="line-clamp-2">{enjeu}</span>
                </li>
              ))}
              {achievement.enjeuxEconomiques.length > 2 && (
                <li className="flex items-center text-sm text-gray-500 italic">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-full p-1 mr-2 border border-purple-200 flex-shrink-0">
                    <TrendingUpIcon className="w-3 h-3 text-purple-600" />
                  </div>
                  +{achievement.enjeuxEconomiques.length - 2} autres enjeux...
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Bouton Voir plus - Toujours en bas */}
      <div className="mt-auto pt-4 border-t border-gray-200">
        <Link
          href={`/achievement/${achievement.id}`}
          className="group w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#FFAA00] to-[#FFB84D] text-white font-semibold rounded-lg hover:from-[#FFB84D] hover:to-[#FFAA00] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
        >
          Voir les détails
          <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
