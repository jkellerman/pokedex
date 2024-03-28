"use client";
import React from "react";
import * as Progress from "@radix-ui/react-progress";
import clsx from "clsx";
interface ProgressBarProps {
  stat: number;
  primaryType: string;
}
export default function ProgressBar({ stat, primaryType }: ProgressBarProps) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(stat), 500);
    return () => clearTimeout(timer);
  }, [stat]);

  return (
    <Progress.Root
      className=" relative overflow-hidden bg-quinary-dark rounded-full w-[250px] h-[15px]"
      value={progress}
    >
      <Progress.Indicator
        className={clsx(
          `w-full h-full transition duration-[600] rounded-full ease-[cubic-bezier(0.65, 0, 0.35, 1)]`,
          {
            // Normal
            "bg-gradient-to-r from-normal to-normal-light text-normal-foreground":
              primaryType === "normal",
            // Fighting
            "bg-gradient-to-r from-fighting to-fighting-light text-fighting-foreground":
              primaryType === "fighting",
            // Flying
            "bg-gradient-to-r from-flying to-flying-light text-flying-foreground":
              primaryType === "flying",
            // Poison
            "bg-gradient-to-r from-poison to-poison-light text-poison-foreground":
              primaryType === "poison",
            // Ground
            "bg-gradient-to-r from-ground to-ground-light text-ground-foreground":
              primaryType === "ground",
            // Rock
            "bg-gradient-to-r from-rock to-rock-light text-rock-foreground":
              primaryType === "rock",
            // Bug
            "bg-gradient-to-r from-bug to-bug-light text-bug-foreground":
              primaryType === "bug",
            // Ghost
            "bg-gradient-to-r from-ghost to-ghost-light text-ghost-foreground":
              primaryType === "ghost",
            // Steel
            "bg-gradient-to-r from-steel to-steel-light text-steel-foreground":
              primaryType === "steel",
            // Fire
            "bg-gradient-to-r from-fire to-fire-light text-fire-foreground":
              primaryType === "fire",
            // Water
            "bg-gradient-to-r from-water to-water-light text-water-foreground":
              primaryType === "water",
            // Grass
            "bg-gradient-to-r from-grass to-grass-light text-grass-foreground":
              primaryType === "grass",
            // Electric
            "bg-gradient-to-r from-electric to-electric-light text-electric-foreground":
              primaryType === "electric",
            // Psychic
            "bg-gradient-to-r from-psychic to-psychic-light text-psychic-foreground":
              primaryType === "psychic",
            // Ice
            "bg-gradient-to-r from-ice to-ice-light text-ice-foreground":
              primaryType === "ice",
            // Dragon
            "bg-gradient-to-r from-dragon to-dragon-light text-dragon-foreground":
              primaryType === "dragon",
            // Dark
            "bg-gradient-to-r from-dark to-dark-light text-dark-foreground":
              primaryType === "dark",
            // Fairy
            "bg-gradient-to-r from-fairy to-fairy-light text-fairy-foreground":
              primaryType === "fairy",
          }
        )}
        style={{
          transform: `translateX(-${
            progress > 150 ? 160 - progress : 140 - progress
          }%)`,
        }}
      />
    </Progress.Root>
  );
}
