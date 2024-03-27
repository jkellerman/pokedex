"use client";
import { useState } from "react";
import CardList from "../CardList/CardList";
import Icon from "./Icon";
import { PokemonList } from "@/app/types/pokemon";

interface PokemonListProps {
  pokemonList: PokemonList[];
}

export default function AutoComplete({ pokemonList }: PokemonListProps) {
  const [inputValue, setInputValue] = useState("");

  const searchFilter = (pokemonList: PokemonList[]) => {
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
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
        <CardList pokemonList={filteredPokemonList} />
      </div>
    </>
  );
}
