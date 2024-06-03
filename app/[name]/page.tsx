import Link from "next/link";
import {
  fetchAbilitiesWithEffects,
  fetchEvolutionChain,
  fetchFlavorText,
  fetchPokemonDetails,
  fetchPokemonNames,
  fetchType,
} from "../lib/pokeAPI";
import { PokemonList, Types, Pokemon } from "../types/pokemon";
import { lalezar } from "../fonts";
import PokemonImage from "../components/ui/PokemonImage/PokemonImage";
import Navigation from "../components/ui/Navigation/Navigation";
import Content from "../components/ui/Content/Content";

import TabsList from "../components/ui/TabsList/TabsList";
import { formatId } from "../utils/utils";
import PokemonMeasurements from "../components/ui/PokemonMeasurements/PokemonMeasurements";
import PokemonTypes from "../components/ui/PokemonTypes/PokemonTypes";
import PokemonWeaknesses from "../components/ui/PokemonWeaknesses/PokemonWeaknesses";
import PokemonAbility from "../components/ui/PokemonAbility/PokemonAbility";
import { Suspense } from "react";
import { AbilitiesSkeleton } from "../components/ui/skeletons";
import Icon from "../components/ui/Icon/Icon";

export default async function PokemonPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;

  const pokemonData = await fetchPokemonDetails(name);

  const pokemonNames = await fetchPokemonNames();
  const pokemonAbilities = await fetchAbilitiesWithEffects(name);

  const evolutionChain = await fetchEvolutionChain(pokemonData?.pokemonId);

  const flavorText = await fetchFlavorText(pokemonData?.pokemonId);
  const typeNames = pokemonData?.types.map((item: Types) => item.type.name);
  const typeUrls = pokemonData?.types.map((item: Types) => item.type.url);
  const [firstType, secondType] = await Promise.all([
    fetchType(typeUrls[0]),
    fetchType(typeUrls[1]),
  ]);

  // the pokemons biggest weaknesses
  const firstTypeDoubleDamage =
    firstType && firstType[0].map((item: Pokemon) => item.name);
  const secondTypeDoubleDamage = secondType
    ? secondType[0].map((item: Pokemon) => item.name)
    : [];
  const pokemonDoubleDamageTypes = firstTypeDoubleDamage.concat(
    secondTypeDoubleDamage
  );
  // Types the pokemon receive less damage from (needed to get the correct weaknesses for each pokemon)
  const firstTypeHalfDamage =
    firstType && firstType[1].map((item: Pokemon) => item.name);
  const secondTypeHalfDamage = secondType
    ? secondType[1].map((item: Pokemon) => item.name)
    : [];
  const firstTypeNoDamage =
    firstType && firstType[2].map((item: Pokemon) => item.name);
  const secondTypeNoDamage = secondType
    ? secondType[2]?.map((item: Pokemon) => item.name)
    : [];

  const damageResistantTypes = firstTypeHalfDamage.concat(
    secondTypeHalfDamage,
    firstTypeNoDamage,
    secondTypeNoDamage
  );

  // Check if pokemonDoubleDamageTypes contains damage Resistant Types to get the correct weaknesses
  const checkArrays = pokemonDoubleDamageTypes.filter(
    (type: Pokemon) => !damageResistantTypes.includes(type)
  );
  const weaknesses = checkArrays.filter(
    (type: Pokemon, index: number, array: Pokemon[]) =>
      array.indexOf(type) === index
  );
  const index = pokemonNames.findIndex(
    (pokemon: PokemonList) => pokemon.name === name
  );

  let prevPokemon = null;
  let nextPokemon = null;

  if (index !== -1) {
    if (index > 0) {
      prevPokemon = pokemonNames[index - 1].name;
    }
    if (index < pokemonNames.length - 1) {
      nextPokemon = pokemonNames[index + 1].name;
    }
  }

  return (
    <div>
      <nav className="w-full h-16 sm:h-[100px] xl:h-[133px] flex flex-row gap-4 ">
        <Navigation
          index={prevPokemon}
          primaryType={pokemonData?.primaryType}
          direction="left"
          pokemonId={pokemonData?.pokemonId - 1}
        />

        <Navigation
          index={nextPokemon}
          primaryType={pokemonData?.primaryType}
          direction="right"
          pokemonId={pokemonData?.pokemonId + 1}
        />
      </nav>
      <div className="flex flex-col max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-[1062px] items-center justify-center mx-auto w-11/12 lg:w-full bg-white mt-[-20px] md:mt-[-30px] z-10 relative py-8 sm:py-16 sm:px-16 rounded-t-[50px]">
        <section className="flex flex-col justify-center items-center">
          <h1 className={`${lalezar.className} uppercase text-4xl sm:text-6xl`}>
            {name}
          </h1>
          <span
            className={`${lalezar.className} uppercase text-quinary-light text-lg sm:text-2xl`}
          >
            {formatId(pokemonData?.pokemonId)}
          </span>
        </section>
        <section className="w-full ">
          <div className="sm:self-start">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-8">
              <Icon icon="arrowLeft" className=" w-4 h-4" />
              <span className="font-bold">Go Home</span>
            </Link>
            <div className="mb-4 flex flex-col xl:flex-row justify-between gap-6 xl:gap-0">
              <div className="max-w-[554px] text-start">
                <Content>{flavorText}</Content>
              </div>
              <PokemonMeasurements
                weight={pokemonData?.weight.toFixed(1)}
                height={pokemonData?.height.toFixed(1)}
              />
            </div>
          </div>
          <div className="flex justify-between w-full gap-8 mb-4 md:mb-8">
            <PokemonTypes typeNames={typeNames} />
            <PokemonWeaknesses weaknesses={weaknesses} />
          </div>
        </section>
        <div className="grid grid-cols-12 grid-rows-2 xl:grid-rows-none gap-4  mb-8">
          <div className=" col-span-12 row-span-1 xl:col-span-6 bg-tertiary rounded-xl">
            <PokemonImage src={pokemonData?.imageUrl} name={name} />
          </div>

          <TabsList
            pokemonStats={pokemonData?.pokemonStats}
            primaryType={pokemonData?.primaryType}
            evolutionChain={evolutionChain as PokemonList[]}
          />
        </div>
        <section className="self-start">
          <h2 className="text-xl font-bold mb-4">Abilities</h2>
          <Suspense fallback={<AbilitiesSkeleton />}>
            {pokemonAbilities?.map((ability, i) => (
              <PokemonAbility
                key={i}
                name={ability?.name}
                effect={ability?.effect}
              />
            ))}
          </Suspense>
        </section>
      </div>
    </div>
  );
}
