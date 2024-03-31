import SearchList from "./components/ui/SearchList/SearchList";
import { fetchPokemonList, fetchPokemonNames } from "./lib/pokeAPI";
import { PokemonList } from "./types/pokemon";

export default async function Home() {
  const pokemonList = await fetchPokemonList(0, 20);
  const pokemonNames = await fetchPokemonNames();

  return (
    <main className="flex flex-col items-center justify-between">
      <SearchList
        pokemonList={pokemonList as PokemonList[]}
        pokemonNames={pokemonNames}
      />
    </main>
  );
}
