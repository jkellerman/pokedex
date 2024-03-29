"use client";
import React from "react";
import TabListImage from "./Image/Image";
import * as Tabs from "@radix-ui/react-tabs";
import { PokemonList, Stats } from "@/app/types/pokemon";
import ProgressBar from "../ProgressBar/ProgressBar";
import clsx from "clsx";

interface TabsListProps {
  pokemonStats: Stats[];
  primaryType: string;
  evolutionChain: PokemonList[];
}

const triggers = ["Stats", "Evolution"];

export default function TabsList({
  pokemonStats,
  primaryType,
  evolutionChain,
}: TabsListProps) {
  return (
    <>
      <div className="col-span-12 row-span-1 xl:col-span-6 bg-gradient-to-r from-quinary-light to-quinary rounded-xl p-8 md:p-16 xl:h-[464px]">
        <Tabs.Root
          className="w-full flex flex-col justify-evenly xl:gap-14"
          defaultValue="tab1"
        >
          <Tabs.List
            className="flex justify-evenly mb-6 xl:mb-0"
            aria-label="pokemon details"
          >
            {triggers.map((item, i) => {
              return (
                <Tabs.Trigger
                  key={i}
                  value={`tab${i + 1}`}
                  className={clsx(
                    `py-1 px-3 rounded-full font-bold text-background transition-colors hover:bg-black`,
                    {
                      // Normal
                      "data-[state=active]:bg-normal data-[state=active]:text-normal-foreground":
                        primaryType === "normal",
                      // Fighting
                      "data-[state=active]:bg-fighting data-[state=active]:text-fighting-foreground":
                        primaryType === "fighting",
                      // Flying
                      "data-[state=active]:bg-flying data-[state=active]:text-flying-foreground":
                        primaryType === "flying",
                      // Poison
                      "data-[state=active]:bg-poison data-[state=active]:text-poison-foreground":
                        primaryType === "poison",
                      // Ground
                      "data-[state=active]:bg-ground data-[state=active]:text-ground-foreground":
                        primaryType === "ground",
                      // Rock
                      "data-[state=active]:bg-rock data-[state=active]:text-rock-foreground":
                        primaryType === "rock",
                      // Bug
                      "data-[state=active]:bg-bug data-[state=active]:text-bug-foreground":
                        primaryType === "bug",
                      // Ghost
                      "data-[state=active]:bg-ghost data-[state=active]:text-ghost-foreground":
                        primaryType === "ghost",
                      // Steel
                      "data-[state=active]:bg-steel data-[state=active]:text-steel-foreground":
                        primaryType === "steel",
                      // Fire
                      "data-[state=active]:bg-fire data-[state=active]:text-fire-foreground":
                        primaryType === "fire",
                      // Water
                      "data-[state=active]:bg-water data-[state=active]:text-water-foreground":
                        primaryType === "water",
                      // Grass
                      "data-[state=active]:bg-grass data-[state=active]:text-grass-foreground":
                        primaryType === "grass",
                      // Electric
                      "data-[state=active]:bg-electric data-[state=active]:text-electric-foreground":
                        primaryType === "electric",
                      // Psychic
                      "data-[state=active]:bg-psychic data-[state=active]:text-psychic-foreground":
                        primaryType === "psychic",
                      // Ice
                      "data-[state=active]:bg-ice data-[state=active]:text-ice-foreground":
                        primaryType === "ice",
                      // Dragon
                      "data-[state=active]:bg-dragon data-[state=active]:text-dragon-foreground":
                        primaryType === "dragon",
                      // Dark
                      "data-[state=active]:bg-dark data-[state=active]:text-dark-foreground":
                        primaryType === "dark",
                      // Fairy
                      "data-[state=active]:bg-fairy data-[state=active]:text-fairy-foreground":
                        primaryType === "fairy",
                    }
                  )}
                >
                  {item}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>

          <Tabs.Content value="tab1" className="sm:self-center xl:self-auto">
            {pokemonStats.map((item: Stats, i: number) => {
              return (
                <div key={i} className="flex items-center gap-2 mb-4">
                  <span className=" min-w-[80px] uppercase text-background font-bold">
                    {item.stat.name
                      .replace("special-attack", "sp-att")
                      .replace("special-defense", "sp-def")}
                  </span>
                  <ProgressBar
                    stat={item.base_stat}
                    primaryType={primaryType}
                  />
                </div>
              );
            })}
          </Tabs.Content>
          <Tabs.Content
            value="tab2"
            className="flex w-full justify-evenly items-center mt-8"
          >
            {evolutionChain?.map((item: PokemonList, i: number) => {
              return (
                <div key={i} className="flex flex-col items-center">
                  <TabListImage src={item.url} name={item.name} />
                  <span className="font-bold text-background capitalize">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </>
  );
}
