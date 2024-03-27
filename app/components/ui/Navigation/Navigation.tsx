import Link from "next/link";
import clsx from "clsx";
import { lalezar } from "@/app/fonts";
import Icon from "./Icon";

interface NavigationProps {
  index: number;
  primaryType: string;
  direction: string;
  pokemonId: number;
}

export default function Navigation({
  index,
  primaryType,
  direction,
  pokemonId,
}: NavigationProps) {
  const paddedId = String(pokemonId).padStart(4, "0");
  const formattedId = `#${paddedId}`;
  return (
    <Link
      href={`/${index}`}
      className={clsx(
        `${lalezar.className} flex w-6/12 uppercase text-xl md:text-2xl`,
        {
          // Normal
          "bg-gradient-to-r from-normal to-normal-light text-normal-foreground":
            primaryType === "normal" && direction === "left",
          "bg-gradient-to-l from-normal to-normal-light text-normal-foreground":
            primaryType === "normal" && direction === "right",

          // Fighting
          "bg-gradient-to-r from-fighting to-fighting-light text-fighting-foreground":
            primaryType === "fighting" && direction === "left",
          "bg-gradient-to-l from-fighting to-fighting-light text-fighting-foreground":
            primaryType === "fighting" && direction === "right",

          // Flying
          "bg-gradient-to-r from-flying to-flying-light text-flying-foreground":
            primaryType === "flying" && direction === "left",
          "bg-gradient-to-l from-flying to-flying-light text-flying-foreground":
            primaryType === "flying" && direction === "right",

          // Poison
          "bg-gradient-to-r from-poison to-poison-light text-poison-foreground":
            primaryType === "poison" && direction === "left",
          "bg-gradient-to-l from-poison to-poison-light text-poison-foreground":
            primaryType === "poison" && direction === "right",

          // Ground
          "bg-gradient-to-r from-ground to-ground-light text-ground-foreground":
            primaryType === "ground" && direction === "left",
          "bg-gradient-to-l from-ground to-ground-light text-ground-foreground":
            primaryType === "ground" && direction === "right",

          // Rock
          "bg-gradient-to-r from-rock to-rock-light text-rock-foreground":
            primaryType === "rock" && direction === "left",
          "bg-gradient-to-l from-rock to-rock-light text-rock-foreground":
            primaryType === "rock" && direction === "right",

          // Bug
          "bg-gradient-to-r from-bug to-bug-light text-bug-foreground":
            primaryType === "bug" && direction === "left",
          "bg-gradient-to-l from-bug to-bug-light text-bug-foreground":
            primaryType === "bug" && direction === "right",

          // Ghost
          "bg-gradient-to-r from-ghost to-ghost-light text-ghost-foreground":
            primaryType === "ghost" && direction === "left",
          "bg-gradient-to-l from-ghost to-ghost-light text-ghost-foreground":
            primaryType === "ghost" && direction === "right",

          // Steel
          "bg-gradient-to-r from-steel to-steel-light text-steel-foreground":
            primaryType === "steel" && direction === "left",
          "bg-gradient-to-l from-steel to-steel-light text-steel-foreground":
            primaryType === "steel" && direction === "right",

          // Fire
          "bg-gradient-to-r from-fire to-fire-light text-fire-foreground":
            primaryType === "fire" && direction === "left",
          "bg-gradient-to-l from-fire to-fire-light text-fire-foreground":
            primaryType === "fire" && direction === "right",

          // Water
          "bg-gradient-to-r from-water to-water-light text-water-foreground":
            primaryType === "water" && direction === "left",
          "bg-gradient-to-l from-water to-water-light text-water-foreground":
            primaryType === "water" && direction === "right",

          // Grass
          "bg-gradient-to-r from-grass to-grass-light text-grass-foreground":
            primaryType === "grass" && direction === "left",
          "bg-gradient-to-l from-grass to-grass-light text-grass-foreground":
            primaryType === "grass" && direction === "right",

          // Electric
          "bg-gradient-to-r from-electric to-electric-light text-electric-foreground":
            primaryType === "electric" && direction === "left",
          "bg-gradient-to-l from-electric to-electric-light text-electric-foreground":
            primaryType === "electric" && direction === "right",

          // Psychic
          "bg-gradient-to-r from-psychic to-psychic-light text-psychic-foreground":
            primaryType === "psychic" && direction === "left",
          "bg-gradient-to-l from-psychic to-psychic-light text-psychic-foreground":
            primaryType === "psychic" && direction === "right",

          // Ice
          "bg-gradient-to-r from-ice to-ice-light text-ice-foreground":
            primaryType === "ice" && direction === "left",
          "bg-gradient-to-l from-ice to-ice-light text-ice-foreground":
            primaryType === "ice" && direction === "right",

          // Dragon
          "bg-gradient-to-r from-dragon to-dragon-light text-dragon-foreground":
            primaryType === "dragon" && direction === "left",
          "bg-gradient-to-l from-dragon to-dragon-light text-dragon-foreground":
            primaryType === "dragon" && direction === "right",

          // Dark
          "bg-gradient-to-r from-dark to-dark-light text-dark-foreground":
            primaryType === "dark" && direction === "left",
          "bg-gradient-to-l from-dark to-dark-light text-dark-foreground":
            primaryType === "dark" && direction === "right",

          // Fairy
          "bg-gradient-to-r from-fairy to-fairy-light text-fairy-foreground":
            primaryType === "fairy" && direction === "left",
          "bg-gradient-to-l from-fairy to-fairy-light text-fairy-foreground":
            primaryType === "fairy" && direction === "right",
        }
      )}
    >
      {direction === "left" ? (
        <span className="flex justify-between sm:justify-evenly items-center gap-4 min-w-full px-4 sm:px-6">
          <span className="bg-white p-1 sm:p-2 rounded-full">
            <Icon icon="chevronLeft" width="12" height="12" />
          </span>
          <span className="flex -translate-y-2">
            {index}&nbsp;
            <span className="hidden sm:block">{formattedId}</span>
          </span>
        </span>
      ) : (
        <span className="flex justify-between sm:justify-evenly items-center gap-4 min-w-full px-4 sm:px-6">
          <span className="flex -translate-y-2">
            {index}&nbsp;
            <span className="hidden sm:block">{formattedId}</span>
          </span>
          <span className="bg-white p-1 sm:p-2 rounded-full">
            <Icon icon="chevronRight" width="12" height="12" />
          </span>
        </span>
      )}
    </Link>
  );
}
