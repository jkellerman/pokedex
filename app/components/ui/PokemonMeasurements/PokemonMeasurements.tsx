interface PokemonMeasurementsProps {
  height: string | undefined;
  weight: string | undefined;
}

export default function PokemonMeasurements({
  height,
  weight,
}: PokemonMeasurementsProps) {
  return (
    <div className="flex flex-col xl:items-end">
      <div>
        <span className="font-bold">Weight: </span>
        <span>{weight}kg</span>
      </div>
      <div>
        <span className="font-bold">Height: </span>
        <span>{height}m</span>
      </div>
    </div>
  );
}
