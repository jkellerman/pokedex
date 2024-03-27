import AutoComplete from "./components/ui/AutoComplete/AutoComplete";
import { fetchPokemonList } from "./lib/pokeAPI";

export default async function Home() {
  const pokemonList = await fetchPokemonList();
  return (
    <main className="flex flex-col items-center justify-between">
      <AutoComplete pokemonList={pokemonList} />
    </main>
  );
}
