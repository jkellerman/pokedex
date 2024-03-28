import Link from "next/link";
import { fetchPokemon, fetchPokemonList, fetchType } from "../lib/pokeAPI";
import { PokemonList, Types, Type, Stats } from "../types/pokemon";
import { lalezar } from "../fonts";
import PokemonImage from "../components/ui/PokemonImage/PokemonImage";
import Navigation from "../components/ui/Navigation/Navigation";
import Content from "../components/ui/Content/Content";
import Pill from "../components/ui/Pill/Pill";
import ProgressBar from "../components/ui/ProgressBar/ProgressBar";

export default async function PokemonPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;

  const pokemonData = await fetchPokemon(name);
  const pokemonList = await fetchPokemonList();
  const pokemonStats = pokemonData.stats;

  const pokemonId = pokemonData.id;
  const paddedId = String(pokemonId).padStart(4, "0");
  const formattedId = `#${paddedId}`;

  const primaryType = pokemonData.types[0].type.name;
  const types = pokemonData.types;
  const typeNames = types.map((item: Types) => item.type.name);
  const typeUrls = types.map((item: Types) => item.type.url);
  const [firstType, secondType] = await Promise.all([
    fetchType(typeUrls[0]),
    fetchType(typeUrls[1]),
  ]);

  const concatTypes = secondType ? firstType.concat(secondType) : firstType;
  const uniqueNames = concatTypes.reduce(
    (accumulator: Type[], current: Type) => {
      // Check if the current weakness's name already exists in the accumulator array
      const exists = accumulator.some(
        (item: Type) => item.name === current.name
      );

      // If the name doesn't exist, add it to the accumulator array
      if (!exists) {
        accumulator.push(current);
      }

      return accumulator;
    },
    []
  );

  const weaknesses = uniqueNames.slice(0, 5);

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
      <section className="flex flex-col max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-[1062px] items-center justify-center mx-auto w-11/12 lg:w-full bg-white mt-[-20px] md:mt-[-30px] z-10 relative py-8 sm:py-16 rounded-t-[50px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className={`${lalezar.className} uppercase text-4xl sm:text-6xl`}>
            {name}
          </h1>
          <span
            className={`${lalezar.className} uppercase text-quinary-light text-lg sm:text-2xl`}
          >
            {formattedId}
          </span>
        </div>
        <div className="w-full sm:px-16">
          <div className="sm:self-start">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-8">
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="font-bold">Go Home</span>
            </Link>
            <div className="max-w-[554px] text-start mb-2 lg:mb-4 ">
              <Content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem nemo laborum, minima assumenda cumque.
              </Content>
            </div>
          </div>
          <div className="flex justify-between w-full gap-8 mb-4 md:mb-8">
            <div>
              <h2 className={`${lalezar.className} text-2xl mb-4 md:mb-8`}>
                Type
              </h2>
              <div className="flex gap-2">
                {typeNames.map((item: string, i: number) => {
                  return <Pill key={i} type={item} />;
                })}
              </div>
            </div>
            <div className="max-w-[350px]">
              <h2
                className={`${lalezar.className} text-2xl mb-4 md:mb-8 text-end`}
              >
                Weaknesses
              </h2>
              <div className="flex flex-wrap justify-end gap-2">
                {weaknesses.map((item: Type, i: number) => {
                  return <Pill key={i} type={item.name} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:px-16 ">
          <div className="col-span-6 bg-tertiary rounded-xl">
            <PokemonImage
              src={pokemonData.sprites.other.home.front_default}
              name={name}
            />
          </div>
          <div className="col-span-6 bg-gradient-to-r from-quinary-light to-quinary rounded-xl p-16">
            <div className="w-full  flex-col justify-center">
              {pokemonStats.map((item: Stats, i: number) => {
                return (
                  <div key={i} className="flex items-center gap-2 mb-4">
                    <span className=" min-w-[80px] uppercase text-background font-bold">
                      {item.stat.name
                        .replace("special-attack", "sp-att")
                        .replace("special-defense", "sp-def")}
                    </span>
                    <ProgressBar
                      stat={item.base_stat}
                      primaryType={primaryType}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
