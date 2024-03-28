const BASE_ROUTE = "https://pokeapi.co/api/v2";

export async function fetchPokemonList() {
  try {
    const url = `${BASE_ROUTE}/pokemon/?limit=151`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("error", error);
  }
}

export async function fetchPokemon(name: string) {
  try {
    const url = `${BASE_ROUTE}/pokemon/${name}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}
export async function fetchType(endpoint: string) {
  try {
    const url = `${endpoint}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.damage_relations.double_damage_from;
  } catch (error) {
    return null;
  }
}
