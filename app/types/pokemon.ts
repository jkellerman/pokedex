export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonList extends Pokemon {
  id: number;
  type: string;
}

export interface PokemonListProps {
  pokemonList: PokemonList[];
}

export interface PokemonType {
  type: Pokemon;
}

export interface PokemonStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonDetails {
  abilities: {
    ability: Pokemon;
  }[];
  stats: PokemonStats[];
  id: number;
  height: number;
  weight: number;
  types: PokemonType[];
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  name: string;
}

export interface PokemonAbilityDetails {
  name: string;
  effect_entries: {
    effect: string;
    language: Pokemon;
  }[];
}

export interface PokemonNames {
  results: Pokemon[];
}

export interface PokemonDamageRelation {
  damage_relations: {
    double_damage_from: Pokemon[];
    half_damage_from: Pokemon[];
    no_damage_from: Pokemon[];
  };
}

export interface PokemonSpecies {
  evolution_chain: {
    url: string;
  };
  flavor_text_entries: {
    flavor_text: string;
  }[];
}

export interface PokemonEvolutionChain {
  chain: {
    evolves_to: {
      evolves_to: {
        species: Pokemon;
      }[];
      species: Pokemon;
    }[];
    species: {
      name: string;
    };
  };
}
