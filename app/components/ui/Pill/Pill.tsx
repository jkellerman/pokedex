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
          // Normal
          "bg-normal text-normal-foreground shadow-md shadow-normal":
            type === "normal",
          // Fighting
          "bg-fighting text-fighting-foreground shadow-md shadow-fighting":
            type === "fighting",
          // Flying
          "bg-flying text-flying-foreground shadow-md shadow-flying":
            type === "flying",
          // Poison
          "bg-poison text-poison-foreground shadow-md shadow-poison":
            type === "poison",
          // Ground
          "bg-ground text-ground-foreground shadow-md shadow-ground":
            type === "ground",
          // Rock
          "bg-rock text-rock-foreground shadow-md shadow-rock": type === "rock",
          // Bug
          "bg-bug text-bug-foreground shadow-md shadow-bug": type === "bug",
          // Ghost
          "bg-ghost text-ghost-foreground shadow-md shadow-ghost":
            type === "ghost",
          // Steel
          "bg-steel text-steel-foreground shadow-md shadow-steel":
            type === "steel",
          // fire
          "bg-fire text-fire-foreground shadow-md shadow-fire": type === "fire",
          // Water
          "bg-water text-water-foreground shadow-md shadow-water":
            type === "water",
          // Grass
          "bg-grass text-grass-foreground shadow-md shadow-grass":
            type === "grass",
          // Electric
          "bg-electric text-electric-foreground shadow-md shadow-electric":
            type === "electric",
          // Psychic
          "bg-psychic text-psychic-foreground shadow-md shadow-psychic":
            type === "psychic",
          // Ice
          "bg-ice text-ice-foreground shadow-md shadow-ice": type === "ice",
          // Dragon
          "bg-dragon text-dragon-foreground shadow-md shadow-dragon":
            type === "dragon",
          // Dark
          "bg-dark text-dark-foreground shadow-md shadow-dark": type === "dark",
          // Fairy
          "bg-fairy text-fairy-foreground shadow-md shadow-fairy":
            type === "fairy",
        }
      )}
    >
      {type}
    </span>
  );
}
