import { ReactNode } from "react";

export interface children {
  children: ReactNode;
}

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

export interface Types {
  type: Pokemon;
}

export interface Stats {
  base_stat: number;
  stat: {
    name: string;
  };
}
