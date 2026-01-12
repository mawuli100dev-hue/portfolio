import AchievementDetail from "../AchievementDetail";
import { achievementsData } from "../Achiv.data";

// Fonction pour générer les paramètres statiques
export async function generateStaticParams() {
  return achievementsData.map((achievement) => ({
    id: achievement.id.toString(),
  }));
}

// Interface pour les paramètres
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AchievementPage({ params }: PageProps) {
  // Await les params car ils sont une Promise dans Next.js 15+
  const { id } = await params;
  const achievementId = parseInt(id);
  const achievement = achievementsData.find((a) => a.id === achievementId);

  if (!achievement) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Projet non trouvé
          </h1>
          <p className="text-gray-600">
            Le projet que vous recherchez n'existe pas.
          </p>
        </div>
      </div>
    );
  }

  return <AchievementDetail achievementId={achievementId} />;
}

// Définir la configuration de la page
export const dynamicParams = false;
