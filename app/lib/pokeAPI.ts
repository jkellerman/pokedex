const BASE_ROUTE = "https://pokeapi.co/api/v2/pokemon/";

export async function fetchPokemonList() {
  try {
    const url = `${BASE_ROUTE}?limit=151`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("error", error);
  }
}

export async function fetchPokemon(name: string) {
  try {
    const url = `${BASE_ROUTE}/${name}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}
