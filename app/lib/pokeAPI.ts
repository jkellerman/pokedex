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
  const divisor = 10;
  try {
    const url = `${BASE_ROUTE}/pokemon/${name}`;
    const data = await fetchData(url);

    return {
      pokemonStats: data.stats,
      pokemonId: data.id,
      height: data.height / divisor,
      weight: data.weight / divisor,
      primaryType: data.types[0].type.name,
      types: data.types,
      imageUrl: data.sprites.other.home.front_default,
      name,
    };
  } catch (error) {
    console.error(`Error fetching details for ${name}:`, error);
    throw error;
  }
}
// To get all 151 names that are searchable
export async function fetchPokemonNames() {
  try {
    const url = `${BASE_ROUTE}/pokemon/?limit=151`;
    const data = await fetchData(url);
    return data.results;
  } catch (error) {
    console.error("Error fetching Pokémon names:", error);
    throw error;
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
    console.error("Error fetching Pokémon list:", error);
    throw error;
  }
}

export async function fetchSearchedPokemon(name: string) {
  try {
    const url = `${BASE_ROUTE}/pokemon/${name}`;
    const data = await fetchData(url);

    return {
      id: data.id,
      name,
      type: data.types[0].type.name,
      url: data.sprites.other.home.front_default,
    };
  } catch (error) {
    console.error(`Error searching for Pokémon ${name}:`, error);
    throw error;
  }
}

export async function fetchType(endpoint: string) {
  try {
    const url = `${endpoint}`;
    const data = await fetchData(url);
    const doubleDamageFrom = data.damage_relations.double_damage_from;
    const halfDamageFrom = data.damage_relations.half_damage_from;
    const noDamageFrom = data.damage_relations.no_damage_from;

    return [doubleDamageFrom, halfDamageFrom, noDamageFrom];
  } catch (error) {
    console.error("Error fetching type data:", error);
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
    console.error("Error fetching evolution chain:", error);
    throw error;
  }
}

export async function fetchFlavorText(id: number) {
  try {
    const speciesUrl = `${BASE_ROUTE}/pokemon-species/${id}`;
    const speciesData = await fetchData(speciesUrl);
    const flavorTextEntries = speciesData.flavor_text_entries[1].flavor_text;

    return flavorTextEntries;
  } catch (error) {
    console.error("Error fetching flavor text:", error);
    throw error;
  }
}

export async function fetchAbilityDetails(url: string) {
  try {
    const abilityDetails = await fetchData(url);
    const effectEntry = abilityDetails.effect_entries.find(
      (entry: any) => entry.language.name === "en"
    );
    return {
      name: abilityDetails.name,
      effect: effectEntry.effect,
    };
  } catch (error) {
    console.error("Error fetching ability effects:", error);
    throw error;
  }
}

export async function fetchAbilitiesWithEffects(name: string) {
  try {
    const url = `${BASE_ROUTE}/pokemon/${name}`;
    const data = await fetchData(url);
    const abilities = data.abilities;
    const abilitiesWithEffects = await Promise.all(
      abilities.map(async (ability: any) => {
        return await fetchAbilityDetails(ability.ability.url);
      })
    );

    return abilitiesWithEffects;
  } catch (error) {
    console.error("Error fetching ability details:", error);
    throw error;
  }
}
