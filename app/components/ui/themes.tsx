export const cardPillTheme = (type: string) => {
  return {
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

    // Fire
    "bg-fire text-fire-foreground": type === "fire",

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
  };
};

export const navigationTheme = (primaryType: string, direction: string) => {
  return {
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
  };
};

export const pillTheme = (type: string) => {
  return {
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
    "bg-ghost text-ghost-foreground shadow-md shadow-ghost": type === "ghost",
    // Steel
    "bg-steel text-steel-foreground shadow-md shadow-steel": type === "steel",
    // fire
    "bg-fire text-fire-foreground shadow-md shadow-fire": type === "fire",
    // Water
    "bg-water text-water-foreground shadow-md shadow-water": type === "water",
    // Grass
    "bg-grass text-grass-foreground shadow-md shadow-grass": type === "grass",
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
    "bg-fairy text-fairy-foreground shadow-md shadow-fairy": type === "fairy",
  };
};

export const progressTheme = (primaryType: string) => {
  return {
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
  };
};

export const tabTheme = (primaryType: string) => {
  return {
    // Normal
    "data-[state=active]:bg-normal data-[state=active]:text-normal-foreground":
      primaryType === "normal",
    // Fighting
    "data-[state=active]:bg-fighting data-[state=active]:text-fighting-foreground":
      primaryType === "fighting",
    // Flying
    "data-[state=active]:bg-flying data-[state=active]:text-flying-foreground":
      primaryType === "flying",
    // Poison
    "data-[state=active]:bg-poison data-[state=active]:text-poison-foreground":
      primaryType === "poison",
    // Ground
    "data-[state=active]:bg-ground data-[state=active]:text-ground-foreground":
      primaryType === "ground",
    // Rock
    "data-[state=active]:bg-rock data-[state=active]:text-rock-foreground":
      primaryType === "rock",
    // Bug
    "data-[state=active]:bg-bug data-[state=active]:text-bug-foreground":
      primaryType === "bug",
    // Ghost
    "data-[state=active]:bg-ghost data-[state=active]:text-ghost-foreground":
      primaryType === "ghost",
    // Steel
    "data-[state=active]:bg-steel data-[state=active]:text-steel-foreground":
      primaryType === "steel",
    // Fire
    "data-[state=active]:bg-fire data-[state=active]:text-fire-foreground":
      primaryType === "fire",
    // Water
    "data-[state=active]:bg-water data-[state=active]:text-water-foreground":
      primaryType === "water",
    // Grass
    "data-[state=active]:bg-grass data-[state=active]:text-grass-foreground":
      primaryType === "grass",
    // Electric
    "data-[state=active]:bg-electric data-[state=active]:text-electric-foreground":
      primaryType === "electric",
    // Psychic
    "data-[state=active]:bg-psychic data-[state=active]:text-psychic-foreground":
      primaryType === "psychic",
    // Ice
    "data-[state=active]:bg-ice data-[state=active]:text-ice-foreground":
      primaryType === "ice",
    // Dragon
    "data-[state=active]:bg-dragon data-[state=active]:text-dragon-foreground":
      primaryType === "dragon",
    // Dark
    "data-[state=active]:bg-dark data-[state=active]:text-dark-foreground":
      primaryType === "dark",
    // Fairy
    "data-[state=active]:bg-fairy data-[state=active]:text-fairy-foreground":
      primaryType === "fairy",
  };
};
