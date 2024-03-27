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
