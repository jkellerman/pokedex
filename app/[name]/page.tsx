import Link from "next/link";
import { fetchPokemon, fetchPokemonList } from "../lib/pokeAPI";
import { PokemonList } from "../types/pokemon";
import { lalezar } from "../fonts";
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
  const pokemonId = pokemonData.id;
  const primaryType = pokemonData.types[0].type.name;

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
    <div>
      <nav className="w-full h-16 sm:h-[100px] xl:h-[133px] flex flex-row gap-4 ">
        <Navigation
          index={prevPokemon}
          primaryType={primaryType}
          direction="left"
          pokemonId={pokemonId - 1}
        />

        <Navigation
          index={nextPokemon}
          primaryType={primaryType}
          direction="right"
          pokemonId={pokemonId + 1}
        />
      </nav>
      <section className="flex flex-col max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl items-center justify-center mx-auto w-11/12 lg:w-full bg-white mt-[-20px] md:mt-[-30px] z-10 relative py-16 rounded-t-[50px]">
        <h1 className={`${lalezar.className} uppercase text-4xl sm:text-6xl`}>
          {name}
        </h1>
        <Link href="/">Go Home</Link>
      </section>

      <div className="m-4 bg-tertiary flex justify-center pb-8 w-[300px] h-[300px] rounded-lg">
        <PokemonImage
          src={pokemonData.sprites.other.home.front_default}
          name={name}
        />
      </div>
    </div>
  );
}
