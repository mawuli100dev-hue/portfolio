import Achievement from "./Achievement";
import { achievementsData } from "./Achiv.data";

export default function Achievements() {
  return (
    <div>
      {achievementsData.map((achievement) => {
        console.log(achievement);
        return (
          <Achievement key={achievement.id} achievementId={achievement.id} />
        );
      })}
    </div>
  );
}
