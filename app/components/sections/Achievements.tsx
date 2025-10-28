import Achievement, { achievementsData } from "./Achievement";


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