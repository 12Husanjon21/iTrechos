import React, { useState, useEffect } from "react";
import AnimatedNumbers from "react-animated-numbers";

const achievementsList = [
  {
    metric: "Automatic payment",
    value: "98",
    postfix: "%",
  },
  {
    postfix: "k+",
    metric: "New users per week",
    value: "100",
  },
  {
    metric: "Monthly active users",
    value: "110",
    postfix: "k+",
  },
  {
    metric: "Growth-over-year",
    value: "33",
    postfix: "%",
  },
];

const AchievementsSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures the component renders properly on the client.
  }, []);

  if (!isMounted) return null; // Prevent rendering until the component has mounted.

  return (
    <div className="py-8 px-10 xl:gap-16 sm:py-16 xl:px-16 bg-black ">
      <div className=" rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-[#FF8911] text-6xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value, 10)}
                locale="en-US"
                className="text-[#FF8911] text-6xl mb-2 font-bold"
                configs={(_, i) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (i + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#FFFFFF] text-lg">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
