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
    "bg-gradient-to-r transition-all duration-300 from-normal-light to-normal via-normal bg-size-200 bg-pos-0 hover:bg-pos-100 text-normal-foreground":
      primaryType === "normal" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-normal-light to-normal via-normal bg-size-200 bg-pos-100 hover:bg-pos-0 text-normal-foreground":
      primaryType === "normal" && direction === "right",

    // Fighting
    "bg-gradient-to-r transition-all duration-300 from-fighting-light to-fighting via-fighting bg-size-200 bg-pos-0 hover:bg-pos-100 text-fighting-foreground":
      primaryType === "fighting" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-fighting-light to-fighting via-fighting bg-size-200 bg-pos-100 hover:bg-pos-0 text-fighting-foreground":
      primaryType === "fighting" && direction === "right",

    // Flying
    "bg-gradient-to-r transition-all duration-300 from-flying-light to-flying via-flying bg-size-200 bg-pos-0 hover:bg-pos-100 text-flying-foreground":
      primaryType === "flying" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-flying-light to-flying via-flying bg-size-200 bg-pos-100 hover:bg-pos-0 text-flying-foreground":
      primaryType === "flying" && direction === "right",

    // Poison
    "bg-gradient-to-r transition-all duration-300 from-poison-light to-poison via-poison bg-size-200 bg-pos-0 hover:bg-pos-100 text-poison-foreground":
      primaryType === "poison" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-poison-light to-poison via-poison bg-size-200 bg-pos-100 hover:bg-pos-0 text-poison-foreground":
      primaryType === "poison" && direction === "right",

    // Ground
    "bg-gradient-to-r transition-all duration-300 from-ground-light to-ground via-ground bg-size-200 bg-pos-0 hover:bg-pos-100 text-ground-foreground":
      primaryType === "ground" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-ground-light to-ground via-ground bg-size-200 bg-pos-100 hover:bg-pos-0 text-ground-foreground":
      primaryType === "ground" && direction === "right",

    // Rock
    "bg-gradient-to-r transition-all duration-300 from-rock-light to-rock via-rock bg-size-200 bg-pos-0 hover:bg-pos-100 text-rock-foreground":
      primaryType === "rock" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-rock-light to-rock via-rock bg-size-200 bg-pos-100 hover:bg-pos-0 text-rock-foreground":
      primaryType === "rock" && direction === "right",

    // Bug
    "bg-gradient-to-r transition-all duration-300 from-bug-light to-bug via-bug bg-size-200 bg-pos-0 hover:bg-pos-100 text-bug-foreground":
      primaryType === "bug" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-bug-light to-bug via-bug bg-size-200 bg-pos-100 hover:bg-pos-0 text-bug-foreground":
      primaryType === "bug" && direction === "right",

    // Ghost
    "bg-gradient-to-r transition-all duration-300 from-ghost-light to-ghost via-ghost bg-size-200 bg-pos-0 hover:bg-pos-100 text-ghost-foreground":
      primaryType === "ghost" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-ghost-light to-ghost via-ghost bg-size-200 bg-pos-100 hover:bg-pos-0 text-ghost-foreground":
      primaryType === "ghost" && direction === "right",

    // Steel
    "bg-gradient-to-r transition-all duration-300 from-steel-light to-steel via-steel bg-size-200 bg-pos-0 hover:bg-pos-100 text-steel-foreground":
      primaryType === "steel" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-steel-light to-steel via-steel bg-size-200 bg-pos-100 hover:bg-pos-0 text-steel-foreground":
      primaryType === "steel" && direction === "right",

    // Fire
    "bg-gradient-to-r transition-all duration-300 from-fire-light to-fire via-fire bg-size-200 bg-pos-0 hover:bg-pos-100 text-fire-foreground":
      primaryType === "fire" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-fire-light to-fire via-fire bg-size-200 bg-pos-100 hover:bg-pos-0 text-fire-foreground":
      primaryType === "fire" && direction === "right",

    // Water
    "bg-gradient-to-r transition-all duration-300 from-water-light to-water via-water bg-size-200 bg-pos-0 hover:bg-pos-100 text-water-foreground":
      primaryType === "water" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-water-light to-water via-water bg-size-200 bg-pos-100 hover:bg-pos-0 text-water-foreground":
      primaryType === "water" && direction === "right",

    // Grass
    "bg-gradient-to-r transition-all duration-300 from-grass-light to-grass via-grass bg-size-200 bg-pos-0 hover:bg-pos-100 text-grass-foreground":
      primaryType === "grass" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-grass-light to-grass via-grass bg-size-200 bg-pos-100 hover:bg-pos-0 text-grass-foreground":
      primaryType === "grass" && direction === "right",

    // Electric
    "bg-gradient-to-r transition-all duration-300 from-electric-light to-electric via-electric bg-size-200 bg-pos-0 hover:bg-pos-100 text-electric-foreground":
      primaryType === "electric" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-electric-light to-electric via-electric bg-size-200 bg-pos-100 hover:bg-pos-0 text-electric-foreground":
      primaryType === "electric" && direction === "right",

    // Psychic
    "bg-gradient-to-r transition-all duration-300 from-psychic-light to-psychic via-psychic bg-size-200 bg-pos-0 hover:bg-pos-100 text-psychic-foreground":
      primaryType === "psychic" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-psychic-light to-psychic via-psychic bg-size-200 bg-pos-100 hover:bg-pos-0 text-psychic-foreground":
      primaryType === "psychic" && direction === "right",

    // Ice
    "bg-gradient-to-r transition-all duration-300 from-ice-light to-ice via-ice bg-size-200 bg-pos-0 hover:bg-pos-100 text-ice-foreground":
      primaryType === "ice" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-ice-light to-ice via-ice bg-size-200 bg-pos-100 hover:bg-pos-0 text-ice-foreground":
      primaryType === "ice" && direction === "right",

    // Dragon
    "bg-gradient-to-r transition-all duration-300 from-dragon-light to-dragon via-dragon bg-size-200 bg-pos-0 hover:bg-pos-100 text-dragon-foreground":
      primaryType === "dragon" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-dragon-light to-dragon via-dragon bg-size-200 bg-pos-100 hover:bg-pos-0 text-dragon-foreground":
      primaryType === "dragon" && direction === "right",

    // Dark
    "bg-gradient-to-r transition-all duration-300 from-dark-light to-dark via-dark bg-size-200 bg-pos-0 hover:bg-pos-100 text-dark-foreground":
      primaryType === "dark" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-dark-light to-dark via-dark bg-size-200 bg-pos-100 hover:bg-pos-0 text-dark-foreground":
      primaryType === "dark" && direction === "right",

    // Fairy
    "bg-gradient-to-r transition-all duration-300 from-fairy-light to-fairy via-fairy bg-size-200 bg-pos-0 hover:bg-pos-100 text-fairy-foreground":
      primaryType === "fairy" && direction === "left",
    "bg-gradient-to-l transition-all duration-300 from-fairy-light to-fairy via-fairy bg-size-200 bg-pos-100 hover:bg-pos-0 text-fairy-foreground":
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
    "bg-normal from-normal text-normal-foreground": primaryType === "normal",
    // Fighting
    "bg-fighting from-fighting text-fighting-foreground":
      primaryType === "fighting",
    // Flying
    "bg-flying from-flying text-flying-foreground": primaryType === "flying",
    // Poison
    "bg-poison from-poison text-poison-foreground": primaryType === "poison",
    // Ground
    "bg-ground from-ground text-ground-foreground": primaryType === "ground",
    // Rock
    "bg-rock from-rock text-rock-foreground": primaryType === "rock",
    // Bug
    "bg-bug from-bug text-bug-foreground": primaryType === "bug",
    // Ghost
    "bg-ghost from-ghost text-ghost-foreground": primaryType === "ghost",
    // Steel
    "bg-steel from-steel text-steel-foreground": primaryType === "steel",
    // Fire
    "bg-fire from-fire text-fire-foreground": primaryType === "fire",
    // Water
    "bg-water from-water text-water-foreground": primaryType === "water",
    // Grass
    "bg-grass from-grass text-grass-foreground": primaryType === "grass",
    // Electric
    "bg-electric from-electric text-electric-foreground":
      primaryType === "electric",
    // Psychic
    "bg-psychic from-psychic text-psychic-foreground":
      primaryType === "psychic",
    // Ice
    "bg-ice from-ice text-ice-foreground": primaryType === "ice",
    // Dragon
    "bg-dragon from-dragon text-dragon-foreground": primaryType === "dragon",
    // Dark
    "bg-dark from-dark text-dark-foreground": primaryType === "dark",
    // Fairy
    "bg-fairy from-fairy text-fairy-foreground": primaryType === "fairy",
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
