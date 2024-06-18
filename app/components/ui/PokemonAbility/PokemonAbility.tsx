"use client";

import { Button } from "../Button/Button";
import { useState, useEffect } from "react";
import useYodaTranslation from "@/app/hooks/useYodaTranslation";
import { AbilitiesSkeleton } from "../skeletons";

interface PokemonAbilityProps {
  name: string;
  effect: string;
}

export default function PokemonAbility({ name, effect }: PokemonAbilityProps) {
  const [isYoda, setIsYoda] = useState(false);

  const {
    data: translatedEffect,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useYodaTranslation(effect);

  useEffect(() => {
    if (isSuccess) {
      setIsYoda(true);
    }
  }, [isSuccess]);

  // Toggle translation state
  const handleToggle = () => {
    if (isYoda && isSuccess) {
      setIsYoda(false);
    } else if (!isYoda && isSuccess) {
      setIsYoda(true);
    } else {
      refetch();
    }
  };

  return (
    <div className="mb-4">
      <div className="flex items-center mb-4 gap-4">
        <h3 className="capitalize">{name}</h3>
        <Button
          className="py-2 px-4 rounded-md text-sm"
          onClick={handleToggle}
          disabled={isLoading}
        >
          {isLoading
            ? "translating..."
            : isYoda
            ? "Show English"
            : "Translate to Yoda"}
        </Button>
        {isError && (
          <span className="text-red-600">
            Reached the rate limit, you have. Try again later, you must.
          </span>
        )}
      </div>
      {isLoading ? (
        <div data-testid="effect-loader">
          <AbilitiesSkeleton />
        </div>
      ) : (
        <p className={isYoda ? "text-green-600" : "text-foreground"}>
          {isYoda ? translatedEffect : effect}
        </p>
      )}
    </div>
  );
}
