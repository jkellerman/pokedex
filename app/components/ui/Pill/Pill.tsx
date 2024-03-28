import clsx from "clsx";

interface PillProps {
  type: string;
}

export default function Pill({ type }: PillProps) {
  return (
    <span
      className={clsx(
        `py-1 px-2 sm:py-2 sm:px-4 rounded-[10px] capitalize min-w-6 text-xs sm:text-base font-bold`,
        {
          // Fire
          "bg-fire text-fire-foreground": type === "fire",
          // Normal
          "bg-normal text-normal-foreground": type === "normal",
          // Fighting
          "bg-fighting text-fighting-foreground": type === "fighting",
          // Flying
          "bg-flying text-flying-foreground": type === "flying",
          // Poison
          "bg-poison text-poison-foreground": type === "poison",
          // Ground
          "bg-ground text-ground-foreground": type === "ground",
          // Rock
          "bg-rock text-rock-foreground": type === "rock",
          // Bug
          "bg-bug text-bug-foreground": type === "bug",
          // Ghost
          "bg-ghost text-ghost-foreground": type === "ghost",
          // Steel
          "bg-steel text-steel-foreground": type === "steel",
          // Water
          "bg-water text-water-foreground": type === "water",
          // Grass
          "bg-grass text-grass-foreground": type === "grass",
          // Electric
          "bg-electric text-electric-foreground": type === "electric",
          // Psychic
          "bg-psychic text-psychic-foreground": type === "psychic",
          // Ice
          "bg-ice text-ice-foreground": type === "ice",
          // Dragon
          "bg-dragon text-dragon-foreground": type === "dragon",
          // Dark
          "bg-dark text-dark-foreground": type === "dark",
          // Fairy
          "bg-fairy text-fairy-foreground": type === "fairy",
        }
      )}
    >
      {type}
    </span>
  );
}
