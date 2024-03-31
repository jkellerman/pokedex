"use client";
import { useState } from "react";
import CardList from "../CardList/CardList";
import Icon from "./Icon";
import { Pokemon, PokemonList } from "@/app/types/pokemon";
import { fetchPokemonList, fetchSearchedPokemon } from "@/app/lib/pokeAPI";
import Content from "../Content/Content";
import { CardSkeleton } from "../skeletons";
import { CardGrid, CardListItem } from "../CardGrid/CardGrid";
import { useDebouncedCallback } from "use-debounce";
interface PokemonListProps {
  pokemonList: PokemonList[];
  pokemonNames: Pokemon[];
}
const NUMBER_OF_POKEMON_TO_FETCH = 20;

export default function AutoComplete({
  pokemonList,
  pokemonNames,
}: PokemonListProps) {
  const [inputValue, setInputValue] = useState("");
  const [offset, setOffset] = useState(NUMBER_OF_POKEMON_TO_FETCH);
  const [pokemon, setPokemon] = useState(pokemonList);
  const [loadMore, setLoadMore] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchList, setSearchList] = useState<PokemonList[]>([]);
  const [numberOfSearchedPokemon, setNumberOfSearchPokemon] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [noPokemon, setNoPokemon] = useState(false);

  const searchFilter = (searchableNames: Pokemon[]) => {
    return searchableNames.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const debounceHandleInputChange = useDebouncedCallback(
    async (value: string) => {
      if (value.length < 2) {
        setNoPokemon(false);
        setSearchList([]);
        return;
      }
      const filteredPokemonNames = searchFilter(pokemonNames); // filter through the original 151 pokemon names. This will be used to send api for these pokemon
      if (value.length >= 2) {
        setIsLoading(true);
        setNoPokemon(false);
        if (filteredPokemonNames.length > 0) {
          const pokemonNames = filteredPokemonNames.map((item) => item.name);
          setNumberOfSearchPokemon(pokemonNames.length);
          try {
            const promises = pokemonNames.map(async (name) => {
              return await fetchSearchedPokemon(name);
            });

            const pokemonData = await Promise.all(promises);

            setSearchList(pokemonData as PokemonList[]);

            setIsLoading(false);
          } catch (error) {
            setIsLoading(false);
            setNoPokemon(true);
            setSearchList([]);
          }
        } else {
          setIsLoading(false);
          setNoPokemon(true);
          setSearchList([]);
        }
      }
    },
    500
  );
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    debounceHandleInputChange(value);
  };

  // For infinite scroll
  const loadMorePokemon = async () => {
    try {
      setLoadMore(true);
      if (offset + NUMBER_OF_POKEMON_TO_FETCH > 151) {
        setOffset(offset + (151 - offset));
        const apiPokemon = await fetchPokemonList(offset, 151 - offset);
        setPokemon([...pokemon, ...(apiPokemon as PokemonList[])]);
      } else {
        setOffset(offset + NUMBER_OF_POKEMON_TO_FETCH);
        const apiPokemon = await fetchPokemonList(
          offset,
          NUMBER_OF_POKEMON_TO_FETCH
        );
        setPokemon([...pokemon, ...(apiPokemon as PokemonList[])]);
      }

      setLoadMore(false);
    } catch (error) {
      setIsError(true);
      setLoadMore(false);
    }
  };

  return (
    <>
      <div className="w-full h-16 lg:h-24 bg-gradient-to-r from-primary to-secondary"></div>
      <div className="flex flex-col max-w-4xl items-center justify-center mx-auto w-11/12 lg:w-full">
        <form className="flex gap-1 py-4 px-6 rounded-lg items-center border-2 border-background drop-shadow-lg bg-background m-[-2rem] w-full mb-8">
          <Icon />
          <input
            placeholder="Search for a pokèmon"
            type="text"
            className="rounded-md px-2 outline-none w-full"
            autoComplete="off"
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
        <div className="sm:max-w-[525px] sm:text-left sm:self-start mb-8">
          <Content>
            Below is a list of the original 151 Pokèmon from Bulbasaur to Mew.
            Use the search above to filter through them by name !
          </Content>
        </div>

        {noPokemon ? (
          <div>No pokemon, try another.</div>
        ) : isLoading ? (
          <CardGrid>
            {Array.from({ length: numberOfSearchedPokemon }, (_, i) => (
              <CardListItem key={i}>
                <CardSkeleton />
              </CardListItem>
            ))}
          </CardGrid>
        ) : (
          <CardList
            pokemonList={inputValue.length >= 2 ? searchList : pokemon}
            loadMore={loadMore}
            isError={isError}
            loadMorePokemon={loadMorePokemon}
          />
        )}

        {inputValue.length >= 2 ||
          (!searchList.length && (
            <button
              onClick={loadMorePokemon}
              className="bg-quinary-dark py-4 px-8 rounded-2xl font-bold text-background mb-8 hover:bg-quinary-light transition-colors w-[147.5px]"
            >
              {loadMore ? "Loading..." : "Load More"}
            </button>
          ))}
      </div>
    </>
  );
}
