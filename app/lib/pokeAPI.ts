"use server";

import { PokemonList } from "../types/pokemon";

const BASE_ROUTE = "https://pokeapi.co/api/v2";

async function fetchData(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function fetchPokemonDetails(name: string) {
  try {
    const url = `${BASE_ROUTE}/pokemon/${name}`;
    const data = await fetchData(url);
    const pokemonStats = data.stats;
    const pokemonId = data.id;
    const height = data.height / 10;
    const weight = data.weight / 10;
    const primaryType = data.types[0].type.name;
    const types = data.types;
    const imageUrl = data.sprites.other.home.front_default;

    return {
      pokemonStats,
      pokemonId,
      height,
      weight,
      primaryType,
      types,
      imageUrl,
      name,
    };
  } catch (error) {
    console.error(error);
  }
}
// To get all 151 names that are searchable
export async function fetchPokemonNames() {
  try {
    const url = `${BASE_ROUTE}/pokemon/?limit=151`;
    const data = await fetchData(url);
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

// Fetch inital list of pokemon
export async function fetchPokemonList(offset: number, limit: number) {
  try {
    const url = `${BASE_ROUTE}/pokemon/?offset=${offset}&limit=${limit}`;
    const data = await fetchData(url);
    const urls = data.results.map((pokemon: PokemonList) => pokemon.url);

    const promises = await Promise.all(
      urls.map((url: string) => fetchData(url))
    );
    const pokemonData = promises.map((item) => ({
      name: item.name,
      url: item.sprites.other.home.front_default,
      id: item.id,
      type: item.types[0].type.name,
    }));

    return pokemonData;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSearchedPokemon(name: string) {
  try {
    const url = `${BASE_ROUTE}/pokemon/${name}`;
    const data = await fetchData(url);
    const pokemonId = data.id;
    const primaryType = data.types[0].type.name;
    const imageUrl = data.sprites.other.home.front_default;

    return {
      id: pokemonId,
      name,
      type: primaryType,
      url: imageUrl,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function fetchType(endpoint: string) {
  try {
    const url = `${endpoint}`;
    const data = await fetchData(url);
    return data.damage_relations.double_damage_from;
  } catch (error) {
    return null;
  }
}

export async function fetchEvolutionChain(id: number) {
  try {
    const speciesUrl = `${BASE_ROUTE}/pokemon-species/${id}`;
    const speciesData = await fetchData(speciesUrl);
    const evolutionChainUrl = speciesData.evolution_chain.url;
    const evolutionChainData = await fetchData(evolutionChainUrl);

    const firstEvolution = evolutionChainData.chain.species.name;
    const secondEvolution =
      evolutionChainData.chain.evolves_to[0]?.species.name;
    const thirdEvolution =
      evolutionChainData.chain.evolves_to[0]?.evolves_to[0]?.species.name;

    const result = [firstEvolution];
    if (secondEvolution) result.push(secondEvolution);
    if (thirdEvolution) result.push(thirdEvolution);

    const promises = result.map(async (name) => {
      return await fetchPokemonDetails(name);
    });

    const pokemonData = await Promise.all(promises);

    // Return name and images
    return pokemonData.map((item) => {
      return { name: item?.name, url: item?.imageUrl };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function fetchFlavorText(id: number) {
  try {
    const speciesUrl = `${BASE_ROUTE}/pokemon-species/${id}`;
    const speciesData = await fetchData(speciesUrl);
    const flavorTextEntries = speciesData.flavor_text_entries[1].flavor_text;

    return flavorTextEntries;
  } catch (error) {
    console.error(error);
  }
}
