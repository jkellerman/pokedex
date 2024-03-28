import { ReactNode } from "react";

export interface PokemonList {
  name: string;
  url: string;
}

export interface PokemonListProps {
  pokemonList: PokemonList[];
}

export interface children {
  children: ReactNode;
}

export interface Type {
  name: string;
  url: string;
}

export interface Types {
  type: Type;
}

export interface Stats {
  base_stat: number;
  stat: {
    name: string;
  };
}
