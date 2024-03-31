import Card from "../Card/Card";
import { CardGrid, CardListItem } from "../CardGrid/CardGrid";
import Content from "../Content/Content";

import { PokemonList } from "@/app/types/pokemon";

interface PokemonListProps {
  pokemonList: PokemonList[];
  loadMore?: boolean;
  isError: boolean;
  loadMorePokemon?: () => Promise<void>;
}

export default function CardList({
  pokemonList,
  loadMore,
  isError,
  loadMorePokemon,
}: PokemonListProps) {
  if (isError)
    return (
      <div className="justify-center mb-12 w-full gap-4 sm:gap-8">
        Error Loading Pokemon
      </div>
    );
  return (
    <>
      <CardGrid>
        {pokemonList.map((pokemon, i) => {
          return (
            <CardListItem key={i}>
              <Card
                name={pokemon.name}
                url={pokemon.url}
                id={pokemon.id}
                type={pokemon.type}
              />
            </CardListItem>
          );
        })}
      </CardGrid>
    </>
  );
}
