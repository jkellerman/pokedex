"use client";

import { PokemonList } from "@/app/types/pokemon";
import Card from "../Card/Card";
import Content from "../Content/Content";

interface PokemonListProps {
  pokemonList: PokemonList[];
}

export default function CardList({ pokemonList }: PokemonListProps) {
  return (
    <>
      <div className="sm:max-w-[525px] sm:text-left sm:self-start mb-8">
        <Content>
          Below is a list of the original 151 Pokèmon from Bulbasaur to Mew. Use
          the search above to filter through them by name !
        </Content>
      </div>

      <div className="grid gap-6 justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mb-8">
        {pokemonList.map((pokemon, i) => {
          return <Card key={i} name={pokemon.name} url={pokemon.url} />;
        })}
      </div>
    </>
  );
}
