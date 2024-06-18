import SearchList from "./components/ui/SearchList/SearchList";
import { fetchPokemonList, fetchPokemonNames } from "./lib/pokeAPI";

export default async function Home() {
  const pokemonList = await fetchPokemonList(0, 20);
  const pokemonNames = await fetchPokemonNames();

  return (
    <main className="flex flex-col items-center justify-between">
      <SearchList pokemonList={pokemonList} pokemonNames={pokemonNames} />
    </main>
  );
}
