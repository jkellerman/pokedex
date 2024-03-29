const BASE_ROUTE = "https://pokeapi.co/api/v2";

async function fetchData(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function fetchPokemonList() {
  try {
    const url = `${BASE_ROUTE}/pokemon/?limit=151`;
    const data = await fetchData(url);
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchPokemon(name: string) {
  try {
    const url = `${BASE_ROUTE}/pokemon/${name}`;
    const data = await fetchData(url);
    return data;
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

export async function fetchEvolutionChain(index: number) {
  try {
    const speciesUrl = `${BASE_ROUTE}/pokemon-species/${index}`;
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
      return await fetchPokemon(name);
    });

    const pokemonData = await Promise.all(promises);

    // Return name and images
    return pokemonData.map((item) => {
      return { name: item.name, url: item.sprites.other.home.front_default };
    });
  } catch (error) {
    console.error(error);
  }
}
