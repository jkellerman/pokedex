"use client";
import React from "react";
import TabListImage from "./Image/Image";
import * as Tabs from "@radix-ui/react-tabs";
import { PokemonList, PokemonStats } from "@/app/types/pokemon";
import ProgressBar from "../ProgressBar/ProgressBar";
import clsx from "clsx";
import { tabTheme } from "../themes";

interface TabsListProps {
  pokemonStats: PokemonStats[];
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
                    tabTheme(primaryType)
                  )}
                >
                  {item}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>

          <Tabs.Content value="tab1" className="sm:self-center xl:self-auto">
            {pokemonStats.map((item: PokemonStats, i: number) => {
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
