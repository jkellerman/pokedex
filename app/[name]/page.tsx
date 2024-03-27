import Link from "next/link";
import { fetchPokemon, fetchPokemonList } from "../lib/pokeAPI";
import { PokemonList } from "../types/pokemon";

import PokemonImage from "../components/ui/PokemonImage/PokemonImage";
import Navigation from "../components/ui/Navigation/Navigation";

export default async function PokemonPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;

  const pokemonData = await fetchPokemon(name);
  const pokemonList = await fetchPokemonList();

  let primaryType = pokemonData.types[0].type.name;
  console.log("types", primaryType);

  const index = pokemonList.findIndex(
    (pokemon: PokemonList) => pokemon.name === name
  );

  let prevPokemon = null;
  let nextPokemon = null;

  if (index !== -1) {
    if (index > 0) {
      prevPokemon = pokemonList[index - 1].name;
    }
    if (index < pokemonList.length - 1) {
      nextPokemon = pokemonList[index + 1].name;
    }
  }

  return (
    <>
      <div className="w-full h-20 flex flex-row gap-4 mb-24">
        <Navigation
          index={prevPokemon}
          primaryType={primaryType}
          direction="left"
        />
        <Navigation
          index={nextPokemon}
          primaryType={primaryType}
          direction="right"
        />
      </div>

      <Link href="/">Go Home</Link>
      <div className="m-4 bg-tertiary flex justify-center pb-8 w-[300px] h-[300px] rounded-lg">
        <PokemonImage
          src={pokemonData.sprites.other.home.front_default}
          name={name}
        />
      </div>
    </>
  );
}
