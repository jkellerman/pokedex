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
  const [attemptTranslation, setAttemptTranslation] = useState(false);
  const [resultFetched, setResultFetched] = useState(false);

  const {
    data: translatedEffect,
    isLoading,
    isError,
  } = useYodaTranslation(effect, attemptTranslation);

  // Toggle translation state
  const handleToggle = () => {
    if (isYoda && resultFetched) {
      setIsYoda(false);
    } else if (!isYoda && resultFetched) {
      setIsYoda(true);
    } else {
      setAttemptTranslation(true);
    }
  };

  // handle successful translation fetch
  useEffect(() => {
    if (!isLoading && !isError && translatedEffect) {
      setIsYoda(true);
      setResultFetched(true);
      setAttemptTranslation(false);
    }
  }, [isLoading, isError, translatedEffect]);

  //  handle errors
  useEffect(() => {
    if (isError) {
      setAttemptTranslation(false);
    }
  }, [isError]);

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
      {isLoading && (
        <div data-testid="effect-loader">
          <AbilitiesSkeleton />
        </div>
      )}
      {!isLoading && (
        <p className={isYoda ? "text-green-600" : "text-foreground"}>
          {isYoda ? translatedEffect : effect}
        </p>
      )}
    </div>
  );
}
